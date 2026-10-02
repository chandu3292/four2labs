import { createSign } from 'node:crypto'

// Same calendar + service account the founder and assistant apps book into.
// Env: GOOGLE_SA_CLIENT_EMAIL, GOOGLE_SA_PRIVATE_KEY_B64, GOOGLE_CALENDAR_ID
const API = 'https://www.googleapis.com/calendar/v3'

// Mirrors assistant/calendar_integration/constants.py + availability_checker.py
export const SLOT_MINUTES = 30
export const MAX_ADVANCE_DAYS = 10
const IST_OFFSET_MIN = 330
const DAY_START_HOUR = 9 // IST
const DAY_END_HOUR = 17 // IST

const b64url = (s: string | Buffer) => Buffer.from(s).toString('base64url')

// Tokens last an hour; reuse across requests on a warm function instance
let cachedToken: { value: string; expires: number } | null = null

async function accessToken(): Promise<string> {
  if (cachedToken && cachedToken.expires > Date.now() + 60_000) return cachedToken.value
  const email = process.env.GOOGLE_SA_CLIENT_EMAIL
  // Base64 of the PEM key, so newlines survive any env store
  const b64 = process.env.GOOGLE_SA_PRIVATE_KEY_B64
  const key = b64 && Buffer.from(b64, 'base64').toString('utf8')
  if (!email || !key) throw new Error('Calendar credentials are not configured')

  const now = Math.floor(Date.now() / 1000)
  const header = b64url(JSON.stringify({ alg: 'RS256', typ: 'JWT' }))
  const claims = b64url(JSON.stringify({
    iss: email,
    scope: 'https://www.googleapis.com/auth/calendar',
    aud: 'https://oauth2.googleapis.com/token',
    iat: now,
    exp: now + 3600,
  }))
  const signer = createSign('RSA-SHA256')
  signer.update(`${header}.${claims}`)
  const jwt = `${header}.${claims}.${b64url(signer.sign(key))}`

  const res = await fetch('https://oauth2.googleapis.com/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({ grant_type: 'urn:ietf:params:oauth:grant-type:jwt-bearer', assertion: jwt }),
  })
  if (!res.ok) throw new Error(`Token request failed: ${res.status}`)
  const json = await res.json()
  cachedToken = { value: json.access_token, expires: Date.now() + json.expires_in * 1000 }
  return cachedToken.value
}

function calendarId(): string {
  const id = process.env.GOOGLE_CALENDAR_ID
  if (!id) throw new Error('GOOGLE_CALENDAR_ID is not configured')
  return id
}

/** Every bookable slot start (UTC) in the window, ignoring existing events */
export function candidateSlots(now = new Date()): Date[] {
  const slots: Date[] = []
  // Same rule as the assistant: in the future, at most MAX_ADVANCE_DAYS from now
  const earliest = now.getTime()
  const latest = now.getTime() + MAX_ADVANCE_DAYS * 24 * 60 * 60_000
  // Walk IST calendar days
  const istNow = new Date(now.getTime() + IST_OFFSET_MIN * 60_000)
  for (let d = 0; d <= MAX_ADVANCE_DAYS; d++) {
    const day = new Date(Date.UTC(istNow.getUTCFullYear(), istNow.getUTCMonth(), istNow.getUTCDate() + d))
    const weekday = day.getUTCDay() // 0 = Sunday
    if (weekday === 0 || weekday === 6) continue
    for (let m = DAY_START_HOUR * 60; m + SLOT_MINUTES <= DAY_END_HOUR * 60; m += SLOT_MINUTES) {
      const start = new Date(day.getTime() + (m - IST_OFFSET_MIN) * 60_000)
      if (start.getTime() > earliest && start.getTime() <= latest) slots.push(start)
    }
  }
  return slots
}

export async function busyBlocks(token: string, from: Date, to: Date) {
  const id = calendarId()
  const res = await fetch(`${API}/freeBusy`, {
    method: 'POST',
    headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({ timeMin: from.toISOString(), timeMax: to.toISOString(), items: [{ id }] }),
  })
  if (!res.ok) throw new Error(`freeBusy failed: ${res.status}`)
  const json = await res.json()
  return (json.calendars?.[id]?.busy ?? []).map((b: { start: string; end: string }) => ({
    start: new Date(b.start).getTime(),
    end: new Date(b.end).getTime(),
  })) as { start: number; end: number }[]
}

export async function freeSlots(): Promise<Date[]> {
  const slots = candidateSlots()
  if (!slots.length) return []
  const token = await accessToken()
  const last = slots[slots.length - 1]
  const busy = await busyBlocks(token, slots[0], new Date(last.getTime() + SLOT_MINUTES * 60_000))
  return slots.filter((s) => {
    const a = s.getTime()
    const b = a + SLOT_MINUTES * 60_000
    return !busy.some((x) => a < x.end && b > x.start)
  })
}

export async function createBooking(start: Date, summary: string, description: string) {
  const token = await accessToken()
  const end = new Date(start.getTime() + SLOT_MINUTES * 60_000)
  // Re-check right before writing so two visitors can't take the same slot
  const busy = await busyBlocks(token, start, end)
  if (busy.length) return { ok: false as const, reason: 'taken' }

  const res = await fetch(`${API}/calendars/${encodeURIComponent(calendarId())}/events`, {
    method: 'POST',
    headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({
      summary,
      description,
      start: { dateTime: start.toISOString(), timeZone: 'Asia/Kolkata' },
      end: { dateTime: end.toISOString(), timeZone: 'Asia/Kolkata' },
    }),
  })
  if (!res.ok) throw new Error(`Event insert failed: ${res.status}`)
  return { ok: true as const }
}

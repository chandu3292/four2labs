import { waitUntil } from '@vercel/functions'
import { candidateSlots, createBooking } from './_calendar'

type Body = { name?: string; email?: string; phone?: string; topic?: string; notes?: string; start?: string; _honey?: string }

const clean = (v: unknown, max = 500) => String(v ?? '').trim().slice(0, max)

export async function POST(request: Request) {
  let body: Body
  try {
    body = await request.json()
  } catch {
    return Response.json({ error: 'Invalid request' }, { status: 400 })
  }

  // Bots fill the hidden honeypot field; pretend success and drop it
  if (body._honey) return Response.json({ ok: true })

  const name = clean(body.name, 100)
  const email = clean(body.email, 200)
  const phone = clean(body.phone, 40)
  const topic = clean(body.topic, 120)
  const notes = clean(body.notes, 2000)
  if (!name || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return Response.json({ error: 'Please enter your name and a valid email.' }, { status: 400 })
  }

  const start = new Date(clean(body.start, 40))
  const allowed = candidateSlots().some((s) => s.getTime() === start.getTime())
  if (isNaN(start.getTime()) || !allowed) {
    return Response.json({ error: 'That time is no longer available. Please pick another.' }, { status: 409 })
  }

  // Same event format as assistant/calendar_integration/appointment_manager.py
  const description = [
    'Appointment Details:',
    '- Type: Appointment',
    `- Client: ${name}`,
    `- Email: ${email}`,
    `- Phone: ${phone || 'N/A'}`,
    `- Topic: ${topic || 'N/A'}`,
    `- Notes: ${notes || 'N/A'}`,
    '',
    'Source: four2labs.com booking page',
  ].join('\n')

  try {
    const result = await createBooking(start, `Appointment - ${name}`, description)
    if (!result.ok) {
      return Response.json({ error: 'Someone just booked that time. Please pick another.' }, { status: 409 })
    }
  } catch (err) {
    console.error(err)
    return Response.json({ error: 'Booking failed. Please WhatsApp or email us instead.' }, { status: 500 })
  }

  // Email the team so the booking isn't only in the calendar; runs after the response is sent
  const when = start.toLocaleString('en-IN', { timeZone: 'Asia/Kolkata', dateStyle: 'full', timeStyle: 'short' })
  waitUntil(fetch('https://formsubmit.co/ajax/four2labs@gmail.com', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify({
      _subject: `New call booked - ${name} - ${when} IST`,
      _template: 'box',
      _captcha: 'false',
      name, email, phone, interest: topic, when: `${when} IST`, message: notes,
    }),
  }).catch((err) => console.error('Notification failed', err)))

  return Response.json({ ok: true })
}

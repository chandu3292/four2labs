// Shared /api/slots request so the booking page can reuse a fetch started on hover
let pending: { promise: Promise<string[]>; at: number } | null = null

export function loadSlots(force = false): Promise<string[]> {
  if (!force && pending && Date.now() - pending.at < 60_000) return pending.promise
  const promise = fetch('/api/slots')
    .then(async (res) => {
      const json = await res.json()
      if (!res.ok) throw new Error(json.error)
      // The edge copy can be a few minutes old; drop slots that have since started
      return (json.slots as string[]).filter((s) => new Date(s).getTime() > Date.now())
    })
  promise.catch(() => { pending = null })
  pending = { promise, at: Date.now() }
  return promise
}

export const prefetchSlots = () => { loadSlots().catch(() => {}) }

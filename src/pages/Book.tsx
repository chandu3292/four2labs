import { useEffect, useMemo, useState, FormEvent } from 'react'
import { track } from '@vercel/analytics'
import { usePageMeta } from '../lib/usePageMeta'
import { whatsappLink } from '../lib/contact'
import { loadSlots } from '../lib/slots'

type Status = 'loading' | 'ready' | 'error'

const tz = Intl.DateTimeFormat().resolvedOptions().timeZone
const dayKey = (iso: string) => new Date(iso).toLocaleDateString('en-CA')
const fmtDay = (iso: string) => new Date(iso).toLocaleDateString(undefined, { weekday: 'short', day: 'numeric', month: 'short' })
const fmtTime = (iso: string) => new Date(iso).toLocaleTimeString(undefined, { hour: 'numeric', minute: '2-digit' })
const fmtFull = (iso: string) => new Date(iso).toLocaleString(undefined, { weekday: 'long', day: 'numeric', month: 'long', hour: 'numeric', minute: '2-digit' })

export default function Book() {
  usePageMeta({
    title: 'Book a free 30-min call | four2labs',
    description: 'Pick a time for a free, no-pressure 30-minute call with four2labs. Tell us about your business and we will help you figure out what is worth building.',
    canonical: 'https://four2labs.com/book',
  })

  const [status, setStatus] = useState<Status>('loading')
  const [slots, setSlots] = useState<string[]>([])
  const [day, setDay] = useState<string | null>(null)
  const [slot, setSlot] = useState<string | null>(null)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [booked, setBooked] = useState<string | null>(null)

  const refreshSlots = async (force = false) => {
    setStatus('loading')
    try {
      setSlots(await loadSlots(force))
      setStatus('ready')
    } catch {
      setStatus('error')
    }
  }
  useEffect(() => { refreshSlots() }, [])

  const days = useMemo(() => {
    const map = new Map<string, string[]>()
    slots.forEach((s) => map.set(dayKey(s), [...(map.get(dayKey(s)) ?? []), s]))
    return [...map.entries()]
  }, [slots])

  useEffect(() => {
    if (!day && days.length) setDay(days[0][0])
  }, [days, day])

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!slot) return
    const data = Object.fromEntries(new FormData(e.currentTarget)) as Record<string, string>
    setSubmitting(true)
    setError(null)
    try {
      const res = await fetch('/api/book', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...data, start: slot }),
      })
      const json = await res.json().catch(() => ({}))
      if (!res.ok) {
        setError(json.error || 'Booking failed. Please WhatsApp or email us instead.')
        if (res.status === 409) { setSlot(null); refreshSlots(true) }
        return
      }
      track('booking', { topic: data.topic || 'not set' })
      setBooked(slot)
    } catch {
      setError('Booking failed. Please WhatsApp or email us instead.')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <>
      <section className="page-header">
        <div className="container">
          <span className="eyebrow">Free 30-min call</span>
          <h1>Book a <span className="gradient-text">free call</span></h1>
          <p>Pick a time that suits you. We'll talk about your business, what's slowing you down, and what's worth building - no sales pressure.</p>
        </div>
      </section>

      <section style={{ paddingTop: 32 }}>
        <div className="container">
          <div className="booking form">
            {booked ? (
              <div className="booking-done">
                <div className="booking-check">✓</div>
                <h2>You're booked!</h2>
                <p><strong>{fmtFull(booked)}</strong> ({tz})</p>
                <p>We'll email you the call link before the meeting. Need to change the time? Just reply to our email or <a href={whatsappLink(`Hi four2labs! I need to reschedule my call on ${fmtFull(booked)}.`)} target="_blank" rel="noopener noreferrer">WhatsApp us</a>.</p>
              </div>
            ) : status === 'loading' ? (
              <p className="text-center" style={{ margin: 0 }}>Loading available times…</p>
            ) : status === 'error' || !days.length ? (
              <div className="text-center">
                <p>{status === 'error' ? "We couldn't load available times right now." : 'No free times in the next 10 days.'}</p>
                <a href={whatsappLink("Hi four2labs! I'd like to book a free 30-min call.")} target="_blank" rel="noopener noreferrer" className="btn btn-primary" onClick={() => track('whatsapp_click')}>Book on WhatsApp instead →</a>
              </div>
            ) : (
              <>
                <h3 className="booking-step">1. Pick a day</h3>
                <div className="booking-days">
                  {days.map(([key, list]) => (
                    <button type="button" key={key} className={`booking-chip ${day === key ? 'active' : ''}`} onClick={() => { setDay(key); setSlot(null) }}>
                      {fmtDay(list[0])}
                    </button>
                  ))}
                </div>

                <h3 className="booking-step">2. Pick a time <span className="booking-tz">({tz})</span></h3>
                <div className="booking-times">
                  {(days.find(([k]) => k === day)?.[1] ?? []).map((s) => (
                    <button type="button" key={s} className={`booking-chip ${slot === s ? 'active' : ''}`} onClick={() => setSlot(s)}>
                      {fmtTime(s)}
                    </button>
                  ))}
                </div>

                {slot && (
                  <form onSubmit={onSubmit}>
                    <h3 className="booking-step">3. Your details <span className="booking-tz">- {fmtFull(slot)}</span></h3>
                    <input type="text" name="_honey" className="hp-field" tabIndex={-1} autoComplete="off" aria-hidden="true" />
                    <div className="field">
                      <label htmlFor="b-name">Your name</label>
                      <input id="b-name" name="name" required placeholder="e.g. Priya Sharma" />
                    </div>
                    <div className="field">
                      <label htmlFor="b-email">Email address</label>
                      <input id="b-email" name="email" type="email" required placeholder="you@yourbusiness.com" />
                    </div>
                    <div className="field">
                      <label htmlFor="b-phone">Phone / WhatsApp <span style={{ color: 'var(--muted)' }}>(optional)</span></label>
                      <input id="b-phone" name="phone" type="tel" placeholder="+91 98765 43210" />
                    </div>
                    <div className="field">
                      <label htmlFor="b-topic">What would you like to talk about?</label>
                      <select id="b-topic" name="topic" defaultValue="">
                        <option value="">- Pick one (or "Not sure") -</option>
                        <option>A new website</option>
                        <option>A mobile app</option>
                        <option>AI for my business (calls, marketing, automation)</option>
                        <option>Dashboards or data analysis</option>
                        <option>Orders / tracking system</option>
                        <option>Ongoing tech support &amp; maintenance</option>
                        <option>Something else / not sure yet</option>
                      </select>
                    </div>
                    <div className="field">
                      <label htmlFor="b-notes">Anything we should know? <span style={{ color: 'var(--muted)' }}>(optional)</span></label>
                      <textarea id="b-notes" name="notes" placeholder="What does your business do? What's slowing you down?" />
                    </div>
                    {error && <p style={{ color: '#ff6b6b', fontSize: 14, margin: '0 0 12px', textAlign: 'center' }}>{error}</p>}
                    <button type="submit" disabled={submitting} className="btn btn-primary" style={{ width: '100%', justifyContent: 'center', opacity: submitting ? 0.6 : 1 }}>
                      {submitting ? 'Booking…' : 'Confirm booking →'}
                    </button>
                  </form>
                )}
                {!slot && error && <p style={{ color: '#ff6b6b', fontSize: 14, margin: '16px 0 0', textAlign: 'center' }}>{error}</p>}
              </>
            )}
          </div>
        </div>
      </section>
    </>
  )
}

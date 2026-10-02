import { Link } from 'react-router-dom'
import { CalendarCheck, Clock, Earth, Mail, Phone } from 'lucide-react'
import { useState, FormEvent } from 'react'
import { track } from '@vercel/analytics'
import { usePageMeta } from '../lib/usePageMeta'
import { BOOKING_PATH, whatsappLink } from '../lib/contact'
import { prefetchSlots } from '../lib/slots'

export default function Contact() {
  usePageMeta({
    title: 'Contact - Free 30-min Tech Consultation | four2labs',
    description: 'Tell us about your business. Free 30-minute consultation, no sales pressure. We reply within one working day. Email four2labs@gmail.com or call +91 93906 94802.',
    canonical: 'https://four2labs.com/contact',
  })
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const formData = new FormData(form)
    const data: Record<string, string> = {}
    formData.forEach((v, k) => { data[k] = v as string })

    // Bots fill the hidden honeypot field; pretend success and drop it
    if (data._honey) {
      setSubmitted(true)
      form.reset()
      return
    }

    setSubmitting(true)
    setError(null)
    try {
      const res = await fetch('https://formsubmit.co/ajax/four2labs@gmail.com', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          ...data,
          _subject: `New contact form - ${data.name || 'website visitor'}`,
          _captcha: 'false',
          _template: 'box',
        }),
      })
      // FormSubmit answers 200 even when it did not deliver (e.g. form not activated),
      // so trust only its success flag
      const json = await res.json().catch(() => null)
      if (!res.ok || String(json?.success) !== 'true') throw new Error(json?.message || 'Submission failed')
      track('lead', { interest: data.interest || 'not set' })
      setSubmitted(true)
      form.reset()
      setTimeout(() => {
        document.getElementById('form-success')?.scrollIntoView({ behavior: 'smooth', block: 'center' })
      }, 50)
    } catch {
      setError('Your message could not be sent. Please WhatsApp us or email four2labs@gmail.com directly.')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <>
      <section className="page-header">
        <div className="container">
          <span className="eyebrow">Contact us</span>
          <h1>Tell us about your <span className="gradient-text">business</span></h1>
          <p>Even if you're not sure what you need, we'd love to chat. The first conversation is always free, friendly and useful - no sales pressure.</p>
        </div>
      </section>

      <section style={{ paddingTop: 32 }}>
        <div className="container contact-grid">
          <form className="form reveal" onSubmit={onSubmit} noValidate>
            <div id="form-success" className={`form-success ${submitted ? 'show' : ''}`}>
              ✓ Thanks! Your message has been received. We'll get back to you within one working day.
            </div>

            <input type="text" name="_honey" className="hp-field" tabIndex={-1} autoComplete="off" aria-hidden="true" />

            <div className="field">
              <label htmlFor="name">Your name</label>
              <input type="text" id="name" name="name" placeholder="e.g. Priya Sharma" required />
            </div>

            <div className="field">
              <label htmlFor="email">Email address</label>
              <input type="email" id="email" name="email" placeholder="you@yourbusiness.com" required />
            </div>

            <div className="field">
              <label htmlFor="business">Business name <span style={{ color: 'var(--muted)' }}>(optional)</span></label>
              <input type="text" id="business" name="business" placeholder="What's your business called?" />
            </div>

            <div className="field">
              <label htmlFor="interest">What are you interested in?</label>
              <select id="interest" name="interest" defaultValue="">
                <option value="">- Pick one (or pick "Not sure") -</option>
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
              <label htmlFor="message">Tell us a bit more</label>
              <textarea id="message" name="message" placeholder="What does your business do? What's slowing you down right now? What would success look like?"></textarea>
            </div>

            {error && (
              <p style={{ color: '#ff6b6b', fontSize: 14, margin: '0 0 12px', textAlign: 'center' }}>{error}</p>
            )}
            <button type="submit" disabled={submitting} className="btn btn-primary" style={{ width: '100%', justifyContent: 'center', opacity: submitting ? 0.6 : 1, cursor: submitting ? 'wait' : 'pointer' }}>
              {submitting ? 'Sending…' : 'Send message →'}
            </button>
            <p style={{ fontSize: 13, color: 'var(--muted)', margin: '14px 0 0', textAlign: 'center' }}>
              We usually reply within one working day.
            </p>
          </form>

          <div className="contact-info reveal">
            <div className="info-card">
              <div className="ic-icon"><Mail size={18} /></div>
              <div><h4>Email us</h4><p><a href="mailto:four2labs@gmail.com" style={{ color: 'var(--text)' }}>four2labs@gmail.com</a></p></div>
            </div>
            <div className="info-card">
              <div className="ic-icon"><Phone size={18} /></div>
              <div><h4>Call or WhatsApp</h4><p><a href="tel:+919390694802" style={{ color: 'var(--text)' }}>+91 93906 94802</a><br /><a href={whatsappLink("Hi four2labs! I'd like to know more about your services.")} target="_blank" rel="noopener noreferrer" onClick={() => track('whatsapp_click')} style={{ color: 'var(--good)', fontWeight: 600 }}>Chat on WhatsApp →</a></p></div>
            </div>
            <div className="info-card">
              <div className="ic-icon"><Clock size={18} /></div>
              <div><h4>Response time</h4><p>Within one working day,<br />usually much sooner</p></div>
            </div>
            <div className="info-card">
              <div className="ic-icon"><Earth size={18} /></div>
              <div><h4>Where we work</h4><p>Remote-first, serving businesses all over the world.</p></div>
            </div>
            <div className="info-card" style={{ background: 'linear-gradient(135deg, rgba(123,92,255,0.18), rgba(91,140,255,0.12))', borderColor: 'rgba(123,92,255,0.35)' }}>
              <div className="ic-icon"><CalendarCheck size={18} /></div>
              <div><h4>Prefer a quick call?</h4><p style={{ marginBottom: 12 }}>Book a free, no-pressure 30-minute call at a time that works for you.</p><Link to={BOOKING_PATH} onMouseEnter={prefetchSlots} onTouchStart={prefetchSlots} onFocus={prefetchSlots} onClick={() => track('booking_click')} className="btn btn-primary">Book a free 30-min call →</Link></div>
            </div>
          </div>
        </div>
      </section>

      <section style={{ background: 'var(--bg-2)' }}>
        <div className="container">
          <div className="section-head reveal">
            <span className="eyebrow">Common questions</span>
            <h2>Before you get in touch</h2>
            <p>Quick answers to things people usually ask before that first conversation.</p>
          </div>
          <div className="cards" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
            <div className="card reveal"><h3>Do I need to know tech?</h3><p>Not at all. Most of our clients aren't technical - that's exactly why they work with us. We translate your goals into a plan in plain language.</p></div>
            <div className="card reveal"><h3>Is the first call free?</h3><p>Yes. The first 30 minutes are always free and there's no obligation to work with us afterward. You'll leave with something useful either way.</p></div>
            <div className="card reveal"><h3>Do you only build big projects?</h3><p>Not at all. We're just as happy building a small, simple one-page website as we are creating a full AI-powered app. Tell us your goal and we'll shape the project to fit it.</p></div>
            <div className="card reveal"><h3>What if I just have an idea?</h3><p>That's the perfect time to talk. We'll help you figure out whether and how it could work - even before any building starts.</p></div>
            <div className="card reveal"><h3>Do you work outside this service list?</h3><p>Yes. The services on our site are our base. If you need something custom, we very likely build that too - just ask.</p></div>
            <div className="card reveal"><h3>How fast do you reply?</h3><p>Within one working day, almost always sooner. If it's urgent, mention that in your message.</p></div>
          </div>
        </div>
      </section>
    </>
  )
}

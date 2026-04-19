import { useState, FormEvent } from 'react'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmitted(true)
    e.currentTarget.reset()
    setTimeout(() => {
      document.getElementById('form-success')?.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }, 50)
  }

  return (
    <>
      <section className="page-header">
        <div className="container">
          <span className="eyebrow">Contact us</span>
          <h1>Tell us about your <span className="gradient-text">business</span></h1>
          <p>Even if you're not sure what you need, we'd love to chat. The first conversation is always free, friendly and useful — no sales pressure.</p>
        </div>
      </section>

      <section style={{ paddingTop: 32 }}>
        <div className="container contact-grid">
          <form className="form reveal" onSubmit={onSubmit} noValidate>
            <div id="form-success" className={`form-success ${submitted ? 'show' : ''}`}>
              ✓ Thanks! Your message has been received. We'll get back to you within one working day.
            </div>

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
                <option value="">— Pick one (or pick "Not sure") —</option>
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

            <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
              Send message →
            </button>
            <p style={{ fontSize: 13, color: 'var(--muted)', margin: '14px 0 0', textAlign: 'center' }}>
              We usually reply within one working day.
            </p>
          </form>

          <div className="contact-info reveal">
            <div className="info-card">
              <div className="ic-icon">✉</div>
              <div><h4>Email us</h4><p><a href="mailto:hello@yourcompany.com" style={{ color: 'var(--text)' }}>hello@yourcompany.com</a></p></div>
            </div>
            <div className="info-card">
              <div className="ic-icon">☎</div>
              <div><h4>Call or WhatsApp</h4><p><a href="tel:+910000000000" style={{ color: 'var(--text)' }}>+91 00000 00000</a></p></div>
            </div>
            <div className="info-card">
              <div className="ic-icon">⌚</div>
              <div><h4>Working hours</h4><p>Monday – Saturday<br />9:00 AM – 7:00 PM IST</p></div>
            </div>
            <div className="info-card">
              <div className="ic-icon">🌍</div>
              <div><h4>Where we work</h4><p>Remote-first, serving businesses across India and the United States.</p></div>
            </div>
            <div className="info-card" style={{ background: 'linear-gradient(135deg, rgba(123,92,255,0.18), rgba(91,140,255,0.12))', borderColor: 'rgba(123,92,255,0.35)' }}>
              <div className="ic-icon">★</div>
              <div><h4>Prefer a quick call?</h4><p>Mention "30-min intro" in your message and we'll set up a free, no-pressure call at a time that works for you.</p></div>
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
            <div className="card reveal"><h3>Do I need to know tech?</h3><p>Not at all. Most of our clients aren't technical — that's exactly why they work with us. We translate your goals into a plan in plain language.</p></div>
            <div className="card reveal"><h3>Is the first call free?</h3><p>Yes. The first 30 minutes are always free and there's no obligation to work with us afterward. You'll leave with something useful either way.</p></div>
            <div className="card reveal"><h3>Do you only build big projects?</h3><p>Not at all. We work on small one-off websites just as happily as we do full apps with AI. Tell us your goal and we'll right-size the project.</p></div>
            <div className="card reveal"><h3>What if I just have an idea?</h3><p>That's the perfect time to talk. We'll help you figure out whether and how it could work — even before any building starts.</p></div>
            <div className="card reveal"><h3>Do you work outside this list?</h3><p>Yes. The services on our site are our base. If you need something custom, we very likely build that too — just ask.</p></div>
            <div className="card reveal"><h3>How fast do you reply?</h3><p>Within one working day, almost always sooner. If it's urgent, mention that in your message.</p></div>
          </div>
        </div>
      </section>
    </>
  )
}

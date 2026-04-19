import { Link } from 'react-router-dom'

export default function Services() {
  return (
    <>
      <section className="page-header">
        <div className="container">
          <span className="eyebrow">Our services</span>
          <h1>Tech that <span className="gradient-text">actually helps</span></h1>
          <p>These are our core building blocks. We mix and match them to fit your business — and if you need something not on this list, just ask. If it's tech, we'll build it.</p>
        </div>
      </section>

      <section id="websites">
        <div className="container">
          <div className="section-head reveal">
            <span className="eyebrow">01 — Online presence</span>
            <h2>Websites &amp; Apps</h2>
            <p>How your customers find you, learn about you and do business with you.</p>
          </div>
          <div className="cards">
            <div className="card reveal"><span className="tag">Mobile</span><div className="icon">📱</div><h3>Mobile Apps</h3><p>Custom apps for iPhone and Android that put your business in your customers' pocket — bookings, orders, loyalty, anything you need.</p></div>
            <div className="card reveal"><span className="tag">Full build</span><div className="icon">🧩</div><h3>Website + Backend</h3><p>A complete website with the smart system behind it that handles your data, users, orders and everything else, automatically.</p></div>
            <div className="card reveal"><span className="tag">Quick start</span><div className="icon">✨</div><h3>Website Only</h3><p>A clean, modern website that looks great and tells your story — perfect when you just need a strong first impression online.</p></div>
          </div>
        </div>
      </section>

      <section id="operations" style={{ background: 'var(--bg-2)' }}>
        <div className="container">
          <div className="section-head reveal">
            <span className="eyebrow">02 — Day-to-day operations</span>
            <h2>Run your business smoother</h2>
            <p>Modules that quietly remove the chaos from how you take orders, track work and report on it.</p>
          </div>
          <div className="cards">
            <div className="card reveal"><span className="tag">Orders</span><div className="icon">🧾</div><h3>Orders Module</h3><p>Take and manage customer orders in one organised place — no more scattered messages, missed orders, or messy spreadsheets.</p></div>
            <div className="card reveal"><span className="tag">Tracking</span><div className="icon">📍</div><h3>Tracking Module</h3><p>Real-time tracking so you and your customers always know exactly where deliveries, shipments or jobs stand.</p></div>
            <div className="card reveal"><span className="tag">Visibility</span><div className="icon">📊</div><h3>Dashboards</h3><p>Clear, simple dashboards that show your sales, customers and operations at a glance — no spreadsheets needed.</p></div>
            <div className="card reveal"><span className="tag">Insight</span><div className="icon">📈</div><h3>Data Analysis</h3><p>We dig into your numbers and turn them into plain-English insights you can use to make smarter business decisions.</p></div>
          </div>
        </div>
      </section>

      <section id="ai">
        <div className="container">
          <div className="section-head reveal">
            <span className="eyebrow">03 — AI for your business</span>
            <h2>Let AI handle the busywork</h2>
            <p>Smart assistants that work around the clock so you can focus on the things only you can do.</p>
          </div>
          <div className="cards">
            <div className="card reveal"><span className="tag">24/7</span><div className="icon">🎧</div><h3>AI Receptionist &amp; Booking</h3><p>An AI that answers your calls, books appointments and answers customer questions — day, night, weekends, holidays. You never miss a customer.</p></div>
            <div className="card reveal"><span className="tag">Marketing</span><div className="icon">📣</div><h3>AI Marketing Agent</h3><p>AI that handles your marketing — writing posts, sending follow-ups, replying to leads — so your brand is always working, even when you aren't.</p></div>
            <div className="card reveal"><span className="tag">Automation</span><div className="icon">⚡</div><h3>AI Workflows</h3><p>Connect your tools and let AI do the repetitive work — invoices, emails, data entry, reminders. Hours back in your week.</p></div>
          </div>
        </div>
      </section>

      <section id="care" style={{ background: 'var(--bg-2)' }}>
        <div className="container">
          <div className="section-head reveal">
            <span className="eyebrow">04 — Ongoing support</span>
            <h2>We don't disappear after launch</h2>
            <p>Tech needs care. We stay with you so everything keeps running smoothly — and keeps getting better.</p>
          </div>
          <div className="cards" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
            <div className="card reveal"><span className="tag">Monthly</span><div className="icon">🛠️</div><h3>Maintenance &amp; Updates</h3><p>Regular check-ups, security updates, fixes and small improvements — so your tech stays fast, safe and reliable, every single month.</p></div>
            <div className="card reveal"><span className="tag">On request</span><div className="icon">💡</div><h3>Custom Tech Solutions</h3><p>Need something that isn't on this list? Tell us about it. We've built custom tools, integrations and platforms for clients with very specific needs.</p></div>
          </div>
        </div>
      </section>

      <section>
        <div className="container two-col">
          <div className="reveal">
            <span className="eyebrow">Our promise</span>
            <h2>You only pay for what you actually need</h2>
            <p>We never sell tech for the sake of selling tech. After our first conversation, we recommend the smallest set of services that will actually move your business forward — and we tell you honestly when something isn't worth building.</p>
            <Link to="/contact" className="btn btn-primary">Get a free recommendation →</Link>
          </div>
          <div className="reveal">
            <div className="hero-card">
              <div className="hc-row"><div className="hc-icon">1</div><div><div className="hc-title">Free 30-minute chat</div><div className="hc-sub">Tell us about your business</div></div></div>
              <div className="hc-row"><div className="hc-icon">2</div><div><div className="hc-title">Honest recommendation</div><div className="hc-sub">Only what will actually help</div></div></div>
              <div className="hc-row"><div className="hc-icon">3</div><div><div className="hc-title">Clear, simple plan</div><div className="hc-sub">No tech jargon, no surprises</div></div></div>
              <div className="hc-row"><div className="hc-icon">4</div><div><div className="hc-title">We build &amp; support</div><div className="hc-sub">From idea to live, and beyond</div></div></div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="cta reveal">
            <h2>Not sure which service you need?</h2>
            <p>That's the most common question we get — and it's the easiest to answer. Tell us about your business and we'll recommend the right starting point.</p>
            <Link to="/contact" className="btn btn-primary">Talk to us →</Link>
          </div>
        </div>
      </section>
    </>
  )
}

import { Link } from 'react-router-dom'

export default function About() {
  return (
    <>
      <section className="page-header">
        <div className="container">
          <span className="eyebrow">About us</span>
          <h1>We're here to make tech<br /><span className="gradient-text">work for your business</span></h1>
          <p>Most businesses don't need more tech - they need the right tech, built well, explained simply. That's the whole reason we exist.</p>
        </div>
      </section>

      <section>
        <div className="container two-col">
          <div className="reveal">
            <span className="eyebrow">Our story</span>
            <h2>Started with one frustrating truth</h2>
            <p>So many great businesses - shops, clinics, restaurants, service providers - were being held back by the same thing: tech that was too complicated, too expensive, or built without really understanding their day-to-day.</p>
            <p>We started four2labs to fix that. To be the kind of tech partner we wished those business owners had: friendly, honest, and genuinely focused on helping them grow - not on selling them features they don't need.</p>
            <p>Today we work with businesses across India and the US, building websites, apps, AI tools and automations that quietly make a big difference.</p>
          </div>
          <div className="reveal">
            <div className="hero-card">
              <div className="hc-row"><div className="hc-icon">🎯</div><div><div className="hc-title">Mission</div><div className="hc-sub">Help everyday businesses grow with smart tech</div></div></div>
              <div className="hc-row"><div className="hc-icon">👀</div><div><div className="hc-title">Vision</div><div className="hc-sub">A world where every business has a great tech partner</div></div></div>
              <div className="hc-row"><div className="hc-icon">🤝</div><div><div className="hc-title">Promise</div><div className="hc-sub">Honest advice, clear pricing, no jargon</div></div></div>
              <div className="hc-row"><div className="hc-icon">🌍</div><div><div className="hc-title">Working with</div><div className="hc-sub">Businesses in India &amp; the US</div></div></div>
            </div>
          </div>
        </div>
      </section>

      <section style={{ background: 'var(--bg-2)' }}>
        <div className="container">
          <div className="section-head reveal">
            <span className="eyebrow">What we believe</span>
            <h2>Our values, in plain words</h2>
            <p>These aren't posters on a wall - they shape every project, conversation and decision we make.</p>
          </div>
          <div className="values">
            <div className="value reveal"><div className="v-icon">01</div><h3>Business first, tech second</h3><p>The goal isn't cool tech - it's a healthier business. Every line of code starts with that question.</p></div>
            <div className="value reveal"><div className="v-icon">02</div><h3>Speak human</h3><p>If you don't understand what we built or why, we haven't done our job. No buzzwords. Ever.</p></div>
            <div className="value reveal"><div className="v-icon">03</div><h3>Honest over impressive</h3><p>We'll tell you when something isn't worth building, even if it means a smaller project for us.</p></div>
            <div className="value reveal"><div className="v-icon">04</div><h3>Built to last</h3><p>We don't ship and disappear. Good tech needs care, and we stay around to give it.</p></div>
            <div className="value reveal"><div className="v-icon">05</div><h3>Curious always</h3><p>From AI to data to design - we keep learning so your business gets the best of what's possible today.</p></div>
            <div className="value reveal"><div className="v-icon">06</div><h3>Small &amp; senior</h3><p>You work directly with the people building your project. No middlemen, no handoffs, no broken telephone.</p></div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="section-head reveal">
            <span className="eyebrow">What's different</span>
            <h2>We're not your usual tech agency</h2>
            <p>Here's how working with us tends to feel different from the alternatives.</p>
          </div>
          <div className="cards">
            <div className="card reveal"><div className="icon">💬</div><h3>Conversations, not pitches</h3><p>Our first call isn't a sales meeting. It's just us understanding your business, your customers, and what's slowing you down.</p></div>
            <div className="card reveal"><div className="icon">🧭</div><h3>One team, end to end</h3><p>Strategy, design, code, AI, support - all from the same small team that knows your business inside out.</p></div>
            <div className="card reveal"><div className="icon">🎁</div><h3>Outcomes, not deliverables</h3><p>We measure ourselves by what changes for your business - more bookings, less chaos, happier customers.</p></div>
            <div className="card reveal"><div className="icon">🔄</div><h3>Long-term partner</h3><p>Most clients stay with us long after launch - because tech that grows your business needs ongoing care, not a one-time push.</p></div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="cta reveal">
            <h2>Let's see if we're a good fit</h2>
            <p>The first conversation is free, friendly and no-pressure. Whether or not we end up working together, you'll leave with something useful.</p>
            <Link to="/contact" className="btn btn-primary">Say hello →</Link>
          </div>
        </div>
      </section>
    </>
  )
}

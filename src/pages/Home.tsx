import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="container hero-grid">
          <div>
            <span className="eyebrow">Tech partners for growing businesses</span>
            <h1>We build the tech.<br /><span className="gradient-text">You grow the business.</span></h1>
            <p className="lead">From your first website to AI that answers your phone - we design, build and look after the technology that powers your business, so you can focus on serving customers.</p>
            <div className="hero-actions">
              <Link to="/services" className="btn btn-primary">See what we do →</Link>
              <Link to="/contact" className="btn btn-ghost">Get a free consultation</Link>
            </div>
            <div className="hero-meta">
              <span>No tech jargon</span>
              <span>End-to-end delivery</span>
              <span>Built around your goals</span>
            </div>
          </div>

          <div className="hero-card reveal">
            <div className="hc-row">
              <div className="hc-icon">W</div>
              <div>
                <div className="hc-title">New website live</div>
                <div className="hc-sub">Beautiful, fast, mobile-ready</div>
              </div>
              <span className="hc-pill">Done</span>
            </div>
            <div className="hc-row">
              <div className="hc-icon">A</div>
              <div>
                <div className="hc-title">AI receptionist answering calls</div>
                <div className="hc-sub">24/7, never misses a customer</div>
              </div>
              <span className="hc-pill">Live</span>
            </div>
            <div className="hc-row">
              <div className="hc-icon">D</div>
              <div>
                <div className="hc-title">Sales dashboard</div>
                <div className="hc-sub">Today's orders, at a glance</div>
              </div>
              <span className="hc-pill">+18%</span>
            </div>
            <div className="hc-row">
              <div className="hc-icon">M</div>
              <div>
                <div className="hc-title">Marketing on autopilot</div>
                <div className="hc-sub">AI handles posts &amp; follow-ups</div>
              </div>
              <span className="hc-pill">Auto</span>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="section-head reveal">
            <span className="eyebrow">What we do</span>
            <h2>Everything tech, under one roof</h2>
            <p>We mix and match these building blocks to fit your business. Need something different? Just ask - if it's tech, we build it.</p>
          </div>
          <div className="cards">
            <div className="card reveal">
              <div className="icon">🌐</div>
              <h3>Websites &amp; Apps</h3>
              <p>A strong online presence - beautiful websites, mobile apps, and the systems behind them that quietly do the heavy lifting.</p>
            </div>
            <div className="card reveal">
              <div className="icon">🤖</div>
              <h3>AI for your business</h3>
              <p>AI assistants that answer calls, book appointments, run your marketing and handle the boring stuff - so you don't have to.</p>
            </div>
            <div className="card reveal">
              <div className="icon">📊</div>
              <h3>Dashboards &amp; Insights</h3>
              <p>See your sales, customers and operations clearly. Turn raw numbers into simple decisions you can act on today.</p>
            </div>
            <div className="card reveal">
              <div className="icon">⚙️</div>
              <h3>Automation &amp; Care</h3>
              <p>Automate the repetitive work, then we look after everything monthly so it keeps running smoothly in the background.</p>
            </div>
          </div>
          <div className="text-center mt-24">
            <Link to="/services" className="btn btn-ghost">Explore all services →</Link>
          </div>
        </div>
      </section>

      <section style={{ background: 'var(--bg-2)' }}>
        <div className="container">
          <div className="section-head reveal">
            <span className="eyebrow">How we work</span>
            <h2>A simple, friendly process</h2>
            <p>You don't need to know any tech to work with us. We translate your goals into a clear plan - and then we build it.</p>
          </div>
          <div className="steps">
            <div className="step reveal"><h3>We listen</h3><p>A relaxed chat about your business, your customers and what's slowing you down right now.</p></div>
            <div className="step reveal"><h3>We plan</h3><p>A clear, jargon-free plan with what we'll build, what it does for you, and the timeline.</p></div>
            <div className="step reveal"><h3>We build</h3><p>Our team designs and builds it, sharing progress regularly so there are no surprises.</p></div>
            <div className="step reveal"><h3>We support</h3><p>We launch it, train your team, and stick around to keep everything running smoothly.</p></div>
          </div>
        </div>
      </section>

      <section>
        <div className="container two-col">
          <div className="reveal">
            <span className="eyebrow">Why teams choose us</span>
            <h2>We treat your business like ours</h2>
            <p>We're not a faceless agency. We sit with you, understand your customers, and build technology that actually helps - not technology for technology's sake.</p>
            <p>Whether you're a small shop or a growing company, our job is the same: make tech feel simple, useful and worth every rupee or dollar.</p>
            <Link to="/about" className="btn btn-ghost">More about us →</Link>
          </div>
          <div className="reveal">
            <div className="stats">
              <div className="stat"><div className="stat-num">11+</div><div className="stat-label">Tech services offered</div></div>
              <div className="stat"><div className="stat-num">2</div><div className="stat-label">Markets - India &amp; US</div></div>
              <div className="stat"><div className="stat-num">24/7</div><div className="stat-label">AI working for you</div></div>
              <div className="stat"><div className="stat-num">1</div><div className="stat-label">Team - start to finish</div></div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="cta reveal">
            <h2>Have an idea? Or a problem?</h2>
            <p>Tell us about your business - even if you're not sure what you need yet. We'll help you figure out what's worth building.</p>
            <Link to="/contact" className="btn btn-primary">Start a conversation →</Link>
          </div>
        </div>
      </section>
    </>
  )
}

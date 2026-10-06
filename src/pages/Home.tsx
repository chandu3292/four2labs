import { Link } from 'react-router-dom'
import { Compass, LifeBuoy, MessageCircle, Zap } from 'lucide-react'
import { track } from '@vercel/analytics'
import { usePageMeta } from '../lib/usePageMeta'
import { PAGE_META } from '../lib/meta'
import { BOOKING_PATH } from '../lib/contact'
import { prefetchSlots } from '../lib/slots'
import RecentWork from '../components/RecentWork'
import Founder from '../components/Founder'
import DemoVideo from '../components/DemoVideo'
import HeroLoop from '../components/HeroLoop'
import Capabilities from '../components/Capabilities'

export default function Home() {
  usePageMeta(PAGE_META['/'])
  return (
    <>
      <section className="hero">
        <div className="container hero-grid">
          <div>
            <span className="eyebrow">Tech partners for growing businesses</span>
            <h1>We build the tech.<br /><span className="gradient-text">You grow the business.</span></h1>
            <p className="lead">From your first website to AI that automates your work - we design, build and look after the technology that powers your business, so you can focus on serving customers.</p>
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

          <HeroLoop />
        </div>
      </section>

      <DemoVideo />

      <section style={{ background: 'var(--bg-2)' }}>
        <div className="container">
          <div className="section-head reveal">
            <span className="eyebrow">What we do</span>
            <h2>Everything tech, under one roof</h2>
            <p>From your first website to AI that runs parts of your business - here's what we build. Need something that isn't listed? If it's tech, we build it.</p>
          </div>
          <Capabilities />
          <div className="text-center mt-24">
            <Link to="/services" className="btn btn-ghost">Explore all services →</Link>
          </div>
        </div>
      </section>

      <RecentWork />

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
            <p>Whether you're a small shop or a growing company, our job is the same: make tech feel simple, useful and worth every penny.</p>
            <Link to="/about" className="btn btn-ghost">More about us →</Link>
          </div>
          <div className="reveal">
            <div className="hero-card why-card">
              <div className="hc-row">
                <div className="hc-icon"><Zap size={18} /></div>
                <div><div className="hc-title">Fast delivery</div><div className="hc-sub">Live in weeks, not months</div></div>
              </div>
              <div className="hc-row">
                <div className="hc-icon"><Compass size={18} /></div>
                <div><div className="hc-title">Clear direction</div><div className="hc-sub">Plans you can actually understand</div></div>
              </div>
              <div className="hc-row">
                <div className="hc-icon"><LifeBuoy size={18} /></div>
                <div><div className="hc-title">Ongoing care</div><div className="hc-sub">We stick around after launch</div></div>
              </div>
              <div className="hc-row">
                <div className="hc-icon"><MessageCircle size={18} /></div>
                <div><div className="hc-title">Direct contact</div><div className="hc-sub">Talk to the people building it</div></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Founder tinted />

      <section>
        <div className="container">
          <div className="cta reveal">
            <h2>Have an idea? Or a problem?</h2>
            <p>Tell us about your business - even if you're not sure what you need yet. We'll help you figure out what's worth building.</p>
            <div className="hero-actions" style={{ justifyContent: 'center', marginBottom: 0 }}>
              <Link to={BOOKING_PATH} onMouseEnter={prefetchSlots} onTouchStart={prefetchSlots} onFocus={prefetchSlots} onClick={() => track('booking_click')} className="btn btn-primary">Book a free 30-min call →</Link>
              <Link to="/contact" className="btn btn-ghost">Send us a message</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

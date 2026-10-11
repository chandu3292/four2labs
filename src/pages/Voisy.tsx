import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  BookOpen, CalendarCheck, Check, ClipboardList, GraduationCap, HeartHandshake, House, Landmark,
  PhoneIncoming, PhoneOutgoing, Plane, Play, ShoppingCart, Stethoscope, TrendingUp, Users, Wrench, Zap,
} from 'lucide-react'
import { track } from '@vercel/analytics'
import { usePageMeta } from '../lib/usePageMeta'
import { PAGE_META } from '../lib/meta'
import { BOOKING_PATH } from '../lib/contact'
import { prefetchSlots } from '../lib/slots'

const INBOUND = ['Answers incoming customer calls, day and night', 'Responds to frequently asked questions', 'Schedules appointments into your calendar', 'Captures every enquiry and request as a lead']
const OUTBOUND = ['Makes follow-up calls', 'Confirms appointments and sends reminders', 'Runs customer surveys and feedback calls', 'Supports sales and telecalling workflows']

// Each industry shows a call Voisy would handle, so visitors can picture it in their business
const INDUSTRIES = [
  { Icon: Stethoscope, label: 'Clinics & dental', text: 'Books check-ups and sends appointment reminders' },
  { Icon: House, label: 'Real estate', text: 'Answers listing enquiries and schedules viewings' },
  { Icon: ShoppingCart, label: 'Retail & e-commerce', text: 'Gives order updates and handles return questions' },
  { Icon: GraduationCap, label: 'Education & coaching', text: 'Answers admission queries and books visits' },
  { Icon: Plane, label: 'Hospitality & travel', text: 'Takes reservations and confirms bookings' },
  { Icon: Landmark, label: 'Finance & insurance', text: 'Handles routine queries and renewal reminders' },
  { Icon: Wrench, label: 'Home & auto services', text: 'Books service slots and follows up after the job' },
  { Icon: Users, label: 'Recruitment', text: 'Screens applicants and schedules interviews' },
]

const STEPS = [
  { Icon: BookOpen, title: 'We learn your business', text: 'Your services, prices, opening hours, FAQs and calendar - so Voisy answers like your best team member.' },
  { Icon: PhoneIncoming, title: 'Voisy goes live', text: 'It picks up your calls and makes the follow-ups you choose, in a natural, friendly voice.' },
  { Icon: ClipboardList, title: 'You stay in control', text: 'Every call is summarised, every lead captured and every booking added to your tools - and it hands over to a person when needed.' },
]

const BENEFITS = [
  { Icon: Zap, title: 'Save time', text: 'Hand repetitive calls to automation' },
  { Icon: HeartHandshake, title: 'Happier customers', text: 'Instant answers, no hold music' },
  { Icon: TrendingUp, title: 'Grow your business', text: 'Every call becomes an opportunity' },
]

function DemoPlayer() {
  const [playing, setPlaying] = useState(false)
  const small = typeof window !== 'undefined' && window.matchMedia('(max-width: 760px)').matches
  return (
    <div className="demo-frame voisy-demo">
      {playing ? (
        <video src={`/video/four2labs-demo-short-${small ? '720' : '1080'}.mp4`} poster="/video/four2labs-demo-poster.jpg" controls autoPlay playsInline aria-label="Demonstration of Voisy handling a call">
          <track kind="captions" src="/video/four2labs-demo-short.en.vtt" srcLang="en" label="English" />
        </video>
      ) : (
        <button type="button" className="demo-poster" onClick={() => { setPlaying(true); track('video_play', { video: 'voisy-demo' }) }} aria-label="Play the Voisy demo">
          <img src="/video/four2labs-demo-poster.jpg" alt="" width={1280} height={720} loading="lazy" />
          <span className="demo-play"><Play size={30} fill="currentColor" /></span>
          <span className="demo-duration">1:00</span>
        </button>
      )}
    </div>
  )
}

export default function Voisy() {
  usePageMeta(PAGE_META['/voisy'])
  const book = { onMouseEnter: prefetchSlots, onTouchStart: prefetchSlots, onFocus: prefetchSlots, onClick: () => track('booking_click', { from: 'voisy' }) }
  return (
    <>
      <section className="hero voisy-hero">
        <div className="container hero-grid">
          <div>
            <span className="eyebrow">Introducing</span>
            <h1>Meet <span className="gradient-text">Voisy</span></h1>
            <p className="lead">four2labs' AI voice agent that talks, listens and gets things done - for your business.</p>
            <p className="voisy-tagline">It doesn't just answer calls. <span>It makes them, too.</span></p>
            <div className="hero-actions">
              <Link to={BOOKING_PATH} className="btn btn-primary" {...book}>Book a Voisy demo →</Link>
              <a href="#hear-voisy" className="btn btn-ghost">Hear Voisy in action</a>
            </div>
          </div>
          <div className="voisy-visual" aria-hidden="true">
            <div className="voisy-orb" />
            <img src="/voisy.webp" alt="" width={760} height={741} className="voisy-bot" decoding="async" />
            <div className="voisy-bubble voisy-hi">Hi! I'm Voisy 👋<small>Your AI voice agent</small></div>
            <div className="voisy-bubble voisy-in"><span><PhoneIncoming size={16} /></span>I answer calls</div>
            <div className="voisy-bubble voisy-out"><span><PhoneOutgoing size={16} /></span>I make calls</div>
          </div>
        </div>
      </section>

      <section style={{ background: 'var(--bg-2)' }}>
        <div className="container">
          <div className="section-head reveal">
            <span className="eyebrow">One agent, two directions</span>
            <h2>Inbound and outbound, handled</h2>
            <p>Voisy picks up when customers call you - and calls them back when it matters.</p>
          </div>
          <div className="voisy-directions">
            <div className="voisy-dir inbound reveal">
              <div className="voisy-dir-head">
                <span className="voisy-dir-icon"><PhoneIncoming size={26} /></span>
                <div><h3>Inbound calls</h3><p>Answer. Assist. Schedule.</p></div>
              </div>
              <ul>{INBOUND.map((t) => <li key={t}><Check size={16} /> {t}</li>)}</ul>
            </div>
            <div className="voisy-dir outbound reveal">
              <div className="voisy-dir-head">
                <span className="voisy-dir-icon"><PhoneOutgoing size={26} /></span>
                <div><h3>Outbound calls</h3><p>Follow up. Confirm. Connect.</p></div>
              </div>
              <ul>{OUTBOUND.map((t) => <li key={t}><Check size={16} /> {t}</li>)}</ul>
              <p className="voisy-note">Outbound calls go to people who have agreed to hear from you, following local calling rules.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="hear-voisy" className="demo">
        <div className="container">
          <div className="section-head reveal">
            <span className="eyebrow">Hear Voisy in action</span>
            <h2>One call, start to finish</h2>
            <p>Watch Voisy answer, understand what the caller needs and book the appointment - in about a minute.</p>
          </div>
          <DemoPlayer />
        </div>
      </section>

      <section>
        <div className="container">
          <div className="section-head reveal">
            <span className="eyebrow">How it works</span>
            <h2>Live in three simple steps</h2>
          </div>
          <div className="steps">
            {STEPS.map(({ Icon, title, text }) => (
              <div className="step reveal" key={title}>
                <div className="solution-icon" style={{ marginTop: 6 }}><Icon size={20} /></div>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: 'var(--bg-2)' }}>
        <div className="container">
          <div className="section-head reveal">
            <span className="eyebrow">Built for every industry</span>
            <h2>If your phone rings, Voisy can help</h2>
          </div>
          <div className="voisy-industries reveal">
            {INDUSTRIES.map(({ Icon, label, text }) => (
              <div className="voisy-industry" key={label}>
                <span><Icon size={20} /></span>
                <div><strong>{label}</strong><small>{text}</small></div>
              </div>
            ))}
          </div>
          <p className="voisy-more reveal">Plus logistics, salons, restaurants and any business whose phone keeps ringing.</p>
          <div className="voisy-benefits reveal">
            {BENEFITS.map(({ Icon, title, text }) => (
              <div key={title}><span><Icon size={20} /></span><div><strong>{title}</strong><small>{text}</small></div></div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="cta reveal">
            <h2>One AI voice agent. Two directions. Endless possibilities.</h2>
            <p>See how Voisy would sound on your business's calls. A free 30-minute walkthrough, no pressure.</p>
            <div className="hero-actions" style={{ justifyContent: 'center', marginBottom: 0 }}>
              <Link to={BOOKING_PATH} className="btn btn-primary" {...book}>Book a Voisy demo →</Link>
              <Link to="/contact" className="btn btn-ghost"><CalendarCheck size={16} style={{ marginRight: 6, verticalAlign: -2 }} />Ask a question</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

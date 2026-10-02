import { Link } from 'react-router-dom'
import { CalendarDays, Check, FileText } from 'lucide-react'
import { BOOKING_PATH } from '../lib/contact'
import { prefetchSlots } from '../lib/slots'

// Small product UI previews, drawn in the same navy style as the demo video

function ReceptionistPreview() {
  const bars = [6, 12, 20, 14, 26, 18, 30, 22, 14, 8, 16, 24, 30, 20, 12, 18, 26, 16, 10, 22, 28, 18, 12, 20, 14, 8, 16, 24, 18, 10, 6, 12, 20, 14, 8, 6]
  return (
    <div className="pv" aria-hidden="true">
      <div className="pv-head"><span className="pv-live" /> Live call <span className="pv-ok">Connected</span></div>
      <div className="pv-wave">{bars.map((h, i) => <span key={i} style={{ height: h }} />)}</div>
      <div className="pv-line"><b>Caller</b> Can I book a check-up for tomorrow?</div>
      <div className="pv-line"><b>AI</b> Sure - 3:00 PM is free. Shall I book it?</div>
      <div className="pv-pill"><Check size={13} /> Booked · Tomorrow 3:00 PM</div>
    </div>
  )
}

function KnowledgePreview() {
  return (
    <div className="pv" aria-hidden="true">
      <div className="pv-head"><FileText size={13} /> Your documents <span className="pv-ok">128 files</span></div>
      <div className="pv-docs">
        <span>Price list.pdf</span><span>Policies.docx</span><span>Invoice scan.jpg</span>
      </div>
      <div className="pv-chat pv-q">What's our refund policy for bulk orders?</div>
      <div className="pv-chat pv-a">Full refund within 14 days if unopened. <em>Policies.docx · p.3</em></div>
    </div>
  )
}

function SchedulingPreview() {
  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri']
  const grid = [1, 2, 0, 3, 1, 3, 0, 1, 2, 2, 2, 1, 3, 0, 3]
  return (
    <div className="pv" aria-hidden="true">
      <div className="pv-head"><CalendarDays size={13} /> Week schedule <span className="pv-ok">Auto-built</span></div>
      <div className="pv-grid">
        {days.map((d) => <span key={d} className="pv-day">{d}</span>)}
        {grid.map((c, i) => <span key={i} className={`pv-slot pv-c${c}`} />)}
      </div>
      <div className="pv-pill"><Check size={13} /> 0 clashes · every shift covered</div>
    </div>
  )
}

const products = [
  {
    tag: 'Clinics · Restaurants · Service businesses',
    title: 'AI Receptionist',
    pitch: 'Never miss a customer call again. It answers 24/7, talks naturally and books straight into your calendar.',
    points: ['Answers calls day and night, in English, Telugu and Tamil', 'Books, confirms and follows up on appointments', 'Every caller saved as a lead with notes'],
    Preview: ReceptionistPreview,
  },
  {
    tag: 'Teams · Support desks · Retail',
    title: 'Business Knowledge Assistant',
    pitch: 'Your price lists, policies and manuals - answered in seconds, for your staff or your customers.',
    points: ['Reads PDFs, Word files and scanned paper', 'Answers in plain language and shows the source', 'Cuts repeat questions to your team'],
    Preview: KnowledgePreview,
  },
  {
    tag: 'Schools · Coaching centres · Shift teams',
    title: 'Smart Scheduler',
    pitch: 'Timetables, staff rosters and shifts built automatically - no clashes, no late-night spreadsheets.',
    points: ['Respects availability, rooms and rules you set', 'Rebuilds instantly when something changes', 'Shares the final schedule with everyone'],
    Preview: SchedulingPreview,
  },
]

export default function RecentWork() {
  return (
    <section style={{ background: 'var(--bg-2)' }}>
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">Our products</span>
          <h2>Ready-made AI products for your business</h2>
          <p>Products we've built and run ourselves - set up and tailored to how your business works.</p>
        </div>
        <div className="products">
          {products.map(({ tag, title, pitch, points, Preview }) => (
            <div className="product reveal" key={title}>
              <Preview />
              <div className="product-body">
                <span className="tag">{tag}</span>
                <h3>{title}</h3>
                <p>{pitch}</p>
                <ul>
                  {points.map((pt) => <li key={pt}><Check size={16} /> {pt}</li>)}
                </ul>
                <Link to={BOOKING_PATH} onMouseEnter={prefetchSlots} onTouchStart={prefetchSlots} onFocus={prefetchSlots} className="product-link">Book a demo →</Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

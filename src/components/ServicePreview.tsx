import { useEffect, useRef } from 'react'
import { ArrowRight, Check, CreditCard, MessageCircle, ShoppingCart } from 'lucide-react'

// Small navy illustrations for each service group, in the same style as the product previews

function Website() {
  return (
    <div className="sp sp-browser">
      <div className="sp-bar"><span /><span /><span /><em>yourbusiness.com</em></div>
      <div className="sp-page">
        <div className="sp-line w60 strong" />
        <div className="sp-line w80" />
        <div className="sp-line w50" />
        <div className="sp-btn">Book now</div>
        <div className="sp-tiles"><i /><i /><i /></div>
      </div>
    </div>
  )
}

function App() {
  const rows = ['Haircut · 10:30', 'Colour · 1:00', 'Spa · 4:30']
  return (
    <div className="sp sp-phone-wrap">
      <div className="sp-phone">
        <div className="sp-phone-title">Today's bookings</div>
        {rows.map((r) => <div className="sp-row" key={r}><span className="sp-dot" />{r}</div>)}
        <div className="sp-tabbar"><i /><i className="on" /><i /></div>
      </div>
    </div>
  )
}

function Dashboard() {
  const bars = [38, 52, 44, 66, 58, 74, 86]
  return (
    <div className="sp">
      <div className="sp-kpis">
        <div><small>Orders today</small><b>128</b><em>+12%</em></div>
        <div><small>Revenue</small><b>$4.2k</b><em>+8%</em></div>
      </div>
      <div className="sp-chart">{bars.map((h, i) => <span key={i} style={{ height: `${h}%` }} />)}</div>
    </div>
  )
}

function Chat() {
  return (
    <div className="sp sp-chat">
      <div className="sp-msg sp-in">Do you have a slot tomorrow afternoon?</div>
      <div className="sp-msg sp-out">Yes - 3:00 PM is free. Shall I book it for you?</div>
      <div className="sp-msg sp-in">Yes please!</div>
      <div className="sp-ok"><Check size={13} /> Booked · Tomorrow 3:00 PM</div>
    </div>
  )
}

function Flow() {
  const steps = [
    { Icon: ShoppingCart, label: 'New order' },
    { Icon: CreditCard, label: 'Invoice sent' },
    { Icon: MessageCircle, label: 'WhatsApp confirmation' },
  ]
  return (
    <div className="sp sp-flow">
      {steps.map(({ Icon, label }, i) => (
        <div className="sp-step-wrap" key={label}>
          <div className="sp-step"><span className="sp-step-icon"><Icon size={15} /></span>{label}<Check size={14} className="sp-step-check" /></div>
          {i < steps.length - 1 && <ArrowRight size={14} className="sp-arrow" />}
        </div>
      ))}
      <div className="sp-note">Runs automatically - 0 minutes of your time</div>
    </div>
  )
}

function Status() {
  const items = ['Website online', 'Backups done today', 'Security up to date', 'Speed check passed']
  return (
    <div className="sp sp-status">
      <div className="sp-status-head"><span className="pv-live" /> All systems running</div>
      {items.map((t) => <div className="sp-status-row" key={t}>{t}<Check size={14} /></div>)}
    </div>
  )
}

const PREVIEWS = { websites: Website, apps: App, operations: Dashboard, ai: Chat, automation: Flow, care: Status } as const

// Silent loops cut from the story film; groups without a clip keep their illustration
const CLIPS = new Set(['websites', 'apps', 'ai', 'automation', 'operations'])

function Clip({ id }: { id: string }) {
  const ref = useRef<HTMLVideoElement>(null)
  // Download and play only while on screen; respect reduced-motion settings
  useEffect(() => {
    const v = ref.current
    if (!v || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { v.preload = 'auto'; v.play().catch(() => {}) }
      else v.pause()
    }, { threshold: 0.25 })
    io.observe(v)
    return () => io.disconnect()
  }, [])
  return (
    <video ref={ref} className="sp-clip" src={`/video/services/${id}.mp4`} poster={`/video/services/${id}.jpg`} muted loop playsInline preload="none" />
  )
}

export default function ServicePreview({ id }: { id: keyof typeof PREVIEWS }) {
  const Preview = PREVIEWS[id]
  return <div className="sp-frame" aria-hidden="true">{CLIPS.has(id) ? <Clip id={id} /> : <Preview />}</div>
}

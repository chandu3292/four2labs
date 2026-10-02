import { useEffect, useRef, useState, ReactNode } from 'react'
import { useNavigate } from 'react-router-dom'
import { MessageCircle, X } from 'lucide-react'
import { track } from '@vercel/analytics'
import { BOOKING_PATH, whatsappLink } from '../lib/contact'
import { prefetchSlots } from '../lib/slots'

// Scripted assistant: every answer is written here, no AI or backend involved

type Action =
  | { label: string; next: string }
  | { label: string; to: string }
  | { label: string; href: string }

type Step = { text: ReactNode; actions: Action[] }

const MENU: Action[] = [
  { label: 'What do you build?', next: 'services' },
  { label: 'Show me the AI receptionist', next: 'demo' },
  { label: 'How much does it cost?', next: 'pricing' },
  { label: 'How long does it take?', next: 'timeline' },
  { label: 'Book a free call', next: 'book' },
  { label: 'Talk to a person', next: 'human' },
]

const STEPS: Record<string, Step> = {
  start: {
    text: <>Hi! 👋 I'm the four2labs assistant. What can I help you with?</>,
    actions: MENU,
  },
  services: {
    text: <>We build <b>websites & mobile apps</b>, <b>AI assistants</b> that answer calls and book appointments, <b>dashboards</b> for your sales and operations, and <b>automations</b> for the repetitive work - then we look after it all every month.</>,
    actions: [
      { label: 'See all services', to: '/services' },
      { label: 'Show me the AI receptionist', next: 'demo' },
      { label: 'Book a free call', next: 'book' },
    ],
  },
  demo: {
    text: <>Our AI receptionist answers calls 24/7, captures every lead and books meetings straight into your calendar. There's a 3-minute video of a real call on our home page.</>,
    actions: [
      { label: 'Watch the video', to: '/#demo' },
      { label: 'I want one for my business', next: 'book' },
      { label: 'What else do you build?', next: 'services' },
    ],
  },
  pricing: {
    text: <>Every business is different, so we don't sell fixed packages. After a free 30-minute call you get a <b>clear, written quote</b> for only what you actually need - no hidden costs.</>,
    actions: [
      { label: 'Book a free call', next: 'book' },
      { label: 'Send my requirements', to: '/contact' },
    ],
  },
  timeline: {
    text: <>Most projects go live in <b>weeks, not months</b>. A simple website is the quickest; apps and AI assistants take a little longer. You'll get an exact timeline in your plan.</>,
    actions: [
      { label: 'Book a free call', next: 'book' },
      { label: 'How do you work?', next: 'process' },
    ],
  },
  process: {
    text: <><b>1.</b> We listen to how your business works. <b>2.</b> We plan it in plain language. <b>3.</b> We build it and show progress as we go. <b>4.</b> We launch, train your team and keep it running.</>,
    actions: [
      { label: 'Book a free call', next: 'book' },
      { label: 'How much does it cost?', next: 'pricing' },
    ],
  },
  book: {
    text: <>Pick any free 30-minute slot that suits you - no sales pressure, just a friendly chat about your business.</>,
    actions: [
      { label: 'Choose a time', to: BOOKING_PATH },
      { label: 'Talk to a person instead', next: 'human' },
    ],
  },
  human: {
    text: <>Of course! Reach us whichever way you prefer - we usually reply within one working day.</>,
    actions: [
      { label: 'WhatsApp us', href: whatsappLink("Hi four2labs! I'd like to know more about your services.") },
      { label: 'Email hello@four2labs.com', href: 'mailto:hello@four2labs.com' },
      { label: 'Call +91 93906 94802', href: 'tel:+919390694802' },
      { label: 'Send a message', to: '/contact' },
      { label: 'Book a call', to: BOOKING_PATH },
    ],
  },
}

type Message = { from: 'bot' | 'user'; text: ReactNode }

// Lets other parts of the page (the phone action bar) open or close the chat
export const TOGGLE_CHAT_EVENT = 'four2labs:toggle-chat'

export default function ChatWidget() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([{ from: 'bot', text: STEPS.start.text }])
  const [actions, setActions] = useState<Action[]>(STEPS.start.actions)
  const [typing, setTyping] = useState(false)
  const bodyRef = useRef<HTMLDivElement>(null)
  const navigate = useNavigate()

  useEffect(() => {
    bodyRef.current?.scrollTo({ top: bodyRef.current.scrollHeight, behavior: 'smooth' })
  }, [messages, typing, open])

  const toggle = () => {
    if (!open) track('chat_open')
    setOpen((o) => !o)
  }

  useEffect(() => {
    const onToggle = () => setOpen((o) => { if (!o) track('chat_open'); return !o })
    window.addEventListener(TOGGLE_CHAT_EVENT, onToggle)
    return () => window.removeEventListener(TOGGLE_CHAT_EVENT, onToggle)
  }, [])

  const goTo = (to: string) => {
    const [path, hash] = to.split('#')
    navigate(path || '/')
    if (hash) setTimeout(() => document.getElementById(hash)?.scrollIntoView({ behavior: 'smooth' }), 120)
    if (window.matchMedia('(max-width: 760px)').matches) setOpen(false)
  }

  const choose = (a: Action) => {
    track('chat_option', { option: a.label })
    if ('href' in a) {
      if (a.href.startsWith('https://wa.me')) track('whatsapp_click')
      window.open(a.href, a.href.startsWith('http') ? '_blank' : '_self', 'noopener')
      return
    }
    if ('to' in a) {
      if (a.to === BOOKING_PATH) track('booking_click')
      goTo(a.to)
      return
    }
    const step = STEPS[a.next]
    if (a.next === 'book') prefetchSlots()
    setMessages((m) => [...m, { from: 'user', text: a.label }])
    setActions([])
    setTyping(true)
    setTimeout(() => {
      setTyping(false)
      setMessages((m) => [...m, { from: 'bot', text: step.text }])
      setActions([...step.actions, ...(a.next === 'start' ? [] : [{ label: 'Back to menu', next: 'start' }])])
    }, 550)
  }

  return (
    <>
      {open && (
        <div className="chat-panel" role="dialog" aria-label="four2labs assistant">
          <div className="chat-head">
            <img src="/logo.png" alt="" width={36} height={36} />
            <div>
              <div className="chat-title">four2labs assistant</div>
              <div className="chat-sub"><span className="chat-dot" /> Here to help</div>
            </div>
            <button type="button" className="chat-close" onClick={toggle} aria-label="Close chat"><X size={18} /></button>
          </div>
          <div className="chat-body" ref={bodyRef}>
            {messages.map((m, i) => (
              <div key={i} className={`chat-msg chat-${m.from}`}>{m.text}</div>
            ))}
            {typing && <div className="chat-msg chat-bot chat-typing"><span /><span /><span /></div>}
            {!typing && (
              <div className="chat-actions">
                {actions.map((a) => (
                  <button type="button" key={a.label} className="chat-chip" onClick={() => choose(a)}>{a.label}</button>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
      <button type="button" className="chat-fab" onClick={toggle} aria-label={open ? 'Close chat' : 'Open chat'} aria-expanded={open}>
        {open ? <X size={26} /> : <MessageCircle size={26} />}
      </button>
    </>
  )
}

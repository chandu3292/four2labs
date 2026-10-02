import { Link, useLocation } from 'react-router-dom'
import { CalendarCheck, MessageCircle } from 'lucide-react'
import { track } from '@vercel/analytics'
import { BOOKING_PATH } from '../lib/contact'
import { prefetchSlots } from '../lib/slots'
import { TOGGLE_CHAT_EVENT } from './ChatWidget'

// Phone-only bottom action bar, like an app's main action - hidden by CSS on larger screens
export default function MobileBar() {
  const { pathname } = useLocation()
  if (pathname === BOOKING_PATH) return null

  return (
    <div className="mobile-bar">
      <Link to={BOOKING_PATH} className="btn btn-primary mobile-bar-book" onTouchStart={prefetchSlots} onClick={() => track('booking_click')}>
        <CalendarCheck size={18} /> Book a free call
      </Link>
      <button type="button" className="mobile-bar-chat" aria-label="Open chat" onClick={() => window.dispatchEvent(new Event(TOGGLE_CHAT_EVENT))}>
        <MessageCircle size={22} />
      </button>
    </div>
  )
}

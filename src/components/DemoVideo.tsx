import { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { Play } from 'lucide-react'
import { track } from '@vercel/analytics'
import { BOOKING_PATH } from '../lib/contact'
import { prefetchSlots } from '../lib/slots'

export default function DemoVideo() {
  const [playing, setPlaying] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  // Nothing downloads until the visitor presses play; phones get the lighter 720p file
  const src = typeof window !== 'undefined' && window.matchMedia('(max-width: 760px)').matches
    ? '/video/four2labs-demo-720.mp4'
    : '/video/four2labs-demo-1080.mp4'

  const start = () => {
    setPlaying(true)
    track('video_play')
    requestAnimationFrame(() => videoRef.current?.play().catch(() => {}))
  }

  return (
    <section className="demo">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">See it in action</span>
          <h2>Watch our AI receptionist at work</h2>
          <p>A real call, start to finish - it answers, understands the business, captures the lead and books the meeting. All in about 3 minutes.</p>
        </div>

        <div className="demo-frame reveal">
          {playing ? (
            <video
              ref={videoRef}
              src={src}
              poster="/video/four2labs-demo-poster.jpg"
              controls
              playsInline
              preload="auto"
            />
          ) : (
            <button type="button" className="demo-poster" onClick={start} aria-label="Play the four2labs AI receptionist demo video">
              <img src="/video/four2labs-demo-poster.jpg" alt="" width={1280} height={720} loading="lazy" />
              <span className="demo-play"><Play size={30} fill="currentColor" /></span>
              <span className="demo-duration">3:11</span>
            </button>
          )}
        </div>

        <div className="demo-actions reveal">
          <Link to={BOOKING_PATH} onMouseEnter={prefetchSlots} onTouchStart={prefetchSlots} onFocus={prefetchSlots} onClick={() => track('booking_click')} className="btn btn-primary">Get one for your business →</Link>
        </div>
      </div>
    </section>
  )
}

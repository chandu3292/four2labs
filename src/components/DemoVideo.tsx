import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { Play } from 'lucide-react'
import { track } from '@vercel/analytics'
import { BOOKING_PATH } from '../lib/contact'
import { prefetchSlots } from '../lib/slots'
import { PLAY_DEMO_EVENT } from './HeroLoop'

export default function DemoVideo() {
  const [playing, setPlaying] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)
  const sectionRef = useRef<HTMLElement>(null)

  // Nothing downloads until the visitor presses play; phones get the lighter 720p file
  const src = typeof window !== 'undefined' && window.matchMedia('(max-width: 760px)').matches
    ? '/video/four2labs-demo-short-720.mp4'
    : '/video/four2labs-demo-short-1080.mp4'

  const start = () => {
    setPlaying(true)
    track('video_play')
    // Already showing the player (e.g. second click from the hero): just restart it
    videoRef.current?.play().catch(() => {})
  }

  // The hero's "Watch the 1-min demo" button jumps here and starts playback with sound
  useEffect(() => {
    const onPlay = () => {
      sectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      start()
    }
    window.addEventListener(PLAY_DEMO_EVENT, onPlay)
    return () => window.removeEventListener(PLAY_DEMO_EVENT, onPlay)
  }, [])

  return (
    <section className="demo" id="demo" ref={sectionRef}>
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">See it in action</span>
          <h2>Watch our AI receptionist at work</h2>
          <p>A real call, start to finish - it answers, understands what the caller needs and books the meeting. All in one minute.</p>
        </div>

        <div className="demo-frame reveal">
          {playing ? (
            <video
              ref={videoRef}
              src={src}
              poster="/video/four2labs-demo-poster.jpg"
              controls
              autoPlay
              playsInline
              preload="auto"
            >
              <track kind="captions" src="/video/four2labs-demo-short.en.vtt" srcLang="en" label="English" />
            </video>
          ) : (
            <button type="button" className="demo-poster" onClick={start} aria-label="Play the four2labs AI receptionist demo video">
              <img src="/video/four2labs-demo-poster.jpg" alt="" width={1280} height={720} loading="lazy" />
              <span className="demo-play"><Play size={30} fill="currentColor" /></span>
              <span className="demo-duration">1:00</span>
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

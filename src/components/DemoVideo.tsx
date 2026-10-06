import { useEffect, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Play } from 'lucide-react'
import { track } from '@vercel/analytics'
import { BOOKING_PATH } from '../lib/contact'
import { prefetchSlots } from '../lib/slots'
import { PLAY_DEMO_EVENT } from './HeroLoop'

// Chapter start times (seconds) in the brand film; ids match the Services page groups
export const CHAPTERS = [
  { id: 'websites', label: 'Bakery', topic: 'Websites', t: 17 },
  { id: 'apps', label: 'Fitness studio', topic: 'Apps', t: 44 },
  { id: 'ai', label: 'Dental clinic', topic: 'AI receptionist', t: 70 },
  { id: 'automation', label: 'Real estate', topic: 'Automation', t: 98 },
  { id: 'marketing', label: 'Boutique', topic: 'AI marketing', t: 124 },
  { id: 'operations', label: 'Retail chain', topic: 'Dashboards', t: 149 },
] as const

type Mode = 'story' | 'demo'

// Two videos, one player: the narrated brand film and the real product demonstration
const VIDEOS: Record<Mode, { tab: string; length: string; file: string; poster: string; captions?: string; intro: string; label: string }> = {
  story: {
    tab: 'Our story',
    length: '3:17',
    file: 'four2labs-story',
    poster: '/video/four2labs-story-poster.jpg',
    intro: 'Six businesses, six everyday problems, and what we build for each. Jump to the story closest to yours.',
    label: 'four2labs story film - six business stories, captions shown in the video',
  },
  demo: {
    tab: 'Demo: AI receptionist',
    length: '1:00',
    file: 'four2labs-demo-short',
    poster: '/video/four2labs-demo-poster.jpg',
    captions: '/video/four2labs-demo-short.en.vtt',
    intro: 'One call, start to finish - our AI receptionist answers, understands what the caller needs and books the meeting.',
    label: 'Live demonstration of the four2labs AI receptionist handling a call',
  },
}

export default function DemoVideo() {
  const [mode, setMode] = useState<Mode>('story')
  const [playing, setPlaying] = useState(false)
  // Attention cues on the demo tab until the visitor has opened the demo once
  const [seenDemo, setSeenDemo] = useState(false)
  const [active, setActive] = useState<string | null>(null)
  const videoRef = useRef<HTMLVideoElement | null>(null)
  const sectionRef = useRef<HTMLElement>(null)
  const startAt = useRef(0)
  const { search } = useLocation()
  const video = VIDEOS[mode]

  // Nothing downloads until the visitor presses play; phones get the lighter 720p file
  const small = typeof window !== 'undefined' && window.matchMedia('(max-width: 760px)').matches
  const src = `/video/${video.file}-${small ? '720' : '1080'}.mp4`

  const play = (next: Mode, t = 0, chapter: string | null = null) => {
    startAt.current = t
    setActive(chapter)
    track('video_play', { video: next, chapter: chapter ?? 'start' })
    const v = videoRef.current
    if (next === mode && v) {
      v.currentTime = t
      v.play().catch(() => {})
    }
    setMode(next)
    setPlaying(true)
    if (next === 'demo') setSeenDemo(true)
  }

  const scrollHere = () => sectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })

  // The hero button opens the live demo; Services links open a film chapter or the demo
  useEffect(() => {
    const onPlay = (e: Event) => {
      const id = (e as CustomEvent<string>).detail
      scrollHere()
      const ch = CHAPTERS.find((c) => c.id === id)
      if (ch) play('story', ch.t, ch.id)
      else play('demo')
    }
    window.addEventListener(PLAY_DEMO_EVENT, onPlay)
    return () => window.removeEventListener(PLAY_DEMO_EVENT, onPlay)
  })

  useEffect(() => {
    const params = new URLSearchParams(search)
    const ch = CHAPTERS.find((c) => c.id === params.get('chapter'))
    const wantsDemo = params.get('video') === 'demo'
    if (!ch && !wantsDemo) return
    const t = setTimeout(() => {
      scrollHere()
      if (ch) play('story', ch.t, ch.id)
      else play('demo')
    }, 200)
    return () => clearTimeout(t)
  }, [search])

  // Highlight the film chapter that is currently playing
  const onTime = () => {
    if (mode !== 'story') return
    const now = videoRef.current?.currentTime ?? 0
    const current = [...CHAPTERS].reverse().find((c) => now >= c.t)
    setActive(current && now < 174 ? current.id : null)
  }

  const switchTo = (next: Mode) => {
    if (next === mode) return
    setActive(null)
    if (playing) play(next)
    else setMode(next)
  }

  return (
    <section className="demo" id="story" ref={sectionRef}>
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">See it in action</span>
          <h2>Watch how we help businesses grow</h2>
          <p>{video.intro}</p>
        </div>

        <div className="video-tabs-wrap">
          {!seenDemo && mode !== 'demo' && (
            <button type="button" className="demo-hint" onClick={() => play('demo')}>
              Watch our AI take a call · 1 min
            </button>
          )}
          <div className="video-tabs" role="tablist" aria-label="Choose a video">
            {(Object.keys(VIDEOS) as Mode[]).map((m) => {
              const cue = m === 'demo' && !seenDemo && mode !== 'demo'
              return (
                <button type="button" role="tab" key={m} aria-selected={mode === m} className={`video-tab ${mode === m ? 'active' : ''} ${cue ? 'cue' : ''}`} onClick={() => (m === 'demo' ? play('demo') : switchTo(m))}>
                  {cue && <span className="cue-dot" aria-hidden="true" />}
                  {VIDEOS[m].tab} <span className="tab-length">{VIDEOS[m].length}</span>
                </button>
              )
            })}
          </div>
        </div>

        <div className="demo-frame reveal">
          {playing ? (
            <video
              key={mode}
              ref={(el) => {
                videoRef.current = el
                if (el && startAt.current && el.currentTime === 0) el.currentTime = startAt.current
              }}
              src={src}
              poster={video.poster}
              controls
              autoPlay
              playsInline
              preload="auto"
              onTimeUpdate={onTime}
              aria-label={video.label}
            >
              {video.captions && <track kind="captions" src={video.captions} srcLang="en" label="English" />}
            </video>
          ) : (
            <button type="button" className="demo-poster" onClick={() => play(mode)} aria-label={`Play: ${video.label}`}>
              <img src={video.poster} alt="" width={1280} height={720} loading="lazy" />
              <span className="demo-play"><Play size={30} fill="currentColor" /></span>
              <span className="demo-duration">{video.length}</span>
            </button>
          )}
        </div>

        {mode === 'story' ? (
          <>
            <div className="chapters reveal" role="list" aria-label="Jump to a story">
              {CHAPTERS.map((c) => (
                <button type="button" role="listitem" key={c.id} className={`chapter ${active === c.id ? 'active' : ''}`} onClick={() => play('story', c.t, c.id)}>
                  <span className="chapter-time">{Math.floor(c.t / 60)}:{String(c.t % 60).padStart(2, '0')}</span>
                  <span className="chapter-label">{c.label}</span>
                  <span className="chapter-topic">{c.topic}</span>
                </button>
              ))}
            </div>
            <p className="demo-note">Stories shown are illustrative.</p>
          </>
        ) : (
          <p className="demo-note">A demonstration of how our AI receptionist handles a call, from first ring to booked meeting.</p>
        )}

        <div className="demo-actions reveal">
          <Link to={BOOKING_PATH} onMouseEnter={prefetchSlots} onTouchStart={prefetchSlots} onFocus={prefetchSlots} onClick={() => track('booking_click')} className="btn btn-primary">Let's build yours →</Link>
        </div>
      </div>
    </section>
  )
}

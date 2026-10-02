import { useEffect, useState } from 'react'
import { Play } from 'lucide-react'
import { track } from '@vercel/analytics'

export const PLAY_DEMO_EVENT = 'four2labs:play-demo'

// Silent 14s loop of the AI receptionist booking a call; the button plays the full demo with sound
export default function HeroLoop() {
  const [reduceMotion, setReduceMotion] = useState(false)
  useEffect(() => {
    setReduceMotion(window.matchMedia('(prefers-reduced-motion: reduce)').matches)
  }, [])

  const playDemo = () => {
    track('hero_demo_click')
    window.dispatchEvent(new Event(PLAY_DEMO_EVENT))
  }

  return (
    <div className="hero-loop reveal">
      <div className="hero-loop-bar">
        <span className="pv-live" /> Live: AI receptionist booking a call
      </div>
      <video
        src="/video/hero-loop.mp4"
        poster="/video/hero-loop-poster.jpg"
        autoPlay={!reduceMotion}
        muted
        loop
        playsInline
        aria-label="Short silent clip of the four2labs AI receptionist booking a meeting"
      >
        <track kind="captions" src="/video/hero-loop.en.vtt" srcLang="en" label="English" />
      </video>
      <button type="button" className="hero-loop-play" onClick={playDemo}>
        <span className="hero-loop-icon"><Play size={16} fill="currentColor" /></span>
        Watch the 1-min demo
      </button>
    </div>
  )
}

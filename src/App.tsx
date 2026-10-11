import { Routes, Route, useLocation } from 'react-router-dom'
import { Suspense, lazy, useEffect } from 'react'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/react'
import Nav from './components/Nav'
import Footer from './components/Footer'
import ChatWidget from './components/ChatWidget'
import MobileBar from './components/MobileBar'
import Home from './pages/Home'
// Home loads with the first visit; other pages download only when visited
const Services = lazy(() => import('./pages/Services'))
const About = lazy(() => import('./pages/About'))
const Contact = lazy(() => import('./pages/Contact'))
const Book = lazy(() => import('./pages/Book'))
const Privacy = lazy(() => import('./pages/Privacy'))
const Voisy = lazy(() => import('./pages/Voisy'))
const NotFound = lazy(() => import('./pages/NotFound'))

export default function App() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12 },
    )
    const watch = () => document.querySelectorAll('.reveal:not(.visible)').forEach((el) => observer.observe(el))
    watch()
    // Lazy-loaded pages arrive after this effect runs, so pick up their sections too
    const mutations = new MutationObserver(watch)
    mutations.observe(document.getElementById('root')!, { childList: true, subtree: true })
    return () => { observer.disconnect(); mutations.disconnect() }
  }, [pathname])

  return (
    <>
      <Nav />
      <main>
        <Suspense fallback={<div style={{ minHeight: '70vh' }} />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/book" element={<Book />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/voisy" element={<Voisy />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
      <MobileBar />
      <ChatWidget />
      <Analytics />
      <SpeedInsights />
    </>
  )
}

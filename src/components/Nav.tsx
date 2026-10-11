import { useEffect, useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import ThemeToggle from './ThemeToggle'

export default function Nav() {
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)

  // The phone menu is a full-screen sheet: lock the page behind it while open
  useEffect(() => {
    if (!open) return
    document.body.style.overflow = 'hidden'
    document.body.classList.add('menu-open')
    return () => {
      document.body.style.overflow = ''
      document.body.classList.remove('menu-open')
    }
  }, [open])

  return (
    <header className="nav">
      <div className="container nav-inner">
        <Link to="/" className="brand" onClick={close}>
          <span className="brand-mark" />
          four2labs
        </Link>

        <nav className={`nav-links ${open ? 'open' : ''}`}>
          <NavLink to="/" end onClick={close}>Home</NavLink>
          <NavLink to="/services" onClick={close}>Services</NavLink>
          <NavLink to="/voisy" onClick={close} className="nav-voisy"><img src="/voisy-icon.webp" alt="" width={22} height={22} className="nav-voisy-icon" />Voisy</NavLink>
          <NavLink to="/about" onClick={close}>About</NavLink>
          <NavLink to="/contact" onClick={close}>Contact</NavLink>
          <Link to="/book" className="btn btn-primary nav-sheet-cta" onClick={close}>Book a free 30-min call →</Link>
          <p className="nav-sheet-note">hello@four2labs.com · Replies within one working day</p>
        </nav>

        <div className="nav-actions">
          <ThemeToggle />
          <Link to="/contact" className="btn btn-primary nav-cta" onClick={close}>Let's talk →</Link>
          <button className="nav-toggle" aria-label="Toggle menu" onClick={() => setOpen(o => !o)}>{open ? <X size={20} /> : <Menu size={20} />}</button>
        </div>
      </div>
    </header>
  )
}

import { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'

export default function Nav() {
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)

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
          <NavLink to="/about" onClick={close}>About</NavLink>
          <NavLink to="/contact" onClick={close}>Contact</NavLink>
        </nav>

        <Link to="/contact" className="btn btn-primary nav-cta" onClick={close}>Let's talk →</Link>

        <button className="nav-toggle" aria-label="Toggle menu" onClick={() => setOpen(o => !o)}>☰</button>
      </div>
    </header>
  )
}

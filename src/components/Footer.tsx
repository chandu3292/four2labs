import { Link } from 'react-router-dom'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <Link to="/" className="brand"><span className="brand-mark" />four2labs</Link>
            <p style={{ marginTop: 16, maxWidth: 320 }}>
              Tech solutions that help everyday businesses grow. Built with care, explained without jargon.
            </p>
          </div>
          <div>
            <h4>Pages</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4>Services</h4>
            <ul>
              <li><Link to="/services#websites">Websites &amp; Apps</Link></li>
              <li><Link to="/services#ai">AI Assistance</Link></li>
              <li><Link to="/services#operations">Dashboards &amp; Data</Link></li>
              <li><Link to="/services#care">Maintenance</Link></li>
            </ul>
          </div>
          <div>
            <h4>Get in touch</h4>
            <ul>
              <li><a href="mailto:hello@four2labs.com">hello@four2labs.com</a></li>
              <li><a href="tel:+919390694802">+91 93906 94802</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {year} four2labs. All rights reserved.</span>
          <span>Made with care for growing businesses</span>
        </div>
      </div>
    </footer>
  )
}

import { Link } from 'react-router-dom'
import { usePageMeta } from '../lib/usePageMeta'
import { PAGE_META } from '../lib/meta'

export default function NotFound() {
  usePageMeta(PAGE_META['/404'])
  return (
    <section className="page-header">
      <div className="container">
        <span className="eyebrow">404</span>
        <h1>This page <span className="gradient-text">doesn't exist</span></h1>
        <p>The link may be broken or the page may have moved. Let's get you back on track.</p>
        <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap', marginTop: 32 }}>
          <Link to="/" className="btn btn-primary">Back to home →</Link>
          <Link to="/contact" className="btn btn-ghost">Contact us</Link>
        </div>
      </div>
    </section>
  )
}

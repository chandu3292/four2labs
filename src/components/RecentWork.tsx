import { CalendarDays, FileText, Headset } from 'lucide-react'

const projects = [
  {
    icon: Headset,
    tag: 'AI',
    title: 'AI voice receptionist',
    body: 'Our own real-time voice assistant. It speaks English, Telugu and Tamil, answers questions from your documents and books appointments straight into Google Calendar.',
  },
  {
    icon: FileText,
    tag: 'AI',
    title: 'Ask-your-documents assistant',
    body: 'Upload PDFs, scans and photos, then ask questions in plain English. It reads scanned pages and finds answers faster than keyword search.',
  },
  {
    icon: CalendarDays,
    tag: 'Web app',
    title: 'Automatic timetable generator',
    body: 'Builds clash-free academic timetables automatically - scheduling is 92% faster than doing it by hand.',
  },
]

export default function RecentWork() {
  return (
    <section style={{ background: 'var(--bg-2)' }}>
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">Built in-house</span>
          <h2>Our own products</h2>
          <p>We build and run our own AI products. The same building blocks power what we build for you.</p>
        </div>
        <div className="cards">
          {projects.map((p) => (
            <div className="card reveal" key={p.title}>
              <span className="tag">{p.tag}</span>
              <div className="icon"><p.icon size={24} /></div>
              <h3>{p.title}</h3>
              <p>{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

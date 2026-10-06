import { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import {
  AppWindow, BookOpen, Play, CalendarCheck, ChartColumn, ChartLine, Compass, CreditCard, FileBarChart,
  Gauge, Globe, GraduationCap, Headset, LayoutTemplate, Lightbulb, Mail, Megaphone, MessagesSquare,
  Package, PanelsTopLeft, Plug, ReceiptText, ScanText, Search, ShieldCheck, ShoppingCart,
  Smartphone, Truck, Users, Workflow, Wrench, type LucideIcon,
} from 'lucide-react'
import { usePageMeta } from '../lib/usePageMeta'
import { PAGE_META } from '../lib/meta'
import ServicePreview from '../components/ServicePreview'

type Service = { Icon: LucideIcon; title: string; text: string }
type GroupId = 'websites' | 'apps' | 'operations' | 'ai' | 'automation' | 'care'
type Group = { id: GroupId; label: string; title: string; intro: string; services: Service[] }

const GROUPS: Group[] = [
  {
    id: 'websites',
    label: 'Websites',
    title: 'Websites & online presence',
    intro: 'How customers find you, learn about you and buy from you.',
    services: [
      { Icon: Globe, title: 'Business websites', text: 'A fast, modern website that tells your story and turns visitors into enquiries.' },
      { Icon: LayoutTemplate, title: 'Landing pages', text: 'Focused pages for a product, offer or campaign - built to convert, not just look nice.' },
      { Icon: ShoppingCart, title: 'Online stores & ordering', text: 'Sell products or take food and service orders online, with payments built in.' },
      { Icon: Gauge, title: 'Redesigns & speed-ups', text: 'Give an outdated or slow website a modern look and make it load fast on every phone.' },
      { Icon: Search, title: 'Google visibility', text: 'Search-friendly pages, Google Business setup and the basics that help customers find you.' },
    ],
  },
  {
    id: 'apps',
    label: 'Apps & software',
    title: 'Apps & custom software',
    intro: 'Software built around the way your business already works.',
    services: [
      { Icon: Smartphone, title: 'Mobile apps', text: 'Apps for iPhone and Android - bookings, orders, loyalty, or anything your customers need.' },
      { Icon: AppWindow, title: 'Web apps & customer portals', text: 'Online portals where customers log in to order, track, pay or download what they need.' },
      { Icon: CalendarCheck, title: 'Booking & appointment systems', text: 'Let customers pick a time online, with reminders and calendar sync - no back-and-forth.' },
      { Icon: PanelsTopLeft, title: 'Internal tools & admin panels', text: 'Simple screens for your team to manage records, approvals and daily tasks in one place.' },
      { Icon: Plug, title: 'Integrations', text: 'Connect your website, payments, calendar, email and other tools so data flows on its own.' },
    ],
  },
  {
    id: 'operations',
    label: 'Operations',
    title: 'Operations & data',
    intro: 'Remove the chaos from orders, stock, customers and reporting.',
    services: [
      { Icon: ReceiptText, title: 'Order management', text: 'Every order in one organised place - no scattered messages, missed orders or messy spreadsheets.' },
      { Icon: Package, title: 'Inventory management', text: 'Know what is in stock, what is running low and what to reorder - automatically.' },
      { Icon: Truck, title: 'Delivery & job tracking', text: 'Real-time status so you and your customers always know where a delivery or job stands.' },
      { Icon: Users, title: 'CRM & customer management', text: 'Every customer, enquiry and follow-up in one place, so nothing slips through the cracks.' },
      { Icon: ChartColumn, title: 'Dashboards & reports', text: 'Sales, customers and operations at a glance - updated automatically, no spreadsheets.' },
      { Icon: ChartLine, title: 'Data analysis', text: 'We dig into your numbers and turn them into plain-English insights you can act on.' },
    ],
  },
  {
    id: 'ai',
    label: 'AI',
    title: 'AI for your business',
    intro: 'Smart assistants that work around the clock, so your team can focus on what matters.',
    services: [
      { Icon: Headset, title: 'AI receptionist & voice agents', text: 'Answers calls 24/7, books appointments and captures every lead - even after hours.' },
      { Icon: MessagesSquare, title: 'AI chatbots for website & WhatsApp', text: 'Instant, accurate answers to customer questions on your website and in chats.' },
      { Icon: BookOpen, title: 'Business knowledge assistant', text: 'Ask questions about your own price lists, policies and documents - and get answers with sources.' },
      { Icon: ScanText, title: 'Document & invoice reading', text: 'Pull the details out of invoices, forms and scanned paper automatically - no manual typing.' },
      { Icon: Megaphone, title: 'AI marketing assistant', text: 'Drafts posts, follow-ups and replies to leads, so your marketing keeps moving every week.' },
    ],
  },
  {
    id: 'automation',
    label: 'Automation',
    title: 'Automation & integrations',
    intro: 'Hand the repetitive work to software and get hours back every week.',
    services: [
      { Icon: Workflow, title: 'Workflow automation', text: 'Connect your tools so routine steps - copying data, updating records, notifying people - happen on their own.' },
      { Icon: Mail, title: 'WhatsApp & email automation', text: 'Automatic confirmations, reminders and follow-ups that go out at the right time.' },
      { Icon: CreditCard, title: 'Billing & payment automation', text: 'Invoices created, sent and chased automatically, with payments recorded for you.' },
      { Icon: FileBarChart, title: 'Automatic reports', text: 'The reports you build by hand every week, generated and emailed on schedule.' },
    ],
  },
  {
    id: 'care',
    label: 'Support',
    title: 'Support & growth',
    intro: "We don't disappear after launch - we keep everything running and improving.",
    services: [
      { Icon: Wrench, title: 'Maintenance & updates', text: 'Regular check-ups, fixes and small improvements so your tech stays fast and reliable.' },
      { Icon: ShieldCheck, title: 'Hosting & security', text: 'Secure hosting, backups and monitoring handled for you, so you never have to think about it.' },
      { Icon: GraduationCap, title: 'Training & handover', text: 'Simple training and guides so your team is confident using everything we build.' },
      { Icon: Compass, title: 'Tech consulting', text: 'Not sure what to build, buy or fix first? We give you an honest, plain-language plan.' },
      { Icon: Lightbulb, title: 'Custom solutions', text: "Need something that isn't listed? We build custom tools, integrations and platforms for specific needs." },
    ],
  },
]

export default function Services() {
  usePageMeta(PAGE_META['/services'])

  // Footer links like /services#ai land here; jump to the right group once it has rendered
  const { hash } = useLocation()
  useEffect(() => {
    if (!hash) return
    const t = setTimeout(() => document.getElementById(hash.slice(1))?.scrollIntoView({ behavior: 'smooth' }), 150)
    return () => clearTimeout(t)
  }, [hash])

  const jump = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <>
      <section className="page-header">
        <div className="container">
          <span className="eyebrow">Our services</span>
          <h1>Tech that <span className="gradient-text">actually helps</span></h1>
          <p>Everything from your first website to AI that runs parts of your business. We mix and match these to fit you - and if you need something not listed, just ask. If it's tech, we build it.</p>
          <nav className="service-jump" aria-label="Jump to a service group">
            {GROUPS.map((g) => (
              <button type="button" key={g.id} className="chip" onClick={() => jump(g.id)}>{g.label}</button>
            ))}
          </nav>
        </div>
      </section>

      {GROUPS.map((g, i) => (
        <section id={g.id} key={g.id} className={`service-group ${i % 2 === 1 ? 'flip' : ''}`} style={i % 2 === 1 ? { background: 'var(--bg-2)' } : undefined}>
          <div className="container svc-split">
            <div className="svc-intro reveal">
              <span className="eyebrow">{String(i + 1).padStart(2, '0')} - {g.label}</span>
              <h2>{g.title}</h2>
              <p>{g.intro}</p>
              <ServicePreview id={g.id} />
              <div className="svc-links">
                {g.id !== 'care' && <Link to={g.id === 'ai' ? '/?video=demo' : `/?chapter=${g.id}`} className="svc-watch"><Play size={13} fill="currentColor" /> See it in action</Link>}
                <Link to="/contact" className="svc-link">Talk to us about {g.label === 'AI' ? 'AI' : g.label.toLowerCase()} →</Link>
              </div>
            </div>
            <div className="svc-list">
              {g.services.map(({ Icon, title, text }) => (
                <div className="svc-item reveal" key={title}>
                  <div className="svc-icon"><Icon size={20} /></div>
                  <div>
                    <h3>{title}</h3>
                    <p>{text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      <section>
        <div className="container two-col">
          <div className="reveal">
            <span className="eyebrow">Our promise</span>
            <h2>You only pay for what you actually need</h2>
            <p>We never sell tech for the sake of selling tech. After our first conversation, we recommend the smallest set of services that will actually move your business forward - and we tell you honestly when something isn't worth building.</p>
            <Link to="/contact" className="btn btn-primary">Get a free recommendation →</Link>
          </div>
          <div className="reveal">
            <div className="hero-card why-card">
              <div className="hc-row"><div className="hc-icon">1</div><div><div className="hc-title">Free 30-minute chat</div><div className="hc-sub">Tell us about your business</div></div></div>
              <div className="hc-row"><div className="hc-icon">2</div><div><div className="hc-title">Honest recommendation</div><div className="hc-sub">Only what will actually help</div></div></div>
              <div className="hc-row"><div className="hc-icon">3</div><div><div className="hc-title">Clear, simple plan</div><div className="hc-sub">No tech jargon, no surprises</div></div></div>
              <div className="hc-row"><div className="hc-icon">4</div><div><div className="hc-title">We build &amp; support</div><div className="hc-sub">From idea to live, and beyond</div></div></div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="cta reveal">
            <h2>Not sure which service you need?</h2>
            <p>That's the most common question we get - and it's the easiest to answer. Tell us about your business and we'll recommend the right starting point.</p>
            <Link to="/contact" className="btn btn-primary">Talk to us →</Link>
          </div>
        </div>
      </section>
    </>
  )
}

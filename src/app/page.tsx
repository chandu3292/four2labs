'use client'

import { useState } from 'react'

// ─── Navbar ───
function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border">
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
        <a href="#" className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center">
            <span className="text-accent-foreground text-sm font-bold">i</span>
          </div>
          <span className="text-lg font-semibold tracking-tight text-foreground">innolah</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {['Services', 'Process', 'Results'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`} 
              className="text-sm text-muted hover:text-foreground transition-colors duration-200"
            >
              {item}
            </a>
          ))}
        </div>

        <a 
          href="#contact" 
          className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 bg-foreground text-background text-sm font-medium rounded-lg btn-primary"
        >
          Get Started
          <ArrowIcon />
        </a>

        <button 
          className="md:hidden text-foreground p-2" 
          aria-label="Menu"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="M3 12h18M3 6h18M3 18h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </button>
      </div>
      
      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-xl">
          <div className="px-6 py-4 flex flex-col gap-4">
            {['Services', 'Process', 'Results'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`} 
                className="text-sm text-muted hover:text-foreground transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {item}
              </a>
            ))}
            <a 
              href="#contact" 
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-foreground text-background text-sm font-medium rounded-lg mt-2"
              onClick={() => setMobileOpen(false)}
            >
              Get Started
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}

// ─── Icons ───
function ArrowIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 16 16" fill="none">
      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

function CheckIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <path d="M3 7l3 3 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

function ExternalIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 20 20" fill="none" className="opacity-40 group-hover:opacity-100 transition-opacity">
      <path d="M5 15L15 5M15 5H8M15 5v7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

// ─── Hero ───
function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-background overflow-hidden pt-16">
      {/* Grid pattern background */}
      <div className="absolute inset-0 grid-pattern opacity-50" />
      
      {/* Gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-foreground/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-6xl mx-auto w-full px-6 py-24 md:py-32 z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-border bg-card mb-8">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse-dot" />
            <span className="text-xs font-medium tracking-wide text-muted uppercase">Now Accepting Projects</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight leading-[1.1] text-foreground mb-6 text-balance">
            We build systems{' '}
            <span className="gradient-text">that scale you</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-muted leading-relaxed max-w-2xl mx-auto mb-10">
            AI automations, intelligent pipelines, websites, and custom apps engineered to eliminate manual work and accelerate your growth.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <a 
              href="#contact" 
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-foreground text-background text-sm font-medium rounded-xl btn-primary"
            >
              Start your project
              <ArrowIcon />
            </a>
            <a 
              href="#services" 
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-sm font-medium rounded-xl btn-secondary"
            >
              Explore services
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 pt-10 border-t border-border max-w-xl mx-auto">
            {[
              { value: '40+', label: 'Projects shipped' },
              { value: '97%', label: 'Client retention' },
              { value: '3x', label: 'Avg. efficiency' },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-2xl md:text-3xl font-semibold text-foreground tracking-tight">{stat.value}</div>
                <div className="text-xs text-muted-foreground mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── Partners ───
function Partners() {
  const partners = ['TechFlow', 'Meridian', 'Quantum', 'NovaStar', 'Praxis']
  
  return (
    <section className="py-16 border-y border-border bg-card">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <p className="text-xs font-medium tracking-widest text-muted-foreground uppercase">Trusted by</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {partners.map((name) => (
              <span key={name} className="text-base font-medium tracking-tight text-border-hover select-none">
                {name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── Services ───
const services = [
  {
    num: '01',
    title: 'AI Automations',
    desc: 'Custom AI agents and workflows that handle data processing, customer interactions, content generation, and operations on autopilot.',
    tags: ['LLM Agents', 'Workflow Automation', 'Custom GPTs'],
  },
  {
    num: '02',
    title: 'Intelligent Pipelines',
    desc: 'Connect your tools, databases, and APIs into seamless data pipelines with real-time syncing, transformations, and intelligent triggers.',
    tags: ['API Integration', 'ETL', 'Real-time Sync'],
  },
  {
    num: '03',
    title: 'Websites',
    desc: 'High-performance, conversion-focused websites custom-built around your business goals. Not templates. Strategic digital experiences.',
    tags: ['Landing Pages', 'Web Apps', 'E-Commerce'],
  },
  {
    num: '04',
    title: 'Custom Apps',
    desc: 'Production-ready software for your exact workflow. Client portals, internal dashboards, SaaS products, and mobile applications.',
    tags: ['SaaS', 'Dashboards', 'Mobile Apps'],
  },
]

function Services() {
  return (
    <section id="services" className="py-24 md:py-32 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
          <div>
            <span className="text-xs font-medium tracking-widest text-accent uppercase mb-4 block">What we build</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-foreground leading-tight text-balance">
              Four disciplines.{' '}
              <span className="text-muted">One unified system.</span>
            </h2>
          </div>
          <p className="text-muted max-w-md text-base leading-relaxed lg:text-right">
            Every service works independently or together. Connected infrastructure that grows with your business.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {services.map((s) => (
            <div 
              key={s.num} 
              className="group bg-card border border-border rounded-2xl p-8 md:p-10 card-hover cursor-pointer"
            >
              <div className="flex items-start justify-between mb-8">
                <div className="w-12 h-12 rounded-xl bg-secondary border border-border flex items-center justify-center text-muted text-sm font-mono">
                  {s.num}
                </div>
                <ExternalIcon />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3 tracking-tight">{s.title}</h3>
              <p className="text-muted text-sm leading-relaxed mb-6">{s.desc}</p>
              <div className="flex flex-wrap gap-2">
                {s.tags.map((tag) => (
                  <span 
                    key={tag} 
                    className="text-xs font-medium text-muted-foreground bg-secondary border border-border rounded-full px-3 py-1.5"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Process ───
const steps = [
  {
    num: '01',
    label: 'Discover',
    title: 'Technical Deep Dive',
    desc: 'We map your current operations, tools, and bottlenecks. A focused 60-minute session to find where automation has the most impact.',
    detail: '60-min strategy call',
  },
  {
    num: '02',
    label: 'Architect',
    title: 'System Blueprint',
    desc: 'We design the full pipeline. What gets automated, how data flows, which tools integrate. You approve the blueprint before any code is written.',
    detail: 'Full technical spec',
  },
  {
    num: '03',
    label: 'Build & Ship',
    title: 'Rapid Delivery',
    desc: 'Focused sprints with weekly demos. You see progress, give feedback, and we iterate until it is exactly right. Deployed and supported from day one.',
    detail: '2-6 week delivery',
  },
]

function Process() {
  return (
    <section id="process" className="py-24 md:py-32 bg-card border-y border-border">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-xs font-medium tracking-widest text-accent uppercase mb-4 block">How it works</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-foreground leading-tight text-balance">
            From idea to running system{' '}
            <span className="text-muted">in three phases</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 md:gap-6">
          {steps.map((step, i) => (
            <div key={i} className="relative">
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-6 left-full w-full h-px bg-border -translate-x-1/2 z-0" />
              )}
              
              <div className="relative bg-background border border-border rounded-2xl p-8 h-full">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center">
                    <span className="text-accent text-sm font-mono font-medium">{step.num}</span>
                  </div>
                  <span className="text-xs font-medium tracking-widest text-accent uppercase">{step.label}</span>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3 tracking-tight">{step.title}</h3>
                <p className="text-muted text-sm leading-relaxed mb-6">{step.desc}</p>
                <div className="flex items-center gap-2 text-accent">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                  <span className="text-xs font-medium">{step.detail}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Results ───
function Results() {
  const metrics = [
    { value: '12h', label: 'Saved weekly', sub: 'Per employee on average' },
    { value: '98%', label: 'System uptime', sub: 'Across all deployments' },
    { value: '5.2x', label: 'Average ROI', sub: 'Within first quarter' },
    { value: '<48h', label: 'Support response', sub: 'Issue to resolution' },
  ]

  return (
    <section id="results" className="py-24 md:py-32 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">
          <div className="lg:w-2/5 flex-shrink-0">
            <span className="text-xs font-medium tracking-widest text-accent uppercase mb-4 block">Results</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-foreground leading-tight mb-6">
              Numbers that{' '}
              <span className="text-muted">matter</span>
            </h2>
            <p className="text-muted text-base leading-relaxed">
              Real outcomes from real projects. These are averages across our client portfolio.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 lg:w-3/5">
            {metrics.map((m, i) => (
              <div key={i} className="bg-card border border-border rounded-2xl p-6 md:p-8 card-hover">
                <div className="text-3xl md:text-4xl font-semibold gradient-text leading-none mb-3">{m.value}</div>
                <div className="text-sm font-medium text-foreground mb-1">{m.label}</div>
                <div className="text-xs text-muted-foreground">{m.sub}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonial */}
        <div className="mt-20 bg-card border border-border rounded-3xl p-8 md:p-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl pointer-events-none" />
          <div className="relative max-w-3xl">
            <svg width="32" height="24" viewBox="0 0 48 36" fill="none" className="text-accent/20 mb-6">
              <path d="M0 36V20.4C0 8.4 7.2 2 17.6 0l2 4.8C12 6.4 8.4 11.2 8 16h8v20H0Zm28 0V20.4C28 8.4 35.2 2 45.6 0l2 4.8C40 6.4 36.4 11.2 36 16h8v20H28Z" fill="currentColor"/>
            </svg>
            <blockquote className="text-lg md:text-xl font-medium leading-relaxed text-foreground mb-8">
              &ldquo;They didn&apos;t just build us a website &mdash; they rebuilt how our entire operation runs. Our intake process went from 3 hours to 15 minutes.&rdquo;
            </blockquote>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center">
                <span className="text-accent text-sm font-medium">MR</span>
              </div>
              <div>
                <div className="text-sm font-medium text-foreground">Marcus Reynolds</div>
                <div className="text-xs text-muted-foreground">Operations Director, TechFlow</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── CTA ───
function CTA() {
  return (
    <section id="contact" className="py-20 md:py-24 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <div className="bg-card border border-border rounded-3xl py-16 md:py-24 px-8 md:px-16 text-center relative overflow-hidden">
          {/* Gradient orbs */}
          <div className="absolute top-0 left-1/4 w-72 h-72 bg-accent/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 right-1/4 w-60 h-60 bg-foreground/5 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-xl mx-auto">
            <span className="text-xs font-medium tracking-widest text-accent uppercase mb-6 block">Get started</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground tracking-tight leading-tight mb-6 text-balance">
              Ready to stop doing{' '}
              <span className="gradient-text">things manually?</span>
            </h2>
            <p className="text-muted text-base leading-relaxed mb-10 max-w-md mx-auto">
              Book a free 30-minute discovery call. We&apos;ll map out where automation saves you the most time &mdash; no pitch, just a plan.
            </p>
            <a 
              href="mailto:hello@innolah.com" 
              className="inline-flex items-center gap-3 px-10 py-4 bg-accent text-accent-foreground text-sm font-medium rounded-xl glow-accent hover:opacity-90 transition-all duration-300"
            >
              Book a discovery call
              <ArrowIcon />
            </a>
            <p className="mt-6 text-sm text-muted-foreground">
              or reach out at <span className="text-foreground font-medium">hello@innolah.com</span>
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
              {['Free consultation', 'No commitment', 'Results in weeks'].map((text) => (
                <div key={text} className="flex items-center gap-2">
                  <span className="text-accent"><CheckIcon /></span>
                  {text}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── Footer ───
function Footer() {
  return (
    <footer className="border-t border-border bg-background py-16 md:py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-12">
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-7 h-7 rounded-lg bg-accent flex items-center justify-center">
                <span className="text-accent-foreground text-xs font-bold">i</span>
              </div>
              <span className="text-base font-semibold tracking-tight text-foreground">innolah</span>
            </div>
            <p className="text-sm text-muted-foreground max-w-xs leading-relaxed">
              AI automations, pipelines, websites, and apps for businesses that want to move faster.
            </p>
          </div>

          <div className="flex gap-16">
            <div>
              <h4 className="text-xs font-medium tracking-widest text-muted-foreground uppercase mb-5">Navigate</h4>
              <div className="flex flex-col gap-3">
                {['Services', 'Process', 'Results', 'Contact'].map((link) => (
                  <a 
                    key={link} 
                    href={`#${link.toLowerCase()}`} 
                    className="text-sm text-muted hover:text-foreground transition-colors"
                  >
                    {link}
                  </a>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-xs font-medium tracking-widest text-muted-foreground uppercase mb-5">Connect</h4>
              <div className="flex flex-col gap-3">
                {['LinkedIn', 'Twitter', 'Instagram'].map((link) => (
                  <a 
                    key={link} 
                    href="#" 
                    className="text-sm text-muted hover:text-foreground transition-colors"
                  >
                    {link}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">&copy; {new Date().getFullYear()} innolah. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="text-xs text-muted-foreground hover:text-muted transition-colors">Privacy</a>
            <a href="#" className="text-xs text-muted-foreground hover:text-muted transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

// ─── Page ───
export default function Home() {
  return (
    <main className="bg-background">
      <Navbar />
      <Hero />
      <Partners />
      <Services />
      <Process />
      <Results />
      <CTA />
      <Footer />
    </main>
  )
}

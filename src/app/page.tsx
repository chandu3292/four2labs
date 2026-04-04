'use client'

import Image from 'next/image'

// ─── Container ───
function Box({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <div
      className={`max-w-[1140px] mx-auto ${className}`}
      style={{ paddingLeft: 'clamp(24px, 5vw, 80px)', paddingRight: 'clamp(24px, 5vw, 80px)' }}
    >
      {children}
    </div>
  )
}
const container = "max-w-[1140px] mx-auto"

// ─── Navbar ───
function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-2xl border-b border-gray-100">
      <div className="max-w-[1140px] mx-auto flex items-center justify-between h-[72px]" style={{ paddingLeft: 'clamp(24px, 5vw, 80px)', paddingRight: 'clamp(24px, 5vw, 80px)' }}>
        <a href="#" className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#EC4899] to-[#38BDF8] shadow-md shadow-pink-500/15" />
          <span className="text-[1.3rem] font-extrabold tracking-tight text-[#0F172A]">innolah</span>
        </a>

        <div className="hidden md:flex items-center gap-10">
          {['Services', 'Process', 'Results'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="text-[13px] font-semibold text-[#64748B] hover:text-[#0F172A] transition-colors">
              {item}
            </a>
          ))}
        </div>

        <a href="#contact" className="hidden md:inline-flex items-center gap-2 px-6 py-2.5 bg-[#0F172A] text-white text-[13px] font-semibold rounded-full hover:shadow-lg hover:shadow-gray-900/10 transition-all duration-200">
          Book a call
          <svg width="13" height="13" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </a>

        <button className="md:hidden text-[#0F172A]" aria-label="Menu">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M3 12h18M3 6h18M3 18h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
        </button>
      </div>
    </nav>
  )
}

// ─── Hero ───
function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-white overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <Image src="/images/hero-v8.png" alt="" fill className="object-cover opacity-25 scale-110" priority />
        <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-white/80 to-white" />
      </div>

      {/* Ambient glows */}
      <div className="absolute top-[15%] left-[25%] w-[500px] h-[500px] bg-pink-200/15 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[20%] w-[400px] h-[400px] bg-sky-200/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="relative max-w-[1140px] mx-auto w-full pt-36 pb-24 md:pt-44 md:pb-32 z-10" style={{ paddingLeft: 'clamp(24px, 5vw, 80px)', paddingRight: 'clamp(24px, 5vw, 80px)' }}>
        <div className="max-w-[680px]">
          {/* Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-pink-50/80 border border-pink-100 mb-10">
            <span className="w-1.5 h-1.5 rounded-full bg-[#EC4899] animate-pulse" />
            <span className="text-[11px] font-bold uppercase tracking-[0.12em] text-[#EC4899]">Now accepting projects</span>
          </div>

          {/* Headline */}
          <h1 className="text-[clamp(2.5rem,6vw,4.8rem)] font-extrabold tracking-[-0.035em] leading-[0.95] text-[#0F172A] mb-8">
            We build the{' '}
            <br className="hidden sm:block" />
            systems{' '}
            <span className="gradient-text">that scale you.</span>
          </h1>

          {/* Subtitle */}
          <p className="text-[1.1rem] md:text-[1.2rem] text-[#475569] leading-[1.7] max-w-[500px] mb-12">
            AI automations, intelligent pipelines, websites, and custom apps — engineered to eliminate manual work and accelerate your growth.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-4 mb-20">
            <a href="#contact" className="group inline-flex items-center gap-2.5 px-8 py-4 bg-[#0F172A] text-white text-[14px] font-semibold rounded-2xl hover:shadow-xl hover:shadow-gray-900/10 transition-all duration-300">
              Start your project
              <svg width="15" height="15" viewBox="0 0 16 16" fill="none" className="group-hover:translate-x-0.5 transition-transform"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </a>
            <a href="#services" className="inline-flex items-center px-8 py-4 text-[14px] font-semibold text-[#475569] border border-gray-200 rounded-2xl hover:border-gray-300 hover:bg-gray-50/50 transition-all">
              See our work
            </a>
          </div>

          {/* Stats */}
          <div className="pt-10 border-t border-gray-100 flex flex-wrap gap-12 md:gap-16">
            {[
              { value: '40+', label: 'Automations shipped' },
              { value: '97%', label: 'Client retention' },
              { value: '3x', label: 'Avg. efficiency gain' },
            ].map((stat, i) => (
              <div key={i}>
                <div className="text-[2rem] font-extrabold text-[#0F172A] tracking-tight leading-none">{stat.value}</div>
                <div className="text-[13px] text-[#94A3B8] mt-2 font-medium">{stat.label}</div>
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
  return (
    <section className="py-14 border-y border-gray-100 bg-white">
      <div className="max-w-[1140px] mx-auto" style={{ paddingLeft: 'clamp(24px, 5vw, 80px)', paddingRight: 'clamp(24px, 5vw, 80px)' }}>
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#94A3B8]">Trusted by</p>
          <div className="flex flex-wrap justify-center items-center gap-10 md:gap-14">
            {['TechFlow', 'Meridian', 'Quantum', 'NovaStar', 'Praxis'].map((name) => (
              <span key={name} className="text-[1rem] font-bold tracking-tight text-[#D1D5DB] select-none">
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
    title: 'AI Automations',
    desc: 'Custom AI agents and workflows that handle data processing, customer interactions, content generation, and operations — on autopilot.',
    tags: ['LLM Agents', 'Workflow Automation', 'Custom GPTs'],
  },
  {
    title: 'Intelligent Pipelines',
    desc: 'Connect your tools, databases, and APIs into seamless data pipelines with real-time syncing, transformations, and intelligent triggers.',
    tags: ['API Integration', 'ETL', 'Real-time Sync'],
  },
  {
    title: 'Websites',
    desc: 'High-performance, conversion-focused websites custom-built around your business goals. Not templates — strategic digital experiences.',
    tags: ['Landing Pages', 'Web Apps', 'E-Commerce'],
  },
  {
    title: 'Custom Apps',
    desc: 'Production-ready software for your exact workflow — client portals, internal dashboards, SaaS products, and mobile applications.',
    tags: ['SaaS', 'Dashboards', 'Mobile Apps'],
  },
]

function Services() {
  return (
    <section id="services" className="py-20 md:py-28 bg-white">
      <div className="max-w-[1140px] mx-auto" style={{ paddingLeft: 'clamp(24px, 5vw, 80px)', paddingRight: 'clamp(24px, 5vw, 80px)' }}>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12 md:mb-16">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#EC4899] mb-4 block">What we build</span>
            <h2 className="text-[clamp(2rem,4vw,3.2rem)] font-extrabold tracking-[-0.02em] text-[#0F172A] leading-[1.1]">
              Four disciplines.<br />
              <span className="text-[#94A3B8]">One unified system.</span>
            </h2>
          </div>
          <p className="text-[#475569] max-w-sm text-[15px] leading-[1.7]">
            Every service works independently or together — building connected infrastructure that grows with your business.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((s, i) => (
            <div key={i} className="service-card group bg-white border border-gray-100 rounded-3xl p-9 md:p-11">
              <div className="flex items-start justify-between mb-8">
                <div className="w-13 h-13 rounded-2xl bg-gradient-to-br from-[#EC4899] to-[#38BDF8] flex items-center justify-center text-white text-[13px] font-bold shadow-md shadow-pink-500/10" style={{width: 52, height: 52}}>
                  0{i + 1}
                </div>
                <svg width="18" height="18" viewBox="0 0 20 20" fill="none" className="text-[#D1D5DB] group-hover:text-[#EC4899] transition-colors duration-300 mt-2">
                  <path d="M5 15L15 5M15 5H8M15 5v7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-[1.4rem] font-extrabold text-[#0F172A] mb-4 tracking-tight">{s.title}</h3>
              <p className="text-[#64748B] text-[14.5px] leading-[1.75] mb-8">{s.desc}</p>
              <div className="flex flex-wrap gap-2.5">
                {s.tags.map((tag) => (
                  <span key={tag} className="text-[11px] font-semibold text-[#94A3B8] bg-[#F8FAFC] border border-gray-100 rounded-full px-3.5 py-1.5">
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
    label: 'Discover',
    title: 'Technical Deep Dive',
    desc: 'We map your current operations, tools, and bottlenecks. A focused 60-minute session to find exactly where automation will have the most impact.',
    detail: '60-min strategy call',
  },
  {
    label: 'Architect',
    title: 'System Blueprint',
    desc: 'We design the full pipeline — what gets automated, how data flows, which tools integrate. You approve the blueprint before any code is written.',
    detail: 'Full technical spec',
  },
  {
    label: 'Build & Ship',
    title: 'Rapid Delivery',
    desc: 'Focused sprints with weekly demos. You see progress, give feedback, and we iterate until it\u2019s exactly right. Deployed and supported from day one.',
    detail: '2\u20136 week delivery',
  },
]

function Process() {
  return (
    <section id="process" className="py-20 md:py-28 bg-[#FAFBFC] border-y border-gray-100">
      <div className="max-w-[1140px] mx-auto" style={{ paddingLeft: 'clamp(24px, 5vw, 80px)', paddingRight: 'clamp(24px, 5vw, 80px)' }}>
        <div className="text-center mb-12 md:mb-16">
          <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#EC4899] mb-4 block">How it works</span>
          <h2 className="text-[clamp(2rem,4vw,3.2rem)] font-extrabold tracking-[-0.02em] text-[#0F172A] leading-[1.1]">
            From idea to running system<br />
            <span className="text-[#94A3B8]">in three phases.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-12 md:gap-16">
          {steps.map((step, i) => (
            <div key={i} className="relative">
              <div className="text-[7rem] font-extrabold text-gray-50 leading-none absolute -top-6 -left-1 select-none pointer-events-none">
                {i + 1}
              </div>
              <div className="relative pt-20">
                <span className="text-[11px] font-bold uppercase tracking-[0.12em] text-[#38BDF8] mb-4 block">{step.label}</span>
                <h3 className="text-[1.35rem] font-extrabold text-[#0F172A] mb-4 tracking-tight">{step.title}</h3>
                <p className="text-[#64748B] text-[14.5px] leading-[1.75] mb-6">{step.desc}</p>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#EC4899]" />
                  <span className="text-[12px] font-bold text-[#EC4899]">{step.detail}</span>
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
  return (
    <section id="results" className="py-20 md:py-28 bg-white">
      <div className="max-w-[1140px] mx-auto" style={{ paddingLeft: 'clamp(24px, 5vw, 80px)', paddingRight: 'clamp(24px, 5vw, 80px)' }}>
        <div className="flex flex-col lg:flex-row gap-20 lg:gap-28 items-start lg:items-center">
          <div className="lg:w-2/5 flex-shrink-0">
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#EC4899] mb-4 block">Results</span>
            <h2 className="text-[clamp(2rem,4vw,3.2rem)] font-extrabold tracking-[-0.02em] text-[#0F172A] leading-[1.1] mb-6">
              Numbers that<br />
              <span className="text-[#94A3B8]">matter.</span>
            </h2>
            <p className="text-[#475569] text-[15px] leading-[1.7] max-w-sm">
              Real outcomes from real projects. These are averages across our client portfolio.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6 lg:w-3/5">
            {[
              { value: '12h', label: 'Saved weekly', sub: 'Per employee on average' },
              { value: '98%', label: 'System uptime', sub: 'Across all deployments' },
              { value: '5.2x', label: 'Average ROI', sub: 'Within first quarter' },
              { value: '<48h', label: 'Support response', sub: 'Issue to resolution' },
            ].map((m, i) => (
              <div key={i} className="metric-card bg-[#FAFBFC] border border-gray-100 rounded-2xl p-7 md:p-9">
                <div className="text-[2rem] md:text-[2.5rem] font-extrabold gradient-text leading-none mb-3">{m.value}</div>
                <div className="text-[13px] font-bold text-[#0F172A] mb-1.5">{m.label}</div>
                <div className="text-[12px] text-[#94A3B8]">{m.sub}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonial */}
        <div className="mt-24 bg-[#FAFBFC] border border-gray-100 rounded-3xl p-10 md:p-14 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-72 h-72 bg-gradient-to-bl from-pink-50 to-transparent rounded-full pointer-events-none" />
          <div className="relative max-w-3xl">
            <svg width="36" height="28" viewBox="0 0 48 36" fill="none" className="text-[#EC4899]/15 mb-6">
              <path d="M0 36V20.4C0 8.4 7.2 2 17.6 0l2 4.8C12 6.4 8.4 11.2 8 16h8v20H0Zm28 0V20.4C28 8.4 35.2 2 45.6 0l2 4.8C40 6.4 36.4 11.2 36 16h8v20H28Z" fill="currentColor"/>
            </svg>
            <blockquote className="text-[1.2rem] md:text-[1.45rem] font-semibold leading-[1.5] text-[#0F172A] mb-8">
              &ldquo;They didn&rsquo;t just build us a website — they rebuilt how our entire operation runs. Our intake process went from 3 hours to 15 minutes.&rdquo;
            </blockquote>
            <div className="flex items-center gap-4">
              <div className="w-11 h-11 rounded-full bg-gradient-to-br from-[#EC4899] to-[#38BDF8] flex items-center justify-center">
                <span className="text-white text-[13px] font-bold">MR</span>
              </div>
              <div>
                <div className="text-[14px] font-bold text-[#0F172A]">Marcus Reynolds</div>
                <div className="text-[12px] text-[#94A3B8]">Operations Director, TechFlow</div>
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
    <section id="contact" className="py-16 md:py-20 bg-white">
      <div className="max-w-[1140px] mx-auto" style={{ paddingLeft: 'clamp(24px, 5vw, 80px)', paddingRight: 'clamp(24px, 5vw, 80px)' }}>
        <div className="bg-[#0F172A] rounded-[2.5rem] py-16 md:py-24 px-8 md:px-16 text-center relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none opacity-[0.05]">
            <Image src="/images/workflow-v8.png" alt="" fill className="object-cover" />
          </div>
          <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-pink-500/8 rounded-full blur-[130px] pointer-events-none" />
          <div className="absolute bottom-0 right-1/4 w-[350px] h-[350px] bg-sky-500/6 rounded-full blur-[110px] pointer-events-none" />

          <div className="relative z-10 max-w-xl mx-auto">
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#EC4899] mb-6 block">Get started</span>
            <h2 className="text-[clamp(1.8rem,4.5vw,3rem)] font-extrabold text-white tracking-[-0.02em] leading-[1.1] mb-6">
              Ready to stop doing{' '}
              <span className="gradient-text-dark">things manually?</span>
            </h2>
            <p className="text-[#94A3B8] text-[15px] leading-[1.7] mb-12 max-w-md mx-auto">
              Book a free 30-minute discovery call. We&rsquo;ll map out where automation saves you the most time — no pitch, just a plan.
            </p>
            <a href="mailto:hello@innolah.com" className="group inline-flex items-center gap-3 px-10 py-4 bg-gradient-to-r from-[#EC4899] to-[#A855F7] text-white text-[15px] font-bold rounded-2xl hover:shadow-2xl hover:shadow-pink-500/20 transition-all duration-300">
              Book a discovery call
              <svg width="15" height="15" viewBox="0 0 16 16" fill="none" className="group-hover:translate-x-0.5 transition-transform"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </a>
            <p className="mt-6 text-[13px] text-[#64748B]">
              or reach out at <span className="text-white font-medium">hello@innolah.com</span>
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-[12px] text-[#64748B]">
              {['Free consultation', 'No commitment', 'Results in weeks'].map((text) => (
                <div key={text} className="flex items-center gap-2">
                  <svg width="13" height="13" viewBox="0 0 14 14" fill="none"><path d="M3 7l3 3 5-5" stroke="#EC4899" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
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
    <footer className="border-t border-gray-100 bg-white py-14 md:py-20">
      <div className="max-w-[1140px] mx-auto" style={{ paddingLeft: 'clamp(24px, 5vw, 80px)', paddingRight: 'clamp(24px, 5vw, 80px)' }}>
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-12">
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-[#EC4899] to-[#38BDF8]" />
              <span className="text-lg font-extrabold tracking-tight text-[#0F172A]">innolah</span>
            </div>
            <p className="text-[13px] text-[#94A3B8] max-w-xs leading-relaxed">
              AI automations, pipelines, websites, and apps for businesses that want to move faster.
            </p>
          </div>

          <div className="flex gap-16">
            <div>
              <h4 className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#94A3B8] mb-5">Navigate</h4>
              <div className="flex flex-col gap-3">
                {['Services', 'Process', 'Results', 'Contact'].map((link) => (
                  <a key={link} href={`#${link.toLowerCase()}`} className="text-[13px] text-[#64748B] hover:text-[#0F172A] transition-colors">{link}</a>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#94A3B8] mb-5">Connect</h4>
              <div className="flex flex-col gap-3">
                {['LinkedIn', 'Twitter', 'Instagram'].map((link) => (
                  <a key={link} href="#" className="text-[13px] text-[#64748B] hover:text-[#0F172A] transition-colors">{link}</a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-gray-100 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[12px] text-[#CBD5E1]">&copy; {new Date().getFullYear()} innolah. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="text-[12px] text-[#CBD5E1] hover:text-[#94A3B8] transition-colors">Privacy</a>
            <a href="#" className="text-[12px] text-[#CBD5E1] hover:text-[#94A3B8] transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

// ─── Page ───
export default function Home() {
  return (
    <main className="bg-white">
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

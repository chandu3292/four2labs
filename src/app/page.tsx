'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'

// ─── Scroll reveal hook ───
function useReveal() {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('visible')
          observer.unobserve(el)
        }
      },
      { threshold: 0.1, rootMargin: '50px' }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])
  return ref
}

function Reveal({ children, className = '', delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const ref = useReveal()
  return (
    <div ref={ref} className={`reveal ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  )
}

// ─── Container wrapper ───
function Container({ children, className = '', style }: { children: React.ReactNode; className?: string; style?: React.CSSProperties }) {
  return (
    <div className={`w-full max-w-[1280px] mx-auto px-6 sm:px-10 md:px-16 lg:px-20 ${className}`} style={style}>
      {children}
    </div>
  )
}

// ─── Navbar ───
function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-2xl border-b border-gray-100">
      <Container className="flex items-center justify-between h-[76px]">
        <a href="#" className="flex items-center">
          <Image src="/logo.svg" alt="innolah Technologies" width={220} height={52} style={{ height: 52, width: 'auto' }} />
        </a>

        <div className="hidden md:flex items-center gap-12">
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
      </Container>
    </nav>
  )
}

// ─── Hero ───
function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-white overflow-hidden">
      {/* Subtle background wash */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[60%] h-full bg-gradient-to-l from-[#F0F4FF]/60 to-transparent" />
      </div>
      <div className="absolute top-[10%] left-[15%] w-[400px] h-[400px] bg-pink-200/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-[15%] right-[25%] w-[350px] h-[350px] bg-sky-200/8 rounded-full blur-[120px] pointer-events-none" />

      <Container className="relative z-10" style={{ paddingTop: 160, paddingBottom: 80 }}>
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-20">

          {/* Left — Text */}
          <div className="lg:w-1/2 flex-shrink-0">
            <div className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-pink-50/80 border border-pink-100" style={{ marginBottom: 36 }}>
              <span className="w-1.5 h-1.5 rounded-full bg-[#EC4899] animate-pulse" />
              <span className="text-[11px] font-bold uppercase tracking-[0.12em] text-[#EC4899]">Now accepting projects</span>
            </div>

            <h1 className="text-[clamp(2.2rem,4.5vw,3.8rem)] font-extrabold tracking-[-0.035em] leading-[1] text-[#0F172A]" style={{ marginBottom: 28 }}>
              We engineer the intelligence{' '}
              <span className="gradient-text">behind your growth.</span>
            </h1>

            <p className="text-[1.05rem] md:text-[1.15rem] text-[#475569] leading-[1.75] max-w-[460px]" style={{ marginBottom: 40 }}>
              From AI-powered automations to full-stack digital products, we design, build, and deploy intelligent systems that transform how your business operates, serves customers, and scales.
            </p>

            <div className="flex flex-wrap items-center gap-5" style={{ marginBottom: 56 }}>
              <a href="#contact" className="group inline-flex items-center gap-2.5 px-9 py-4 bg-[#0F172A] text-white text-[14px] font-semibold rounded-2xl hover:shadow-xl hover:shadow-gray-900/10 transition-all duration-300">
                Start your project
                <svg width="15" height="15" viewBox="0 0 16 16" fill="none" className="group-hover:translate-x-0.5 transition-transform"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </a>
              <a href="#services" className="inline-flex items-center px-9 py-4 text-[14px] font-semibold text-[#475569] border border-gray-200 rounded-2xl hover:border-gray-300 hover:bg-gray-50/50 transition-all">
                See our work
              </a>
            </div>

            <div className="border-t border-gray-100" style={{ paddingTop: 28 }}>
              <div className="flex flex-wrap items-center gap-8">
                {['AI Automations', 'Data Pipelines', 'Web & Apps'].map((item, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M3 7l3 3 5-5" stroke="#EC4899" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    <span className="text-[13px] text-[#475569] font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right — Visual: Dark UI mockup + 3D sphere */}
          <div className="lg:w-1/2 relative hidden lg:block" style={{ perspective: 1200 }}>
            {/* 3D Sphere behind */}
            <div className="absolute -top-20 -right-12 w-[320px] h-[320px] opacity-30 pointer-events-none">
              <Image src="/images/hero-v8.png" alt="" fill className="object-contain" />
            </div>

            {/* Dark dashboard mockup — isometric 3D */}
            <div
              className="relative bg-[#0F172A] rounded-2xl overflow-hidden border border-gray-700/40 dashboard-3d"
              style={{
                padding: 0,
                transform: 'rotateY(-12deg) rotateX(8deg) rotateZ(2deg)',
                transformStyle: 'preserve-3d',
                boxShadow: '30px 40px 80px -20px rgba(0,0,0,0.35), 0 0 0 1px rgba(255,255,255,0.05) inset',
              }}
            >
              {/* Browser chrome */}
              <div className="flex items-center gap-2 bg-[#1E293B] border-b border-gray-700/50" style={{ padding: '12px 16px' }}>
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-400/70" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/70" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-400/70" />
                </div>
                <div className="flex-1 flex justify-center">
                  <div className="bg-[#0F172A] rounded-md text-[10px] text-[#64748B] font-medium" style={{ padding: '4px 40px' }}>
                    innolah.app/dashboard
                  </div>
                </div>
              </div>

              {/* Dashboard content */}
              <div style={{ padding: 24 }}>
                {/* Top row */}
                <div className="flex items-center justify-between" style={{ marginBottom: 24 }}>
                  <div>
                    <div className="text-[10px] text-[#64748B] font-medium uppercase tracking-wider" style={{ marginBottom: 4 }}>Pipeline Status</div>
                    <div className="text-[20px] font-bold text-white">All Systems Active</div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse-glow" />
                    <span className="text-[11px] text-emerald-400 font-semibold">Live</span>
                  </div>
                </div>

                {/* Metric cards row */}
                <div className="grid grid-cols-3 gap-3" style={{ marginBottom: 20 }}>
                  {[
                    { label: 'Tasks Today', val: '2,847', change: '+12%' },
                    { label: 'Avg. Response', val: '0.3s', change: '-18%' },
                    { label: 'Uptime', val: '99.97%', change: '+0.2%' },
                  ].map((m, i) => (
                    <div key={i} className="bg-[#1E293B] rounded-lg" style={{ padding: 14 }}>
                      <div className="text-[9px] text-[#64748B] font-medium uppercase tracking-wider" style={{ marginBottom: 6 }}>{m.label}</div>
                      <div className="text-[18px] font-bold text-white leading-none" style={{ marginBottom: 4 }}>{m.val}</div>
                      <div className="text-[10px] text-emerald-400 font-semibold">{m.change}</div>
                    </div>
                  ))}
                </div>

                {/* Pipeline bars */}
                <div className="bg-[#1E293B] rounded-lg" style={{ padding: 16 }}>
                  <div className="text-[9px] text-[#64748B] font-medium uppercase tracking-wider" style={{ marginBottom: 12 }}>Active Workflows</div>
                  <div className="flex flex-col gap-3">
                    {[
                      { name: 'Lead Intake', width: '85%', color: 'from-[#EC4899] to-[#A855F7]' },
                      { name: 'Data Sync', width: '72%', color: 'from-[#38BDF8] to-[#6366F1]' },
                      { name: 'Email Pipeline', width: '93%', color: 'from-[#34D399] to-[#38BDF8]' },
                    ].map((bar, i) => (
                      <div key={i}>
                        <div className="flex justify-between" style={{ marginBottom: 4 }}>
                          <span className="text-[11px] text-[#94A3B8] font-medium">{bar.name}</span>
                          <span className="text-[10px] text-[#64748B]">{bar.width}</span>
                        </div>
                        <div className="h-1.5 bg-[#0F172A] rounded-full overflow-hidden">
                          <div className={`h-full rounded-full bg-gradient-to-r ${bar.color}`} style={{ width: bar.width }} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Floating card — animated */}
            <div className="absolute -bottom-6 -left-8 bg-white rounded-xl border border-gray-100 animate-float-card" style={{ padding: 16, width: 180, boxShadow: '20px 30px 60px -15px rgba(0,0,0,0.15)' }}>
              <div className="flex items-center gap-2" style={{ marginBottom: 8 }}>
                <div className="w-2 h-2 rounded-full bg-emerald-400" />
                <span className="text-[10px] font-semibold text-[#0F172A]">Automation Running</span>
              </div>
              <div className="text-[1.5rem] font-extrabold gradient-text leading-none">+127%</div>
              <div className="text-[10px] text-[#94A3B8]" style={{ marginTop: 4 }}>throughput increase</div>
            </div>
          </div>

        </div>
      </Container>
    </section>
  )
}

// ─── Partners ───
function Partners() {
  return (
    <section className="border-y border-gray-100 bg-white" style={{ paddingTop: 48, paddingBottom: 48 }}>
      <Container>
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#94A3B8]">Built with</p>
          <div className="flex flex-wrap justify-center items-center gap-10 md:gap-14">
            {['Next.js', 'OpenAI', 'LangChain', 'n8n', 'Vercel'].map((name) => (
              <span key={name} className="text-[1.05rem] font-bold tracking-tight text-[#D1D5DB] select-none">
                {name}
              </span>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}

// ─── Services ───
const services = [
  {
    title: 'AI Automations',
    desc: 'Intelligent agents that take over your most repetitive tasks. From processing leads and generating reports to handling customer queries, our AI works around the clock so your team can focus on growth.',
    tags: ['LLM Agents', 'Workflow Automation', 'Custom GPTs'],
    visual: (
      <div className="bg-[#0F172A] rounded-xl overflow-hidden" style={{ padding: 16, marginBottom: 28 }}>
        <div className="flex items-center justify-between" style={{ marginBottom: 12 }}>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_6px_rgba(52,211,153,0.5)]" />
            <span className="text-[10px] text-emerald-400 font-semibold">All systems running</span>
          </div>
          <span className="text-[9px] text-[#64748B]">24/7 uptime</span>
        </div>
        <div className="flex gap-2">
          {['Lead Routing', 'Smart Inbox', 'Auto Reports'].map((a, i) => (
            <div key={i} className="bg-[#1E293B] rounded-lg flex-1" style={{ padding: '10px 8px' }}>
              <div className="text-[9px] text-[#64748B]">{a}</div>
              <div className="h-1 bg-gradient-to-r from-[#EC4899] to-[#A855F7] rounded-full" style={{ marginTop: 6, width: `${75 + i * 10}%` }} />
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    title: 'Intelligent Pipelines',
    desc: 'Your tools and platforms should talk to each other without you playing middleman. We build data pipelines that sync in real time, trigger smart actions, and keep your entire stack aligned.',
    tags: ['API Integration', 'ETL', 'Real-time Sync'],
    visual: (
      <div className="relative" style={{ marginBottom: 28, height: 80 }}>
        <Image src="/images/workflow-v8.png" alt="" fill className="object-cover rounded-xl opacity-60" />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/40 to-transparent rounded-xl" />
      </div>
    ),
  },
  {
    title: 'Websites',
    desc: 'Every site we build is a strategic asset, not a brochure. Designed around your customer journey, optimized for conversions, and built to load fast, rank well, and leave a lasting impression.',
    tags: ['Landing Pages', 'Web Apps', 'E-Commerce'],
    visual: (
      <div className="bg-[#F8FAFC] border border-gray-100 rounded-xl overflow-hidden" style={{ marginBottom: 28 }}>
        <div className="flex items-center gap-1.5 bg-white border-b border-gray-100" style={{ padding: '8px 12px' }}>
          <div className="w-2 h-2 rounded-full bg-red-300" />
          <div className="w-2 h-2 rounded-full bg-yellow-300" />
          <div className="w-2 h-2 rounded-full bg-green-300" />
          <div className="bg-[#F1F5F9] rounded text-[8px] text-[#94A3B8] flex-1 text-center" style={{ padding: '2px 0', marginLeft: 8 }}>yoursite.com</div>
        </div>
        <div style={{ padding: 12 }}>
          <div className="bg-gradient-to-r from-[#EC4899]/10 to-[#38BDF8]/10 rounded-lg" style={{ height: 8, marginBottom: 8 }} />
          <div className="bg-gray-100 rounded" style={{ height: 6, width: '60%', marginBottom: 6 }} />
          <div className="bg-gray-100 rounded" style={{ height: 6, width: '80%' }} />
        </div>
      </div>
    ),
  },
  {
    title: 'Custom Apps',
    desc: 'When off-the-shelf software falls short, we build what you need. Client portals, internal dashboards, SaaS products, or mobile apps, architected and shipped production-ready for your business.',
    tags: ['SaaS', 'Dashboards', 'Mobile Apps'],
    visual: (
      <div className="bg-[#0F172A] rounded-xl overflow-hidden" style={{ marginBottom: 28, padding: 16 }}>
        <div className="flex items-center justify-between" style={{ marginBottom: 12 }}>
          <span className="text-[10px] text-[#64748B] font-semibold uppercase tracking-wider">Client Dashboard</span>
          <div className="flex items-center gap-1.5">
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            <span className="text-[9px] text-emerald-400">Live</span>
          </div>
        </div>
        <div className="bg-[#1E293B] rounded-lg" style={{ padding: 12, marginBottom: 8 }}>
          <div className="flex justify-between items-end">
            <div>
              <div className="text-[8px] text-[#64748B] uppercase">Active Users</div>
              <div className="text-[18px] font-bold text-white">12.4k</div>
            </div>
            <div className="flex gap-1 items-end" style={{ height: 28 }}>
              {[40, 55, 45, 65, 50, 70, 80].map((h, i) => (
                <div key={i} className="w-1.5 rounded-full bg-gradient-to-t from-[#EC4899] to-[#38BDF8]" style={{ height: `${h}%` }} />
              ))}
            </div>
          </div>
        </div>
        <div className="flex gap-2">
          <div className="bg-[#1E293B] rounded-lg flex-1 text-center" style={{ padding: '8px 4px' }}>
            <div className="text-[14px] font-bold text-white">99.9%</div>
            <div className="text-[8px] text-[#64748B]">Uptime</div>
          </div>
          <div className="bg-[#1E293B] rounded-lg flex-1 text-center" style={{ padding: '8px 4px' }}>
            <div className="text-[14px] font-bold text-white">0.2s</div>
            <div className="text-[8px] text-[#64748B]">Latency</div>
          </div>
        </div>
      </div>
    ),
  },
]

function Services() {
  return (
    <section id="services" className="overflow-hidden relative" style={{ paddingTop: 120, paddingBottom: 120, background: 'linear-gradient(135deg, #FDF2F8 0%, #EFF6FF 50%, #F5F3FF 100%)' }}>
      {/* Background visual */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full opacity-40">
          <Image src="/images/workflow-v8.png" alt="" fill className="object-cover" />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, #FDF2F8 0%, #EFF6FF 50%, #F5F3FF 100%)', opacity: 0.92 }} />
        </div>
      </div>
      <Container className="relative z-10">
        {/* Header — CENTERED */}
        <Reveal>
          <div className="text-center" style={{ marginBottom: 64 }}>
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#EC4899] block" style={{ marginBottom: 16 }}>Our capabilities</span>
            <h2 className="text-[clamp(2rem,4vw,3.2rem)] font-extrabold tracking-[-0.02em] text-[#0F172A] leading-[1.1]" style={{ marginBottom: 20 }}>
              End-to-end solutions.<br />
              <span className="text-[#94A3B8]">One dedicated team.</span>
            </h2>
            <p className="text-[#475569] max-w-lg mx-auto text-[15px] leading-[1.75]">
              We bring together AI engineering, data architecture, and full-stack development under one roof. Each discipline strengthens the others, giving you a connected system that evolves with your business.
            </p>
          </div>
        </Reveal>
      </Container>

      {/* Infinite horizontal scroll */}
      <div className="relative z-10">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-32 z-10 pointer-events-none" style={{ background: 'linear-gradient(to right, #FDF2F8, transparent)' }} />
        <div className="absolute right-0 top-0 bottom-0 w-32 z-10 pointer-events-none" style={{ background: 'linear-gradient(to left, #F5F3FF, transparent)' }} />

        <div className="flex gap-7 animate-marquee-services" style={{ width: 'max-content' }}>
          {/* Duplicate cards for seamless loop */}
          {[...services, ...services].map((s, i) => (
            <div key={i} className="service-card group bg-white border border-gray-100 rounded-3xl text-center flex-shrink-0 hover:border-pink-200 transition-all duration-500" style={{ padding: 'clamp(28px, 3vw, 36px)', width: 360 }}>
              {s.visual}
              <div className="flex justify-center" style={{ marginBottom: 16 }}>
                <div className="rounded-2xl bg-gradient-to-br from-[#EC4899] to-[#38BDF8] flex items-center justify-center text-white text-[13px] font-bold shadow-md shadow-pink-500/10 group-hover:scale-110 transition-transform duration-300" style={{ width: 48, height: 48 }}>
                  0{(i % 4) + 1}
                </div>
              </div>
              <h3 className="text-[1.25rem] font-extrabold text-[#0F172A] tracking-tight" style={{ marginBottom: 10 }}>{s.title}</h3>
              <p className="text-[#64748B] text-[13px] leading-[1.75]">{s.desc}</p>
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
    title: 'Deep-Dive Discovery',
    desc: 'We start by understanding your business inside out. Your operations, your tools, your pain points, your goals. This is not a generic intake form. It is a focused strategy session where we identify the highest-impact opportunities for automation and growth.',
    detail: '60-min strategy session',
  },
  {
    label: 'Architect',
    title: 'Blueprint & Design',
    desc: 'Before writing a single line of code, we map out the entire system. Data flows, integration points, user journeys, and technical architecture. You review and approve the blueprint, so there are zero surprises when we start building.',
    detail: 'Complete system design',
  },
  {
    label: 'Build & Ship',
    title: 'Development & Launch',
    desc: 'We build in focused sprints with weekly progress demos. You see exactly what is being built, give feedback in real time, and watch your system come to life. Once approved, we deploy, test, and ensure everything runs flawlessly from day one.',
    detail: '2 to 6 week delivery',
  },
]

function Process() {
  return (
    <section id="process" className="bg-[#0F172A] relative overflow-hidden" style={{ paddingTop: 120, paddingBottom: 120 }}>
      {/* Background texture */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.04]">
        <Image src="/images/workflow-v8.png" alt="" fill className="object-cover" />
      </div>
      <div className="absolute top-[20%] left-[10%] w-[400px] h-[400px] bg-pink-500/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[10%] w-[350px] h-[350px] bg-sky-500/5 rounded-full blur-[120px] pointer-events-none" />

      <Container className="relative z-10">
        <Reveal>
          <div className="text-center" style={{ marginBottom: 80 }}>
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#EC4899] block" style={{ marginBottom: 16 }}>Our process</span>
            <h2 className="text-[clamp(2rem,4vw,3.2rem)] font-extrabold tracking-[-0.02em] text-white leading-[1.1]">
              From first conversation to live system<br />
              <span className="text-[#64748B]">in three clear phases.</span>
            </h2>
          </div>
        </Reveal>

        {/* Timeline */}
        <div className="relative">
          {/* Connecting line */}
          <div className="hidden md:block absolute top-[52px] left-[15%] right-[15%] h-[2px]">
            <div className="w-full h-full bg-gradient-to-r from-[#EC4899] via-[#A855F7] to-[#38BDF8] rounded-full opacity-30" />
          </div>

          <div className="grid md:grid-cols-3 gap-12 md:gap-8">
            {steps.map((step, i) => (
              <Reveal key={i} delay={i * 150}>
                <div className="flex flex-col items-center text-center">
                  {/* Step node */}
                  <div className="relative" style={{ marginBottom: 36 }}>
                    {/* Glow ring */}
                    <div className={`absolute inset-[-8px] rounded-full opacity-30 blur-sm bg-gradient-to-br ${
                      i === 0 ? 'from-[#EC4899] to-[#EC4899]/0' : i === 1 ? 'from-[#A855F7] to-[#A855F7]/0' : 'from-[#38BDF8] to-[#38BDF8]/0'
                    }`} />
                    <div className={`relative w-[56px] h-[56px] rounded-full bg-gradient-to-br ${
                      i === 0 ? 'from-[#EC4899] to-[#A855F7]' : i === 1 ? 'from-[#A855F7] to-[#6366F1]' : 'from-[#38BDF8] to-[#6366F1]'
                    } flex items-center justify-center text-white text-[15px] font-bold shadow-lg ${
                      i === 0 ? 'shadow-pink-500/30' : i === 1 ? 'shadow-purple-500/30' : 'shadow-sky-500/30'
                    }`}>
                      0{i + 1}
                    </div>
                  </div>

                  {/* Card */}
                  <div className="bg-[#1E293B]/60 backdrop-blur-sm border border-white/5 rounded-2xl w-full" style={{ padding: 'clamp(24px, 3vw, 36px)' }}>
                    <span className={`text-[11px] font-bold uppercase tracking-[0.12em] block ${
                      i === 0 ? 'text-[#EC4899]' : i === 1 ? 'text-[#A855F7]' : 'text-[#38BDF8]'
                    }`} style={{ marginBottom: 12 }}>{step.label}</span>
                    <h3 className="text-[1.2rem] font-extrabold text-white tracking-tight" style={{ marginBottom: 12 }}>{step.title}</h3>
                    <p className="text-[#94A3B8] text-[13px] leading-[1.75]" style={{ marginBottom: 20 }}>{step.desc}</p>
                    <div className="inline-flex items-center gap-2 bg-white/5 rounded-full" style={{ padding: '6px 14px' }}>
                      <div className={`w-1.5 h-1.5 rounded-full ${
                        i === 0 ? 'bg-[#EC4899]' : i === 1 ? 'bg-[#A855F7]' : 'bg-[#38BDF8]'
                      }`} />
                      <span className="text-[11px] font-bold text-white/70">{step.detail}</span>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

      </Container>
    </section>
  )
}

// ─── Why innolah ───
function WhyUs() {
  return (
    <section id="results" className="bg-white relative overflow-hidden" style={{ paddingTop: 120, paddingBottom: 100 }}>
      {/* Background visual */}
      <div className="absolute top-0 right-0 w-[50%] h-full pointer-events-none opacity-20">
        <Image src="/images/hero-v8.png" alt="" fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-white/30" />
      </div>

      <Container className="relative z-10">
        <Reveal>
          <div className="text-center" style={{ marginBottom: 72 }}>
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#EC4899] block" style={{ marginBottom: 16 }}>Why work with us</span>
            <h2 className="text-[clamp(2rem,4vw,3.2rem)] font-extrabold tracking-[-0.02em] text-[#0F172A] leading-[1.1]" style={{ marginBottom: 20 }}>
              Your business is unique. <span className="text-[#94A3B8]">Your systems should be too.</span>
            </h2>
            <p className="text-[#475569] max-w-lg mx-auto text-[15px] leading-[1.75]">
              We treat every engagement as a partnership. No cookie-cutter solutions. Every system is purpose-built around your specific operations, goals, and growth trajectory.
            </p>
          </div>
        </Reveal>

        {/* Alternating rows layout instead of 3 identical cards */}
        <div className="flex flex-col" style={{ gap: 48 }}>
          {[
            {
              num: '01',
              title: 'Custom Built, Not Templated',
              desc: 'We study your workflow, understand your bottlenecks, and engineer systems that fit your business precisely. No templates. No recycled code. Everything from the ground up.',
              color: 'from-[#EC4899] to-[#A855F7]',
            },
            {
              num: '02',
              title: 'Ship Fast, Ship Right',
              desc: 'Focused sprints with weekly demos. You see real progress every week and give feedback as we go. No disappearing for months. Typical delivery in 2 to 6 weeks.',
              color: 'from-[#38BDF8] to-[#6366F1]',
            },
            {
              num: '03',
              title: 'Support After Launch',
              desc: "We don\u2019t disappear after delivery. Ongoing support, monitoring, and iteration to make sure everything keeps running smoothly as your business grows.",
              color: 'from-[#34D399] to-[#38BDF8]',
            },
          ].map((item, i) => (
            <Reveal key={i} delay={i * 100}>
              <div className={`flex flex-col md:flex-row items-start gap-8 ${i % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                <div className="flex-shrink-0">
                  <div className={`rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center text-white text-[15px] font-bold shadow-lg`} style={{ width: 64, height: 64 }}>
                    {item.num}
                  </div>
                </div>
                <div className={`${i % 2 === 1 ? 'md:text-right' : ''}`}>
                  <h3 className="text-[1.4rem] font-extrabold text-[#0F172A] tracking-tight" style={{ marginBottom: 12 }}>{item.title}</h3>
                  <p className="text-[#64748B] text-[15px] leading-[1.8] max-w-lg">{item.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

      </Container>
    </section>
  )
}

// ─── CTA ───
function CTA() {
  return (
    <section id="contact" className="bg-[#0F172A] text-center relative overflow-hidden" style={{ paddingTop: 120, paddingBottom: 120 }}>
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.06]">
        <Image src="/images/workflow-v8.png" alt="" fill className="object-cover" />
      </div>
      <div className="absolute top-0 left-[20%] w-[500px] h-[500px] bg-pink-500/8 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 right-[20%] w-[400px] h-[400px] bg-sky-500/6 rounded-full blur-[130px] pointer-events-none" />

      <Container className="relative z-10">
        <Reveal>
          <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#EC4899] block" style={{ marginBottom: 24 }}>Let&rsquo;s talk</span>
          <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-extrabold text-white tracking-[-0.02em] leading-[1.1]" style={{ marginBottom: 24 }}>
            Ready to transform how{' '}
            <span className="gradient-text-dark">your business operates?</span>
          </h2>
          <p className="text-[#94A3B8] text-[16px] leading-[1.75] max-w-lg mx-auto" style={{ marginBottom: 48 }}>
            Book a free 30-minute discovery call. We will walk through your operations, identify the biggest automation opportunities, and outline a clear plan of action. No sales pitch. Just strategy.
          </p>
          <a href="mailto:iamchandu61@gmail.com" className="group inline-flex items-center gap-3 px-12 py-5 bg-gradient-to-r from-[#EC4899] to-[#A855F7] text-white text-[16px] font-bold rounded-2xl hover:shadow-2xl hover:shadow-pink-500/25 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300">
            Book a discovery call
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="group-hover:translate-x-0.5 transition-transform"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </a>
          <p className="text-[13px] text-[#64748B]" style={{ marginTop: 28 }}>
            or reach out at <span className="text-white font-medium">iamchandu61@gmail.com</span>
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 text-[12px] text-[#64748B]" style={{ marginTop: 40 }}>
            {['Free consultation', 'No commitment', 'Results in weeks'].map((text) => (
              <div key={text} className="flex items-center gap-2">
                <svg width="13" height="13" viewBox="0 0 14 14" fill="none"><path d="M3 7l3 3 5-5" stroke="#EC4899" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                {text}
              </div>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  )
}

// ─── Footer ───
function Footer() {
  return (
    <footer className="border-t border-gray-100 bg-white" style={{ paddingTop: 64, paddingBottom: 64 }}>
      <Container>
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-14">
          <div>
            <div style={{ marginBottom: 16 }}>
              <Image src="/logo.svg" alt="innolah" width={140} height={35} style={{ height: 35, width: 'auto' }} />
            </div>
            <p className="text-[13px] text-[#94A3B8] max-w-xs leading-relaxed">
              We engineer intelligent systems that help businesses automate, scale, and operate at their full potential.
            </p>
          </div>

          <div className="flex gap-20">
            <div>
              <h4 className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#94A3B8]" style={{ marginBottom: 20 }}>Navigate</h4>
              <div className="flex flex-col gap-4">
                {['Services', 'Process', 'Results', 'Contact'].map((link) => (
                  <a key={link} href={`#${link.toLowerCase()}`} className="text-[13px] text-[#64748B] hover:text-[#0F172A] transition-colors">{link}</a>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#94A3B8]" style={{ marginBottom: 20 }}>Connect</h4>
              <div className="flex flex-col gap-4">
                {['LinkedIn', 'Twitter', 'Instagram'].map((link) => (
                  <a key={link} href="#" className="text-[13px] text-[#64748B] hover:text-[#0F172A] transition-colors">{link}</a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-100 flex flex-col md:flex-row items-center justify-between gap-4" style={{ marginTop: 48, paddingTop: 32 }}>
          <p className="text-[12px] text-[#CBD5E1]">&copy; {new Date().getFullYear()} innolah. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="text-[12px] text-[#CBD5E1] hover:text-[#94A3B8] transition-colors">Privacy</a>
            <a href="#" className="text-[12px] text-[#CBD5E1] hover:text-[#94A3B8] transition-colors">Terms</a>
          </div>
        </div>
      </Container>
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
      <WhyUs />
      <CTA />
      <Footer />
    </main>
  )
}

// One place for every page's title, description and canonical URL.
// Used at runtime by usePageMeta and at build time by the prerender script.
export type PageMeta = {
  title: string
  description: string
  canonical: string
  noindex?: boolean
  pageType?: 'WebPage' | 'AboutPage' | 'ContactPage'
  mainEntity?: Record<string, unknown>
  keywords?: string[]
}

export const INDEX_ROBOTS = 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'
export const robotsFor = (meta: PageMeta) => meta.noindex ? 'noindex, follow' : INDEX_ROBOTS

// Describe each existing page without adding visible content or inventing claims.
export function pageSchema(meta: PageMeta) {
  if (meta.noindex) return null
  return {
    '@context': 'https://schema.org',
    '@type': meta.pageType ?? 'WebPage',
    '@id': `${meta.canonical}#webpage`,
    url: meta.canonical,
    name: meta.title,
    description: meta.description,
    inLanguage: 'en',
    isPartOf: { '@id': 'https://four2labs.com/#website' },
    about: { '@id': 'https://four2labs.com/#organization' },
    publisher: { '@id': 'https://four2labs.com/#organization' },
    ...(meta.keywords?.length ? { keywords: meta.keywords.join(', ') } : {}),
    ...(meta.mainEntity ? { mainEntity: meta.mainEntity } : {}),
  }
}

export const serializeSchema = (value: unknown) => JSON.stringify(value).replace(/</g, '\\u003c')

export const PAGE_META: Record<string, PageMeta> = {
  '/': {
    title: 'AI Automation, Websites & Apps for Business | Four2Labs',
    description: 'Four2Labs builds AI assistants, business automation, websites and mobile apps for growing companies. From first launch to support. Book a free consultation.',
    canonical: 'https://four2labs.com/',
    keywords: [
      'AI solutions for business', 'AI agents for business', 'AI employees',
      'business automation', 'custom software development', 'technology partner',
      'web development', 'mobile app development',
    ],
  },
  '/services': {
    title: 'AI Automation & Software Development Services | Four2Labs',
    description: 'Explore AI automation services, AI voice agents, workflow automation, websites, mobile apps and business software from Four2Labs, with ongoing support.',
    canonical: 'https://four2labs.com/services',
    keywords: [
      'AI automation services', 'business process automation', 'workflow automation',
      'custom software development', 'web app development', 'mobile app development',
      'CRM development', 'customer portals', 'business dashboards', 'system integrations',
    ],
    mainEntity: {
      '@type': 'ItemList',
      name: 'Four2Labs technology services',
      itemListElement: [
        { '@type': 'Service', name: 'Business website development', serviceType: 'Web development' },
        { '@type': 'Service', name: 'Landing page development', serviceType: 'Web development' },
        { '@type': 'Service', name: 'Online stores and ordering systems', serviceType: 'E-commerce development' },
        { '@type': 'Service', name: 'Website redesign and performance optimization', serviceType: 'Website optimization' },
        { '@type': 'Service', name: 'Mobile app development', serviceType: 'Mobile app development' },
        { '@type': 'Service', name: 'Web apps and customer portals', serviceType: 'Web application development' },
        { '@type': 'Service', name: 'Booking and appointment systems', serviceType: 'Booking software development' },
        { '@type': 'Service', name: 'Internal tools and admin panels', serviceType: 'Custom software development' },
        { '@type': 'Service', name: 'Software integrations', serviceType: 'Systems integration' },
        { '@type': 'Service', name: 'CRM and customer management systems', serviceType: 'CRM development' },
        { '@type': 'Service', name: 'Inventory, order and delivery tracking', serviceType: 'Operations software development' },
        { '@type': 'Service', name: 'Business dashboards and reports', serviceType: 'Business intelligence dashboards' },
        { '@type': 'Service', name: 'Data analysis', serviceType: 'Business data analysis' },
        { '@type': 'Service', name: 'AI voice agents', serviceType: 'AI voice agent development' },
        { '@type': 'Service', name: 'AI chatbots for websites and WhatsApp', serviceType: 'Conversational AI development' },
        { '@type': 'Service', name: 'Business knowledge assistants', serviceType: 'AI assistant development' },
        { '@type': 'Service', name: 'Document and invoice automation', serviceType: 'Intelligent document processing' },
        { '@type': 'Service', name: 'AI marketing assistants', serviceType: 'AI marketing automation' },
        { '@type': 'Service', name: 'Workflow automation', serviceType: 'Business process automation' },
        { '@type': 'Service', name: 'WhatsApp and email automation', serviceType: 'Communication automation' },
        { '@type': 'Service', name: 'Billing, payment and report automation', serviceType: 'Back-office automation' },
        { '@type': 'Service', name: 'Hosting, maintenance and support', serviceType: 'Managed technology services' },
        { '@type': 'Service', name: 'Technology consulting', serviceType: 'Technology consulting' },
      ],
    },
  },
  '/about': {
    title: 'About Four2Labs | Our Founders & Technology Services',
    description: 'Meet Four2Labs founders Chandra Sekhar Karri and Samuel Tagarampudi. We build websites, apps and AI automation for growing businesses worldwide.',
    canonical: 'https://four2labs.com/about',
    pageType: 'AboutPage',
  },
  '/contact': {
    title: 'Contact Four2Labs | Discuss Your Website, App or AI Project',
    description: 'Talk to Four2Labs about your website, app or AI project. Email hello@four2labs.com or call +1 352 570 1440. We reply within one working day.',
    canonical: 'https://four2labs.com/contact',
    pageType: 'ContactPage',
  },
  '/book': {
    title: 'Book a Free 30-Minute Tech Consultation | Four2Labs',
    description: 'Book a free 30-minute call with Four2Labs. Discuss your business, website, app or automation needs and work out the next steps with our team. No pressure.',
    canonical: 'https://four2labs.com/book',
  },
  '/voisy': {
    title: 'AI Voice Agent for Business Calls | Voisy by Four2Labs',
    description: 'Voisy is a conversational AI voice agent that answers calls 24/7, books appointments, captures leads and makes follow-up calls. Hear it and book a free demo.',
    canonical: 'https://four2labs.com/voisy',
    keywords: [
      'AI voice agent', 'AI receptionist', 'virtual receptionist', 'AI phone answering service',
      'conversational AI', 'automated appointment booking', 'inbound AI calling',
      'outbound AI calling', 'AI call agent', 'lead capture automation',
    ],
    mainEntity: {
      '@type': 'Service',
      '@id': 'https://four2labs.com/voisy#service',
      name: 'Voisy AI Voice Agent',
      alternateName: 'Voisy',
      serviceType: 'Inbound and outbound AI voice agent',
      provider: { '@id': 'https://four2labs.com/#organization' },
      areaServed: 'Worldwide',
      url: 'https://four2labs.com/voisy',
    },
  },
  '/privacy': {
    title: 'Privacy Policy | Four2Labs',
    description: 'Learn how Four2Labs collects, uses and protects information shared through our website, contact form, booking page and chat, and how to contact us about privacy.',
    canonical: 'https://four2labs.com/privacy',
  },
  '/404': {
    title: 'Page Not Found | Four2Labs',
    description: "The page you're looking for doesn't exist. Head back to the four2labs home page or get in touch.",
    canonical: '',
    noindex: true,
  },
}

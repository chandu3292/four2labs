// One place for every page's title, description and canonical URL.
// Used at runtime by usePageMeta and at build time by the prerender script.
export type PageMeta = { title: string; description: string; canonical: string }

export const PAGE_META: Record<string, PageMeta> = {
  '/': {
    title: 'four2labs - Websites, Apps & AI for Growing Businesses',
    description: 'four2labs builds websites, mobile apps, AI assistants and automations for everyday businesses around the world. Free 30-min consultation.',
    canonical: 'https://four2labs.com/',
  },
  '/services': {
    title: 'Services - Websites, Apps, AI, Automation & Support | four2labs',
    description: 'Websites, online stores, mobile apps, booking systems, CRMs, dashboards, AI voice agents, chatbots, document automation, workflow automation, hosting and ongoing support for growing businesses.',
    canonical: 'https://four2labs.com/services',
  },
  '/about': {
    title: 'About four2labs - Tech Partners for Everyday Businesses',
    description: 'four2labs is a friendly tech consultancy helping shops, clinics, restaurants and service providers around the world grow with smart, simple technology.',
    canonical: 'https://four2labs.com/about',
  },
  '/contact': {
    title: 'Contact - Free 30-min Tech Consultation | four2labs',
    description: 'Tell us about your business. Free 30-minute consultation, no sales pressure. We reply within one working day. Email hello@four2labs.com or call +91 93906 94802.',
    canonical: 'https://four2labs.com/contact',
  },
  '/book': {
    title: 'Book a free 30-min call | four2labs',
    description: 'Pick a time for a free, no-pressure 30-minute call with four2labs. Tell us about your business and we will help you figure out what is worth building.',
    canonical: 'https://four2labs.com/book',
  },
  '/voisy': {
    title: 'Voisy - AI Voice Agent for Inbound & Outbound Calls | four2labs',
    description: 'Meet Voisy, the four2labs AI voice agent. It answers calls 24/7, books appointments, captures leads and makes follow-up, reminder and feedback calls for your business.',
    canonical: 'https://four2labs.com/voisy',
  },
  '/privacy': {
    title: 'Privacy Policy | four2labs',
    description: 'How four2labs collects, uses and protects the information you share through our website, contact form, booking page and chat.',
    canonical: 'https://four2labs.com/privacy',
  },
  '/404': {
    title: 'Page not found | four2labs',
    description: "The page you're looking for doesn't exist. Head back to the four2labs home page or get in touch.",
    canonical: 'https://four2labs.com/',
  },
}

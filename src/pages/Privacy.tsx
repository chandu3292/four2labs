import { Link } from 'react-router-dom'
import { usePageMeta } from '../lib/usePageMeta'

const EMAIL = 'hello@four2labs.com'

export default function Privacy() {
  usePageMeta({
    title: 'Privacy Policy | four2labs',
    description: 'How four2labs collects, uses and protects the information you share through our website, contact form, booking page and chat.',
    canonical: 'https://four2labs.com/privacy',
  })
  return (
    <>
      <section className="page-header">
        <div className="container">
          <span className="eyebrow">Privacy</span>
          <h1>Privacy <span className="gradient-text">Policy</span></h1>
          <p>Plain language, no surprises. Last updated: 2 October 2026.</p>
        </div>
      </section>

      <section style={{ paddingTop: 24 }}>
        <div className="container legal">
          <p>This policy explains what information four2labs ("we", "us") collects when you use four2labs.com, why we collect it and what you can ask us to do with it. If anything is unclear, email us at <a href={`mailto:${EMAIL}`}>{EMAIL}</a>.</p>

          <h2>What we collect</h2>
          <p>We only collect what you choose to give us, plus basic anonymous usage statistics.</p>
          <ul>
            <li><strong>Contact form:</strong> your name, email address, business name (optional), what you're interested in and your message.</li>
            <li><strong>Booking a call:</strong> your name, email address, phone number (optional), the topic, any notes and the time you pick.</li>
            <li><strong>Chat assistant:</strong> the chat only shows pre-written answers. It doesn't ask for or store any personal details.</li>
            <li><strong>WhatsApp, email or phone:</strong> if you contact us this way, we receive whatever you send us through that service.</li>
            <li><strong>Usage statistics:</strong> anonymous, aggregated data such as pages visited, the type of device and browser, and which buttons are clicked. This doesn't identify you personally.</li>
          </ul>

          <h2>How we use it</h2>
          <ul>
            <li>To reply to your enquiry and hold the call you booked.</li>
            <li>To prepare a recommendation or quote you asked for, and to provide any services you go on to buy from us.</li>
            <li>To understand which parts of the website are useful, so we can improve it.</li>
          </ul>
          <p>We don't sell your information, and we don't use it for unrelated marketing. We'll only email you about your enquiry or project unless you ask us to do more.</p>

          <h2>Services that help us run the website</h2>
          <p>We use a small number of trusted providers to run the site. They only process your information to provide their service to us:</p>
          <ul>
            <li><strong>Vercel</strong> - hosts this website and provides our privacy-friendly analytics (Vercel Web Analytics and Speed Insights), which don't use cookies.</li>
            <li><strong>FormSubmit</strong> - delivers contact form messages and booking notifications to our inbox.</li>
            <li><strong>Google</strong> (Google Calendar and Gmail) - stores booked calls in our calendar and receives our email.</li>
            <li><strong>Cloudflare</strong> - manages our domain and forwards email sent to {EMAIL}.</li>
            <li><strong>WhatsApp</strong> (Meta) - only if you choose to message us on WhatsApp.</li>
          </ul>

          <h2>Cookies and browser storage</h2>
          <p>We don't use advertising or tracking cookies. The only thing this website saves in your browser is your light or dark theme choice, so the site looks the way you left it.</p>

          <h2>How long we keep it</h2>
          <p>We keep enquiry and booking details only for as long as we need them to reply to you, work with you and keep reasonable business records. You can ask us to delete them at any time.</p>

          <h2>Your choices and rights</h2>
          <p>You can ask us to show you the information we hold about you, correct it, or delete it. Just email <a href={`mailto:${EMAIL}`}>{EMAIL}</a> and we'll respond within a reasonable time. Depending on where you live, you may have additional rights under local data protection law, and we'll help you exercise them.</p>

          <h2>Keeping it safe</h2>
          <p>Your information travels over encrypted connections (HTTPS) and is stored with the providers above, who use industry-standard security. Access is limited to the people who need it to help you.</p>

          <h2>Children</h2>
          <p>Our services are for businesses. We don't knowingly collect information from children.</p>

          <h2>Changes to this policy</h2>
          <p>If we change how we handle information, we'll update this page and the date at the top.</p>

          <h2>Contact</h2>
          <p>Questions about privacy? Email <a href={`mailto:${EMAIL}`}>{EMAIL}</a> or use our <Link to="/contact">contact page</Link>.</p>
        </div>
      </section>
    </>
  )
}

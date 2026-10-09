import { Link } from 'react-router-dom'
import { ShieldCheck, Ban, Cookie, Trash2 } from 'lucide-react'
import { usePageMeta } from '../lib/usePageMeta'
import { PAGE_META } from '../lib/meta'

const EMAIL = 'hello@four2labs.com'
const UPDATED = '9 October 2026'
const Mail = () => <a href={`mailto:${EMAIL}`}>{EMAIL}</a>

const SECTIONS = [
  ['who', 'Who we are'],
  ['collect', 'Information we collect'],
  ['use', 'How we use it and why'],
  ['share', 'Who we share it with'],
  ['transfers', 'International transfers'],
  ['cookies', 'Cookies and analytics'],
  ['retention', 'How long we keep it'],
  ['rights', 'Your privacy rights'],
  ['security', 'How we protect it'],
  ['other', 'Children, automated decisions and links'],
  ['changes', 'Changes to this policy'],
  ['contact', 'Contact us'],
] as const

export default function Privacy() {
  usePageMeta(PAGE_META['/privacy'])
  return (
    <>
      <section className="page-header">
        <div className="container">
          <span className="eyebrow">Privacy</span>
          <h1>Privacy <span className="gradient-text">Policy</span></h1>
          <p>How we collect, use and protect your information - in plain language.</p>
          <p className="legal-date">Last updated: {UPDATED}</p>
        </div>
      </section>

      <section style={{ paddingTop: 16 }}>
        <div className="container legal">
          <div className="legal-summary">
            <h2>At a glance</h2>
            <ul>
              <li><ShieldCheck size={20} /> We only collect what you choose to share with us - like your name and email when you contact us or book a call.</li>
              <li><Ban size={20} /> We never sell your personal information or use it for advertising.</li>
              <li><Cookie size={20} /> We don't use advertising or tracking cookies. Our analytics are anonymous.</li>
              <li><Trash2 size={20} /> You can ask us to see, correct or delete your information at any time.</li>
            </ul>
          </div>

          <nav className="legal-toc" aria-label="On this page">
            <h2>On this page</h2>
            <ol>
              {SECTIONS.map(([id, title]) => <li key={id}><a href={`#${id}`}>{title}</a></li>)}
            </ol>
          </nav>

          <h2 id="who">1. Who we are</h2>
          <p>four2labs ("<strong>four2labs</strong>", "<strong>we</strong>", "<strong>us</strong>") builds websites, apps, AI assistants and automations for businesses. This policy explains how we handle personal information when you visit four2labs.com, contact us, book a call or otherwise interact with us.</p>
          <p>For the information described here, four2labs is the <strong>data controller</strong> - we decide how and why it is used. You can reach us about anything in this policy at <Mail />.</p>

          <h2 id="collect">2. Information we collect</h2>
          <p>We collect information <strong>you give us directly</strong>, plus a small amount of <strong>technical and usage information</strong> that is generated when you use the website.</p>
          <div className="legal-table-wrap">
            <table className="legal-table">
              <thead><tr><th>When</th><th>What we collect</th></tr></thead>
              <tbody>
                <tr><td>Contact form</td><td>Name, email address, business name (optional), the service you're interested in, and your message.</td></tr>
                <tr><td>Booking a call</td><td>Name, email address, phone number (optional), topic, notes (optional) and the time you choose.</td></tr>
                <tr><td>Email, WhatsApp or phone</td><td>Whatever you send us, such as your name, contact details and the content of your messages.</td></tr>
                <tr><td>Chat assistant on the site</td><td>Nothing personal. The chat only shows pre-written answers and does not ask for, record or store your details.</td></tr>
                <tr><td>Using the website</td><td>Anonymous, aggregated statistics - pages viewed, the website that referred you, approximate country, and device and browser type. Our hosting provider also processes technical data such as IP addresses to deliver and secure the site.</td></tr>
              </tbody>
            </table>
          </div>
          <p>Please don't send us sensitive information (such as health, financial or identity documents) through the website. You don't have to give us any information, but without your name and email we can't reply to an enquiry or confirm a booking.</p>

          <h2 id="use">3. How we use it and why</h2>
          <p>We only use your information for the purposes below. Where data protection laws such as the GDPR or UK GDPR apply, each use relies on a legal basis:</p>
          <div className="legal-table-wrap">
            <table className="legal-table">
              <thead><tr><th>Purpose</th><th>Legal basis</th></tr></thead>
              <tbody>
                <tr><td>Replying to your enquiry and holding the call you booked</td><td>Steps you've asked us to take before a possible contract</td></tr>
                <tr><td>Preparing recommendations and quotes, and delivering services you buy from us</td><td>Performing our contract with you</td></tr>
                <tr><td>Following up on a conversation you started with us</td><td>Our legitimate interest in responding to and growing our business</td></tr>
                <tr><td>Understanding how the website is used so we can improve it</td><td>Our legitimate interest, using anonymous statistics only</td></tr>
                <tr><td>Keeping the website and our systems secure</td><td>Our legitimate interest in protecting our services and visitors</td></tr>
                <tr><td>Keeping business and accounting records, and responding to lawful requests</td><td>Legal obligations</td></tr>
              </tbody>
            </table>
          </div>
          <p>We don't use your information for advertising, we don't sell it, and we won't send you marketing emails unless you've asked us to. You can object to any use based on legitimate interests at any time.</p>

          <h2 id="share">4. Who we share it with</h2>
          <p>We share information only with trusted service providers that help us run the website and our business. They may only use it to provide their service to us, under their own privacy and security commitments.</p>
          <div className="legal-table-wrap">
            <table className="legal-table">
              <thead><tr><th>Provider</th><th>What they do for us</th></tr></thead>
              <tbody>
                <tr><td>Vercel</td><td>Hosts the website and provides anonymous, cookie-free analytics and performance measurement.</td></tr>
                <tr><td>Google</td><td>Google Calendar stores calls you book; Gmail is where our email arrives.</td></tr>
                <tr><td>FormSubmit</td><td>Delivers contact form messages and booking notifications to our inbox.</td></tr>
                <tr><td>Cloudflare</td><td>Manages our domain and forwards email sent to {EMAIL}.</td></tr>
                <tr><td>WhatsApp (Meta)</td><td>Only if you choose to message us on WhatsApp.</td></tr>
              </tbody>
            </table>
          </div>
          <p>We may also disclose information if required by law, to protect our rights or the safety of others, or as part of a business transfer such as a merger - in which case this policy would continue to apply to your information.</p>
          <p><strong>We do not sell or share your personal information</strong> for money or for cross-context behavioural advertising, as those terms are defined under California law, and we have not done so in the past 12 months.</p>

          <h2 id="transfers">5. International transfers</h2>
          <p>Our service providers operate in several countries, including the United States, so your information may be processed outside the country where you live. Where the law requires it, these transfers are protected by appropriate safeguards, such as the European Commission's Standard Contractual Clauses or equivalent mechanisms offered by our providers.</p>

          <h2 id="cookies">6. Cookies and analytics</h2>
          <p>We don't use advertising, tracking or social media cookies, so there's no cookie banner to accept.</p>
          <ul>
            <li><strong>Analytics:</strong> Vercel Web Analytics and Speed Insights measure visits and page speed without cookies and without identifying you personally.</li>
            <li><strong>Your theme choice:</strong> if you switch between light and dark mode, that preference is saved in your own browser so the site remembers it. It isn't sent to us.</li>
            <li><strong>Embedded links:</strong> if you open WhatsApp or other external services from our site, those services may set their own cookies under their own policies.</li>
          </ul>

          <h2 id="retention">7. How long we keep it</h2>
          <ul>
            <li><strong>Enquiries and bookings that don't lead to a project:</strong> up to 24 months after our last contact, so we have context if you get back in touch - then deleted.</li>
            <li><strong>Client information:</strong> for as long as we work together, and afterwards only as long as needed for legal, tax and accounting purposes.</li>
            <li><strong>Analytics:</strong> kept only in anonymous, aggregated form.</li>
          </ul>
          <p>You can ask us to delete your information sooner at any time, unless we have to keep it by law.</p>

          <h2 id="rights">8. Your privacy rights</h2>
          <p>Wherever you live, you can ask us to:</p>
          <ul>
            <li><strong>Access</strong> the personal information we hold about you and get a copy of it;</li>
            <li><strong>Correct</strong> information that is inaccurate or incomplete;</li>
            <li><strong>Delete</strong> your information;</li>
            <li><strong>Object to or restrict</strong> how we use it, or ask us to stop contacting you;</li>
            <li><strong>Transfer</strong> it to you or another provider in a commonly used format (data portability).</li>
          </ul>
          <p><strong>EU, UK and similar laws:</strong> where we rely on your consent, you can withdraw it at any time. You also have the right to complain to your local data protection authority - though we'd appreciate the chance to sort out any concern first.</p>
          <p><strong>California residents:</strong> you have the right to know what personal information we collect, use and disclose; to delete and correct it; to opt out of its sale or sharing (we don't sell or share it); and to limit the use of sensitive personal information (we don't collect it for that purpose). We will not discriminate against you for using any of these rights. You may use an authorised agent to make a request on your behalf.</p>
          <p><strong>How to make a request:</strong> email <Mail /> with what you'd like us to do. We may ask you to confirm your identity before acting, and we'll respond within one month, or sooner if the law where you live requires it. Making a request is free.</p>

          <h2 id="security">9. How we protect it</h2>
          <p>All data sent to and from four2labs.com is encrypted using HTTPS. We use reputable providers with strong security practices, limit access to the people who need it to help you, and keep the amount of information we collect to a minimum. No method of transmission or storage is completely secure, but we work to protect your information and will notify you and the relevant authorities if a breach affects you, where the law requires it.</p>

          <h2 id="other">10. Children, automated decisions and links</h2>
          <ul>
            <li><strong>Children:</strong> our services are for businesses and are not directed at children under 16. We don't knowingly collect their information; if you believe a child has sent us information, contact us and we'll delete it.</li>
            <li><strong>Automated decisions:</strong> we don't make decisions about you based solely on automated processing or profiling. The chat assistant on our website only offers pre-written answers.</li>
            <li><strong>Other websites:</strong> our site links to services such as WhatsApp and Google. Their own privacy policies apply when you use them.</li>
          </ul>

          <h2 id="changes">11. Changes to this policy</h2>
          <p>We may update this policy as our services or the law change. When we do, we'll update the date at the top of this page, and if the changes are significant we'll make that clear on the website.</p>

          <h2 id="contact">12. Contact us</h2>
          <p>Questions, requests or concerns about your privacy? Email <Mail /> or use our <Link to="/contact">contact page</Link>. We usually reply within one working day.</p>
        </div>
      </section>
    </>
  )
}

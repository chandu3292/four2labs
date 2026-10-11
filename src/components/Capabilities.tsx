import {
  CalendarCheck, ChartColumn, Globe, MessagesSquare, Package,
  ReceiptText, ShoppingCart, Smartphone, Users, Workflow, Wrench,
} from 'lucide-react'
import VoisyIcon from './VoisyIcon'

// What we can build - shown as capabilities, never as past client work
const solutions = [
  { Icon: Globe, title: 'Business websites', text: 'Fast, modern sites that win customers' },
  { Icon: ShoppingCart, title: 'Online stores & ordering', text: 'Sell and take orders online, 24/7' },
  { Icon: Smartphone, title: 'Mobile apps', text: 'Your business in your customers\' pocket' },
  { Icon: CalendarCheck, title: 'Booking systems', text: 'Appointments and reservations, no back-and-forth' },
  { Icon: VoisyIcon, title: 'Voisy AI voice agent', text: 'Answers and makes calls, 24/7' },
  { Icon: MessagesSquare, title: 'Chatbots & WhatsApp automation', text: 'Instant replies on your website and chats' },
  { Icon: Users, title: 'CRMs & customer portals', text: 'Every customer and conversation in one place' },
  { Icon: ChartColumn, title: 'Dashboards & reports', text: 'Sales and operations at a glance' },
  { Icon: Package, title: 'Inventory & order tracking', text: 'Know what\'s in stock and where orders are' },
  { Icon: ReceiptText, title: 'Invoice & document automation', text: 'Paperwork read, filed and sent automatically' },
  { Icon: Workflow, title: 'Workflow automation', text: 'Connect your tools and drop repetitive tasks' },
  { Icon: Wrench, title: 'Maintenance & support', text: 'We keep everything running, month after month' },
]

const industries = [
  'Restaurants & cafés', 'Retail & e-commerce', 'Clinics & healthcare', 'Salons & wellness',
  'Real estate', 'Education & coaching', 'Logistics & delivery', 'Hospitality & travel',
  'Home services', 'Professional services', 'Startups',
]

export default function Capabilities() {
  return (
    <>
      <div className="solutions">
        {solutions.map(({ Icon, title, text }) => (
          <div className="solution reveal" key={title}>
            <div className="solution-icon"><Icon size={20} /></div>
            <div>
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="chips-block reveal">
        <h3 className="chips-title">Built for businesses like yours</h3>
        <div className="chips">
          {industries.map((i) => <span className="chip" key={i}>{i}</span>)}
        </div>
      </div>

    </>
  )
}

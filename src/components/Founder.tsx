const founders = [
  {
    name: 'Chandra Sekhar Karri',
    role: 'Co-founder · Technology',
    photo: '/founder.jpg',
    bio: 'Chandra leads the technology at four2labs. An AI engineer with published research, he turns your goals into technology that is simple to use, reliable and built to grow with your business.',
  },
  {
    name: 'Samuel Tagarampudi',
    role: 'Co-founder · Business & Operations',
    photo: '/cofounder-samuel.jpg',
    bio: 'Samuel runs the business side of four2labs - client relationships, project planning and day-to-day operations. He makes sure every project is scoped clearly, delivered on time and fits the way your business actually works.',
  },
]

export default function Founder({ tinted = false }: { tinted?: boolean }) {
  return (
    <section style={tinted ? { background: 'var(--bg-2)' } : undefined}>
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">Meet the founders</span>
          <h2>The team behind four2labs</h2>
          <p>Technology and real-world business experience, side by side. When you work with us, you work directly with the people building your project - no account managers, no handoffs.</p>
        </div>
        <div className="founders">
          {founders.map((f) => (
            <div className="founder reveal" key={f.name}>
              <img className="founder-avatar" src={f.photo} alt={`${f.name}, ${f.role.replace(' · ', ', ')} at four2labs`} width={120} height={120} loading="lazy" />
              <div>
                <h3>{f.name}</h3>
                <p className="founder-role">{f.role}</p>
                <p>{f.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

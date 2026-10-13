const founders = [
  {
    name: 'Chandra Sekhar Karri',
    role: 'Co-founder · Technology',
    bio: "I lead the technology at four2labs. I'm an AI engineer with published research, and I turn your goals into technology that is simple to use, reliable and built to grow with your business.",
  },
  {
    name: 'Samuel Tagarampudi',
    role: 'Co-founder · Business & Operations',
    bio: 'I run the business side of four2labs: client relationships, project planning and day-to-day operations. I make sure every project is scoped clearly, delivered on time and fits the way your business actually works.',
  },
]

export default function Founder({ tinted = false, eyebrow = true }: { tinted?: boolean; eyebrow?: boolean }) {
  return (
    <section style={tinted ? { background: 'var(--bg-2)' } : undefined}>
      <div className="container">
        <div className="section-head reveal">
          {eyebrow && <span className="eyebrow">Meet the founders</span>}
          <h2>The team behind four2labs</h2>
          <p>Technology and real-world business experience, side by side. When you work with us, you work directly with the people building your project - no account managers, no handoffs.</p>
        </div>
        <div className="founders">
          {founders.map((f) => (
            <div className="founder reveal" key={f.name}>
              <h3>{f.name}</h3>
              <p className="founder-role">{f.role}</p>
              <p>{f.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

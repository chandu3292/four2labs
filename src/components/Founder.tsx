export default function Founder({ tinted = false }: { tinted?: boolean }) {
  return (
    <section style={tinted ? { background: 'var(--bg-2)' } : undefined}>
      <div className="container">
        <div className="founder reveal">
          <img className="founder-avatar" src="/founder.jpg" alt="Chandra Sekhar Karri, founder of four2labs" width={160} height={160} loading="lazy" />
          <div>
            <span className="eyebrow">Meet the founder</span>
            <h2>Chandra Sekhar Karri</h2>
            <p className="founder-role">Founder &amp; AI Engineer</p>
            <p>I'm an AI engineer with published research in generative AI and hands-on experience building voice agents, document-search systems and full-stack apps. I started four2labs to give everyday businesses the same quality of tech that big companies get.</p>
            <p>When you work with us, you talk to me directly - no account managers, no handoffs.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

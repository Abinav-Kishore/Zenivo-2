import ScrollLink from "@/components/ScrollLink";

const reasons = [
  {
    title: "Clear communication",
    desc: "Simple updates, quick questions when needed, no jargon unless you want it.",
  },
  {
    title: "Fast turnaround",
    desc: "Tight timelines with focused scope so your product ships without endless delays.",
  },
  {
    title: "Modern tech stack",
    desc: "Built with proven, current technologies for speed, maintainability, and scale.",
  },
  {
    title: "Performance-first",
    desc: "Mobile-friendly, fast-loading, strong fundamentals that drive long-term results.",
  },
  {
    title: "Collaborative approach",
    desc: "You are not one of many accounts — we work closely with you every step.",
  },
  {
    title: "Long-term partnership",
    desc: "We build systems designed to evolve with your business and future growth.",
  },
];

export default function ActivitiesSection() {
  return (
    <>
      <section className="process-section" id="process">
        {/* Ambient decorations */}
        <div className="proc-orb proc-orb-1" aria-hidden="true" />
        <div className="proc-orb proc-orb-2" aria-hidden="true" />
        <div className="proc-flow-lines" aria-hidden="true">
          <div className="pfl-dot pfl-dot-1" />
          <div className="pfl-dot pfl-dot-2" />
          <div className="pfl-dot pfl-dot-3" />
          <div className="pfl-line" />
        </div>
        <div className="process-header">
          <p className="eyebrow reveal">How we work</p>
          <h2 className="section-title reveal d1">A simple 3-step process</h2>
          <p className="section-sub reveal d2">
            Clear steps, quick feedback loops, and a product you are proud to
            launch.
          </p>
        </div>
        <div className="process-steps">
          <div className="step-card reveal">
            <div className="step-num">01</div>
            <div className="step-name">Discovery</div>
            <div className="step-desc">
              Understand your business goals, audience, and what success looks
              like for your product. We ask the right questions before writing a
              line of code.
            </div>
          </div>
          <div className="step-card reveal d2">
            <div className="step-num">02</div>
            <div className="step-name">Design &amp; Build</div>
            <div className="step-desc">
              Iterative development with clear milestones. Clean architecture,
              modern practices, and regular check-ins so you always know the
              status.
            </div>
          </div>
          <div className="step-card reveal d4">
            <div className="step-num">03</div>
            <div className="step-name">Launch &amp; Beyond</div>
            <div className="step-desc">
              Deploy to production, run tests, ensure performance. We stay with
              you through go-live and beyond for a smooth launch.
            </div>
          </div>
        </div>
      </section>

      <section className="why-section">
        <div className="why-orb why-orb-1" aria-hidden="true" />
        <div className="why-orb why-orb-2" aria-hidden="true" />
        <div className="why-stars" aria-hidden="true">
          {Array.from({ length: 24 }).map((_, i) => (
            <span
              key={i}
              className="why-star"
              style={{
                left: `${(i * 41 + 5) % 99}%`,
                top: `${(i * 67 + 13) % 88}%`,
                animationDelay: `${(i * 0.28).toFixed(2)}s`,
              }}
            />
          ))}
        </div>
        <div className="why-header">
          <p className="eyebrow reveal">Why us</p>
          <h2 className="section-title reveal d1">Why Work With Us?</h2>
          <p className="section-sub reveal d2">
            You work directly with us — no handoffs, no middlemen, no confusion.
          </p>
        </div>
        <div className="why-grid">
          {reasons.map((r, i) => (
            <div className={`why-card reveal d${i + 1}`} key={i}>
              <div className="why-title">{r.title}</div>
              <div className="why-desc">{r.desc}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="about-section" id="about">
        {/* Ambient */}
        <div className="about-orb about-orb-1" aria-hidden="true" />
        <div className="about-orb about-orb-2" aria-hidden="true" />
        <div className="about-circuit" aria-hidden="true">
          <div className="acirc-h acirc-h1" />
          <div className="acirc-h acirc-h2" />
          <div className="acirc-v acirc-v1" />
          <div className="acirc-node acirc-n1" />
          <div className="acirc-node acirc-n2" />
          <div className="acirc-node acirc-n3" />
        </div>
        <div className="about-inner">
          <div className="about-left reveal-left">
            <p className="eyebrow">About</p>
            <h2 className="section-title">Who we are</h2>
            <p className="about-body">
              We are a collaborative team with combined experience across
              development, systems, and product strategy. We work closely with
              startups and growing businesses to deliver reliable, scalable
              digital products.
            </p>
            <p className="about-body">
              Our focus is long-term partnerships — building systems that
              support growth, reduce operational friction, and drive value over
              time.
            </p>
            <ScrollLink
              to="contact"
              className="btn btn-gold"
              style={{ marginTop: "2rem" }}
            >
              Start Your Project
            </ScrollLink>
          </div>
          <div className="about-right reveal-right">
            <div className="about-expect-title">What to expect</div>
            <ul className="about-list">
              <li>Collaborative planning and clear roadmaps from day one</li>
              <li>
                Practical engineering decisions optimized for scale and speed
              </li>
              <li>Operational improvements through modern automation</li>
              <li>Ongoing partnership and real support as you grow</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}

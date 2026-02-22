import ScrollLink from "@/components/ScrollLink";

export default function BigCTA() {
  return (
    <section className="bigcta-section">
      {/* Ambient */}
      <div className="bigcta-radar bigcta-radar-1" aria-hidden="true" />
      <div className="bigcta-radar bigcta-radar-2" aria-hidden="true" />
      <div className="bigcta-radar bigcta-radar-3" aria-hidden="true" />
      <div className="bigcta-beams" aria-hidden="true">
        <div className="bbeam bbeam-1" />
        <div className="bbeam bbeam-2" />
        <div className="bbeam bbeam-3" />
        <div className="bbeam bbeam-4" />
      </div>
      <div className="bigcta-particles" aria-hidden="true">
        {Array.from({ length: 20 }).map((_, i) => (
          <span
            key={i}
            className="bigcta-particle"
            style={{
              left: `${(i * 43 + 9) % 96}%`,
              top: `${(i * 61 + 17) % 88}%`,
              animationDelay: `${(i * 0.31).toFixed(2)}s`,
              animationDuration: `${3.5 + (i % 5) * 0.6}s`,
            }}
          />
        ))}
      </div>
      <div className="bigcta-inner">
        <p className="eyebrow reveal">Start today</p>
        <h2 className="bigcta-heading reveal d1">
          <span className="line">
            <span className="line-inner">Your Product.</span>
          </span>
          <span className="line">
            <span className="line-inner" style={{ color: "var(--gold)" }}>
              Built Right.
            </span>
          </span>
        </h2>
        <p className="bigcta-sub reveal d2">
          Stop waiting. Whether you have a detailed spec or just an idea — we
          figure it out together and ship something real.
        </p>
        <div className="bigcta-ctas reveal d3">
          <ScrollLink to="contact" className="btn btn-gold">
            Start a Project{" "}
          </ScrollLink>
          <ScrollLink to="work" className="btn btn-ghost">
            See Our Work
          </ScrollLink>
        </div>
      </div>
    </section>
  );
}

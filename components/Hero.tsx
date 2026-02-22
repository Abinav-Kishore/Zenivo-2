import ScrollLink from "@/components/ScrollLink";

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-orb hero-orb-1" />
      <div className="hero-orb hero-orb-2" />

      <div className="hero-inner">
        <div className="hero-left">
          <div className="hero-tag">
            <span className="hero-tag-dot" />
            Digital Product Team
          </div>

          <h1 className="hero-heading">
            <span className="word">
              <span className="word-inner">We&nbsp;</span>
            </span>
            <span className="word">
              <span className="word-inner">Build&nbsp;</span>
            </span>
            <span className="word">
              <span className="word-inner gold">Scalable</span>
            </span>
            <br />
            <span className="word">
              <span className="word-inner">Digital&nbsp;</span>
            </span>
            <span className="word">
              <span className="word-inner gold">Products</span>
            </span>
          </h1>

          <p className="hero-body">
            We help startups and businesses design, build, and scale modern
            digital solutions focused on performance, reliability, and
            measurable outcomes.
          </p>

          <div className="hero-ctas">
            <ScrollLink to="contact" className="btn btn-gold">
              Start a Project{" "}
            </ScrollLink>
            <ScrollLink to="work" className="btn btn-ghost">
              View Our Work
            </ScrollLink>
          </div>

          <div className="hero-stats">
            <div className="hero-stat">
              <div className="hero-stat-val">24–48h</div>
              <div className="hero-stat-label">Response time</div>
            </div>
            <div className="hero-stat">
              <div className="hero-stat-val">2–8 wks</div>
              <div className="hero-stat-label">Delivery</div>
            </div>
            <div className="hero-stat">
              <div className="hero-stat-val">100%</div>
              <div className="hero-stat-label">Remote worldwide</div>
            </div>
          </div>
        </div>

        <div className="hero-right">
          <div className="hero-terminal">
            <div className="terminal-toolbar">
              <span className="t-dot r" />
              <span className="t-dot y" />
              <span className="t-dot g" />
              <span className="t-title">zenivo — project init</span>
            </div>
            <div className="terminal-body">
              <span className="t-line">
                <span className="t-prompt"> </span>
                <span className="t-cmd">npx create-zenivo-app my-product</span>
              </span>
              <span className="t-line t-comment">
                # Setting up project architecture
              </span>
              <span className="t-line">
                <span className="t-success"> </span>
                <span className="t-path">Next.js 15</span> initialized
              </span>
              <span className="t-line">
                <span className="t-success"> </span>
                TypeScript + ESLint configured
              </span>
              <span className="t-line">
                <span className="t-success"> </span>
                Database schema ready
              </span>
              <span className="t-line">
                <span className="t-success"> </span>
                CI/CD pipeline configured
              </span>
              <span className="t-line t-comment"># Ready to ship. Fast.</span>
              <span className="t-line">
                <span className="t-prompt"> </span>
                <span className="t-cursor" />
              </span>
            </div>
          </div>

          <div className="hero-float-card hero-float-card-1">
            <div className="fcard-label">Project delivered</div>
            <div className="fcard-val">
              <span className="gold"></span> Marketplace App
            </div>
            <div className="fcard-bar">
              <div className="fcard-bar-fill" style={{ width: "100%" }} />
            </div>
          </div>

          <div className="hero-float-card hero-float-card-2">
            <div className="fcard-label">Ships in</div>
            <div className="fcard-val">
              3 <span className="gold">weeks</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

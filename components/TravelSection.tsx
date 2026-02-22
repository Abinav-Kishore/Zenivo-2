"use client";
import { useCallback, useEffect, useRef, useState } from "react";

const caseStudies = [
  {
    num: "01",
    title: "Marketplace Web App",
    client: "Retail Partner",
    year: "2025",
    focus: "Scalability & Checkout Conversions",
    problem:
      "The client needed a scalable platform for product listings, inventory management, and low-friction mobile checkout.",
    solution:
      "Delivered a performant marketplace with SSR, optimized checkout flows, and reliable payments integration.",
    stack: ["Next.js", "Postgres", "Stripe", "Vercel"],
    impact:
      "Improved conversion paths and prepared the platform for peak-period traffic spikes — shipping in 4 weeks.",
    image: "", // add image path here e.g. "/images/case-01.png"
    gradient: "linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)",
  },
  {
    num: "02",
    title: "Analytics Dashboard",
    client: "SaaS Company",
    year: "2025",
    focus: "Information Clarity & Speed",
    problem:
      "Product teams lacked quick access to user engagement metrics, slowing decisions and delaying roadmap prioritization.",
    solution:
      "Built an internal dashboard with KPIs, exports, interactive charts, and role-based access control.",
    stack: ["React", "D3.js", "Firebase", "TypeScript"],
    impact:
      "Enabled faster product decisions and cut time-to-insight by 60% for the analytics team.",
    image: "",
    gradient: "linear-gradient(135deg, #0d1b0d 0%, #1a3a1a 50%, #0d2d0d 100%)",
  },
  {
    num: "03",
    title: "Mobile Order App",
    client: "Logistics Startup",
    year: "2024",
    focus: "Offline Reliability & Ops Efficiency",
    problem:
      "Drivers needed a mobile experience that worked reliably in areas with poor connectivity during deliveries.",
    solution:
      "Offline-capable app with queued sync, simplified forms, and clear real-time status flows for drivers.",
    stack: ["React Native", "Node.js", "MongoDB"],
    impact:
      "Reduced delivery errors and improved on-time rates — operational efficiency up significantly.",
    image: "",
    gradient: "linear-gradient(135deg, #1a0d00 0%, #3d1f00 50%, #1a0d00 100%)",
  },
  {
    num: "04",
    title: "Marketing + Automation",
    client: "Startup Launch",
    year: "2024",
    focus: "Conversions & Lead Automation",
    problem:
      "The startup needed a fast landing page and automated lead routing to accelerate early acquisition.",
    solution:
      "Conversion-focused landing with form submission automations and direct CRM lead routing.",
    stack: ["Next.js", "Zapier", "Sanity", "Mailchimp"],
    impact:
      "Increased sign-ups and eliminated manual lead handling for the founding team.",
    image: "",
    gradient: "linear-gradient(135deg, #1a001a 0%, #2d002d 50%, #1a0033 100%)",
  },
];

type Case = (typeof caseStudies)[0];
type TxType = "right" | "split";
type Phase = "idle" | "exiting" | "entering";

const EXIT_MS = 440;
const ENTER_MS = 520;

function ContentBody({ cs }: { cs: Case }) {
  return (
    <div className="cs-body-grid">
      <div className="cs-body-left">
        <div>
          <div className="cs-block-label">Problem</div>
          <div className="cs-block-text">{cs.problem}</div>
          <div className="cs-block-label">Solution</div>
          <div className="cs-block-text">{cs.solution}</div>
        </div>
        <div className="cs-stack">
          {cs.stack.map((t, j) => (
            <span key={j} className="cs-tag">
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* Right panel: image area (ready for real images) + impact */}
      <div className="cs-body-right">
        <div
          className="cs-product-image"
          style={{
            background: cs.image
              ? `url(${cs.image}) center/cover no-repeat`
              : cs.gradient,
          }}
        >
          {!cs.image && (
            <span className="cs-image-placeholder">Preview coming soon</span>
          )}
        </div>
        <div className="cs-impact-block">
          <div className="cs-block-label" style={{ marginBottom: "0.4rem" }}>
            Impact
          </div>
          <div className="cs-impact-text">{cs.impact}</div>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   MOBILE: swipeable single-card carousel
───────────────────────────────────────────────────────────── */
function MobileCarousel() {
  const [idx, setIdx] = useState(0);
  const [dir, setDir] = useState<"left" | "right" | null>(null);
  const [animKey, setAnimKey] = useState(0);
  const touchStartX = useRef(0);
  const total = caseStudies.length;

  const goTo = (next: number, direction: "left" | "right") => {
    setDir(direction);
    setAnimKey((k) => k + 1);
    setIdx(next);
  };
  const prev = () => goTo((idx - 1 + total) % total, "right");
  const next = () => goTo((idx + 1) % total, "left");

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const handleTouchEnd = (e: React.TouchEvent) => {
    const delta = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(delta) > 40) delta > 0 ? next() : prev();
  };

  const cs = caseStudies[idx];
  const enterClass =
    dir === "left" ? "mc-enter-left" : dir === "right" ? "mc-enter-right" : "";

  return (
    <section className="cs-mobile-section" id="work">
      {/* Header */}
      <div className="cs-mobile-header">
        <div>
          <p className="eyebrow">Case Studies</p>
          <h2 className="cs-mobile-title">Projects</h2>
        </div>
        <div className="cs-mobile-counter">
          <span className="cs-mobile-counter-cur">
            {String(idx + 1).padStart(2, "0")}
          </span>
          <span className="cs-mobile-counter-sep"> / </span>
          <span>{String(total).padStart(2, "0")}</span>
        </div>
      </div>

      {/* Card — swipeable */}
      <div
        className="cs-mobile-stage"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div key={animKey} className={`cs-mobile-card ${enterClass}`}>
          {/* Gradient banner */}
          <div
            className="cs-mobile-banner"
            style={{
              background: cs.image
                ? `url(${cs.image}) center/cover no-repeat`
                : cs.gradient,
            }}
          >
            <span className="cs-mobile-num">{cs.num}</span>
            <div className="cs-mobile-meta">
              {cs.client} &bull; {cs.year}
            </div>
          </div>

          {/* Content */}
          <div className="cs-mobile-body">
            <div className="cs-mobile-name">{cs.title}</div>
            <div className="cs-mobile-focus">{cs.focus}</div>

            <div className="cs-block-label">Solution</div>
            <div className="cs-block-text">{cs.solution}</div>

            <div className="cs-stack" style={{ marginBottom: "1.2rem" }}>
              {cs.stack.map((t, j) => (
                <span key={j} className="cs-tag">
                  {t}
                </span>
              ))}
            </div>

            <div className="cs-mobile-impact">
              <div
                className="cs-block-label"
                style={{ marginBottom: "0.3rem" }}
              >
                Impact
              </div>
              <div className="cs-impact-text">{cs.impact}</div>
            </div>
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className="cs-mobile-controls">
        <button
          className="cs-mobile-arrow"
          onClick={prev}
          aria-label="Previous"
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
          >
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>

        <div className="cs-mobile-dots">
          {caseStudies.map((_, i) => (
            <button
              key={i}
              className={`cs-mobile-dot${i === idx ? " active" : ""}`}
              onClick={() => goTo(i, i > idx ? "left" : "right")}
              aria-label={`Go to project ${i + 1}`}
            />
          ))}
        </div>

        <button className="cs-mobile-arrow" onClick={next} aria-label="Next">
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
          >
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>
      </div>
    </section>
  );
}

export default function TravelSection() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // shown = slide currently rendered (lags activeIndex during animation)
  const [shown, setShown] = useState(0);
  // phase drives the two-step sequence: exit fully, then enter
  const [phase, setPhase] = useState<Phase>("idle");
  // phaseRef mirrors phase but is readable inside timeouts without stale closures
  const phaseRef = useRef<Phase>("idle");
  // animKey forces React to remount layers so CSS animations always fire fresh
  const [animKey, setAnimKey] = useState(0);
  const [txType, setTxType] = useState<TxType>("right");
  // pendingRef always holds the latest desired index
  const pendingRef = useRef(0);
  const txCountRef = useRef(0);
  const t1Ref = useRef<ReturnType<typeof setTimeout> | null>(null);
  const t2Ref = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Helper that updates both the state and the ref atomically
  const setPhaseSync = (p: Phase) => {
    phaseRef.current = p;
    setPhase(p);
  };

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 768px)");
    setIsMobile(mq.matches);
    const h = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mq.addEventListener("change", h);
    return () => mq.removeEventListener("change", h);
  }, []);

  useEffect(() => {
    if (isMobile) return;
    const handleScroll = () => {
      if (!wrapperRef.current) return;
      const rect = wrapperRef.current.getBoundingClientRect();
      const totalScroll = wrapperRef.current.offsetHeight - window.innerHeight;
      const scrolled = -rect.top;
      const progress = Math.max(0, Math.min(1, scrolled / totalScroll));
      const idx = Math.min(
        Math.floor(progress * caseStudies.length),
        caseStudies.length - 1,
      );
      setActiveIndex(idx);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMobile]);

  // shownRef mirrors `shown` so callbacks always read the latest value
  const shownRef = useRef(0);
  const setShownSync = (idx: number) => {
    shownRef.current = idx;
    setShown(idx);
  };

  // runChain starts an exit→enter sequence.
  // Safe to call multiple times — bails immediately if already animating.
  const runChain = useCallback(() => {
    if (phaseRef.current !== "idle") return;
    const target = pendingRef.current;
    if (target === shownRef.current) return;

    txCountRef.current += 1;
    const type: TxType = txCountRef.current % 2 === 1 ? "right" : "split";
    setTxType(type);
    setAnimKey((k) => k + 1);
    setPhaseSync("exiting");

    // ── Phase 1: EXIT (frame fully clears) ─────────────────────
    t1Ref.current = setTimeout(() => {
      setShownSync(pendingRef.current); // always use latest pending target
      setAnimKey((k) => k + 1); // fresh key → CSS animation fires
      setPhaseSync("entering");

      // ── Phase 2: ENTER (new content arrives) ───────────────────
      t2Ref.current = setTimeout(() => {
        setPhaseSync("idle");
        // If scroll moved further while animating, chain another transition
        setTimeout(runChain, 0);
      }, ENTER_MS + 40);
    }, EXIT_MS + 40);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // empty deps — all values read via refs or stable React setters

  // Only activeIndex drives this effect.
  // Phase state changes do NOT re-run it, so timeouts are never killed mid-animation.
  useEffect(() => {
    pendingRef.current = activeIndex;
    runChain();
  }, [activeIndex, runChain]);

  // Cleanup timeouts only on unmount
  useEffect(() => {
    return () => {
      if (t1Ref.current) clearTimeout(t1Ref.current);
      if (t2Ref.current) clearTimeout(t2Ref.current);
    };
  }, []);

  if (isMobile) {
    return <MobileCarousel />;
  }

  const activeCaseFull = caseStudies[shown];

  return (
    <div
      className="cs-outer"
      ref={wrapperRef}
      id="work"
      style={{ height: `calc(100vh * ${caseStudies.length + 1})` }}
    >
      <div className="cs-sticky">
        {/* ── Ambient layer: background grid + lamps + side panels ── */}
        <div className="cs-ambient" aria-hidden="true">
          <div className="cs-bg-grid" />
          <div className="cs-scan-line" />
          <div className="cs-lamp cs-lamp-l" />
          <div className="cs-lamp cs-lamp-r" />

          {/* Left: scrolling deploy-feed */}
          <div className="cs-side-panel cs-side-panel-l">
            <div className="csp-header">
              <span className="csp-dot-live" />
              &nbsp;Deploy Feed
            </div>
            <div className="csp-feed">
              <div className="csp-feed-scroll">
                {[
                  { t: "ok", s: "→ build succeeded" },
                  { t: "ok", s: "✓ tests passed 48/48" },
                  { t: "dim", s: "→ bundling assets…" },
                  { t: "ok", s: "✓ lighthouse: 98" },
                  { t: "dim", s: "→ deploying to edge" },
                  { t: "ok", s: "✓ SSL configured" },
                  { t: "dim", s: "→ CDN invalidated" },
                  { t: "ok", s: "✓ 0 errors, 0 warns" },
                  { t: "gold", s: "⬡ live on production" },
                  { t: "dim", s: "→ monitoring armed" },
                  { t: "ok", s: "✓ DB migration done" },
                  { t: "dim", s: "→ cache warming…" },
                  { t: "ok", s: "✓ health check: 200" },
                  { t: "gold", s: "⬡ ship complete" },
                ]
                  .concat([
                    { t: "ok", s: "→ build succeeded" },
                    { t: "ok", s: "✓ tests passed 48/48" },
                    { t: "dim", s: "→ bundling assets…" },
                    { t: "ok", s: "✓ lighthouse: 98" },
                    { t: "dim", s: "→ deploying to edge" },
                    { t: "ok", s: "✓ SSL configured" },
                    { t: "dim", s: "→ CDN invalidated" },
                    { t: "ok", s: "✓ 0 errors, 0 warns" },
                  ])
                  .map((l, i) => (
                    <div key={i} className={`csp-line csp-t-${l.t}`}>
                      {l.s}
                    </div>
                  ))}
              </div>
            </div>
          </div>

          {/* Right: performance metrics */}
          <div className="cs-side-panel cs-side-panel-r">
            <div className="csp-header">
              <span className="csp-dot-live csp-dot-blue" />
              &nbsp;Metrics
            </div>
            <div className="csp-ring-wrap">
              <svg
                viewBox="0 0 80 80"
                className="csp-ring-svg"
                aria-hidden="true"
              >
                <circle cx="40" cy="40" r="28" className="csp-ring-bg" />
                <circle cx="40" cy="40" r="28" className="csp-ring-fill" />
              </svg>
              <div className="csp-ring-center">
                <div className="csp-ring-num">98</div>
                <div className="csp-ring-lbl">Score</div>
              </div>
            </div>
            <div className="csp-bars">
              {[
                { label: "Perf", pct: "96%", score: "96" },
                { label: "SEO", pct: "100%", score: "100" },
                { label: "A11y", pct: "92%", score: "92" },
                { label: "Speed", pct: "88%", score: "88" },
              ].map((b, i) => (
                <div
                  key={i}
                  className="csp-bar-row"
                  style={{ animationDelay: `${i * 0.15}s` }}
                >
                  <div className="csp-bar-label">{b.label}</div>
                  <div className="csp-bar-track">
                    <div
                      className="csp-bar-fill"
                      style={{ "--bar-w": b.pct } as React.CSSProperties}
                    />
                  </div>
                  <div className="csp-bar-score">{b.score}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="cs-top-bar">
          <span className="cs-top-title">Case Studies</span>
          <span className="cs-progress">
            Project <span>{String(activeIndex + 1).padStart(2, "0")}</span> /{" "}
            {String(caseStudies.length).padStart(2, "0")}
          </span>
        </div>

        <div className="cs-cards-stage">
          <div className="cs-card-frame">
            {/* Title always fades in from the same place */}
            <div className="cs-card-header" key={shown}>
              <div className="cs-header-left">
                <div className="cs-card-meta">
                  {activeCaseFull.client} &bull; {activeCaseFull.year}
                </div>
                <div className="cs-card-title">{activeCaseFull.title}</div>
                <div className="cs-card-focus">{activeCaseFull.focus}</div>
              </div>
              <div className="cs-card-number">{activeCaseFull.num}</div>
            </div>

            {/* Body stage — clipped container, only one phase active at a time */}
            <div className="cs-body-stage">
              {/* ── IDLE: just show the slide, no animation ── */}
              {phase === "idle" && (
                <div key={`idle-${shown}`} className="cs-body-layer">
                  <ContentBody cs={caseStudies[shown]} />
                </div>
              )}

              {/* ── EXITING: old content leaves, nothing enters yet ── */}
              {phase === "exiting" && txType === "right" && (
                <div
                  key={`exit-right-${animKey}`}
                  className="cs-body-layer exit-right"
                >
                  <ContentBody cs={caseStudies[shown]} />
                </div>
              )}
              {phase === "exiting" && txType === "split" && (
                <>
                  <div
                    key={`exit-top-${animKey}`}
                    className="cs-body-layer split-exit-top"
                  >
                    <ContentBody cs={caseStudies[shown]} />
                  </div>
                  <div
                    key={`exit-bot-${animKey}`}
                    className="cs-body-layer split-exit-bottom"
                  >
                    <ContentBody cs={caseStudies[shown]} />
                  </div>
                </>
              )}

              {/* ── ENTERING: new content arrives after frame is clear ── */}
              {phase === "entering" && txType === "right" && (
                <div
                  key={`enter-right-${animKey}`}
                  className="cs-body-layer enter-right"
                >
                  <ContentBody cs={caseStudies[shown]} />
                </div>
              )}
              {phase === "entering" && txType === "split" && (
                <>
                  <div
                    key={`enter-top-${animKey}`}
                    className="cs-body-layer split-enter-top"
                  >
                    <ContentBody cs={caseStudies[shown]} />
                  </div>
                  <div
                    key={`enter-bot-${animKey}`}
                    className="cs-body-layer split-enter-bottom"
                  >
                    <ContentBody cs={caseStudies[shown]} />
                  </div>
                </>
              )}
            </div>
          </div>
        </div>

        <div className="cs-dots">
          {caseStudies.map((_, i) => (
            <div
              key={i}
              className={`cs-dot${i === activeIndex ? " active" : ""}`}
            />
          ))}
        </div>

        <div className="cs-scroll-hint">
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
          Scroll to explore
        </div>
      </div>
    </div>
  );
}

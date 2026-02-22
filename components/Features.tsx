"use client";
import { useEffect, useRef } from "react";

const services = [
  {
    icon: "",
    num: "01",
    name: "Web Applications",
    desc: "Scalable web apps built with modern architecture — performant, maintainable, and ready to grow with your business.",
  },
  {
    icon: "",
    num: "02",
    name: "Mobile Apps",
    desc: "Cross-platform mobile experiences with native feel, reliable performance, and retention-focused UX.",
  },
  {
    icon: "",
    num: "03",
    name: "Automation & Workflows",
    desc: "Smart automations that cut manual work, accelerate operations, and let your team focus on what matters.",
  },
  {
    icon: "",
    num: "04",
    name: "Tools & Dashboards",
    desc: "Efficient internal interfaces that surface the right data and empower faster, smarter decisions.",
  },
  {
    icon: "",
    num: "05",
    name: "High-Performance Sites",
    desc: "Fast, accessible websites built for conversions — optimized for SEO, Core Web Vitals, and real results.",
  },
  {
    icon: "",
    num: "06",
    name: "UI/UX Design",
    desc: "Research-driven design that turns complex problems into intuitive interfaces — from wireframes to polished, production-ready UI.",
  },
];

export default function Features() {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = gridRef.current;
    if (!el) return;
    const mq = window.matchMedia("(max-width: 768px)");
    if (!mq.matches) return;

    let rafId: number;
    let userScrolling = false;
    let stopTimer: ReturnType<typeof setTimeout>;
    let lastTs = 0;
    const SPEED = 0.12; // px per ms

    const step = (ts: number) => {
      if (!userScrolling) {
        const dt = lastTs ? ts - lastTs : 0;
        el.scrollLeft += SPEED * dt;
        // Seamless loop
        if (el.scrollLeft + el.clientWidth >= el.scrollWidth - 1) {
          el.scrollLeft = 0;
          lastTs = 0;
          rafId = requestAnimationFrame(step);
          return;
        }
      }
      lastTs = ts;
      rafId = requestAnimationFrame(step);
    };

    const onTouchStart = () => {
      userScrolling = true;
      clearTimeout(stopTimer);
      cancelAnimationFrame(rafId);
    };

    // Wait for momentum scroll to fully settle before resuming
    const onScroll = () => {
      if (!userScrolling) return;
      clearTimeout(stopTimer);
      stopTimer = setTimeout(() => {
        userScrolling = false;
        lastTs = 0;
        rafId = requestAnimationFrame(step);
      }, 1000);
    };

    el.addEventListener("touchstart", onTouchStart, { passive: true });
    el.addEventListener("scroll", onScroll, { passive: true });

    const initTimer = setTimeout(() => {
      rafId = requestAnimationFrame(step);
    }, 1500);

    return () => {
      clearTimeout(initTimer);
      clearTimeout(stopTimer);
      cancelAnimationFrame(rafId);
      el.removeEventListener("touchstart", onTouchStart);
      el.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <section className="services-section" id="services">
      {/* Ambient decorations */}
      <div className="feat-orb feat-orb-1" aria-hidden="true" />
      <div className="feat-orb feat-orb-2" aria-hidden="true" />
      <div className="feat-hex-grid" aria-hidden="true" />
      <div className="feat-particles" aria-hidden="true">
        {Array.from({ length: 18 }).map((_, i) => (
          <span
            key={i}
            className="feat-particle"
            style={{
              left: `${(i * 37 + 11) % 97}%`,
              top: `${(i * 53 + 7) % 90}%`,
              animationDelay: `${(i * 0.37).toFixed(2)}s`,
              animationDuration: `${3 + (i % 4)}s`,
            }}
          />
        ))}
      </div>
      <div className="services-header">
        <div>
          <p className="eyebrow">What we do</p>
          <h2 className="section-title reveal">Services</h2>
        </div>
        <p className="section-sub reveal d1">
          We design and build products that scale — from customer-facing apps to
          internal tools and automation that drive efficiency.
        </p>
      </div>
      <div className="services-grid" ref={gridRef}>
        {services.map((s, i) => (
          <div className={`service-card reveal d${i + 1}`} key={i}>
            <div className="service-num">{s.num}</div>
            <span className="service-icon">{s.icon}</span>
            <div className="service-name">{s.name}</div>
            <div className="service-desc">{s.desc}</div>
            <div className="service-arrow"></div>
          </div>
        ))}
      </div>
    </section>
  );
}

import ScrollLink from "@/components/ScrollLink";

const items = [
  "Full-stack web or mobile application",
  "Modern tech stack & clean architecture",
  "Performance optimization included",
  "2–4 week delivery timeline",
  "Discounted rate for first 3 clients",
];

export default function PaymentBanner() {
  const words = [
    "Web Apps",
    "Mobile Apps",
    "Automation",
    "Dashboards",
    "Landing Pages",
    "API Systems",
    "Integrations",
    "SaaS Platforms",
    "Web Apps",
    "Mobile Apps",
    "Automation",
    "Dashboards",
    "Landing Pages",
    "API Systems",
    "Integrations",
    "SaaS Platforms",
  ];

  return (
    <>
      <div className="marquee-strip">
        <div className="marquee-track">
          {words.map((w, i) => (
            <span className="marquee-item" key={i}>
              {w} <span className="marquee-sep"></span>
            </span>
          ))}
        </div>
      </div>

      <section className="offer-section">
        <div className="offer-inner reveal-scale">
          <div>
            <div className="offer-badge"> First Client Offer</div>
            <h3 className="offer-title">
              Currently onboarding our first 3 client projects at a discounted
              rate — in exchange for a testimonial.
            </h3>
            <p className="offer-sub">
              If you need a reliable digital product built with modern
              technology and a clean, straightforward process — this is for you.
            </p>
            <ScrollLink to="contact" className="btn btn-gold">
              Claim Your Spot
            </ScrollLink>
          </div>
          <div className="offer-right">
            <ul className="offer-list">
              {items.map((item, i) => (
                <li key={i}>
                  <span className="offer-check"></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}

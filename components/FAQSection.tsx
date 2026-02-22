"use client";
import { useState } from "react";
import ScrollLink from "@/components/ScrollLink";

const faqs = [
  {
    q: "What types of projects do you take on?",
    a: "We work across web applications, mobile apps, automation systems, internal dashboards, high-performance sites, and UI/UX design. If it involves building a digital product — we are likely a good fit.",
  },
  {
    q: "How long does a typical project take?",
    a: "Most projects ship in 2 to 8 weeks depending on scope. We scope it properly in Discovery so you know the timeline before any work begins. No surprises.",
  },
  {
    q: "Do you work with early-stage startups?",
    a: "Yes — startups are our sweet spot. We understand the need to move fast, ship lean, and build with scale in mind from day one, even on a tight budget.",
  },
  {
    q: "What is the first client offer?",
    a: "We are onboarding our first 3 client projects at a discounted rate in exchange for a testimonial. You get a full-stack product built with modern tech at a reduced price.",
  },
  {
    q: "What does day-to-day collaboration look like?",
    a: "You get direct communication — no account managers in between. Regular check-ins, quick async updates, and clear milestone tracking so you always know what is happening.",
  },
];

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="faq-section">
      {/* Ambient */}
      <div className="faq-orb faq-orb-1" aria-hidden="true" />
      <div className="faq-orb faq-orb-2" aria-hidden="true" />
      <div className="faq-dots-bg" aria-hidden="true" />
      <div className="faq-inner">
        <div className="faq-left reveal-left">
          <p className="eyebrow">Support</p>
          <h2 className="section-title">
            Got any
            <br />
            questions?
          </h2>
          <p className="section-sub" style={{ marginBottom: "2rem" }}>
            We keep things transparent. If you do not see your question here —
            just reach out directly.
          </p>
          <ScrollLink to="contact" className="btn btn-gold-outline">
            Reach out here
          </ScrollLink>
        </div>

        <div className="faq-list reveal-right">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`faq-item${open === i ? " open" : ""}`}
              onClick={() => setOpen(open === i ? null : i)}
            >
              <div className="faq-question">
                <div className="faq-q-left">
                  <span className="faq-n">0{i + 1}</span>
                  <span>{faq.q}</span>
                </div>
                <span className="faq-icon">+</span>
              </div>
              <div className="faq-answer">
                <div className="faq-answer-inner">{faq.a}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

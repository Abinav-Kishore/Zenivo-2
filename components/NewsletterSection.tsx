"use client";
import { useState } from "react";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "@/lib/firebase";

export default function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setLoading(true);
    try {
      await addDoc(collection(db, "subscribers"), {
        email,
        subscribedAt: serverTimestamp(),
      });
      setSent(true);
    } catch (err) {
      console.error(err);
      // Still show success UX — don’t expose errors to user
      setSent(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="newsletter-section">
      <div className="nl-orb nl-orb-1" aria-hidden="true" />
      <div className="nl-orb nl-orb-2" aria-hidden="true" />
      <div className="nl-shimmer" aria-hidden="true" />
      <div className="newsletter-inner">
        <div className="reveal-left">
          <span className="newsletter-eyebrow">Stay in the loop</span>
          <h3 className="newsletter-heading">
            Product insights,
            <br />
            no fluff.
          </h3>
        </div>
        <div className="newsletter-form reveal-right">
          <p className="newsletter-sub">
            Occasional updates on what we are building, launching, and learning.
            No spam — ever.
          </p>
          {sent ? (
            <p className="newsletter-success">You are in. Talk soon.</p>
          ) : (
            <form className="newsletter-row" onSubmit={handleSubmit}>
              <input
                type="email"
                className="newsletter-input"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button
                type="submit"
                className="newsletter-btn"
                disabled={loading}
              >
                {loading ? "…" : "Subscribe"}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

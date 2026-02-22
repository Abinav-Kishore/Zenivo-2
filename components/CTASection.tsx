"use client";
import { useState } from "react";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "@/lib/firebase";

type Status = "idle" | "loading" | "success" | "error";

export default function CTASection() {
  const [status, setStatus] = useState<Status>("idle");
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "Web Application",
    budget: "",
    message: "",
  });

  const set = (k: string, v: string) => setForm((f) => ({ ...f, [k]: v }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      await addDoc(collection(db, "contacts"), {
        ...form,
        submittedAt: serverTimestamp(),
      });
      setStatus("success");
      setForm({
        name: "",
        email: "",
        phone: "",
        service: "Web Application",
        budget: "",
        message: "",
      });
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  return (
    <section className="contact-section" id="contact">
      {/* Ambient */}
      <div className="contact-orb contact-orb-1" aria-hidden="true" />
      <div className="contact-orb contact-orb-2" aria-hidden="true" />
      <div className="contact-grid-bg" aria-hidden="true" />
      <div className="contact-scan" aria-hidden="true" />
      <div className="contact-inner">
        <div className="contact-info reveal-left">
          <p className="eyebrow">Let us talk</p>
          <h2 className="section-title">
            Start your
            <br />
            project
          </h2>
          <p className="contact-sub">
            Tell us what you are building. We will reply within 24 to 48 hours
            with a clear next step — no commitment required.
          </p>
          <div className="contact-details">
            <div>
              <span className="contact-detail-label">Email</span>
              <a
                href="mailto:care.zenivo@gmail.com"
                className="contact-detail-val"
              >
                care.zenivo@gmail.com
              </a>
            </div>
            <div>
              <span className="contact-detail-label">Phone</span>
              <a href="tel:+919360432078" className="contact-detail-val">
                +91 93604 32078
              </a>
            </div>
            <div>
              <span className="contact-detail-label">Location</span>
              <span className="contact-detail-val">
                Remote &bull; Worldwide
              </span>
            </div>
          </div>
        </div>

        <form className="contact-form reveal-right" onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <label>Full name</label>
              <input
                type="text"
                placeholder="Your name"
                value={form.name}
                onChange={(e) => set("name", e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                placeholder="you@company.com"
                value={form.email}
                onChange={(e) => set("email", e.target.value)}
                required
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label>Phone</label>
              <input
                type="tel"
                placeholder="+1 555 000 0000"
                value={form.phone}
                onChange={(e) => set("phone", e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Service needed</label>
              <select
                value={form.service}
                onChange={(e) => set("service", e.target.value)}
              >
                <option>Web Application</option>
                <option>Mobile App</option>
                <option>Automation &amp; Workflows</option>
                <option>Internal Tools &amp; Dashboards</option>
                <option>High-Performance Website</option>
                <option>UI/UX Design</option>
                <option>Not sure yet</option>
              </select>
            </div>
          </div>
          <div className="form-group">
            <label>Budget range</label>
            <input
              type="text"
              placeholder="e.g. 5,000 – 15,000 USD"
              value={form.budget}
              onChange={(e) => set("budget", e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Project details</label>
            <textarea
              rows={5}
              placeholder="Tell us about your business, what you need built, and your ideal timeline."
              value={form.message}
              onChange={(e) => set("message", e.target.value)}
              required
            />
          </div>

          {status === "success" && (
            <p className="form-feedback form-feedback--success">
              ✓ Got it! We will reply within 24–48 hours.
            </p>
          )}
          {status === "error" && (
            <p className="form-feedback form-feedback--error">
              Something went wrong. Please try again or email us directly.
            </p>
          )}

          <button
            type="submit"
            className="form-submit"
            disabled={status === "loading"}
          >
            {status === "loading" ? "Sending…" : "Launch Your Product"}
          </button>
        </form>
      </div>
    </section>
  );
}

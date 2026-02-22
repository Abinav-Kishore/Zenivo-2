"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

function scrollTo(id: string) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const navTo = (id: string) => {
    setMenuOpen(false);
    setTimeout(() => scrollTo(id), 50);
  };

  return (
    <>
      <header className={`site-header${scrolled ? " scrolled" : ""}`}>
        <nav className="nav">
          <button className="logo nav-logo-btn" onClick={() => navTo("home")}>
            zenivo
          </button>
          <ul className="nav-links">
            <li>
              <button onClick={() => scrollTo("services")}>Services</button>
            </li>
            <li>
              <button onClick={() => scrollTo("work")}>Our Work</button>
            </li>
            <li>
              <button onClick={() => scrollTo("process")}>Process</button>
            </li>
            <li>
              <button onClick={() => scrollTo("about")}>About</button>
            </li>
          </ul>
          <button className="nav-cta" onClick={() => scrollTo("contact")}>
            Start a Project
          </button>
          <button
            className={`nav-hamburger${menuOpen ? " open" : ""}`}
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <span />
            <span />
            <span />
          </button>
        </nav>
      </header>

      {/* Mobile drawer */}
      <div
        className={`mobile-menu${menuOpen ? " open" : ""}`}
        aria-hidden={!menuOpen}
      >
        <ul className="mobile-menu-links">
          <li>
            <button onClick={() => navTo("services")}>Services</button>
          </li>
          <li>
            <button onClick={() => navTo("work")}>Our Work</button>
          </li>
          <li>
            <button onClick={() => navTo("process")}>Process</button>
          </li>
          <li>
            <button onClick={() => navTo("about")}>About</button>
          </li>
        </ul>
        <button
          className="mobile-menu-cta btn btn-gold"
          onClick={() => navTo("contact")}
        >
          Start a Project
        </button>
      </div>

      {/* Backdrop */}
      {menuOpen && (
        <div
          className="mobile-menu-backdrop"
          onClick={() => setMenuOpen(false)}
        />
      )}
    </>
  );
}

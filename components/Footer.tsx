import ScrollLink from "@/components/ScrollLink";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div>
          <ScrollLink to="home" className="footer-logo">
            Zenivo
          </ScrollLink>
          <p className="footer-tagline">
            Independent software development by Abinav Kishore.
          </p>
        </div>
        <div className="footer-nav-group">
          <h4>Services</h4>
          <ul>
            <li>
              <ScrollLink to="services">Web Applications</ScrollLink>
            </li>
            <li>
              <ScrollLink to="services">Mobile Apps</ScrollLink>
            </li>
            <li>
              <ScrollLink to="services">Automation</ScrollLink>
            </li>
            <li>
              <ScrollLink to="services">Dashboards</ScrollLink>
            </li>
            <li>
              <ScrollLink to="services">UI/UX Design</ScrollLink>
            </li>
          </ul>
        </div>
        <div className="footer-nav-group">
          <h4>Company</h4>
          <ul>
            <li>
              <ScrollLink to="projects">Projects</ScrollLink>
            </li>
            <li>
              <ScrollLink to="pricing">Pricing</ScrollLink>
            </li>
            <li>
              <ScrollLink to="about">About</ScrollLink>
            </li>
            <li>
              <ScrollLink to="contact">Contact</ScrollLink>
            </li>
          </ul>
        </div>
        <div className="footer-nav-group">
          <h4>Contact</h4>
          <ul>
            <li>
              <a href="mailto:care.zenivo@gmail.com">care.zenivo@gmail.com</a>
            </li>
            <li>
              <a href="tel:+9480856830">+91 94808 56830</a>
            </li>
            <li>
              <span
                style={{ color: "var(--text-muted)", fontSize: "0.875rem" }}
              >
                Remote worldwide
              </span>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-policies">
        <Link href="/privacy-policy">Privacy Policy</Link>
        <Link href="/terms-and-conditions">Terms &amp; Conditions</Link>
        <Link href="/cancellation-and-refund-policy">
          Cancellation &amp; Refund
        </Link>
        <Link href="/shipping-policy">Shipping Policy</Link>
      </div>
      <div className="footer-bottom">
        <span>© 2026 zenivo. All rights reserved.</span>
        <span>Software services. No physical products.</span>
      </div>
    </footer>
  );
}

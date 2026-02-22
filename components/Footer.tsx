import ScrollLink from "@/components/ScrollLink";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div>
          <ScrollLink to="home" className="footer-logo">
            zenivo
          </ScrollLink>
          <p className="footer-tagline">
            Digital product development team — design, build, scale.
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
              <ScrollLink to="work">Our Work</ScrollLink>
            </li>
            <li>
              <ScrollLink to="process">Process</ScrollLink>
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
              <a href="tel:+919360432078">+91 93604 32078</a>
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
      <div className="footer-bottom">
        <span> 2026 zenivo. All rights reserved.</span>
        <span>Built with intention.</span>
      </div>
    </footer>
  );
}

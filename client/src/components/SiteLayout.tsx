import { useState, type ReactNode } from "react";
import { ChevronRight, Menu, X } from "lucide-react";

const navigation = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Activities", href: "/events" },
  { label: "Resources", href: "/resources" },
  { label: "Publications", href: "/publications" },
  { label: "Membership", href: "/membership" },
];

const footerNavigation = [
  { label: "About Us", href: "/about" },
  { label: "Activities", href: "/events" },
  { label: "Publications", href: "/publications" },
  { label: "Resources", href: "/resources" },
  { label: "Membership registration", href: "/membership" },
];

type SiteLayoutProps = { children: ReactNode; currentPath: string };
type PageIntroProps = { eyebrow: string; title: string; description: string };

export function PageIntro({ eyebrow, title, description }: PageIntroProps) {
  return (
    <section className="page-intro">
      <div className="content-inner">
        <p className="section-kicker">{eyebrow}</p>
        <h1>{title}</h1>
        <p className="page-intro-copy">{description}</p>
      </div>
    </section>
  );
}

export default function SiteLayout({ children, currentPath }: SiteLayoutProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const isHome = currentPath === "/";

  return (
    <div className={`site-shell${isHome ? " site-shell-home" : ""}`}>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <div className="utility-bar">
        <div className="utility-inner">
          <span>Nairobi, Kenya</span>
          <span>University of Nairobi · Parklands Campus</span>
        </div>
      </div>
      <header className={`site-header${isHome ? " site-header-overlay" : ""}`}>
        <div className="header-inner">
          <a
            className="brand"
            href="/"
            aria-label="DPGSA University of Nairobi Chapter home"
          >
            <img
              className="brand-logo-image"
              src="/images/dpgsa-logo.webp"
              alt=""
            />
            <span className="brand-lockup">
              <strong>DPGSA</strong>
              <small>University of Nairobi Chapter</small>
            </span>
          </a>
          <button
            className="menu-toggle"
            type="button"
            aria-label={
              menuOpen ? "Close navigation menu" : "Open navigation menu"
            }
            aria-expanded={menuOpen}
            aria-controls="primary-navigation"
            onClick={() => setMenuOpen(open => !open)}
          >
            {menuOpen ? (
              <X size={21} aria-hidden="true" />
            ) : (
              <Menu size={21} aria-hidden="true" />
            )}
          </button>
          <nav
            className={`primary-navigation${menuOpen ? " is-open" : ""}`}
            id="primary-navigation"
            aria-label="Main navigation"
          >
            {navigation.map(item => (
              <a
                key={item.href}
                href={item.href}
                aria-current={currentPath === item.href ? "page" : undefined}
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              className="header-contact"
              href="/membership"
              aria-current={currentPath === "/membership" ? "page" : undefined}
              onClick={() => setMenuOpen(false)}
            >
              Register <ChevronRight size={14} aria-hidden="true" />
            </a>
          </nav>
        </div>
      </header>
      <main id="main-content">{children}</main>
      <footer className="site-footer">
        <div className="content-inner footer-grid">
          <div className="footer-about">
            <a className="brand footer-brand" href="/">
              <img
                className="brand-logo-image"
                src="/images/dpgsa-logo.webp"
                alt=""
              />
              <span className="brand-lockup">
                <strong>DPGSA</strong>
                <small>University of Nairobi, Parklands Campus Chapter</small>
              </span>
            </a>
            <p>
              Data Privacy and Governance Students’ Association. Non-profit and
              non-political.
            </p>
            <a className="footer-email" href="/membership">
              Membership registration is open{" "}
              <ChevronRight size={14} aria-hidden="true" />
            </a>
          </div>
          <div className="footer-column">
            <h2>Association</h2>
            {footerNavigation.slice(0, 3).map(item => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
          </div>
          <div className="footer-column">
            <h2>Explore and join</h2>
            {footerNavigation.slice(3).map(item => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
          </div>
        </div>
        <div className="content-inner footer-bottom">
          <span>
            Data Privacy and Governance Students’ Association · University of
            Nairobi, Parklands Campus Chapter
          </span>
          <a href="#main-content">Back to top</a>
        </div>
      </footer>
    </div>
  );
}

import { useState, type ReactNode } from "react";
import { Menu, X } from "lucide-react";

const navigation = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Leadership", href: "/leadership" },
  { label: "Publications", href: "/publications" },
  { label: "Events", href: "/events" },
  { label: "Resources", href: "/resources" },
  { label: "Contact", href: "/contact" },
];

type SiteLayoutProps = {
  children: ReactNode;
  currentPath: string;
};

type PageIntroProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function PageIntro({ eyebrow, title, description }: PageIntroProps) {
  return (
    <section className="page-intro">
      <div className="content-inner">
        <p className="section-label">{eyebrow}</p>
        <h1>{title}</h1>
        <p className="page-intro-copy">{description}</p>
      </div>
    </section>
  );
}

export default function SiteLayout({ children, currentPath }: SiteLayoutProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="site-shell">
      <a className="skip-link" href="#main-content">Skip to content</a>
      <div className="demo-notice" role="note">
        <strong>DEMO SITE</strong>
        <span>Sample copy and student stock photos are illustrative, not official association information.</span>
      </div>
      <header className="site-header">
        <div className="header-inner">
          <a className="brand" href="/" aria-label="DPGSA UoN home">
            <span className="brand-name">DPGSA</span>
            <span className="brand-subtitle">University of Nairobi</span>
          </a>
          <button
            className="menu-toggle"
            type="button"
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
            aria-controls="primary-navigation"
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X size={21} aria-hidden="true" /> : <Menu size={21} aria-hidden="true" />}
          </button>
          <nav
            className={`primary-navigation${menuOpen ? " is-open" : ""}`}
            id="primary-navigation"
            aria-label="Main navigation"
          >
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                aria-current={currentPath === item.href ? "page" : undefined}
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </header>
      <main id="main-content">{children}</main>
      <footer className="site-footer">
        <div className="content-inner footer-inner">
          <div className="footer-top">
            <a className="brand footer-brand" href="/">
              <span className="brand-name">DPGSA</span>
              <span className="brand-subtitle">University of Nairobi</span>
            </a>
            <nav className="footer-links" aria-label="Footer navigation">
              {navigation.filter((item) => item.href !== "/").map((item) => (
                <a key={item.href} href={item.href}>{item.label}</a>
              ))}
            </nav>
          </div>
          <p className="footer-contact">Official contact details are awaiting confirmation.</p>
          <details className="image-credits">
            <summary>Photo credits</summary>
            <p>
              University of Nairobi entrance: EstherWikipedian, <a href="https://commons.wikimedia.org/wiki/File:University_of_Nairobi_Entrance.jpg" target="_blank" rel="noreferrer">Wikimedia Commons, CC BY-SA 4.0</a>. Student photos: Kampus Production, <a href="https://www.pexels.com/license/" target="_blank" rel="noreferrer">Pexels license</a>. Student images are illustrative stock photos, not DPGSA members or association activities.
            </p>
          </details>
          <div className="footer-bottom">
            <span>DPGSA UoN demo</span>
            <a href="#main-content">Back to top</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

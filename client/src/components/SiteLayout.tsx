import { useEffect, useState, type ReactNode } from "react";
import { ChevronRight, Mail, MapPin, Menu, X } from "lucide-react";

const navigation = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Resources", href: "/resources" },
  { label: "Membership", href: "/membership" },
  { label: "Publications", href: "/publications" },
];

const footerNavigation = [
  { label: "About Us", href: "/about" },
  { label: "Leadership", href: "/leadership" },
  { label: "Publications", href: "/publications" },
  { label: "Events", href: "/events" },
  { label: "Resources", href: "/resources" },
  { label: "Membership", href: "/membership" },
  { label: "Contact Us", href: "/contact" },
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

function CookiePreview() {
  const [visible, setVisible] = useState(true);
  useEffect(() => {
    try {
      if (window.localStorage.getItem("dpgsa-demo-cookie-choice")) setVisible(false);
    } catch {
      // Keep the preview notice visible if local storage is unavailable.
    }
  }, []);

  const saveChoice = (choice: string) => {
    try {
      window.localStorage.setItem("dpgsa-demo-cookie-choice", choice);
    } catch {
      // Dismiss for this page view even when storage is unavailable.
    }
    setVisible(false);
  };

  if (!visible) return null;
  return (
    <aside className="cookie-preview" aria-label="Demo privacy notice">
      <div className="cookie-copy">
        <strong>We value your privacy</strong>
        <p>This demo does not use analytics or marketing cookies. These preview buttons only save your display choice on this device. <a href="/resources">Privacy information</a></p>
      </div>
      <div className="cookie-actions">
        <button className="cookie-reject" type="button" onClick={() => saveChoice("rejected")}>Reject all</button>
        <button className="cookie-accept" type="button" onClick={() => saveChoice("accepted")}>Accept all</button>
      </div>
    </aside>
  );
}

export default function SiteLayout({ children, currentPath }: SiteLayoutProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="site-shell">
      <a className="skip-link" href="#main-content">Skip to content</a>
      <div className="utility-bar">
        <div className="utility-inner">
          <span><MapPin size={12} aria-hidden="true" /> University of Nairobi, Kenya</span>
          <span className="utility-demo">Demo preview: official details pending</span>
          <span><Mail size={12} aria-hidden="true" /> Official email awaiting confirmation</span>
        </div>
      </div>
      <header className="site-header">
        <div className="header-inner">
          <a className="brand" href="/" aria-label="DPGSA UoN home">
            <span className="brand-mark" aria-hidden="true"><span>D</span></span>
            <span className="brand-lockup"><strong>DPGSA</strong><small>University of Nairobi</small></span>
          </a>
          <button className="menu-toggle" type="button" aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"} aria-expanded={menuOpen} aria-controls="primary-navigation" onClick={() => setMenuOpen((open) => !open)}>
            {menuOpen ? <X size={21} aria-hidden="true" /> : <Menu size={21} aria-hidden="true" />}
          </button>
          <nav className={`primary-navigation${menuOpen ? " is-open" : ""}`} id="primary-navigation" aria-label="Main navigation">
            {navigation.map((item) => (
              <a key={item.href} href={item.href} aria-current={currentPath === item.href ? "page" : undefined} onClick={() => setMenuOpen(false)}>{item.label}</a>
            ))}
            <a className="header-contact" href="/contact" aria-current={currentPath === "/contact" ? "page" : undefined} onClick={() => setMenuOpen(false)}>Contact Us <ChevronRight size={14} aria-hidden="true" /></a>
          </nav>
        </div>
      </header>
      <main id="main-content">{children}</main>
      <footer className="site-footer">
        <div className="content-inner footer-grid">
          <div className="footer-about">
            <a className="brand footer-brand" href="/">
              <span className="brand-mark" aria-hidden="true"><span>D</span></span>
              <span className="brand-lockup"><strong>DPGSA</strong><small>University of Nairobi</small></span>
            </a>
            <p>This is a DPGSA UoN website demo. Official association information and contacts are awaiting confirmation.</p>
            <a className="footer-email" href="/contact"><Mail size={15} aria-hidden="true" /> Contact details pending</a>
          </div>
          <div className="footer-column">
            <h2>Navigation</h2>
            {footerNavigation.slice(0, 4).map((item) => <a key={item.href} href={item.href}>{item.label}</a>)}
          </div>
          <div className="footer-column">
            <h2>Explore</h2>
            {footerNavigation.slice(4).map((item) => <a key={item.href} href={item.href}>{item.label}</a>)}
          </div>
          <div className="footer-column footer-extra">
            <h2>More information</h2>
            <a href="/resources">Privacy and data protection</a>
            <a href="/resources">Learning resources</a>
            <a href="/events">Events and activities</a>
          </div>
        </div>
        <div className="content-inner footer-bottom"><span>DPGSA UoN demo preview</span><a href="#main-content">Back to top</a></div>
        <details className="image-credits content-inner">
          <summary>Photo credits</summary>
          <p>University of Nairobi entrance: EstherWikipedian, <a href="https://commons.wikimedia.org/wiki/File:University_of_Nairobi_Entrance.jpg" target="_blank" rel="noreferrer">Wikimedia Commons, CC BY-SA 4.0</a>. Student photographs: Kampus Production, <a href="https://www.pexels.com/license/" target="_blank" rel="noreferrer">Pexels license</a>. Student images are illustrative stock photos, not DPGSA members or activities.</p>
        </details>
      </footer>
      <CookiePreview />
    </div>
  );
}

import { useState } from "react";
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  CalendarDays,
  Fingerprint,
  Menu,
  Scale,
  ShieldCheck,
  Sparkles,
  X,
} from "lucide-react";

const navigation = [
  { label: "About", href: "#about" },
  { label: "Focus areas", href: "#focus" },
  { label: "Insights", href: "#insights" },
  { label: "Events", href: "#events" },
  { label: "Resources", href: "#resources" },
];

const demoArticles = [
  {
    category: "DEMO ARTICLE · PRIVACY",
    title: "Privacy by design: a better starting point for student projects",
    summary: "A sample feature story about building privacy considerations into a project from the very beginning.",
    date: "SAMPLE · 12 NOV 2026",
  },
  {
    category: "DEMO ARTICLE · AI GOVERNANCE",
    title: "Who is accountable when automated decisions go wrong?",
    summary: "A sample editorial exploring transparency, human oversight and responsibility in automated systems.",
    date: "SAMPLE · 28 OCT 2026",
  },
];

const demoResources = [
  { type: "DEMO LEARNING NOTE", title: "A first look at data protection principles", detail: "Sample explainer · 6 minute read" },
  { type: "DEMO READING LIST", title: "Questions to ask about AI accountability", detail: "Sample resource · discussion guide" },
  { type: "DEMO RESOURCE GUIDE", title: "Digital rights and the public interest", detail: "Sample collection · links to be verified" },
];

const focusAreas = [
  {
    number: "01",
    title: "Data protection & privacy",
    description:
      "The principles, rights and safeguards that shape responsible use of personal data.",
    Icon: ShieldCheck,
  },
  {
    number: "02",
    title: "Digital rights",
    description:
      "How technology affects people, participation and fundamental freedoms online.",
    Icon: Fingerprint,
  },
  {
    number: "03",
    title: "AI & emerging technology",
    description:
      "The questions of accountability, fairness and governance raised by new systems.",
    Icon: Sparkles,
  },
  {
    number: "04",
    title: "Law & digital governance",
    description:
      "The legal and institutional choices behind a more trustworthy digital society.",
    Icon: Scale,
  },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell">
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>

      <header className="site-header">
        <div className="header-inner">
          <a className="brand" href="#top" aria-label="DPGSA UoN home">
            <span className="brand-mark" aria-hidden="true">
              <span>D</span>
              <i />
            </span>
            <span className="brand-copy">
              <span className="brand-name">DPGSA</span>
              <span className="brand-subtitle">University of Nairobi</span>
            </span>
          </a>

          <button
            className="menu-toggle"
            type="button"
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
            aria-controls="primary-navigation"
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>

          <nav
            className={`primary-navigation${menuOpen ? " is-open" : ""}`}
            id="primary-navigation"
            aria-label="Main navigation"
          >
            {navigation.map((item) => (
              <a key={item.href} href={item.href} onClick={closeMenu}>
                {item.label}
              </a>
            ))}
            <a className="nav-cta" href="#membership" onClick={closeMenu}>
              Get involved <ArrowUpRight size={15} aria-hidden="true" />
            </a>
          </nav>
        </div>
      </header>

      <div className="demo-banner" role="status">
        <span className="demo-banner-label">DEMO SITE</span>
        <span>Sample copy, articles, events and resource cards are for layout review only—not official DPGSA information.</span>
      </div>

      <main id="main-content">
        <section className="hero-section" id="top" aria-labelledby="hero-title">
          <div className="hero-grain" aria-hidden="true" />
          <div className="hero-inner">
            <div className="hero-copy">
              <p className="eyebrow hero-eyebrow">
                <span className="eyebrow-mark" />
                Data protection · governance · digital rights
              </p>
              <h1 id="hero-title">
                Where data,
                <br />
                rights &amp; governance
                <br />
                <em>meet.</em>
              </h1>
              <p className="hero-description">
                A University of Nairobi student association exploring the laws,
                technologies and choices shaping how data is protected and
                governed.
              </p>
              <p className="hero-demo-note">Sample homepage content · not official association copy</p>
              <div className="hero-actions">
                <a className="button button-light" href="#about">
                  Discover DPGSA <ArrowRight size={16} aria-hidden="true" />
                </a>
                <a className="text-link hero-secondary" href="#focus">
                  Explore our focus <ArrowDownRight size={16} aria-hidden="true" />
                </a>
              </div>
              <div className="hero-footnote">
                <span className="footnote-rule" />
                <span>Law, technology &amp; the public interest</span>
              </div>
            </div>

            <div className="hero-art" aria-label="An overview of DPGSA's focus areas">
              <div className="art-topline">
                <span>THE GOVERNANCE LENS</span>
                <span>NAIROBI · KE</span>
              </div>
              <div className="orbit orbit-one" aria-hidden="true" />
              <div className="orbit orbit-two" aria-hidden="true" />
              <div className="orbit orbit-three" aria-hidden="true" />
              <div className="orbit-core">
                <span className="core-overline">A digital society</span>
                <span className="core-title">deserves<br />careful stewards.</span>
                <span className="core-dot" aria-hidden="true" />
              </div>
              <div className="orbit-label orbit-label-top">
                <span className="orbit-index">01</span>
                <span>People<br />&amp; rights</span>
              </div>
              <div className="orbit-label orbit-label-right">
                <span className="orbit-index">02</span>
                <span>Data<br />&amp; privacy</span>
              </div>
              <div className="orbit-label orbit-label-bottom">
                <span className="orbit-index">03</span>
                <span>Systems<br />&amp; governance</span>
              </div>
              <div className="art-caption">
                <span className="caption-dash" />
                <span>Exploring the questions behind the digital world</span>
              </div>
            </div>
          </div>
          <div className="hero-index" aria-hidden="true">01 / 04</div>
        </section>

        <section className="intro-section section-wrap" id="about" aria-labelledby="about-title">
          <div className="section-kicker">
            <span className="section-number">01</span>
            <span className="eyebrow">About the association</span>
          </div>
          <div className="intro-content">
            <h2 id="about-title">
              The rules of the digital world are still being written.
            </h2>
            <div className="intro-body">
              <p className="intro-lead">
                DPGSA UoN brings attention to the questions at the intersection
                of law, technology, data protection and governance.
              </p>
              <p>
                As digital systems influence how information is collected,
                shared and used, the association provides a home for exploring
                privacy, digital rights, artificial intelligence and the
                policies that shape them.
              </p>
              <a className="text-link dark-link" href="#focus">
                See our focus areas <ArrowRight size={16} aria-hidden="true" />
              </a>
            </div>
          </div>
          <div className="intro-rule" aria-hidden="true">
            <span>DATA</span><i /><span>PEOPLE</span><i /><span>GOVERNANCE</span>
          </div>
        </section>

        <section className="focus-section" id="focus" aria-labelledby="focus-title">
          <div className="section-wrap">
            <div className="section-heading-row">
              <div>
                <div className="section-kicker">
                  <span className="section-number">02</span>
                  <span className="eyebrow">What we explore</span>
                </div>
                <h2 id="focus-title">The questions shaping<br />our digital lives.</h2>
              </div>
              <p className="heading-aside">
                From individual rights to emerging technologies, these connected
                themes inform DPGSA UoN’s work and conversations.
              </p>
            </div>

            <div className="focus-list">
              {focusAreas.map(({ number, title, description, Icon }) => (
                <article className="focus-item" key={number}>
                  <span className="focus-number">{number}</span>
                  <span className="focus-icon"><Icon size={22} strokeWidth={1.5} aria-hidden="true" /></span>
                  <div className="focus-copy">
                    <h3>{title}</h3>
                    <p>{description}</p>
                  </div>
                  <span className="focus-arrow" aria-hidden="true"><ArrowUpRight size={19} /></span>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="insights-section section-wrap" id="insights" aria-labelledby="insights-title">
          <div className="section-kicker">
            <span className="section-number">03</span>
            <span className="eyebrow">Ideas &amp; perspectives</span>
          </div>
          <div className="insights-heading">
            <h2 id="insights-title">A place for ideas<br /><em>worth sharing.</em></h2>
            <p>
              Sample editorial cards show how featured perspectives and
              publications could appear. These are fictional examples, not
              published DPGSA articles.
            </p>
          </div>
          <div className="article-grid">
            {demoArticles.map((article, index) => (
              <article className={`article-card article-card-${index + 1}`} key={article.title}>
                <div className="article-card-top">
                  <span className="article-icon"><BookOpen size={21} strokeWidth={1.5} aria-hidden="true" /></span>
                  <span className="demo-chip">DEMO</span>
                </div>
                <span className="article-category">{article.category}</span>
                <h3>{article.title}</h3>
                <p>{article.summary}</p>
                <div className="article-meta">
                  <span>{article.date}</span>
                  <span>Sample author · demo</span>
                </div>
              </article>
            ))}
          </div>
          <p className="demo-footnote">Example titles and dates are invented for this preview. Replace with verified articles and the official Medium link.</p>
        </section>

        <section className="updates-section" id="events" aria-labelledby="updates-title">
          <div className="section-wrap">
            <div className="section-heading-row updates-heading-row">
              <div>
                <div className="section-kicker">
                  <span className="section-number">04</span>
                  <span className="eyebrow">From the association</span>
                </div>
                <h2 id="updates-title">What’s happening<br />around DPGSA.</h2>
              </div>
              <p className="heading-aside">
                Sample cards illustrate how events, announcements and activity
                highlights can look. All details below are demonstration data.
              </p>
            </div>

            <div className="updates-grid">
              <article className="update-card event-card">
                <div className="update-card-top">
                  <span className="update-icon"><CalendarDays size={20} strokeWidth={1.6} aria-hidden="true" /></span>
                  <span className="update-type">DEMO · EVENTS &amp; ACTIVITIES</span>
                  <span className="update-index">A / 01</span>
                </div>
                <div className="update-card-bottom">
                  <span className="event-date">12 NOV <i>2026 · SAMPLE DATE</i></span>
                  <h3>Privacy in practice:<br />a student roundtable.</h3>
                  <p>A fictional example event card for reviewing the layout, description length and registration callout.</p>
                  <span className="update-placeholder">DEMO EVENT · NO REGISTRATION</span>
                </div>
              </article>

              <article className="update-card notice-card">
                <div className="update-card-top">
                  <span className="update-icon"><Sparkles size={20} strokeWidth={1.6} aria-hidden="true" /></span>
                  <span className="update-type">DEMO · ANNOUNCEMENTS</span>
                  <span className="update-index">A / 02</span>
                </div>
                <div className="update-card-bottom">
                  <span className="announcement-date">SAMPLE NOTICE · 03 NOV 2026</span>
                  <h3>Call for student voices on responsible AI.</h3>
                  <p>A fictional call for contributions, included only to demonstrate an announcements card.</p>
                  <span className="update-placeholder">DEMO ANNOUNCEMENT · NOT OPEN</span>
                </div>
              </article>

              <article className="update-card activity-card" id="activities">
                <div className="update-card-top">
                  <span className="update-icon"><ArrowDownRight size={20} strokeWidth={1.6} aria-hidden="true" /></span>
                  <span className="update-type">DEMO · RECENT ACTIVITY</span>
                  <span className="update-index">A / 03</span>
                </div>
                <div className="update-card-bottom">
                  <span className="announcement-date">SAMPLE HIGHLIGHT · 18 SEP 2026</span>
                  <h3>Data, rights &amp; society: a sample campus conversation.</h3>
                  <p>A fictional activity highlight showing the format for a short recap and achievement.</p>
                  <span className="update-placeholder">DEMO ACTIVITY · NOT A REAL EVENT</span>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="resources-section section-wrap" id="resources" aria-labelledby="resources-title">
          <div className="section-kicker">
            <span className="section-number">05</span>
            <span className="eyebrow">Resources &amp; learning</span>
          </div>
          <div className="resources-heading">
            <h2 id="resources-title">A shelf for<br /><em>curious minds.</em></h2>
            <p>These fictional resource cards demonstrate a future learning area. No external resource is linked or endorsed in this demo.</p>
          </div>
          <div className="resource-grid">
            {demoResources.map((resource, index) => (
              <article className="resource-card" key={resource.title}>
                <span className="resource-number">0{index + 1}</span>
                <span className="resource-type">{resource.type}</span>
                <h3>{resource.title}</h3>
                <p>{resource.detail}</p>
                <span className="resource-link-label">Sample card · no link <ArrowUpRight size={14} aria-hidden="true" /></span>
              </article>
            ))}
          </div>
        </section>

        <section className="membership-section" id="membership" aria-labelledby="membership-title">
          <div className="membership-orbit" aria-hidden="true" />
          <div className="membership-inner section-wrap">
            <div className="membership-copy">
              <div className="section-kicker light-kicker">
                <span className="section-number">05</span>
                <span className="eyebrow">Join the conversation</span>
              </div>
              <h2 id="membership-title">Curious about<br />what comes next?</h2>
              <p>
                Demo membership panel for reviewing the homepage flow. No
                membership application is available in this preview; official
                criteria and links will replace this sample.
              </p>
              <span className="button button-outline" aria-disabled="true">
                DEMO · membership link disabled
              </span>
            </div>
            <div className="membership-aside">
              <span className="aside-index">SAMPLE COPY · NOT OFFICIAL</span>
              <span className="aside-quote" aria-hidden="true">01</span>
              <p>Exploring data protection, privacy, digital rights, AI and digital governance.</p>
              <span className="aside-rule" />
              <a href="#contact" className="text-link light-link">
                Connect with the association <ArrowRight size={16} aria-hidden="true" />
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer" id="contact">
        <div className="footer-main section-wrap">
          <div className="footer-brand-block">
            <a className="brand footer-brand" href="#top" aria-label="DPGSA UoN, back to top">
              <span className="brand-mark footer-mark" aria-hidden="true"><span>D</span><i /></span>
              <span className="brand-copy">
                <span className="brand-name">DPGSA</span>
                <span className="brand-subtitle">University of Nairobi</span>
              </span>
            </a>
            <p>Data Protection &amp; Governance<br />Students Association</p>
          </div>
          <div className="footer-column">
            <span className="footer-label">Explore</span>
            <a href="#about">About DPGSA</a>
            <a href="#focus">Focus areas</a>
            <a href="#insights">Insights</a>
            <a href="#events">Events &amp; updates</a>
            <a href="#resources">Resources</a>
          </div>
          <div className="footer-column footer-contact">
            <span className="footer-label">Contact &amp; engage</span>
            <p>DEMO ONLY: sample contact channel shown as a placeholder. Official email and social links are not yet connected.</p>
            <span className="footer-inline-link">sample@example.org · not a real contact</span>
          </div>
          <div className="footer-note">
            <span className="footer-label">A note on this draft</span>
            <p>Association details and brand assets are being verified for this first homepage draft.</p>
          </div>
        </div>
        <div className="footer-bottom section-wrap">
          <span>DPGSA UoN · Homepage draft</span>
          <a href="#top">Back to top <ArrowUpRight size={13} aria-hidden="true" /></a>
        </div>
      </footer>
    </div>
  );
}

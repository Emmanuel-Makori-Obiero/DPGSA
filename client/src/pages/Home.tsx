import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Menu, Pause, Play, X } from "lucide-react";

const navigation = [
  { label: "About", href: "#about" },
  { label: "Focus areas", href: "#focus" },
  { label: "Insights", href: "#insights" },
  { label: "Events", href: "#events" },
  { label: "Resources", href: "#resources" },
];

const photos = [
  {
    src: "/images/uon-entrance.jpg",
    alt: "The University of Nairobi entrance and main building.",
    caption: "University of Nairobi entrance",
    credit: "EstherWikipedian on Wikimedia Commons · CC BY-SA 4.0",
    creditUrl: "https://commons.wikimedia.org/wiki/File:University_of_Nairobi_Entrance.jpg",
  },
  {
    src: "/images/study-group.jpg",
    alt: "A student working on a laptop in a library, with classmates and a library worker nearby.",
    caption: "Students working together in a library",
    credit: "Kampus Production on Pexels",
    creditUrl: "https://www.pexels.com/photo/concentrated-young-diverse-students-using-laptops-during-lesson-in-library-5940711/",
  },
  {
    src: "/images/student-working.jpg",
    alt: "A student studying at a laptop beside a library window.",
    caption: "An individual study session",
    credit: "Kampus Production on Pexels",
    creditUrl: "https://www.pexels.com/photo/serious-young-black-man-working-on-laptop-sitting-near-window-in-library-5940708/",
  },
];

const focusAreas = [
  {
    title: "Data protection and privacy",
    description: "Personal data, privacy rights and the safeguards around how information is used.",
  },
  {
    title: "Digital rights",
    description: "The effect of technology on people, participation and rights online.",
  },
  {
    title: "Artificial intelligence",
    description: "Questions of responsibility, fairness and transparency in automated systems.",
  },
  {
    title: "Digital governance",
    description: "The laws, policies and institutions shaping a trustworthy digital society.",
  },
];

const demoArticles = [
  {
    topic: "DEMO ARTICLE · PRIVACY",
    title: "Privacy by design: a better starting point for student projects",
    summary: "A sample feature about considering privacy before a project begins.",
    date: "Sample date · 12 Nov 2026",
  },
  {
    topic: "DEMO ARTICLE · AI GOVERNANCE",
    title: "Who is accountable when automated decisions go wrong?",
    summary: "A sample editorial about transparency, oversight and responsibility.",
    date: "Sample date · 28 Oct 2026",
  },
];

const demoResources = [
  { type: "DEMO LEARNING NOTE", title: "A first look at data protection principles", detail: "Sample explainer · 6 minute read" },
  { type: "DEMO READING LIST", title: "Questions to ask about AI accountability", detail: "Sample resource · discussion guide" },
  { type: "DEMO RESOURCE GUIDE", title: "Digital rights and the public interest", detail: "Sample collection · links to be verified" },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activePhoto, setActivePhoto] = useState(0);
  const [manuallyPaused, setManuallyPaused] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updatePreference = () => setReducedMotion(mediaQuery.matches);
    updatePreference();
    mediaQuery.addEventListener("change", updatePreference);
    return () => mediaQuery.removeEventListener("change", updatePreference);
  }, []);

  useEffect(() => {
    if (manuallyPaused || hovered || focused || reducedMotion) return undefined;
    const timer = window.setInterval(() => {
      setActivePhoto((current) => (current + 1) % photos.length);
    }, 7000);
    return () => window.clearInterval(timer);
  }, [manuallyPaused, hovered, focused, reducedMotion]);

  const closeMenu = () => setMenuOpen(false);
  const showPreviousPhoto = () => {
    setActivePhoto((current) => (current + photos.length - 1) % photos.length);
  };
  const showNextPhoto = () => {
    setActivePhoto((current) => (current + 1) % photos.length);
  };
  const currentPhoto = photos[activePhoto];

  return (
    <div className="site-shell" id="top">
      <a className="skip-link" href="#main-content">Skip to content</a>

      <div className="demo-notice" role="status">
        <strong>DEMO PREVIEW</strong>
        <span>Sample copy and stock photos are for layout review only, not official DPGSA content or event photos.</span>
      </div>

      <header className="site-header">
        <div className="header-inner">
          <a className="brand" href="#top" aria-label="DPGSA UoN home">
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
            {menuOpen ? <X size={21} /> : <Menu size={21} />}
          </button>

          <nav
            className={`primary-navigation${menuOpen ? " is-open" : ""}`}
            id="primary-navigation"
            aria-label="Main navigation"
          >
            {navigation.map((item) => (
              <a key={item.href} href={item.href} onClick={closeMenu}>{item.label}</a>
            ))}
            <a className="header-cta" href="#membership" onClick={closeMenu}>Get involved</a>
          </nav>
        </div>
      </header>

      <main id="main-content">
        <section className="hero-section" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow">Data protection · governance · digital rights</p>
            <h1 id="hero-title">Understanding the rules of our digital lives.</h1>
            <p className="hero-description">
              DPGSA UoN is a student association focused on data protection and governance. This homepage introduces the issues it explores, while its official copy and branding are being confirmed.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#about">About the association</a>
              <a className="button button-secondary" href="#insights">Read sample insights</a>
            </div>
          </div>

          <div
            className="photo-carousel"
            role="region"
            aria-label="Campus and student photographs"
            aria-roledescription="carousel"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            onFocusCapture={() => setFocused(true)}
            onBlurCapture={(event) => {
              if (!event.currentTarget.contains(event.relatedTarget as Node | null)) setFocused(false);
            }}
          >
            <figure className="carousel-slide" aria-roledescription="slide" aria-label={`${activePhoto + 1} of ${photos.length}: ${currentPhoto.caption}`}>
              <img src={currentPhoto.src} alt={currentPhoto.alt} fetchPriority="high" />
              <figcaption className="photo-caption">
                <span>{currentPhoto.caption}</span>
                <a href={currentPhoto.creditUrl} target="_blank" rel="noreferrer">{currentPhoto.credit}</a>
              </figcaption>
            </figure>
            <div className="carousel-controls" aria-label="Photo carousel controls">
              <button type="button" className="carousel-button" onClick={showPreviousPhoto} aria-label="Previous photo">
                <ChevronLeft size={20} aria-hidden="true" />
              </button>
              <span className="carousel-count" aria-live="off">{String(activePhoto + 1).padStart(2, "0")} / {String(photos.length).padStart(2, "0")}</span>
              <button type="button" className="carousel-button" onClick={showNextPhoto} aria-label="Next photo">
                <ChevronRight size={20} aria-hidden="true" />
              </button>
              {!reducedMotion && (
                <button
                  type="button"
                  className="carousel-toggle"
                  onClick={() => setManuallyPaused((paused) => !paused)}
                  aria-label={manuallyPaused ? "Resume automatic photo rotation" : "Pause automatic photo rotation"}
                >
                  {manuallyPaused ? <Play size={15} aria-hidden="true" /> : <Pause size={15} aria-hidden="true" />}
                  <span>{manuallyPaused ? "Play" : "Pause"}</span>
                </button>
              )}
            </div>
          </div>
        </section>

        <section className="content-section" id="about" aria-labelledby="about-title">
          <div className="content-inner">
            <p className="section-label">About DPGSA UoN</p>
            <div className="section-heading-row">
              <h2 id="about-title">A student space for the questions shaping digital society.</h2>
              <div className="section-intro">
                <p>
                  The project brief describes DPGSA UoN as a student association focused on data protection and governance. Its homepage can introduce the people, policy and technology questions behind that work.
                </p>
                <p className="demo-copy">Mission and vision wording is a placeholder until the association confirms its official language.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="content-section section-muted" id="focus" aria-labelledby="focus-title">
          <div className="content-inner">
            <p className="section-label">What we explore</p>
            <div className="section-heading-row">
              <h2 id="focus-title">Four connected areas of interest.</h2>
              <p className="section-intro">A concise introduction to the themes planned for the public homepage.</p>
            </div>
            <div className="focus-list">
              {focusAreas.map((area) => (
                <article className="focus-item" key={area.title}>
                  <h3>{area.title}</h3>
                  <p>{area.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="content-section" id="insights" aria-labelledby="insights-title">
          <div className="content-inner">
            <p className="section-label">Ideas and perspectives</p>
            <div className="section-heading-row">
              <h2 id="insights-title">Insights and publications</h2>
              <p className="section-intro">Example article cards only. Replace these titles and dates with verified publications and the official Medium link.</p>
            </div>
            <div className="article-list">
              {demoArticles.map((article) => (
                <article className="article-row" key={article.title}>
                  <p className="article-topic">{article.topic}</p>
                  <div>
                    <h3>{article.title}</h3>
                    <p>{article.summary}</p>
                  </div>
                  <span className="article-date">{article.date}</span>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="content-section section-muted" id="events" aria-labelledby="events-title">
          <div className="content-inner">
            <p className="section-label">Events and updates</p>
            <div className="section-heading-row">
              <h2 id="events-title">From the association</h2>
              <p className="section-intro">The items below are fictional placeholders. No event registration, announcement or activity claim is active.</p>
            </div>
            <div className="update-list">
              <article className="update-row">
                <div className="update-meta"><span>DEMO EVENT</span><time dateTime="2026-11-12">12 Nov 2026 · sample date</time></div>
                <div><h3>Privacy in practice: a student roundtable</h3><p>A sample event description for reviewing the homepage layout.</p></div>
                <span className="demo-status">Not a real event</span>
              </article>
              <article className="update-row">
                <div className="update-meta"><span>DEMO ANNOUNCEMENT</span><time dateTime="2026-11-03">03 Nov 2026 · sample date</time></div>
                <div><h3>Call for student voices on responsible AI</h3><p>A fictional announcement included only as a content example.</p></div>
                <span className="demo-status">Not open</span>
              </article>
              <article className="update-row">
                <div className="update-meta"><span>DEMO ACTIVITY</span><time dateTime="2026-09-18">18 Sep 2026 · sample date</time></div>
                <div><h3>Data, rights and society: a sample campus conversation</h3><p>A fictional activity recap, not a DPGSA achievement or event.</p></div>
                <span className="demo-status">Sample only</span>
              </article>
            </div>
          </div>
        </section>

        <section className="content-section" id="resources" aria-labelledby="resources-title">
          <div className="content-inner">
            <p className="section-label">Resources and learning</p>
            <div className="section-heading-row">
              <h2 id="resources-title">A place to keep learning.</h2>
              <p className="section-intro">Sample cards only. No external resource is linked or endorsed in this draft.</p>
            </div>
            <div className="resource-list">
              {demoResources.map((resource) => (
                <article className="resource-row" key={resource.title}>
                  <span className="resource-type">{resource.type}</span>
                  <h3>{resource.title}</h3>
                  <p>{resource.detail}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="membership-section" id="membership" aria-labelledby="membership-title">
          <div className="content-inner membership-inner">
            <div>
              <p className="section-label">Get involved</p>
              <h2 id="membership-title">Membership information is coming later.</h2>
            </div>
            <p>There is no application form in this homepage demo. Official membership criteria and contact details will be added when confirmed.</p>
          </div>
        </section>
      </main>

      <footer className="site-footer" id="contact">
        <div className="content-inner footer-inner">
          <div className="footer-top">
            <a className="brand footer-brand" href="#top">
              <span className="brand-name">DPGSA</span>
              <span className="brand-subtitle">University of Nairobi</span>
            </a>
            <nav className="footer-links" aria-label="Footer navigation">
              <a href="#about">About</a>
              <a href="#insights">Insights</a>
              <a href="#events">Events</a>
              <a href="#resources">Resources</a>
            </nav>
          </div>
          <p className="footer-contact">Official contact details are not yet confirmed.</p>
          <details className="image-credits">
            <summary>Photo credits</summary>
            <p>University of Nairobi entrance: EstherWikipedian, <a href="https://commons.wikimedia.org/wiki/File:University_of_Nairobi_Entrance.jpg" target="_blank" rel="noreferrer">Wikimedia Commons, CC BY-SA 4.0</a>. Student photos: Kampus Production, <a href="https://www.pexels.com/license/" target="_blank" rel="noreferrer">Pexels license</a>. All student photos are illustrative stock images, not DPGSA members or association activities.</p>
          </details>
          <div className="footer-bottom">
            <span>DPGSA UoN homepage demo</span>
            <a href="#top">Back to top</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

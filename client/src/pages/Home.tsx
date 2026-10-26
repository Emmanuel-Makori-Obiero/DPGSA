import { useEffect, useState } from "react";
import { BookOpen, CalendarDays, ChevronRight, Scale, ShieldCheck, Users } from "lucide-react";

const managedHeroBackground = "/manus-storage/async-images/oav0JbW3LOmswCYOxrk2hs/image-1.webp";

const focusCards = [
  {
    icon: Users,
    title: "Community and research",
    description: "Build a network of students interested in privacy, data protection and digital governance.",
  },
  {
    icon: Scale,
    title: "Professionalism and ethics",
    description: "Consider the standards and responsibilities that guide the handling of personal data.",
  },
  {
    icon: BookOpen,
    title: "Knowledge and advocacy",
    description: "Share accessible learning and encourage informed conversations about digital rights.",
  },
];

const webinars = [
  {
    date: "12 NOV 2026",
    title: "Privacy in practice",
    text: "A sample student conversation on everyday data protection.",
  },
  {
    date: "20 NOV 2026",
    title: "Understanding responsible AI",
    text: "A sample webinar card for a future DPGSA learning session.",
  },
  {
    date: "28 NOV 2026",
    title: "Digital rights and public life",
    text: "An illustrative listing for a discussion about governance and rights.",
  },
];

const news = [
  {
    dateDay: "12",
    dateMonth: "NOV",
    image: "/images/student-working.jpg",
    alt: "A student working at a laptop in a library.",
    title: "What should students know about personal data?",
    link: "/publications",
  },
  {
    dateDay: "08",
    dateMonth: "NOV",
    image: null,
    alt: "",
    title: "A sample introduction to privacy by design",
    link: "/publications",
  },
  {
    dateDay: "02",
    dateMonth: "NOV",
    image: "/images/study-group.jpg",
    alt: "Students studying together in a library.",
    title: "Building responsible digital habits",
    link: "/resources",
  },
];

export default function Home() {
  const [useManagedHero, setUseManagedHero] = useState(false);

  useEffect(() => {
    if (!window.location.hostname.endsWith("vercel.app")) setUseManagedHero(true);
  }, []);

  return (
    <>
      <section className="reference-hero" style={useManagedHero ? { backgroundImage: `url("${managedHeroBackground}"), url("/images/dpgsa-network-background.svg")` } : undefined} aria-labelledby="hero-title">
        <div className="reference-hero-overlay" />
        <div className="reference-hero-content">
          <p className="hero-kicker">Data Protection and Governance Students Association</p>
          <h1 id="hero-title">Building a culture of privacy and trust</h1>
          <p>Exploring responsible data use, digital governance and rights at the University of Nairobi.</p>
          <a className="blue-button" href="/about">Learn more <ChevronRight size={15} aria-hidden="true" /></a>
        </div>
        <span className="hero-demo-tag">Illustrative demo content</span>
      </section>

      <section className="mission-section content-inner" aria-labelledby="mission-title">
        <div className="mission-art">
          <div className="mission-art-blue" />
          <img src="/images/uon-entrance.jpg" alt="University of Nairobi entrance building." loading="lazy" />
        </div>
        <div className="mission-copy">
          <p className="section-kicker">Our mission</p>
          <h2 id="mission-title">Protecting information through responsible data use.</h2>
          <p className="mission-description">The website brief describes DPGSA UoN as a student association focused on data protection and governance. This draft introduces those themes while the official mission wording awaits approval.</p>
          <ul className="check-list">
            <li><ShieldCheck size={19} aria-hidden="true" /><span>Privacy and responsible data use</span></li>
            <li><ShieldCheck size={19} aria-hidden="true" /><span>Digital governance and policy</span></li>
            <li><ShieldCheck size={19} aria-hidden="true" /><span>Learning, discussion and advocacy</span></li>
          </ul>
          <a className="blue-button" href="/about">Learn more <ChevronRight size={15} aria-hidden="true" /></a>
        </div>
      </section>

      <section className="about-band" aria-labelledby="about-us-title">
        <div className="content-inner">
          <header className="center-section-heading">
            <p className="section-kicker">Who we are</p>
            <h2 id="about-us-title">About us</h2>
            <p>A student community exploring data protection, privacy and governance in Kenya.</p>
          </header>
          <div className="feature-cards">
            {focusCards.map(({ icon: Icon, title, description }) => (
              <article className="feature-card" key={title}>
                <Icon size={37} strokeWidth={1.7} aria-hidden="true" />
                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            ))}
          </div>
          <div className="center-action"><a className="blue-button" href="/about">Learn more <ChevronRight size={15} aria-hidden="true" /></a></div>
        </div>
      </section>

      <section className="webinars-section content-inner" aria-labelledby="webinars-title">
        <div className="section-heading-row">
          <div><p className="section-kicker">Learn and take part</p><h2 id="webinars-title">Webinars</h2></div>
          <a className="text-button" href="/events">All events <ChevronRight size={14} aria-hidden="true" /></a>
        </div>
        <div className="webinar-cards">
          {webinars.map((webinar) => (
            <article className="webinar-card" key={webinar.title}>
              <div className="webinar-icon" aria-hidden="true"><CalendarDays size={26} strokeWidth={1.5} /></div>
              <div className="webinar-copy">
                <span className="demo-label">Demo listing</span>
                <p className="webinar-date"><CalendarDays size={13} aria-hidden="true" />{webinar.date}</p>
                <h3>{webinar.title}</h3>
                <p>{webinar.text}</p>
              </div>
            </article>
          ))}
        </div>
        <p className="demo-footnote">Webinar titles and dates are examples only. No event registration is active.</p>
      </section>

      <section className="latest-section" aria-labelledby="latest-title">
        <div className="content-inner">
          <header className="center-section-heading">
            <p className="section-kicker">What is happening</p>
            <h2 id="latest-title">Latest news</h2>
            <p>Sample stories for the DPGSA UoN homepage.</p>
          </header>
          <div className="news-cards">
            {news.map((story) => (
              <article className="news-card" key={story.title}>
                <a className="news-image-link" href={story.link} aria-label={`Read more: ${story.title}`}>
                  {story.image ? <img src={story.image} alt={story.alt} loading="lazy" /> : <span className="news-image-placeholder" aria-hidden="true"><ShieldCheck size={48} strokeWidth={1.4} /></span>}
                  <span className="news-date"><strong>{story.dateDay}</strong><small>{story.dateMonth}</small></span>
                </a>
                <div className="news-copy">
                  <span className="demo-label">Sample story</span>
                  <h3>{story.title}</h3>
                  <a className="read-more" href={story.link}>Read more <ChevronRight size={13} aria-hidden="true" /></a>
                </div>
              </article>
            ))}
          </div>
          <div className="center-action"><a className="blue-button" href="/publications">View publications <ChevronRight size={15} aria-hidden="true" /></a></div>
        </div>
      </section>

      <section className="home-join">
        <div className="content-inner home-join-inner">
          <div><p className="section-kicker">Get involved</p><h2>Learn more about DPGSA.</h2></div>
          <a className="blue-button" href="/membership">Membership information <ChevronRight size={15} aria-hidden="true" /></a>
        </div>
      </section>
    </>
  );
}

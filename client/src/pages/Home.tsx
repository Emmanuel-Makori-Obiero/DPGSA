import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";

const slides = [
  {
    src: "/images/uon-entrance.jpg",
    alt: "The University of Nairobi entrance and main building.",
    credit: "Photo by EstherWikipedian on Wikimedia Commons, CC BY-SA 4.0",
    creditUrl: "https://commons.wikimedia.org/wiki/File:University_of_Nairobi_Entrance.jpg",
    headline: "Who decides what happens to our data?",
    summary: "A student association exploring data protection and governance at the University of Nairobi.",
  },
  {
    src: "/images/study-group.jpg",
    alt: "Students working together in a library.",
    credit: "Photo by Kampus Production on Pexels",
    creditUrl: "https://www.pexels.com/photo/concentrated-young-diverse-students-using-laptops-during-lesson-in-library-5940711/",
    headline: "How can digital policy protect people?",
    summary: "Explore the questions behind privacy, digital rights and the way technology is governed.",
  },
  {
    src: "/images/student-working.jpg",
    alt: "A student studying at a laptop beside a library window.",
    credit: "Photo by Kampus Production on Pexels",
    creditUrl: "https://www.pexels.com/photo/serious-young-black-man-working-on-laptop-sitting-near-window-in-library-5940708/",
    headline: "Better technology starts with better questions.",
    summary: "Find sample publications, events and learning resources in this DPGSA UoN site demo.",
  },
];

const focusAreas = [
  { title: "Privacy and data protection", text: "How personal information is collected, used and safeguarded." },
  { title: "Digital governance", text: "The laws and policies that shape technology and public life." },
  { title: "Digital rights", text: "The rights and responsibilities people have in a connected society." },
];

const demoStories = [
  { type: "DEMO ARTICLE", title: "Privacy by design: a better starting point for student projects", href: "/publications" },
  { type: "DEMO EVENT", title: "Privacy in practice: a sample student roundtable", href: "/events" },
];

export default function Home() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [paused, setPaused] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const slide = slides[activeSlide];

  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReducedMotion(preference.matches);
    update();
    preference.addEventListener("change", update);
    return () => preference.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    if (paused || hovered || focused || reducedMotion) return undefined;
    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % slides.length);
    }, 6500);
    return () => window.clearInterval(timer);
  }, [paused, hovered, focused, reducedMotion]);

  const previousSlide = () => setActiveSlide((current) => (current + slides.length - 1) % slides.length);
  const nextSlide = () => setActiveSlide((current) => (current + 1) % slides.length);

  return (
    <>
      <section
        className="home-hero"
        role="region"
        aria-label="DPGSA UoN featured photos"
        aria-roledescription="carousel"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onFocusCapture={() => setFocused(true)}
        onBlurCapture={(event) => {
          if (!event.currentTarget.contains(event.relatedTarget as Node | null)) setFocused(false);
        }}
      >
        <img className="home-hero-image" src={slide.src} alt={slide.alt} fetchPriority="high" />
        <div className="home-hero-shade" />
        <div className="home-hero-content">
          <p className="hero-kicker">Data Protection and Governance Students Association</p>
          <h1>{slide.headline}</h1>
          <p className="home-hero-summary">{slide.summary}</p>
          <div className="hero-links">
            <a className="button button-light" href="/about">About DPGSA</a>
            <a className="hero-text-link" href="/publications">Explore publications</a>
          </div>
        </div>
        <div className="home-hero-credit">
          <a href={slide.creditUrl} target="_blank" rel="noreferrer">{slide.credit}</a>
        </div>
        <div className="home-carousel-controls" aria-label="Featured photo controls">
          <button type="button" onClick={previousSlide} aria-label="Previous photo"><ChevronLeft size={20} aria-hidden="true" /></button>
          <span aria-live="off">{String(activeSlide + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}</span>
          <button type="button" onClick={nextSlide} aria-label="Next photo"><ChevronRight size={20} aria-hidden="true" /></button>
          {!reducedMotion && (
            <button
              type="button"
              className="hero-pause"
              onClick={() => setPaused((value) => !value)}
              aria-label={paused ? "Resume automatic slide rotation" : "Pause automatic slide rotation"}
            >
              {paused ? <Play size={14} aria-hidden="true" /> : <Pause size={14} aria-hidden="true" />}
              <span>{paused ? "Play" : "Pause"}</span>
            </button>
          )}
        </div>
      </section>

      <section className="home-intro content-inner" aria-labelledby="what-title">
        <div>
          <p className="section-label">What we do</p>
          <h2 id="what-title">Make sense of the digital world around us.</h2>
        </div>
        <div className="home-intro-copy">
          <p>DPGSA UoN is described in the project brief as a student association focused on data protection and governance. This demo shows how its public site could introduce the issues, share student writing and point visitors to upcoming activities.</p>
          <a className="inline-link" href="/about">Learn about the association</a>
        </div>
      </section>

      <section className="home-focus-section" aria-labelledby="focus-title">
        <div className="content-inner">
          <div className="section-heading-simple">
            <div><p className="section-label">Areas of interest</p><h2 id="focus-title">The questions behind our digital lives.</h2></div>
            <a className="inline-link" href="/about">See all focus areas</a>
          </div>
          <div className="home-focus-list">
            {focusAreas.map((area) => (
              <article className="home-focus-item" key={area.title}>
                <h3>{area.title}</h3>
                <p>{area.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="home-latest content-inner" aria-labelledby="latest-title">
        <div className="section-heading-simple">
          <div><p className="section-label">On the site</p><h2 id="latest-title">Read, learn and take part.</h2></div>
          <a className="inline-link" href="/events">All events and activities</a>
        </div>
        <div className="home-story-list">
          {demoStories.map((story) => (
            <a className="home-story" href={story.href} key={story.type}>
              <span className="story-type">{story.type}</span>
              <h3>{story.title}</h3>
              <span className="story-arrow" aria-hidden="true">Read more</span>
            </a>
          ))}
        </div>
        <p className="sample-note">Articles and event examples on this page are fictional demo content, not official DPGSA announcements.</p>
      </section>

      <section className="home-join">
        <div className="content-inner home-join-inner">
          <div><p className="section-label">Get involved</p><h2>Want to know more about DPGSA?</h2></div>
          <a className="button button-green" href="/contact">Visit the contact page</a>
        </div>
      </section>
    </>
  );
}

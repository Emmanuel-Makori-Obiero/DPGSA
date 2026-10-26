import { useEffect, useState } from "react";
import {
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  ChevronRight,
  Pause,
  Play,
} from "lucide-react";

type HeroSlide = {
  image: string;
  alt: string;
  eyebrow: string;
  title: string;
  description: string;
};

const slides: HeroSlide[] = [
  {
    image: "/images/home-slider-seminar.webp",
    alt: "Generated illustrative photo of university students taking part in a privacy and technology seminar.",
    eyebrow: "Data privacy · Digital rights · Technology law",
    title: "The future of privacy starts with us.",
    description:
      "Learn, exchange ideas and grow alongside a community exploring law and technology.",
  },
  {
    image: "/images/home-slider-campus.webp",
    alt: "Generated illustrative photo of students talking together on a university campus.",
    eyebrow: "University of Nairobi · Parklands Campus",
    title: "Learn together. Shape a safer digital future.",
    description:
      "Connect with fellow students interested in data governance, digital rights and innovation law.",
  },
];

const SLIDE_INTERVAL_MS = 6800;

export default function HomeHeroSlider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [isPausedByUser, setIsPausedByUser] = useState(false);
  const [isReducedMotion, setIsReducedMotion] = useState(false);
  const [isPageVisible, setIsPageVisible] = useState(true);

  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updatePreference = () => setIsReducedMotion(preference.matches);
    updatePreference();
    preference.addEventListener("change", updatePreference);
    return () => preference.removeEventListener("change", updatePreference);
  }, []);

  useEffect(() => {
    const updateVisibility = () => setIsPageVisible(!document.hidden);
    updateVisibility();
    document.addEventListener("visibilitychange", updateVisibility);
    return () =>
      document.removeEventListener("visibilitychange", updateVisibility);
  }, []);

  useEffect(() => {
    if (
      isHovered ||
      isFocused ||
      isPausedByUser ||
      isReducedMotion ||
      !isPageVisible
    )
      return;

    const timer = window.setTimeout(() => {
      setActiveIndex(index => (index + 1) % slides.length);
    }, SLIDE_INTERVAL_MS);

    return () => window.clearTimeout(timer);
  }, [
    activeIndex,
    isHovered,
    isFocused,
    isPausedByUser,
    isReducedMotion,
    isPageVisible,
  ]);

  const showSlide = (index: number) => {
    setActiveIndex((index + slides.length) % slides.length);
  };
  const isRotationPaused =
    isHovered ||
    isFocused ||
    isPausedByUser ||
    isReducedMotion ||
    !isPageVisible;

  return (
    <section
      className={`home-hero${isRotationPaused ? " is-paused" : ""}`}
      aria-roledescription="carousel"
      aria-label="Data Privacy and Governance Students’ Association highlights"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocus={() => {
        setIsFocused(true);
        setIsPausedByUser(true);
      }}
      onBlur={event => {
        if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
          setIsFocused(false);
        }
      }}
    >
      {slides.map((slide, index) => (
        <div
          className={`home-hero-slide${activeIndex === index ? " is-active" : ""}`}
          key={slide.image}
          aria-hidden={activeIndex !== index}
          inert={activeIndex !== index}
          role="group"
          aria-roledescription="slide"
          aria-label={`${index + 1} of ${slides.length}`}
        >
          <img
            className="home-hero-image"
            src={slide.image}
            alt={slide.alt}
            fetchPriority={index === 0 ? "high" : "auto"}
            loading="eager"
          />
          <div className="home-hero-scrim" />
          <div className="content-inner home-hero-content">
            <div className="home-hero-copy">
              <p className="hero-kicker">{slide.eyebrow}</p>
              <h1>{slide.title}</h1>
              <p className="home-hero-description">{slide.description}</p>
              <a className="hero-register-button" href="/membership">
                Membership registration is open
                <ChevronRight size={17} aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      ))}

      <div className="content-inner home-hero-controls">
        <a className="hero-scroll-link" href="#home-mission">
          Explore the Association <ArrowDown size={15} aria-hidden="true" />
        </a>
        <div
          className="hero-slider-controls"
          role="group"
          aria-label="Hero slider controls"
        >
          <span className="hero-slide-number" aria-live="off">
            0{activeIndex + 1} <span>/ 0{slides.length}</span>
          </span>
          <div className="hero-slider-dots">
            {slides.map((slide, index) => (
              <button
                key={slide.image}
                className={`hero-slider-dot${activeIndex === index ? " is-active" : ""}`}
                type="button"
                aria-label={`Show slide ${index + 1}`}
                aria-pressed={activeIndex === index}
                onClick={() => showSlide(index)}
              />
            ))}
          </div>
          <button
            className="hero-slider-toggle"
            type="button"
            aria-label={
              isReducedMotion
                ? "Automatic slide rotation is disabled because reduced motion is enabled"
                : "Pause or resume automatic slide rotation"
            }
            aria-pressed={isPausedByUser || isReducedMotion}
            disabled={isReducedMotion}
            onClick={() => setIsPausedByUser(paused => !paused)}
          >
            {isPausedByUser ? (
              <Play size={16} aria-hidden="true" />
            ) : (
              <Pause size={16} aria-hidden="true" />
            )}
          </button>
          <button
            className="hero-slider-arrow"
            type="button"
            aria-label="Previous slide"
            onClick={() => showSlide(activeIndex - 1)}
          >
            <ArrowLeft size={18} aria-hidden="true" />
          </button>
          <button
            className="hero-slider-arrow"
            type="button"
            aria-label="Next slide"
            onClick={() => showSlide(activeIndex + 1)}
          >
            <ArrowRight size={18} aria-hidden="true" />
          </button>
        </div>
      </div>
      <div className="hero-progress-track" aria-hidden="true">
        {!isReducedMotion && isPageVisible && (
          <span
            className="hero-progress-indicator"
            key={`${activeIndex}-${isHovered}-${isFocused}-${isPausedByUser}-${isPageVisible}`}
          />
        )}
      </div>
    </section>
  );
}

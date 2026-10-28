import { useEffect, useState } from "react";
import { ChevronRight, Pause, Play } from "lucide-react";
import { homeHeroSlides } from "@/data/clubPhotos";

const slides = homeHeroSlides;
const SLIDE_INTERVAL_MS = 3000;

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
    ) {
      return;
    }

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

  const isRotationPaused =
    isHovered ||
    isFocused ||
    isPausedByUser ||
    isReducedMotion ||
    !isPageVisible;
  const activeSlide = slides[activeIndex];

  return (
    <section
      className={`home-hero${isRotationPaused ? " is-paused" : ""}`}
      aria-roledescription="carousel"
      aria-label="DPGSA meeting and essay-competition photographs"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocus={event => {
        setIsFocused(true);
        if (
          event.target instanceof HTMLElement &&
          event.target.matches(":focus-visible")
        ) {
          setIsPausedByUser(true);
        }
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
          key={slide.id}
          aria-hidden={activeIndex !== index}
          inert={activeIndex !== index}
          role="group"
          aria-roledescription="slide"
          aria-label={`${index + 1} of ${slides.length}`}
        >
          <div className="home-hero-photo-grid">
            {slide.photos.map((photo, photoIndex) => (
              <picture
                className={`home-hero-picture ${
                  photoIndex === 0
                    ? "home-hero-picture-auditorium"
                    : photoIndex === 1
                      ? "home-hero-picture-top"
                      : "home-hero-picture-bottom"
                }`}
                key={photo.id}
              >
                <source srcSet={photo.avif} type="image/avif" />
                <source srcSet={photo.webp} type="image/webp" />
                <img
                  className="home-hero-image"
                  src={photo.webp}
                  alt={photo.alt}
                  fetchPriority={
                    index === 0 && photoIndex === 0 ? "high" : "auto"
                  }
                  loading={index === 0 ? "eager" : "lazy"}
                  decoding={index === 0 ? "sync" : "async"}
                />
              </picture>
            ))}
          </div>
          <div className="home-hero-scrim" />
        </div>
      ))}

      <div className="home-hero-mobile-spacer" aria-hidden="true" />

      <div className="home-hero-content">
        <div className="home-hero-copy">
          <p className="home-hero-kicker">University of Nairobi Chapter</p>
          <h1
            key={activeSlide.id}
            aria-live={isRotationPaused ? "polite" : "off"}
            aria-atomic="true"
          >
            {activeSlide.headline.map((line, index) => (
              <span key={`${activeSlide.id}-${index}`}>{line}</span>
            ))}
          </h1>
          <p className="home-hero-intro">
            DPGSA is the Data Privacy and Governance Students’ Association at
            the University of Nairobi.
          </p>
          <a className="home-hero-about-link" href="/about">
            About the Association <ChevronRight size={15} aria-hidden="true" />
          </a>
        </div>
      </div>

      <div
        className="hero-slider-controls"
        role="group"
        aria-label="Hero image controls"
      >
        <button
          className="hero-slider-toggle visually-hidden-control"
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
          className="hero-slider-next"
          type="button"
          aria-label="Show next hero image"
          onClick={() => setActiveIndex(index => (index + 1) % slides.length)}
        >
          <ChevronRight size={30} strokeWidth={1.5} aria-hidden="true" />
        </button>
      </div>
    </section>
  );
}

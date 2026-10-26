import { useEffect, useState } from "react";
import { ChevronRight, Pause, Play } from "lucide-react";

type HeroSlide = {
  avif: string;
  webp: string;
  alt: string;
};

const slides: HeroSlide[] = [
  {
    avif: "/images/club-collaboration-jua-terms-group.avif",
    webp: "/images/club-collaboration-jua-terms-group.webp",
    alt: "Association members at a group photo during a JuaTerms collaboration activity.",
  },
  {
    avif: "/images/club-collaboration-speaker.avif",
    webp: "/images/club-collaboration-speaker.webp",
    alt: "A member speaks at a JuaTerms collaboration activity.",
  },
  {
    avif: "/images/club-essay-competition-award.avif",
    webp: "/images/club-essay-competition-award.webp",
    alt: "Students exchange an award certificate at a Data Privacy and Governance essay competition activity.",
  },
];

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

  return (
    <section
      className={`home-hero${isRotationPaused ? " is-paused" : ""}`}
      aria-roledescription="carousel"
      aria-label="Data Privacy and Governance Students’ Association highlights"
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
          key={slide.avif}
          aria-hidden={activeIndex !== index}
          inert={activeIndex !== index}
          role="group"
          aria-roledescription="slide"
          aria-label={`${index + 1} of ${slides.length}`}
        >
          <picture className="home-hero-picture">
            <source srcSet={slide.avif} type="image/avif" />
            <source srcSet={slide.webp} type="image/webp" />
            <img
              className="home-hero-image"
              src={slide.webp}
              alt={slide.alt}
              fetchPriority={index === 0 ? "high" : "auto"}
              loading="eager"
            />
          </picture>
          <div className="home-hero-scrim" />
        </div>
      ))}

      <div className="content-inner home-hero-content">
        <h1>Learn | Engage | Build a safer digital future.</h1>
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

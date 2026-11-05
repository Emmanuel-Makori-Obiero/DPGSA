import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";
import { essayCompetitionPhotos, meetingPhotos } from "@/data/clubPhotos";

const photos = [...meetingPhotos, ...essayCompetitionPhotos];
const SLIDE_INTERVAL_MS = 4600;

export default function HomePhotoSlider() {
  const trackRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isReducedMotion, setIsReducedMotion] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isPausedByUser, setIsPausedByUser] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [isPageVisible, setIsPageVisible] = useState(true);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const motionPreference = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    );
    const mobileViewport = window.matchMedia("(max-width: 600px)");
    const updatePreferences = () => {
      setIsReducedMotion(motionPreference.matches);
      setIsMobile(mobileViewport.matches);
    };
    updatePreferences();
    motionPreference.addEventListener("change", updatePreferences);
    mobileViewport.addEventListener("change", updatePreferences);
    return () => {
      motionPreference.removeEventListener("change", updatePreferences);
      mobileViewport.removeEventListener("change", updatePreferences);
    };
  }, []);

  useEffect(() => {
    const updateVisibility = () => setIsPageVisible(!document.hidden);
    updateVisibility();
    document.addEventListener("visibilitychange", updateVisibility);
    return () =>
      document.removeEventListener("visibilitychange", updateVisibility);
  }, []);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    if (!("IntersectionObserver" in window)) {
      setIsInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => setIsInView(entry.isIntersecting),
      { threshold: 0.15 }
    );
    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  const scrollToSlide = useCallback(
    (index: number) => {
      const track = trackRef.current;
      const slide = track?.querySelector<HTMLElement>(
        `[data-slide-index="${index}"]`
      );
      if (!track || !slide) return;

      const left =
        track.scrollLeft +
        slide.getBoundingClientRect().left -
        track.getBoundingClientRect().left;
      track.scrollTo({
        left,
        behavior: isReducedMotion ? "auto" : "smooth",
      });
      setActiveIndex(index);
    },
    [isReducedMotion]
  );

  const handleScroll = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;

    const trackLeft = track.getBoundingClientRect().left;
    const slides = Array.from(
      track.querySelectorAll<HTMLElement>("[data-slide-index]")
    );
    let closestIndex = 0;
    let closestDistance = Number.POSITIVE_INFINITY;

    slides.forEach((slide, index) => {
      const distance = Math.abs(slide.getBoundingClientRect().left - trackLeft);
      if (distance < closestDistance) {
        closestDistance = distance;
        closestIndex = index;
      }
    });

    setActiveIndex(current =>
      current === closestIndex ? current : closestIndex
    );
  }, []);

  useEffect(() => {
    if (
      !isMobile ||
      isReducedMotion ||
      isPausedByUser ||
      isHovered ||
      isFocused ||
      !isPageVisible ||
      !isInView
    ) {
      return;
    }

    const timer = window.setTimeout(() => {
      scrollToSlide((activeIndex + 1) % photos.length);
    }, SLIDE_INTERVAL_MS);

    return () => window.clearTimeout(timer);
  }, [
    activeIndex,
    isFocused,
    isHovered,
    isInView,
    isMobile,
    isPageVisible,
    isPausedByUser,
    isReducedMotion,
    scrollToSlide,
  ]);

  return (
    <section
      ref={sectionRef}
      className="mobile-home-photo-slider"
      role="region"
      aria-roledescription="carousel"
      aria-labelledby="home-photo-slider-title"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocus={() => setIsFocused(true)}
      onBlur={event => {
        if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
          setIsFocused(false);
        }
      }}
    >
      <div className="mobile-home-photo-slider-inner">
        <header className="mobile-home-photo-slider-heading">
          <p className="section-kicker">From our photo archive</p>
          <h2 id="home-photo-slider-title">More Association moments</h2>
          <p>Swipe through DPGSA meetings and essay-competition photos.</p>
        </header>

        <div
          className="mobile-home-photo-slider-track"
          ref={trackRef}
          onScroll={handleScroll}
          aria-label="DPGSA meeting and essay-competition photos"
        >
          {photos.map((photo, index) => (
            <figure
              className="mobile-home-photo-slide"
              data-slide-index={index}
              key={photo.id}
              role="group"
              aria-roledescription="slide"
              aria-label={`${index + 1} of ${photos.length}`}
              aria-hidden={activeIndex !== index}
            >
              <picture className="mobile-home-photo-picture">
                <source srcSet={photo.avif} type="image/avif" />
                <source srcSet={photo.webp} type="image/webp" />
                <img
                  src={photo.webp}
                  alt={photo.alt}
                  width={photo.width}
                  height={photo.height}
                  loading="lazy"
                  decoding="async"
                />
              </picture>
              <figcaption>{photo.caption ?? photo.alt}</figcaption>
            </figure>
          ))}
        </div>

        <div className="mobile-home-photo-slider-controls">
          <button
            type="button"
            aria-label="Show previous photo"
            onClick={() =>
              scrollToSlide((activeIndex - 1 + photos.length) % photos.length)
            }
          >
            <ChevronLeft size={20} aria-hidden="true" />
          </button>
          <span className="mobile-home-photo-slider-counter" aria-live="off">
            {String(activeIndex + 1).padStart(2, "0")} / {photos.length}
          </span>
          <button
            type="button"
            aria-label="Show next photo"
            onClick={() => scrollToSlide((activeIndex + 1) % photos.length)}
          >
            <ChevronRight size={20} aria-hidden="true" />
          </button>
          <button
            className="mobile-home-photo-slider-toggle"
            type="button"
            aria-label={
              isReducedMotion
                ? "Automatic photo movement is disabled because reduced motion is enabled"
                : isPausedByUser
                  ? "Resume automatic photo movement"
                  : "Pause automatic photo movement"
            }
            aria-pressed={isPausedByUser || isReducedMotion}
            disabled={isReducedMotion}
            onClick={() => setIsPausedByUser(paused => !paused)}
          >
            {isPausedByUser ? (
              <Play size={17} aria-hidden="true" />
            ) : (
              <Pause size={17} aria-hidden="true" />
            )}
          </button>
        </div>
      </div>
    </section>
  );
}

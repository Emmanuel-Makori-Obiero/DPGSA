import { ArrowRight } from "lucide-react";
import { PageIntro } from "@/components/site/SiteLayout";
import PhotoGallery from "@/components/site/PhotoGallery";
import { aboutStoryPhotos, boardGroupPhoto } from "@/data/clubPhotos";

const focusAreas = [
  "Digital Rights and Policy Regulation",
  "Cybercrimes & Digital Fraud",
  "Internet Governance",
  "Law and contemporary technologies, including AI, blockchain and virtual reality",
];

export default function About() {
  return (
    <>
      <PageIntro
        eyebrow="About the Association"
        title="Where data, rights and technology meet."
        description="At the University of Nairobi, DPGSA brings students together around data privacy, governance, digital rights and emerging technology."
      />
      <section
        className="about-story-section"
        aria-labelledby="about-story-title"
      >
        <div className="content-inner about-story-inner">
          <div className="about-story-copy">
            <p className="about-story-kicker">Inside DPGSA</p>
            <h2 id="about-story-title">Curious minds. Real-world questions.</h2>
            <p>
              The Association creates space for University of Nairobi students
              to learn about data privacy, governance and digital rights—and to
              ask what fast-changing technology means for people.
            </p>
            <a className="about-story-link" href="/events">
              Explore our activities <ArrowRight size={17} aria-hidden="true" />
            </a>
          </div>
          <div className="about-story-composition">
            {aboutStoryPhotos.map((photo, index) => (
              <figure
                className={`about-story-photo about-story-photo-${index + 1}`}
                key={photo.id}
              >
                <picture>
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
                {photo.caption ? (
                  <figcaption>{photo.caption}</figcaption>
                ) : null}
              </figure>
            ))}
          </div>
        </div>
      </section>
      <section className="content-section" aria-labelledby="purpose-title">
        <div className="content-inner">
          <div className="section-heading-simple">
            <div>
              <p className="section-label">Our purpose</p>
              <h2 id="purpose-title">Mission and vision</h2>
            </div>
          </div>
          <div className="purpose-grid purpose-grid-two">
            <article className="purpose-card">
              <h3>Mission</h3>
              <p>
                To nurture the next generation of practitioners and experts in
                the area of technology and innovation law.
              </p>
            </article>
            <article className="purpose-card">
              <h3>Vision</h3>
              <p>
                To create a global network of young Data Privacy &amp;
                Governance enthusiasts and provide information, education, peer
                connections, and career support to the community.
              </p>
            </article>
          </div>
          <p className="status-statement">
            The Association is a non-profit, non-political student community.
          </p>
        </div>
      </section>
      <section
        className="content-section section-muted"
        aria-labelledby="about-focus-title"
      >
        <div className="content-inner">
          <div className="section-heading-simple">
            <div>
              <p className="section-label">Areas of interest</p>
              <h2 id="about-focus-title">What we explore</h2>
            </div>
          </div>
          <div className="focus-page-list">
            {focusAreas.map(area => (
              <article key={area}>
                <h3>{area}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>
      <PhotoGallery
        eyebrow="Our community"
        title="A wider data privacy community."
        description="The backdrop in this group photo identifies the Data Privacy and Governance Society of Kenya (DPGSK)."
        photos={[boardGroupPhoto]}
        columns={3}
      />
    </>
  );
}

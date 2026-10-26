import { BookOpen, ShieldCheck } from "lucide-react";
import { PageIntro } from "@/components/site/SiteLayout";
import PhotoGallery from "@/components/site/PhotoGallery";
import { meetingPhotos } from "@/data/clubPhotos";

const focusAreas = [
  "Digital Rights and Policy Regulation",
  "Cybercrimes & Digital Fraud",
  "Internet Governance",
  "Law and contemporary technologies, including AI, blockchain and virtual reality",
];

export default function Resources() {
  return (
    <>
      <PageIntro
        eyebrow="Resources and learning"
        title="A knowledge base for learning and exchange."
        description="Explore learning and knowledge-sharing across Data Governance, Privacy and related fields."
      />
      <section
        className="content-section"
        aria-labelledby="knowledge-base-title"
      >
        <div className="content-inner">
          <div className="section-heading-simple">
            <div>
              <p className="section-kicker">Learning together</p>
              <h2 id="knowledge-base-title">
                Data Governance &amp; Privacy Knowledge Base
              </h2>
            </div>
            <p className="section-intro">
              A place for members and experts to learn and share knowledge and
              experiences across Africa.
            </p>
          </div>
          <div className="resource-callout">
            <BookOpen size={24} aria-hidden="true" />
            <p>
              Discover ideas, learn about emerging issues and share knowledge
              across law, technology and data privacy.
            </p>
          </div>
        </div>
      </section>
      <section
        className="content-section section-muted"
        aria-labelledby="resource-focus-title"
      >
        <div className="content-inner">
          <div className="section-heading-simple">
            <div>
              <p className="section-label">Focus areas</p>
              <h2 id="resource-focus-title">
                Areas covered by the Association
              </h2>
            </div>
          </div>
          <div className="focus-page-list">
            {focusAreas.map(area => (
              <article key={area}>
                <ShieldCheck size={19} aria-hidden="true" />
                <h3>{area}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>
      <PhotoGallery
        eyebrow="Association meetings"
        title="Learning from one another."
        description="Two photographs from the DPGSA meeting archive."
        photos={meetingPhotos}
        tone="muted"
        columns={2}
      />
    </>
  );
}

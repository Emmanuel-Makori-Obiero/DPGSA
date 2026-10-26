import { PageIntro } from "@/components/SiteLayout";

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
        title="A student community for technology and innovation law."
        description="The Data Privacy and Governance Students’ Association at the University of Nairobi brings together students interested in law, data privacy, digital rights and technology."
      />
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
    </>
  );
}

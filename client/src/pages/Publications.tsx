import { PageIntro } from "@/components/site/SiteLayout";
import PhotoGallery from "@/components/site/PhotoGallery";
import { essayCompetitionPhotos } from "@/data/clubPhotos";

const activities = [
  {
    title: "Data Governance blogs, journals & magazines",
    text: "Share writing and commentary on data governance and privacy.",
  },
  {
    title: "Research materials",
    text: "Develop and publish research on Data Governance and Privacy issues.",
  },
  {
    title: "Knowledge-based materials",
    text: "Create learning materials that help members and experts exchange knowledge and experiences across Africa.",
  },
];

export default function Publications() {
  return (
    <>
      <PageIntro
        eyebrow="Research and publications"
        title="Research, commentary and shared knowledge."
        description="Explore the Association’s interests in writing, research and knowledge-sharing on Data Governance and Privacy."
      />
      <section
        className="content-section"
        aria-labelledby="publication-activities-title"
      >
        <div className="content-inner">
          <div className="section-heading-simple">
            <div>
              <p className="section-label">Research and publication</p>
              <h2 id="publication-activities-title">Knowledge in practice</h2>
            </div>
            <p className="section-intro">
              This page describes publication areas; it does not list unverified
              article titles or publication dates.
            </p>
          </div>
          <div className="activity-list">
            {activities.map(({ title, text }) => (
              <article className="activity-card" key={title}>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
          <div className="publication-purpose">
            <h2>Research and policy interests</h2>
            <ul>
              <li>Build research strategy and activities</li>
              <li>Share research on data governance and privacy</li>
              <li>
                Raise awareness of developments in data governance and privacy
              </li>
              <li>
                Work with relevant stakeholders on strong privacy frameworks
              </li>
            </ul>
          </div>
        </div>
      </section>
      <PhotoGallery
        eyebrow="Essay-writing competition"
        title="The community behind the ideas."
        description="A selection of photographs from the essay-writing competition image archive shared by the Association."
        photos={essayCompetitionPhotos}
        tone="muted"
        columns={4}
      />
    </>
  );
}

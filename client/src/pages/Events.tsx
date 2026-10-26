import { CalendarDays } from "lucide-react";
import { PageIntro } from "@/components/SiteLayout";

const activities = [
  [
    "Moots & Debates",
    "Annual moot competitions around legal technology areas of interest.",
  ],
  [
    "Legal Trainings and Workshops",
    "Regular training and workshops around legal technology areas of interest.",
  ],
  [
    "Power Talks and practitioner insights",
    "Insights, commentary and Q&A sessions with data privacy practitioners.",
  ],
  [
    "Podcasts and webinars",
    "Podcasts and webinars on data privacy and governance.",
  ],
  [
    "Community engagement",
    "Digital media and community engagement on digital rights and law-tech.",
  ],
  [
    "Mobilization and stakeholder engagement",
    "Community engagement and advocacy for legal and regulatory reform in data governance and privacy.",
  ],
];

export default function Events() {
  return (
    <>
      <PageIntro
        eyebrow="Activities"
        title="Learning, discussion and community engagement."
        description="Explore the Association’s programme areas in legal technology, data privacy and digital rights."
      />
      <section
        className="content-section"
        aria-labelledby="activities-list-title"
      >
        <div className="content-inner">
          <div className="section-heading-simple">
            <div>
              <p className="section-label">What we do</p>
              <h2 id="activities-list-title">Learning and engagement</h2>
            </div>
            <p className="section-intro">
              Explore the kinds of activities offered by the Association.
              Specific event dates are not listed here.
            </p>
          </div>
          <div className="activity-list">
            {activities.map(([title, detail]) => (
              <article className="activity-card" key={title}>
                <CalendarDays size={21} aria-hidden="true" />
                <div>
                  <h3>{title}</h3>
                  <p>{detail}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

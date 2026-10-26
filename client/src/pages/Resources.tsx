import { PageIntro } from "@/components/SiteLayout";

const resources = [
  { type: "DEMO LEARNING NOTE", title: "A first look at data protection principles", detail: "Sample explainer for students." },
  { type: "DEMO READING LIST", title: "Questions to ask about AI accountability", detail: "Sample discussion guide." },
  { type: "DEMO RESOURCE GUIDE", title: "Digital rights and the public interest", detail: "Sample collection. Links await review." },
];

export default function Resources() {
  return (
    <>
      <PageIntro
        eyebrow="Resources and learning"
        title="A useful place to start exploring."
        description="This page previews a future learning library. The examples below are fictional placeholders, not official recommendations."
      />
      <section className="content-section" aria-labelledby="resource-list-title">
        <div className="content-inner">
          <div className="section-heading-simple">
            <div><p className="section-kicker">Learning library</p><h2 id="resource-list-title">Sample resources</h2></div>
            <p className="section-intro">Only reviewed and approved external materials will be linked here once the association provides its preferred resources.</p>
          </div>
          <div className="resource-list">
            {resources.map((resource) => (
              <article className="resource-row" key={resource.title}>
                <span className="sample-label">{resource.type}</span>
                <h3>{resource.title}</h3>
                <p>{resource.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="content-section section-muted" aria-labelledby="privacy-note-title">
        <div className="content-inner membership-note">
          <div><p className="section-kicker">Demo privacy information</p><h2 id="privacy-note-title">No analytics or marketing cookies are enabled.</h2></div>
          <p>The preview notice stores only the button choice on this device using local browser storage. This site demo does not include a contact form, user account or tracking integration.</p>
        </div>
      </section>
    </>
  );
}

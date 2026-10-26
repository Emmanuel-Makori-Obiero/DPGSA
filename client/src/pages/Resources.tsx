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
        description="The resources page can gather explainers, reading lists and learning materials. The examples below are fictional placeholders, not official recommendations."
      />
      <section className="content-section" aria-labelledby="resource-list-title">
        <div className="content-inner">
          <div className="section-heading-simple">
            <div><p className="section-label">Learning library</p><h2 id="resource-list-title">Sample resources</h2></div>
            <p className="section-intro">Only reviewed and approved external resources will be linked here once the association provides its preferred materials.</p>
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
    </>
  );
}

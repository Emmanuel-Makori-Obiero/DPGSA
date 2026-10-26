import { PageIntro } from "@/components/SiteLayout";

const articles = [
  {
    category: "DEMO ARTICLE",
    topic: "Privacy",
    title: "Privacy by design: a better starting point for student projects",
    summary: "A sample feature about considering privacy before a project begins.",
    date: "Sample date: 12 November 2026",
  },
  {
    category: "DEMO ARTICLE",
    topic: "AI governance",
    title: "Who is accountable when automated decisions go wrong?",
    summary: "A sample editorial about transparency, oversight and responsibility.",
    date: "Sample date: 28 October 2026",
  },
  {
    category: "DEMO ARTICLE",
    topic: "Digital rights",
    title: "What does meaningful consent look like online?",
    summary: "A fictional article card to show how student perspectives could appear.",
    date: "Sample date: 04 October 2026",
  },
];

export default function Publications() {
  return (
    <>
      <PageIntro
        eyebrow="Publications"
        title="Ideas worth sharing."
        description="A home for articles, explainers and student perspectives on data protection and governance. The entries shown here are fictional samples."
      />
      <section className="content-section" aria-labelledby="publications-list-title">
        <div className="content-inner">
          <div className="section-heading-simple">
            <div><p className="section-label">Latest writing</p><h2 id="publications-list-title">Sample articles</h2></div>
            <p className="section-intro">The official Medium page and verified publication links have not been supplied. These examples are not published DPGSA work.</p>
          </div>
          <div className="publication-list">
            {articles.map((article) => (
              <article className="publication-row" key={article.title}>
                <div className="publication-category"><span className="sample-label">{article.category}</span><span>{article.topic}</span></div>
                <div><h3>{article.title}</h3><p>{article.summary}</p></div>
                <time>{article.date}</time>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

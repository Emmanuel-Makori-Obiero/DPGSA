import { PageIntro } from "@/components/SiteLayout";

const focusAreas = [
  ["Data protection and privacy", "How personal information is collected, used and protected."],
  ["Digital rights", "Rights and responsibilities in an increasingly connected society."],
  ["Artificial intelligence", "Questions of transparency, accountability and fair use."],
  ["Digital governance", "The laws, policies and institutions shaping digital life."],
];

export default function About() {
  return (
    <>
      <PageIntro
        eyebrow="About DPGSA UoN"
        title="A student association looking at how data shapes society."
        description="This page introduces the purpose and interests proposed in the website brief. Official mission and vision wording is still to be confirmed by the association."
      />
      <section className="content-section" aria-labelledby="purpose-title">
        <div className="content-inner">
          <div className="section-heading-simple">
            <div><p className="section-label">Our purpose</p><h2 id="purpose-title">A place for learning and discussion.</h2></div>
            <p className="section-intro">The statements below are sample copy for layout review. They are not official DPGSA mission or vision statements.</p>
          </div>
          <div className="purpose-grid">
            <article className="purpose-card"><span className="sample-label">DEMO COPY</span><h3>Mission</h3><p>Bring students together to explore data protection, digital governance and the rights people have online.</p></article>
            <article className="purpose-card"><span className="sample-label">DEMO COPY</span><h3>Vision</h3><p>Support a digital society where technology serves people and personal information is handled responsibly.</p></article>
            <article className="purpose-card"><span className="sample-label">DEMO COPY</span><h3>Objectives</h3><p>Encourage peer learning, share accessible research and create informed conversations about digital policy.</p></article>
          </div>
        </div>
      </section>
      <section className="content-section section-muted" aria-labelledby="about-focus-title">
        <div className="content-inner">
          <div className="section-heading-simple">
            <div><p className="section-label">Focus areas</p><h2 id="about-focus-title">Connected questions. Real-world impact.</h2></div>
            <p className="section-intro">A starting point for the topics the association may explore. The final list should be approved by DPGSA.</p>
          </div>
          <div className="focus-page-list">
            {focusAreas.map(([title, description]) => <article key={title}><h3>{title}</h3><p>{description}</p></article>)}
          </div>
        </div>
      </section>
    </>
  );
}

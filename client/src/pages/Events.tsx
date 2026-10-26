import { PageIntro } from "@/components/SiteLayout";

const events = [
  {
    type: "DEMO EVENT",
    date: "Sample date: 12 November 2026",
    title: "Privacy in practice: a student roundtable",
    detail: "A fictional event example for reviewing the page layout. No registration is available.",
  },
  {
    type: "DEMO ANNOUNCEMENT",
    date: "Sample date: 03 November 2026",
    title: "Call for student voices on responsible AI",
    detail: "A fictional opportunity card, not an open call from DPGSA.",
  },
  {
    type: "DEMO ACTIVITY",
    date: "Sample date: 18 September 2026",
    title: "Data, rights and society: a campus conversation",
    detail: "A sample activity recap, not a verified DPGSA event or achievement.",
  },
];

export default function Events() {
  return (
    <>
      <PageIntro
        eyebrow="Events and activities"
        title="Conversations that bring ideas to life."
        description="See how upcoming events, announcements and past activities could be presented. All entries on this demo page are fictional examples."
      />
      <section className="content-section" aria-labelledby="events-list-title">
        <div className="content-inner">
          <div className="section-heading-simple">
            <div><p className="section-label">What is happening</p><h2 id="events-list-title">Sample events and updates</h2></div>
            <p className="section-intro">No event registration, opportunity or achievement shown here is official. Confirmed details and approved event photos can replace these samples.</p>
          </div>
          <div className="event-list">
            {events.map((event) => (
              <article className="event-row" key={event.title}>
                <div className="event-meta"><span className="sample-label">{event.type}</span><time>{event.date}</time></div>
                <div><h3>{event.title}</h3><p>{event.detail}</p></div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

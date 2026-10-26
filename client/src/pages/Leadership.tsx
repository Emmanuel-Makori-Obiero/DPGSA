import { PageIntro } from "@/components/SiteLayout";

export default function Leadership() {
  return (
    <>
      <PageIntro
        eyebrow="Leadership"
        title="Meet the people behind DPGSA."
        description="The leadership page will introduce the association's executive team once the approved roster and photographs are available."
      />
      <section className="content-section" aria-labelledby="leadership-note-title">
        <div className="content-inner leadership-pending">
          <p className="section-label">Official profiles pending</p>
          <h2 id="leadership-note-title">No names or photos have been added yet.</h2>
          <p>This demo does not invent committee members, roles or biographies. Share the current leadership list and approved portraits to complete this page.</p>
        </div>
      </section>
    </>
  );
}

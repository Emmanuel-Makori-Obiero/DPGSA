import { PageIntro } from "@/components/SiteLayout";

export default function Membership() {
  return (
    <>
      <PageIntro
        eyebrow="Membership"
        title="Become part of the conversation."
        description="This page shows where prospective members will find approved eligibility and joining information once DPGSA UoN provides its official process."
      />
      <section className="content-section" aria-labelledby="membership-title">
        <div className="content-inner membership-page">
          <div><p className="section-kicker">Membership information pending</p><h2 id="membership-title">Registration is not active in this demo.</h2></div>
          <p>Official membership requirements, application instructions and contact details have not yet been confirmed. No application or payment is collected here.</p>
          <a className="blue-button" href="/contact">Contact information <span aria-hidden="true">›</span></a>
        </div>
      </section>
    </>
  );
}

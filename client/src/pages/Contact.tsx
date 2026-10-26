import { PageIntro } from "@/components/SiteLayout";

export default function Contact() {
  return (
    <>
      <PageIntro
        eyebrow="Contact"
        title="We would like to hear from you."
        description="Official DPGSA contact details have not been provided yet, so this demo does not display a made-up email address, social account or contact form."
      />
      <section className="content-section" aria-labelledby="contact-details-title">
        <div className="content-inner contact-pending">
          <p className="section-label">Contact details pending</p>
          <h2 id="contact-details-title">Official channels will be added here.</h2>
          <p>Share the association's preferred email address, social profiles and membership contact process to complete this page.</p>
          <a className="inline-link" href="/">Return to the homepage</a>
        </div>
      </section>
      <section className="content-section section-muted" aria-labelledby="membership-note-title">
        <div className="content-inner">
          <div className="membership-note">
            <div><p className="section-label">Membership</p><h2 id="membership-note-title">Registration is not active in this demo.</h2></div>
            <p>Once official eligibility, application steps and contacts are confirmed, this page can guide prospective members to the right process.</p>
          </div>
        </div>
      </section>
    </>
  );
}

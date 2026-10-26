import { PageIntro } from "@/components/SiteLayout";

const legalLinks = [
  {
    href: "https://new.kenyalaw.org/akn/ke/act/2019/24/eng@2022-12-31",
    label: "Kenya Data Protection Act, 2019",
  },
  {
    href: "https://www.odpc.go.ke/rights-of-a-data-subject/",
    label: "ODPC: rights of a data subject",
  },
  {
    href: "https://vercel.com/legal/privacy-notice",
    label: "Vercel Privacy Notice",
  },
];

export default function PrivacyPolicy() {
  return (
    <>
      <PageIntro
        eyebrow="Privacy policy"
        title="How this public site handles information."
        description="A short privacy notice for visitors to the DPGSA University of Nairobi website. Last updated 26 October 2026."
      />

      <section className="content-section privacy-policy-section">
        <div className="content-inner privacy-policy-copy">
          <p>
            This site shares information about the Data Privacy and Governance
            Students’ Association (DPGSA), its activities and membership
            registration. It is an information site, not an online account or
            application service.
          </p>

          <section aria-labelledby="privacy-what-we-collect">
            <h2 id="privacy-what-we-collect">Information you provide</h2>
            <p>
              The public pages do not include a contact form, membership
              application form, or account sign-up. The site does not ask you to
              submit personal details to view its pages. If you choose to send a
              message through LinkedIn or Instagram, that message is handled by
              the relevant platform and shared with the Association only because
              you sent it.
            </p>
          </section>

          <section aria-labelledby="privacy-hosting">
            <h2 id="privacy-hosting">Website hosting and technical data</h2>
            <p>
              The site is hosted by Vercel. In the ordinary operation and
              security of its services, Vercel may process technical information
              such as IP addresses, request and server-log details, and device
              or usage information. For more information about Vercel’s handling
              of that data, read its{" "}
              <a href={legalLinks[2].href} target="_blank" rel="noreferrer">
                Privacy Notice
              </a>
              . This site does not currently embed third-party advertising or
              analytics tags.
            </p>
          </section>

          <section aria-labelledby="privacy-cookies">
            <h2 id="privacy-cookies">Cookies and preferences</h2>
            <p>
              The public pages do not currently use advertising,
              personalised-content or analytics cookies. The privacy banner
              stores your choice in a first-party cookie named{" "}
              <code>dpgsa_cookie_consent</code> for six months so it can
              remember whether you accepted or rejected optional cookies. No
              optional tracking is currently active. You can change your choice
              using Cookie settings in the footer, or clear DPGSA site cookies
              in your browser settings; the banner will then appear again.
            </p>
            <p>
              If optional cookies are introduced later, this notice will be
              updated and the saved preference will be respected.
            </p>
          </section>

          <section aria-labelledby="privacy-payments-and-photos">
            <h2 id="privacy-payments-and-photos">Payments and photographs</h2>
            <p>
              Membership information on this site includes an M-Pesa payment
              destination. Payment takes place outside the website; this site
              does not receive or process payment-card or M-Pesa transaction
              details.
            </p>
            <p>
              The public pages display photographs from the archive supplied for
              this site, including DPGSA activities and one wider-community
              group photo identified by its event backdrop. If you have a
              concern about a photograph or caption, contact the Association
              privately through one of the official social links below so it can
              be reviewed. Please do not post personal information in a public
              comment.
            </p>
          </section>

          <section aria-labelledby="privacy-rights">
            <h2 id="privacy-rights">Your privacy rights in Kenya</h2>
            <p>
              Section 26 of Kenya’s Data Protection Act, 2019 includes the right
              to be informed about the use of personal data, access that data,
              object to all or part of its processing, correct false or
              misleading data, and request deletion of false or misleading data.
              The Office of the Data Protection Commissioner (ODPC) also
              explains these rights. The links below provide the source text and
              further guidance.
            </p>
            <ul>
              {legalLinks.slice(0, 2).map(link => (
                <li key={link.href}>
                  <a href={link.href} target="_blank" rel="noreferrer">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <p>
              For a question or concern about this site, message DPGSA privately
              through its official LinkedIn or Instagram profile. The
              Association does not publish an email address on this website.
            </p>
          </section>

          <section aria-labelledby="privacy-external-links">
            <h2 id="privacy-external-links">Links to other services</h2>
            <p>
              LinkedIn and Instagram are external services with their own
              privacy practices. When you follow a link and use those services,
              their privacy notices apply to your activity there. This notice
              may be updated if the site’s content or features change.
            </p>
          </section>
        </div>
      </section>
    </>
  );
}

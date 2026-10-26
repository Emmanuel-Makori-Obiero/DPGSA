import { CircleCheck, ChevronRight } from "lucide-react";
import { PageIntro } from "@/components/SiteLayout";

const benefits = [
  "Learn from data privacy experts",
  "Build skills for law, tech & policy",
  "Network with peers & professionals",
  "Know your digital rights in Kenya",
];

export default function Membership() {
  return (
    <>
      <PageIntro
        eyebrow="Membership registration"
        title="Registration is now open."
        description="Ready to learn beyond the classroom? Join the Data Privacy and Governance Students Association and take the first step towards a safer digital future."
      />
      <section className="content-section registration-section">
        <div className="content-inner registration-layout">
          <div className="registration-copy">
            <p className="section-label">Why join?</p>
            <h2>Learn, engage and build skills for a safer digital future.</h2>
            <ul className="registration-benefits">
              {benefits.map(benefit => (
                <li key={benefit}>
                  <CircleCheck size={21} aria-hidden="true" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
            <div
              className="registration-payment"
              aria-labelledby="payment-title"
            >
              <p className="section-label">Registration fee</p>
              <h3 id="payment-title">KES 200</h3>
              <div className="payment-detail">
                <span>Pay via M-Pesa · Till number</span>
                <strong>1808373</strong>
              </div>
              <p className="payment-recipient">
                Recipient name: <strong>Bora Sarah</strong>
              </p>
              <p className="payment-source-note">
                These are the payment details shown on the membership poster
                supplied by the Association.
              </p>
            </div>
            <a className="blue-button" href="#registration-poster">
              View the registration poster{" "}
              <ChevronRight size={15} aria-hidden="true" />
            </a>
          </div>
          <figure className="registration-poster" id="registration-poster">
            <img
              src="/images/membership-registration-poster.jpeg"
              alt="DPGSA membership registration poster. Registration is now open; the fee is KES 200, payable via M-Pesa Till Number 1808373, name Bora Sarah. It shows two Association member group photographs and lists benefits of joining."
              loading="lazy"
            />
            <figcaption>
              Membership registration poster and Association photographs,
              supplied by the Association.
            </figcaption>
          </figure>
        </div>
      </section>
    </>
  );
}

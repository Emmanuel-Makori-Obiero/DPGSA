import {
  BookOpen,
  ChevronRight,
  Globe,
  Landmark,
  Scale,
  ShieldCheck,
} from "lucide-react";

const focusAreas = [
  { icon: Scale, title: "Digital Rights and Policy Regulation" },
  { icon: ShieldCheck, title: "Cybercrimes & Digital Fraud" },
  { icon: Globe, title: "Internet Governance" },
  { icon: Landmark, title: "Law and contemporary technologies" },
];

const activities = [
  [
    "Moots & Debates",
    "Annual moot competitions around legal-technology interests.",
  ],
  [
    "Legal Trainings and Workshops",
    "Training and workshops on data privacy and legal technology.",
  ],
  [
    "Knowledge Base",
    "Developing and maintaining Data Governance & Privacy learning materials.",
  ],
  [
    "Talks, podcasts and webinars",
    "Insights, commentary, interviews and discussions with practitioners.",
  ],
  [
    "Publications and engagement",
    "Research, digital media and community engagement on digital rights.",
  ],
];

export default function Home() {
  return (
    <>
      <section className="reference-hero" aria-labelledby="hero-title">
        <div className="reference-hero-overlay" />
        <div className="reference-hero-content">
          <p className="hero-kicker">
            Data Privacy and Governance Students’ Association · University of
            Nairobi, Parklands Campus Chapter
          </p>
          <h1 id="hero-title">
            Nurturing the next generation of technology and innovation law
            practitioners.
          </h1>
          <p>
            Explore data privacy, digital rights and legal technology with the
            University of Nairobi student community.
          </p>
          <a className="blue-button" href="/membership">
            Membership registration is open{" "}
            <ChevronRight size={15} aria-hidden="true" />
          </a>
        </div>
      </section>

      <section
        className="mission-section content-inner"
        aria-labelledby="mission-title"
      >
        <div className="mission-art">
          <div className="mission-art-blue" />
          <img
            src="/images/uon-entrance.jpg"
            alt="University of Nairobi entrance building."
            loading="lazy"
          />
        </div>
        <div className="mission-copy">
          <p className="section-kicker">Our mission</p>
          <h2 id="mission-title">
            To nurture the next generation of practitioners and experts in the
            area of technology and innovation law.
          </h2>
          <p className="mission-description">
            Connect with people learning about data privacy, governance and the
            relationship between law and technology.
          </p>
          <a className="blue-button" href="/about">
            About the Association <ChevronRight size={15} aria-hidden="true" />
          </a>
        </div>
      </section>

      <section className="about-band" aria-labelledby="focus-title">
        <div className="content-inner">
          <header className="center-section-heading">
            <p className="section-kicker">Our areas of interest</p>
            <h2 id="focus-title">Focus areas</h2>
            <p>
              Explore the intersections of law, data privacy and emerging
              technology.
            </p>
          </header>
          <div className="feature-cards focus-cards">
            {focusAreas.map(({ icon: Icon, title }) => (
              <article className="feature-card" key={title}>
                <Icon size={34} strokeWidth={1.7} aria-hidden="true" />
                <h3>{title}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        className="webinars-section content-inner"
        aria-labelledby="activities-title"
      >
        <div className="section-heading-row">
          <div>
            <p className="section-kicker">Learning and engagement</p>
            <h2 id="activities-title">Activities</h2>
          </div>
          <a className="text-button" href="/events">
            Explore activities <ChevronRight size={14} aria-hidden="true" />
          </a>
        </div>
        <div className="activity-list">
          {activities.map(([title, description]) => (
            <article className="activity-card" key={title}>
              <BookOpen size={21} aria-hidden="true" />
              <div>
                <h3>{title}</h3>
                <p>{description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="latest-section" aria-labelledby="vision-title">
        <div className="content-inner vision-block">
          <div>
            <p className="section-kicker">Our vision</p>
            <h2 id="vision-title">
              A global network of young Data Privacy &amp; Governance
              enthusiasts.
            </h2>
          </div>
          <blockquote>
            “To create a global network of young Data Privacy &amp; Governance
            enthusiasts across this educational institution and provide
            information, education, peer connections, and career support to the
            community to help them kickstart their law tech journey.”
          </blockquote>
        </div>
      </section>

      <section className="home-join">
        <div className="content-inner home-join-inner">
          <div>
            <p className="section-kicker">Membership</p>
            <h2>Registration is now open.</h2>
          </div>
          <a className="blue-button" href="/membership">
            View registration details{" "}
            <ChevronRight size={15} aria-hidden="true" />
          </a>
        </div>
      </section>
    </>
  );
}

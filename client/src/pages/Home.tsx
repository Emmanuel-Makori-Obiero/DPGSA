import {
  BookOpen,
  ChevronRight,
  Globe,
  Landmark,
  Scale,
  ShieldCheck,
} from "lucide-react";
import HomeHeroSlider from "@/components/site/HomeHeroSlider";
import PhotoGallery from "@/components/site/PhotoGallery";
import { essayCompetitionPhotos, meetingPhotos } from "@/data/clubPhotos";

const focusAreas = [
  { icon: Scale, title: "Digital Rights and Policy Regulation" },
  { icon: ShieldCheck, title: "Cybercrimes & Digital Fraud" },
  { icon: Globe, title: "Internet Governance" },
  { icon: Landmark, title: "Law and contemporary technologies" },
];

const activities = [
  {
    title: "Moots & Debates",
    description:
      "Annual moot competitions around legal technology areas of interest.",
  },
  {
    title: "Legal Trainings and Workshops",
    description: "Training and workshops on data privacy and legal technology.",
  },
  {
    title: "Knowledge Base",
    description:
      "Developing and maintaining Data Governance & Privacy learning materials.",
  },
  {
    title: "Talks, podcasts and webinars",
    description:
      "Insights, commentary, interviews and discussions with practitioners.",
  },
  {
    title: "Publications and engagement",
    description:
      "Research, digital media and community engagement on digital rights.",
  },
];

export default function Home() {
  return (
    <>
      <HomeHeroSlider />

      <section
        className="mission-section content-inner"
        id="home-mission"
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

      <PhotoGallery
        id="association-moments"
        eyebrow="Association moments"
        title="Learning and meeting together."
        description="A few moments from DPGSA meetings and essay-competition activities."
        photos={[meetingPhotos[0], meetingPhotos[1], essayCompetitionPhotos[1]]}
        tone="muted"
        mobileColumns={2}
      />

      <section
        className="about-band home-focus-section"
        aria-labelledby="focus-title"
      >
        <div className="content-inner home-focus-inner">
          <div className="home-focus-copy">
            <p className="section-kicker">Our areas of interest</p>
            <h2 id="focus-title">Focus areas</h2>
            <p className="home-focus-description">
              Explore the intersections of law, data privacy and emerging
              technology.
            </p>
            <a
              className="home-focus-resource-link"
              href="/resources#resource-focus-title"
            >
              Explore resources <ChevronRight size={16} aria-hidden="true" />
            </a>
          </div>
          <ul className="home-focus-deck" aria-label="DPGSA focus areas">
            {focusAreas.map(({ icon: Icon, title }, index) => (
              <li className="home-focus-item" key={title}>
                <a
                  className="home-focus-card"
                  href="/resources#resource-focus-title"
                  aria-label={`Learn more about ${title}`}
                >
                  <span className="home-focus-card-number" aria-hidden="true">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="home-focus-card-icon" aria-hidden="true">
                    <Icon size={24} strokeWidth={1.7} />
                  </span>
                  <span className="home-focus-card-copy">
                    <span>Focus area {String(index + 1).padStart(2, "0")}</span>
                    <strong>{title}</strong>
                  </span>
                  <span className="home-focus-card-link" aria-hidden="true">
                    Learn more <ChevronRight size={15} />
                  </span>
                </a>
              </li>
            ))}
          </ul>
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
        <div className="activity-list home-activity-list">
          {activities.map(({ title, description }) => (
            <article className="activity-card" key={title}>
              <BookOpen size={21} aria-hidden="true" />
              <div className="activity-card-copy">
                <h3>{title}</h3>
                <p>{description}</p>
                <a
                  className="card-learn-more"
                  href="/events#activities-list-title"
                  aria-label={`Learn more about ${title}`}
                >
                  Learn more <ChevronRight size={15} aria-hidden="true" />
                </a>
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

import type { ComponentType } from "react";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Publications from "@/pages/Publications";
import Events from "@/pages/Events";
import Resources from "@/pages/Resources";
import Membership from "@/pages/Membership";

type SiteRoute = {
  path: string;
  label: string;
  title: string;
  description: string;
  component: ComponentType;
};

export const siteRoutes: SiteRoute[] = [
  {
    path: "/",
    label: "Home",
    title: "DPGSA UoN | Data Privacy and Governance",
    description:
      "Meet the Data Privacy and Governance Students’ Association at the University of Nairobi, explore its activities, and find membership-registration information.",
    component: Home,
  },
  {
    path: "/about",
    label: "About Us",
    title: "About the Association | DPGSA UoN",
    description:
      "The Data Privacy and Governance Students’ Association at the University of Nairobi: mission, vision and focus areas.",
    component: About,
  },
  {
    path: "/publications",
    label: "Publications",
    title: "Research and Publications | DPGSA UoN",
    description:
      "Research, commentary, publication and knowledge-sharing activities of the DPGSA University of Nairobi chapter.",
    component: Publications,
  },
  {
    path: "/events",
    label: "Activities",
    title: "Activities | DPGSA UoN",
    description:
      "Moots, legal-technology training, practitioner talks, webinars and community engagement by DPGSA UoN.",
    component: Events,
  },
  {
    path: "/resources",
    label: "Resources",
    title: "Resources and Learning | DPGSA UoN",
    description:
      "Learning and knowledge-sharing activities across privacy, digital rights, cybersecurity and law-technology.",
    component: Resources,
  },
  {
    path: "/membership",
    label: "Membership",
    title: "Membership Registration | DPGSA UoN",
    description:
      "Membership registration is now open. Registration fee KES 200; M-Pesa Till Number 1808373; recipient Bora Sarah.",
    component: Membership,
  },
];

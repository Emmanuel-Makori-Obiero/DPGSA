import type { ComponentType } from "react";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Leadership from "@/pages/Leadership";
import Publications from "@/pages/Publications";
import Events from "@/pages/Events";
import Resources from "@/pages/Resources";
import Contact from "@/pages/Contact";

export type SiteRoute = {
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
    title: "DPGSA UoN | Home",
    description: "Explore the DPGSA UoN homepage demo, with an introduction to data protection, digital governance, publications and events.",
    component: Home,
  },
  {
    path: "/about",
    label: "About",
    title: "About DPGSA UoN | Data Protection and Governance",
    description: "Learn about the purpose and areas of interest planned for the Data Protection and Governance Students Association at the University of Nairobi.",
    component: About,
  },
  {
    path: "/leadership",
    label: "Leadership",
    title: "Leadership | DPGSA UoN",
    description: "Leadership page for the DPGSA UoN demo. Official executive names, roles and photographs are pending confirmation.",
    component: Leadership,
  },
  {
    path: "/publications",
    label: "Publications",
    title: "Publications | DPGSA UoN",
    description: "Browse the publications page demo. Sample article titles are fictional until verified DPGSA articles and Medium links are supplied.",
    component: Publications,
  },
  {
    path: "/events",
    label: "Events",
    title: "Events and Activities | DPGSA UoN",
    description: "Explore the events and activities page demo. Example dates and announcements are sample content, not official DPGSA events.",
    component: Events,
  },
  {
    path: "/resources",
    label: "Resources",
    title: "Resources and Learning | DPGSA UoN",
    description: "Preview the DPGSA UoN learning resources page. Example resources are illustrative and are not official recommendations.",
    component: Resources,
  },
  {
    path: "/contact",
    label: "Contact",
    title: "Contact | DPGSA UoN",
    description: "Contact page demo for DPGSA UoN. Official contact and social channels are pending confirmation.",
    component: Contact,
  },
];

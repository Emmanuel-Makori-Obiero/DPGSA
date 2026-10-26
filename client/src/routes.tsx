import type { ComponentType } from "react";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Leadership from "@/pages/Leadership";
import Publications from "@/pages/Publications";
import Events from "@/pages/Events";
import Resources from "@/pages/Resources";
import Membership from "@/pages/Membership";
import Contact from "@/pages/Contact";

export type SiteRoute = {
  path: string;
  label: string;
  title: string;
  description: string;
  component: ComponentType;
};

export const siteRoutes: SiteRoute[] = [
  { path: "/", label: "Home", title: "DPGSA UoN | Home", description: "Explore the DPGSA UoN website demo, with information about data protection, digital governance, publications and events.", component: Home },
  { path: "/about", label: "About Us", title: "About DPGSA UoN | Data Protection and Governance", description: "Learn about the proposed purpose and areas of interest for the Data Protection and Governance Students Association at the University of Nairobi.", component: About },
  { path: "/leadership", label: "Leadership", title: "Leadership | DPGSA UoN", description: "Leadership page for the DPGSA UoN demo. Official executive names, roles and photographs are pending confirmation.", component: Leadership },
  { path: "/publications", label: "Publications", title: "Publications | DPGSA UoN", description: "Browse the publications page demo. Sample titles are fictional until verified DPGSA articles and Medium links are supplied.", component: Publications },
  { path: "/events", label: "Events", title: "Webinars and Events | DPGSA UoN", description: "Explore the events and webinar page demo. Example dates and announcements are sample content, not official DPGSA events.", component: Events },
  { path: "/resources", label: "Resources", title: "Resources and Learning | DPGSA UoN", description: "Preview the DPGSA UoN learning resources page. Example materials are illustrative and not official recommendations.", component: Resources },
  { path: "/membership", label: "Membership", title: "Membership Information | DPGSA UoN", description: "Membership information page for the DPGSA UoN demo. Official membership requirements and registration are pending confirmation.", component: Membership },
  { path: "/contact", label: "Contact Us", title: "Contact | DPGSA UoN", description: "Contact page demo for DPGSA UoN. Official email and social channels are pending confirmation.", component: Contact },
];

import type { NavConfig } from "@/lib/types/nav.types";

// Built directly from /source-content/site-architecture.md — single source of
// truth for the mega-menu tree, anchor-hub children, and true sub-routes.
export const navConfig: NavConfig = {
  primary: [
    {
      label: "Solutions",
      href: "/solutions",
      children: [
        { label: "Greenfield Development", href: "/solutions#greenfield" },
        { label: "Code Modernization", href: "/solutions#modernization" },
        { label: "Application Support", href: "/solutions#app-support" },
        { label: "Infrastructure Support", href: "/solutions#infra-support" },
      ],
    },
    {
      label: "Platform",
      href: "/platform",
      children: [
        { label: "How It Works", href: "/platform#how" },
        { label: "Conductor", href: "/platform#conductor" },
        { label: "Atlas", href: "/platform#atlas" },
        { label: "Integrations", href: "/platform#integrations" },
      ],
    },
    {
      label: "Agents",
      href: "/agents",
      children: [
        { label: "Cartographer", href: "/agents#cartographer" },
        { label: "Architect", href: "/agents#architect" },
        { label: "Estimator", href: "/agents#estimator" },
        { label: "Critic", href: "/agents#critic" },
        { label: "Conductor", href: "/agents#conductor" },
        { label: "Examiner", href: "/agents#examiner" },
        { label: "Gatekeeper", href: "/agents#gatekeeper" },
        { label: "Scout", href: "/agents#scout" },
        { label: "Mentor", href: "/agents#mentor" },
      ],
    },
    {
      label: "Governance",
      href: "/governance",
      children: [
        { label: "HITL", href: "/governance#hitl" },
        { label: "Policy Gates", href: "/governance#policy" },
        { label: "Provenance", href: "/governance#provenance" },
        { label: "Security & Compliance", href: "/governance#security" },
        { label: "Deployment Options", href: "/governance#deployment" },
      ],
    },
    {
      label: "Why Synthetix",
      href: "/why",
      children: [
        { label: "Competitors", href: "/why#competitors" },
        { label: "Stakeholder Value", href: "/why#stakeholders" },
        { label: "Business Case", href: "/why#business-case" },
      ],
    },
    {
      label: "Resources",
      href: "/resources/blog",
      children: [
        { label: "Blog", href: "/resources/blog" },
        { label: "Case Studies", href: "/resources/cases" },
        { label: "Briefs", href: "/resources/briefs" },
        { label: "Docs", href: "/resources/docs" },
      ],
    },
    {
      label: "Company",
      href: "/company/story",
      children: [
        { label: "Story", href: "/company/story" },
        { label: "Team", href: "/company/team" },
        { label: "Careers", href: "/company/careers" },
        { label: "Contact", href: "/company/contact" },
      ],
    },
  ],
  requestDemoCta: { label: "Request a Demo", href: "/company/contact" },
  siteName: "Synthetix",
  footerTagline:
    "Governed agentic execution platform for enterprise software delivery.",
  footerColumns: [
    {
      title: "Platform",
      links: [
        { label: "How It Works", href: "/platform#how" },
        { label: "Conductor", href: "/platform#conductor" },
        { label: "Atlas", href: "/platform#atlas" },
        { label: "Integrations", href: "/platform#integrations" },
      ],
    },
    {
      title: "Solutions",
      links: [
        { label: "Greenfield", href: "/solutions#greenfield" },
        { label: "Modernization", href: "/solutions#modernization" },
        { label: "App Support", href: "/solutions#app-support" },
        { label: "Infra Support", href: "/solutions#infra-support" },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "Why Synthetix", href: "/why" },
        { label: "Governance", href: "/governance" },
        { label: "Contact", href: "/company/contact" },
      ],
    },
  ],
};

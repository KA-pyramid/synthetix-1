import type { LucideIcon } from "lucide-react";
import type { CTA, Stat } from "./content.types";

export interface HeroContent {
  eyebrow: string;
  title: string;
  subtitle: string;
  primaryCta: CTA;
  secondaryCta: CTA;
}

export interface ManifestoContent {
  title: string;
  body: string;
}

export interface PlatformCapability {
  icon: LucideIcon;
  title: string;
  body: string;
}

export interface PipelineStage {
  id: number;
  title: string;
  icon: LucideIcon;
  content: string;
  relatedIds: number[];
}

export interface HomeAgent {
  name: string;
  icon: LucideIcon;
  body: string;
}

export interface ProofPoint {
  metric: string;
  label: string;
}

export interface Testimonial {
  quote: string;
  attribution: string;
}

export interface BusinessCaseItem {
  icon: LucideIcon;
  title: string;
  body: string;
}

export interface FAQItem {
  q: string;
  a: string;
}

export interface SectionHeadingCopy {
  eyebrow?: string;
  title: string;
  body?: string;
}

export interface HomeContent {
  hero: HeroContent;
  stats: Stat[];
  manifesto: ManifestoContent;
  tracksHeading: SectionHeadingCopy;
  domainsHeading: SectionHeadingCopy;
  platformCapabilities: PlatformCapability[];
  agentWorkflowHeading: SectionHeadingCopy;
  pipelineStages: PipelineStage[];
  marqueeItems: string[];
  whySynthetixHeading: SectionHeadingCopy;
  otherAiTools: string[];
  synthetixTraits: string[];
  agentsGridHeading: SectionHeadingCopy;
  agentsGridSidebar: { rangeLabel: string; blurb: string };
  agentsGridCta: { title: string; body: string; ctaLabel: string };
  agents: HomeAgent[];
  platformProofHeading: SectionHeadingCopy;
  proofPoints: ProofPoint[];
  testimonialsHeading: SectionHeadingCopy;
  testimonials: Testimonial[];
  businessCaseHeading: SectionHeadingCopy;
  businessCase: BusinessCaseItem[];
  faqHeading: SectionHeadingCopy;
  faqs: FAQItem[];
  ctaBand: { title: string; body: string; primaryCta: CTA; secondaryCta: CTA };
}

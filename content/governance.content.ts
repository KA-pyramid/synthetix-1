import type {
  AutonomyMode,
  DeploymentOption,
  PolicyClass,
} from "@/lib/types/governance.types";

// TODO: source copy not yet provided — /source-content has no Governance.md yet.
// Anchor ids (#hitl, #policy, #provenance, #security, #deployment) are ground
// truth from site-architecture.md. All copy below is a placeholder.
export const governanceContent: {
  hero: { eyebrow: string; title: string; body: string };
  hitl: { title: string; body: string; modes: AutonomyMode[] };
  policy: { title: string; body: string; classes: PolicyClass[] };
  provenance: { title: string; body: string };
  security: { title: string; body: string };
  deployment: { title: string; body: string; options: DeploymentOption[] };
} = {
  hero: { eyebrow: "", title: "", body: "" }, // TODO: source copy not yet provided
  hitl: { title: "", body: "", modes: [] }, // TODO: source copy not yet provided
  policy: { title: "", body: "", classes: [] }, // TODO: source copy not yet provided
  provenance: { title: "", body: "" }, // TODO: source copy not yet provided
  security: { title: "", body: "" }, // TODO: source copy not yet provided
  deployment: { title: "", body: "", options: [] }, // TODO: source copy not yet provided
};

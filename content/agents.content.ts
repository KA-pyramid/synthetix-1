import type { AgentProfile } from "@/lib/types/agent.types";

// TODO: source copy not yet provided — /source-content has no Agents.md yet.
// Slugs, order, and names below are ground truth from site-architecture.md
// (workflow order: Cartographer → Architect → Estimator → Critic →
// Conductor → Examiner → Gatekeeper → Scout → Mentor). Every other field is
// a placeholder pending the real per-agent profile copy.
export const agentsContent: { hero: { eyebrow: string; title: string; body: string }; agents: AgentProfile[] } = {
  hero: {
    eyebrow: "", // TODO: source copy not yet provided
    title: "", // TODO: source copy not yet provided
    body: "", // TODO: source copy not yet provided
  },
  agents: [
    { slug: "cartographer", order: 1, name: "Cartographer", stage: "", role: "", headline: "", body: "", inputs: [], outputs: [] },
    { slug: "architect", order: 2, name: "Architect", stage: "", role: "", headline: "", body: "", inputs: [], outputs: [] },
    { slug: "estimator", order: 3, name: "Estimator", stage: "", role: "", headline: "", body: "", inputs: [], outputs: [] },
    { slug: "critic", order: 4, name: "Critic", stage: "", role: "", headline: "", body: "", inputs: [], outputs: [] },
    { slug: "conductor", order: 5, name: "Conductor", stage: "", role: "", headline: "", body: "", inputs: [], outputs: [] },
    { slug: "examiner", order: 6, name: "Examiner", stage: "", role: "", headline: "", body: "", inputs: [], outputs: [] },
    { slug: "gatekeeper", order: 7, name: "Gatekeeper", stage: "", role: "", headline: "", body: "", inputs: [], outputs: [] },
    { slug: "scout", order: 8, name: "Scout", stage: "", role: "", headline: "", body: "", inputs: [], outputs: [] },
    { slug: "mentor", order: 9, name: "Mentor", stage: "", role: "", headline: "", body: "", inputs: [], outputs: [] },
  ],
};

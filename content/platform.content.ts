export interface PlatformPipelineStage {
  order: string;
  title: string;
  body: string;
  agents: string[];
}

export interface IntegrationCategory {
  category: string;
  items: string[];
}

export interface PlatformContent {
  hero: { eyebrow: string; title: string; body: string };
  pipeline: {
    title: string;
    tag: string;
    intro: string;
    stages: PlatformPipelineStage[];
  };
  conductor: {
    title: string;
    body: string;
    note: string;
    moduleDeliveryStates: string[];
    portfolioOperations: string[];
  };
  atlas: {
    title: string;
    body: string;
    whatAtlasIndexes: string[];
    whatYouGet: string[];
  };
  integrations: {
    title: string;
    body: string;
    categories: IntegrationCategory[];
  };
  cta: { title: string; primary: string; secondary: string };
}

// Verbatim from /source-content/Platform.md — do not paraphrase.
export const platformContent: PlatformContent = {
  hero: {
    eyebrow: "Platform",
    title:
      "The command layer that builds, modernizes, and operates your enterprise estate.",
    body: "Most enterprises run on systems that are too complex to change fast and too critical to change wrong. Synthetix changes that. One governed pipeline that builds new applications, modernizes legacy estates, and keeps production systems running, with full human oversight at every stage that matters.",
  },

  pipeline: {
    title: "The pipeline.",
    tag: "Discover → Analyze → Architect → Build → Verify → Govern.",
    intro:
      "Agents flow work between stages with confidence-scored evidence at every step.",
    stages: [
      {
        order: "01",
        title: "Discover",
        body: "Agents ingest the brief, the estate, or the incident. Identify scope, constraints, regulatory posture, and what's already known vs. needs investigation.",
        agents: ["Scout", "Cartographer"],
      },
      {
        order: "02",
        title: "Analyze",
        body: "Path-level comprehension. Cartographer builds the Atlas graph: code, IaC, topology, integrations, data. Risk vectors identified with confidence scores.",
        agents: ["Cartographer", "Scout"],
      },
      {
        order: "03",
        title: "Architect",
        body: "Target-state design grounded in the analysis. Estimator sizes the work. Critic reviews the architecture for drift, gaps, and unsafe choices before human gate.",
        agents: ["Architect", "Estimator", "Critic"],
      },
      {
        order: "04",
        title: "Build",
        body: "Generation agents work in parallel waves to produce code, infrastructure, integrations. Conductor maintains delivery rhythm; Mentor surfaces guidance in-IDE.",
        agents: ["Builder Swarm", "Conductor", "Mentor"],
      },
      {
        order: "05",
        title: "Verify",
        body: "Examiner generates and runs tests. Coverage threshold gating. Failed units route back to the swarm. Performance against your SLAs measured before promotion.",
        agents: ["Examiner", "Critic"],
      },
      {
        order: "06",
        title: "Govern",
        body: "Gatekeeper enforces policy, change classification, and audit. Provenance recorded for every decision. Human approval at promotion. Reversible by design.",
        agents: ["Gatekeeper"],
      },
    ],
  },

  conductor: {
    title: "Conductor.",
    body: "The orchestration engine. Manages delivery state, parallelism, dependencies, and wave coordination across every active engagement. Conductor is the runtime that makes the pipeline repeatable, observable, and reversible. It schedules agent runs, routes their outputs to the next stage, enforces gates, and gives you a portfolio view across multiple engagements.",
    note: '"Conductor" the orchestrator is distinct from "Conductor" the agent (which handles program rhythm and stakeholder narrative). The pipeline runs them together.',
    moduleDeliveryStates: [
      "Per-module progress tracking with confidence at each stage",
      "Reversible waves with audit-grade rollback",
      "Cross-engagement dependency mapping",
    ],
    portfolioOperations: [
      "Multi-tenant runs across business units",
      "Resource governance and budget controls",
      "Real-time risk surface across active programs",
    ],
  },

  atlas: {
    title: "Atlas.",
    body: "The knowledge graph. A cross-domain, queryable model of your estate — code, infrastructure, topology, integrations, data lineage as one connected world. Most AI tools see the file in the editor. Atlas sees the entire estate as one graph including every function call, every IaC dependency, every API contract, every data table, every service mesh route. Agents query Atlas before they act.",
    whatAtlasIndexes: [
      "Application code at path level, across every supported language",
      "Infrastructure as code: Terraform, Ansible, Helm, CloudFormation",
      "Network and service topology including K8s and VMware",
      "Integration contracts: REST, GraphQL, message buses, batch feeds",
      "Data lineage across schemas, lakes, and streams",
    ],
    whatYouGet: [
      "Estate intelligence dashboard with concentration mapping",
      "Drift detection between declared and observed reality",
      "Blast-radius queries for any proposed change",
      "Provenance trace from any artifact back to its origin",
      "Cross-engagement institutional memory that compounds",
    ],
  },

  integrations: {
    title: "Slots into your stack.",
    body: "No rip and replace. Synthetix plugs into your existing source control, CI/CD, observability, identity, and cloud from day one.",
    categories: [
      {
        category: "Source control",
        items: ["GitHub", "GitLab", "Bitbucket", "Azure DevOps", "self-hosted Git"],
      },
      {
        category: "CI / CD",
        items: ["Jenkins", "GitHub Actions", "GitLab CI", "Azure Pipelines", "Argo", "CircleCI"],
      },
      {
        category: "Observability",
        items: ["Datadog", "Splunk", "Grafana", "New Relic", "Dynatrace", "OpenTelemetry"],
      },
      {
        category: "Cloud & on-prem",
        items: ["AWS", "Azure", "GCP", "VMware", "OpenShift", "air-gapped"],
      },
      {
        category: "Infrastructure as code",
        items: ["Terraform", "Ansible", "CloudFormation", "Pulumi", "Crossplane", "Helm"],
      },
      {
        category: "Identity & secrets",
        items: [
          "Okta",
          "Azure Entra ID",
          "Ping",
          "HashiCorp Vault",
          "CyberArk",
          "AWS Secrets Manager",
        ],
      },
      {
        category: "Knowledge & PM",
        items: ["Jira", "Linear", "Confluence", "Notion", "SharePoint", "Azure Boards"],
      },
      {
        category: "Communications",
        items: ["Slack", "Microsoft Teams", "Email", "PagerDuty", "custom webhooks"],
      },
    ],
  },

  cta: {
    title: "See the platform in motion.",
    primary: "Book a platform walkthrough →",
    secondary: "Meet the agents",
  },
};

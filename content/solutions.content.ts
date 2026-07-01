import type { SolutionTrack } from "@/lib/types/solution.types";

export interface SolutionsContent {
  heading: { title: string; body: string };
  tracks: SolutionTrack[];
  platformNote: { title: string; body: string };
  cta: { primary: string; secondary: string };
}

// Verbatim from /source-content/Solutions.md — do not paraphrase.
export const solutionsContent: SolutionsContent = {
  heading: {
    title: "One Platform. Four Enterprise Outcomes.",
    body: "Enterprise software delivery spans four distinct operational demands: building net-new capability, modernizing legacy estates, sustaining production applications, and governing complex infrastructure. Synthetix addresses all four through a single coordinated agent layer — the same governance framework, the same evidence pipeline, the same audit trail.",
  },

  tracks: [
    {
      slug: "greenfield",
      functionalName: "Greenfield Development",
      brandFrame: "Imagine.",
      body: "Translating business intent into governed, release-ready software is where most AI tools reach their limit. Synthetix does not assist engineers — it deploys a coordinated agent team that owns the full delivery arc: requirements, architecture, build, test, and governance. Your leadership directs outcomes, not keystrokes.",
      whatAgentsDo: [
        "Interpret business briefs and produce structured capability requirements grounded in technical and market evidence",
        "Generate target-state architecture aligned to your technology standards, platform contracts, and compliance obligations",
        "Produce sign-off-ready work breakdowns with risk-adjusted timelines a CFO and PMO can defend in the steering committee",
        "Stand up application scaffolds, APIs, infrastructure, and CI/CD pipelines in parallel",
        "Gate every artifact through the Critic agent before any output reaches a human reviewer",
      ],
      outcomes: [
        "14 → 2 weeks from business brief to working scaffold",
        "Zero boilerplate written by hand",
        "85%+ test coverage from day one",
      ],
      forWhom:
        "CTOs accelerating product delivery, platform teams establishing new services, business units launching regulated digital capability.",
      agentsEngaged: [
        "Scout",
        "Architect",
        "Estimator",
        "Critic",
        "Conductor",
        "Examiner",
      ],
      typicalEngagement:
        "New customer portal, partner API platform, regulated workflow automation, internal capability launch. 4–12 weeks to production.",
    },
    {
      slug: "modernization",
      functionalName: "Code Modernization",
      brandFrame: "Reimagine.",
      body: "Enterprise modernization programs fail at discovery — not delivery. Organizations invest months in SME interviews, manual dependency mapping, and stale documentation before a single line of target-state code is written. Synthetix compresses that pre-delivery burden into days and executes migration at program scale, in parallel waves, under full governance.",
      whatAgentsDo: [
        "Comprehend legacy estates at path level across VB6, COBOL, PowerBuilder, RPG, Java, Kotlin, PHP, and mainframe",
        "Construct the Atlas knowledge graph — code, IaC, topology, integrations, and data lineage unified into one queryable model",
        "Generate target-state architecture with risk-scored dependency vectors and wave sequencing your steering committee can approve",
        "Execute migration across thousands of files simultaneously through coordinated agent swarms",
        "Enforce Critic and Gatekeeper gates on every wave — no unsafe change advances without policy clearance",
      ],
      outcomes: [
        "1.5M+ lines of code per engagement",
        "1/10th the cost of consulting-led modernization",
        "10x faster discovery and planning",
      ],
      forWhom:
        "CIOs retiring legacy stacks, transformation programs stalled by estate complexity, financial services and insurance organizations with mainframe and 4GL dependencies.",
      agentsEngaged: [
        "Cartographer",
        "Architect",
        "Estimator",
        "Critic",
        "Conductor",
        "Examiner",
        "Gatekeeper",
      ],
      typicalEngagement:
        "Mainframe-to-cloud migration, VB6 desktop replacement, monolith decomposition, language modernization. 6–18 months to estate complete.",
    },
    {
      slug: "app-support",
      functionalName: "Application Support",
      brandFrame: "Evolve. (Applications)",
      body: "Production application support is a high-volume, high-repetition workload that consumes disproportionate senior engineering capacity. Synthetix changes that operating model — agents triage, investigate, and propose resolutions with evidence-backed precision, escalating to engineering only when judgment is required.",
      whatAgentsDo: [
        "Classify and triage incoming incidents against the Atlas knowledge graph, correlating signals across services and infrastructure layers",
        "Conduct root-cause analysis with confidence-scored evidence chains traceable to specific code paths and integration dependencies",
        "Generate fix proposals and verified hotfix branches that clear the Examiner gate before human review",
        "Refresh runbooks and technical documentation continuously as production systems evolve",
        "Capture tribal knowledge through the Mentor agent during every resolution cycle, feeding institutional intelligence back to the platform",
      ],
      outcomes: [
        "9/10 incidents triaged and resolved autonomously",
        "2/3 of L1/L2 support effort reclaimed",
        "24/7 continuous always-on coverage",
      ],
      forWhom:
        "Application support organizations, on-call engineering teams under capacity pressure, and regulated industries requiring audit-grade incident handling and documented resolution trails.",
      agentsEngaged: [
        "Cartographer",
        "Critic",
        "Examiner",
        "Gatekeeper",
        "Mentor",
      ],
      typicalEngagement:
        "Embedded into your support workflow alongside Jira, PagerDuty, Slack, Teams, and your observability stack. Continuous operation from day one.",
    },
    {
      slug: "infra-support",
      functionalName: "Infrastructure Support",
      brandFrame: "Evolve. (Infrastructure)",
      body: "Infrastructure operations in regulated enterprises carry compounding risk. Configuration drift accumulates silently, IaC diverges from deployed state, and change control processes struggle to keep pace with the rate of infrastructure events across cloud, hybrid, and on-prem environments. Manual review cannot scale to the surface area. Synthetix addresses this at the estate level — with continuous intelligence, policy-gated remediation, and zero ungated changes.",
      whatAgentsDo: [
        "Comprehend IaC across Terraform, Ansible, CloudFormation, Pulumi, Crossplane, and Helm",
        "Detect drift between declared state and observed reality across cloud, hybrid, and on-prem environments",
        "Map network topology and service mesh end-to-end across VMware, Kubernetes, fabric, and routing layers",
        "Generate remediation proposals with four-tier change classification and policy gate enforcement before any action reaches production",
        "Refresh infrastructure runbooks from live topology — documentation that remains accurate under operational pressure",
      ],
      outcomes: [
        "Zero unverified configuration changes",
        "100% topology coverage across the estate",
        "Real-time drift detection and reconciliation",
      ],
      forWhom:
        "Platform engineering, SRE, cloud and network operations, and infrastructure security teams managing compliance across complex regulated estates.",
      agentsEngaged: [
        "Cartographer",
        "Architect",
        "Examiner",
        "Gatekeeper",
        "Mentor",
      ],
      typicalEngagement:
        "Continuous. Air-gappable and on-premises deployment options available for regulated and sovereign environments. Integrates with your observability stack and ticketing platform.",
    },
  ],

  platformNote: {
    title: "The platform behind every solution",
    body: "Each workflow runs on the same Conductor orchestration pipeline, draws intelligence from the same Atlas knowledge graph, and is governed by the same configurable HITL checkpoints and policy gate framework. One command layer. Four enterprise outcomes.",
  },

  cta: {
    primary: "Request a Tailored Demo",
    secondary: "See the Platform",
  },
};

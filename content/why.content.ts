export interface CompetitorTool {
  name: string;
  body: string;
}

export interface ComparisonRow {
  capability: string;
  copilots: string;
  agentFrameworks: string;
  autonomousCoders: string;
  synthetix: string;
}

export interface StakeholderBlock {
  role: string;
  accountability: string;
  body: string;
}

export interface CostDriver {
  title: string;
  body: string;
}

export interface ProgramEconomicsRow {
  stage: string;
  traditionalCost: string;
  synthetixImpact: string;
}

export interface WhyContent {
  hero: { title: string; body: string };
  competitors: {
    title: string;
    intro: string;
    tools: CompetitorTool[];
    distinctTitle: string;
    distinctBody: string;
    comparisonTable: ComparisonRow[];
  };
  stakeholders: {
    title: string;
    intro: string;
    blocks: StakeholderBlock[];
  };
  businessCase: {
    title: string;
    intro: string;
    costDrivers: CostDriver[];
    economicsTable: ProgramEconomicsRow[];
    proofRunModel: string;
    roiSummary: string;
  };
  cta: { title: string; body: string; primary: string };
}

// Verbatim from /source-content/Why_Synthetix.md — do not paraphrase.
export const whyContent: WhyContent = {
  hero: {
    title: "Synthetix is Built for Enterprises That Cannot Afford to Get AI Wrong.",
    body: "Enterprise software delivery has a structural problem. The tools your teams are using today were built to assist individuals, not to govern programs. When the buying committee asks why Synthetix, the answer is not a feature comparison — it is a fundamentally different execution model.",
  },

  competitors: {
    title: "Agentic execution versus assistive suggestion.",
    intro: "Most AI tools on the market today operate in the same category: they accelerate individual effort. A developer writes faster, searches smarter, or generates a scaffold in seconds. The productivity gain is real. The delivery problem remains.\n\nSynthetix does not compete in the copilot category. It operates in a category of one: governed agentic delivery — where specialist agents own workflow stages, review each other's output, enforce policy, and produce signed audit evidence across the full program lifecycle.",
    tools: [
      {
        name: "GitHub Copilot / Cursor",
        body: "Copilots augment the individual contributor. They operate at file and repository scope, respond to a prompt, and forget the context between sessions. There is no workflow awareness, no estate intelligence, no cross-agent review, and no governance trail. For a single developer, the value is clear. For a regulated program spanning thirty legacy systems, the gap is structural.",
      },
      {
        name: "LangChain / Custom Agent Frameworks",
        body: "Framework toolkits enable teams to wire together agent workflows — but the orchestration logic, governance controls, error handling, and estate context all remain the responsibility of the engineering team. What looks like a platform is an integration project. Time-to-value extends from weeks into quarters, and the output is as auditable as the team has time to make it.",
      },
      {
        name: "Devin / Blitzy",
        body: "Autonomous coding agents extend the copilot model toward end-to-end task completion. The demos are compelling. The production record in regulated, complex estates — where audit trails, policy gates, and multi-domain dependencies are non-negotiable — is limited. These tools solve a development throughput problem. Synthetix solves a program governance problem.",
      },
    ],
    distinctTitle: "Where Synthetix is distinct",
    distinctBody: "The distinction is not speed of code generation. It is whether the platform can run a governed modernization program, produce defensible audit evidence, and operate within the risk and compliance requirements of a regulated enterprise without the CTO rebuilding the governance layer themselves.",
    comparisonTable: [
      {
        capability: "Scope",
        copilots: "File / repo",
        agentFrameworks: "Workflow",
        autonomousCoders: "Task",
        synthetix: "Full estate",
      },
      {
        capability: "Context",
        copilots: "Prompt session",
        agentFrameworks: "Wired pipeline",
        autonomousCoders: "Prompt session",
        synthetix: "Live knowledge graph",
      },
      {
        capability: "Review mechanism",
        copilots: "None",
        agentFrameworks: "DIY",
        autonomousCoders: "None",
        synthetix: "Critic + Examiner agents",
      },
      {
        capability: "Governance",
        copilots: "None",
        agentFrameworks: "DIY",
        autonomousCoders: "Partial logs",
        synthetix: "Policy gates + provenance",
      },
      {
        capability: "Human control",
        copilots: "Prompt-level",
        agentFrameworks: "Workflow-level",
        autonomousCoders: "Task-level",
        synthetix: "Configurable HITL per gate",
      },
      {
        capability: "Deployment",
        copilots: "Cloud",
        agentFrameworks: "Cloud / self-host",
        autonomousCoders: "Cloud",
        synthetix: "SaaS, on-prem, air-gap",
      },
      {
        capability: "Regulated industry fit",
        copilots: "Limited",
        agentFrameworks: "Variable",
        autonomousCoders: "Limited",
        synthetix: "Built for it",
      },
    ],
  },

  stakeholders: {
    title: "Every seat at the buying table has a different question. Here are the answers.",
    intro: "Enterprise software programs do not get approved by one executive. They move through a buying committee and each stakeholder evaluates the platform through the lens of their own accountability. Synthetix is designed to speak to all of them.",
    blocks: [
      {
        role: "CIO / CTO",
        accountability: "The accountability: modernization velocity without uncontrolled AI risk.",
        body: "The CTO's core tension in 2026 is not whether to deploy AI in the delivery pipeline; it is whether they can deploy it without introducing governance liabilities that exceed the speed gains. Synthetix resolves that tension. The nine-agent workforce operates within a governed pipeline, with configurable human gates, policy enforcement on every change, and signed provenance on every output. The result is an AI delivery program that the board can be briefed on and the auditor can review.",
      },
      {
        role: "Enterprise Architect",
        accountability: "The accountability: accurate system understanding and a defensible target-state design.",
        body: "Legacy estate comprehension is the highest-friction, highest-risk phase of any modernization program. Architects spend months building a picture of the estate that is out of date before the program begins. The Cartographer and Atlas knowledge graph compress that cycle by producing a path-level, evidence-backed model of the estate that the Architect agent uses to generate a defensible target-state design. Every architectural decision traces to a source in the graph.",
      },
      {
        role: "CISO / Risk",
        accountability: "The accountability: auditability, policy control, and safe deployment.",
        body: "For the CISO, the question is not whether Synthetix works; it is whether it can be trusted in a regulated environment. The answer rests on three foundations: configurable HITL checkpoints that keep humans in the loop at every gate the security team defines; policy enforcement baked into the Gatekeeper agent, not bolted on after generation; and signed provenance trails that produce audit-ready evidence without manual assembly. Air-gappable deployment ensures data never leaves the perimeter.",
      },
      {
        role: "CFO / Procurement",
        accountability: "The accountability: a credible business case and measurable return on investment.",
        body: "The CFO evaluates AI platform investments through a cost-reduction and risk lens. Synthetix reduces cost across five high-friction areas: legacy discovery, architecture planning, rework cycles, governance documentation, and SME dependency. The Business Case section below quantifies each lever. The CFO's minimum requirement — that the program can demonstrate measurable cost avoidance and time compression within a defined engagement window is addressed by the proof-run model.",
      },
      {
        role: "PMO / Transformation Lead",
        accountability: "The accountability: predictable delivery waves and measurable progress.",
        body: "Program management for a legacy modernization initiative typically involves assembling progress data from multiple teams, tools, and reporting cycles; often arriving too late to act on. The Conductor orchestration engine provides module-level status telemetry across every delivery state, from Discovered through Sealed. Wave dependencies, in-flight risks, and escalation signals are visible in one surface, not assembled from a portfolio of spreadsheets.",
      },
      {
        role: "Engineering Leadership",
        accountability: "The accountability: team productivity, quality standards, and knowledge retention.",
        body: "Senior engineering leaders carry two risks that Synthetix directly addresses. The first is institutional knowledge concentration where the system understanding required to safely modify a thirty-year estate lives in the heads of two or three engineers. The Mentor agent captures tribal knowledge as it is used and converts it into reusable execution intelligence on the platform.\n\nThe second is review quality at scale: the Critic and Examiner agents enforce code quality, test coverage gates, and scope-drift detection before output reaches human reviewers.",
      },
      {
        role: "Security Operations",
        accountability: "The accountability: policy-gated change control and compliance posture.",
        body: "Security operations teams evaluate every change-producing system through the lens of blast radius and reversibility. Synthetix implements a four-tier change classification model enforced by the Gatekeeper agent. Every change is categorized, gated, and reversible. Policy rules authored by the security team are enforced on every agent-generated output before promotion. The audit trail is produced by default, not reconstructed after the fact.",
      },
    ],
  },

  businessCase: {
    title: "Where the cost comes out of the program.",
    intro: "Enterprise software programs carry five categories of cost that do not generate delivery value: the effort to understand what exists, the effort to plan what to build, the rework when the plan turns out to be wrong, the cost of assembling governance evidence, and the dependency on individuals who hold knowledge no one else has. Synthetix attacks all five.",
    costDrivers: [
      {
        title: "Cost driver: Legacy discovery and system comprehension",
        body: "Discovery in a traditional modernization program runs four to twelve weeks of SME time, code review, architecture interviews, and documentation archaeology — producing an estate model that is already partially stale on delivery. The Cartographer agent and Atlas knowledge graph compress this to days. Path-level comprehension across the full estate is produced as a queryable, evidence-backed graph that the entire program works from. The compression in discovery cost alone typically justifies the engagement economics.",
      },
      {
        title: "Cost driver: Architecture and planning cycles",
        body: "Manual dependency mapping and estimation cycles are high-friction, high-rework activities. Decisions made on incomplete estate understanding are corrected through expensive change requests later in the program. The Architect and Estimator agents produce target-state designs, wave plans, and risk-adjusted timelines grounded in the Atlas knowledge graph — reducing planning cycle time and the downstream rework that under-informed planning produces.",
      },
      {
        title: "Cost driver: Rework and late-stage defect correction",
        body: "Rework is the most expensive cost category in software programs because it compounds. A missed dependency in design becomes a failed test in build, which becomes an escalation in production.\n\nThe Critic agent reviews every agent-generated output for hallucinations, scope drift, and unsafe migrations before promotion. The Examiner agent enforces test coverage gates with assertions that reflect real production behavior. The Gatekeeper blocks promotion of any output that does not meet the policy threshold. Together, these agents shift defect detection left — where correction costs a fraction of what it costs post-deployment.",
      },
      {
        title: "Cost driver: Governance and audit documentation",
        body: "In regulated industries, the cost of producing audit-ready evidence is substantial and largely manual — assembling decision logs, change records, test results, and approval trails after the fact, under time pressure, from multiple source systems. Synthetix produces provenance as a natural output of execution. Every agent action generates a signed evidence edge. Every policy gate produces a decision record. Audit documentation is not assembled — it is already there.",
      },
      {
        title: "Cost driver: SME dependency and knowledge concentration",
        body: "The risk of knowledge concentration in a legacy modernization program is both a cost and a delivery risk. Programs slow when the two engineers who understand the billing system are unavailable. Programs fail when they leave. The Mentor agent captures expert-level reasoning as it is applied — during code review, escalation handling, and design decisions — and converts it into reusable execution intelligence that the platform applies in future runs.",
      },
    ],
    economicsTable: [
      {
        stage: "Legacy discovery",
        traditionalCost: "4–12 weeks SME effort",
        synthetixImpact: "Compressed to days",
      },
      {
        stage: "Architecture and estimation",
        traditionalCost: "3–6 weeks planning cycles",
        synthetixImpact: "Produced from knowledge graph",
      },
      {
        stage: "Build and migration",
        traditionalCost: "High rework rate from incomplete discovery",
        synthetixImpact: "Rework rate reduced by pre-promotion review gates",
      },
      {
        stage: "Governance documentation",
        traditionalCost: "Manual assembly under audit pressure",
        synthetixImpact: "Captured by default during execution",
      },
      {
        stage: "Post-program knowledge retention",
        traditionalCost: "Exits with the project team",
        synthetixImpact: "Retained on platform as reusable intelligence",
      },
    ],
    proofRunModel: "Synthetix engagements begin with a bounded proof run against a real segment of the target estate. Within the first weeks, the platform produces: an estate comprehension report, a target-state architecture assessment, a wave plan with risk-adjusted estimates, and a governance provenance record — all generated against the actual environment, not a synthetic dataset. The proof run establishes the economic baseline and the delivery rhythm before a full program commitment is made.",
    roiSummary: "Cost reduction is delivered across discovery compression, planning acceleration, rework reduction, governance automation, and knowledge retention. Speed improvement is delivered across every stage from brief to production-ready output. Risk reduction is delivered through policy-gated, evidence-backed, reversible change control in environments where a failed deployment is a regulated event, not just a rollback.\n\nThe business case for Synthetix is not built on benchmark throughput numbers. It is built on what a program director, CFO, and CISO can each defend to their board — a governed, auditable, and demonstrably faster path through the highest-cost phases of enterprise software delivery.",
  },

  cta: {
    title: "See the platform running on a real estate.",
    body: "A proof run produces estate comprehension, architecture, wave plans, and governance evidence on your environment, in weeks.",
    primary: "Request a Walkthrough",
  },
};

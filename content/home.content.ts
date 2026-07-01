import {
  Shield,
  Brain,
  Building2,
  TrendingUp,
  Clock,
  Map as MapIcon,
  RefreshCw,
  FileCheck,
  Search,
  Network,
  LayoutGrid,
  Hammer,
  ShieldCheck,
  Scale,
  Workflow,
  Compass,
  Layers,
  GraduationCap,
  Calculator,
  Eye,
  Radar,
} from "lucide-react";
import type { HomeContent } from "@/lib/types/home.types";

// Verbatim from /source-content/Home_Page.md — do not paraphrase.
export const homeContent: HomeContent = {
  hero: {
    eyebrow: "Governed Agentic Execution Platform",
    title: "Govern Build Revamp Operate",
    subtitle:
      "Synthetix is a governed agentic execution platform for enterprise software delivery. Specialist agents run discovery, architecture, build, verification, and governance as one coordinated pipeline with policy gates and human oversight at every critical juncture.",
    primaryCta: { label: "Request a Demo", href: "#contact" },
    secondaryCta: { label: "Explore Synthetix", href: "#platform" },
  },

  stats: [
    { value: 300, suffix: "%", label: "Faster greenfield delivery cycles" },
    { value: 120, suffix: "+", label: "Reduction in legacy discovery effort" },
    { value: 100, suffix: "%", label: "Traceable artifacts, decisions, and gates" },
    { value: 24, suffix: "/7", label: "Continuous execution across the estate" },
    { value: 9, suffix: "/10", label: "Decisions resolved autonomously", padStart: 2 },
  ],

  manifesto: {
    title: "Enterprise AI that Operates within your Governance Framework",
    body: "Synthetix is purpose-built for enterprises who need more than a code generation tool. It is a governed agentic execution platform that compresses the highest-friction stages of software delivery including system discovery, architecture planning, migration execution, incident triage, and compliance documentation into one auditable, policy-controlled pipeline. Other AI tools suggest. Synthetix decides, acts, and is accountable. Not autocomplete.",
  },

  tracksHeading: {
    eyebrow: "Solutions",
    title: "AI-First Digital Engineering Platform with Governed Execution Layer",
  },

  domainsHeading: {
    title:
      "Every Enterprise Motion Delivered at a Pace Traditional Engineering Can't Match",
    body: "Synthetix runs all four enterprise delivery motions through one orchestration layer, one knowledge graph, and one governance framework. It delivers unified visibility, predictable delivery cadence, and audit-ready output at every stage.",
  },

  platformCapabilities: [
    {
      icon: Shield,
      title: "Governed by Design",
      body: "Every agent action is policy-gated, evidence-backed, and reversible. Synthetix enforces governance as part of execution.",
    },
    {
      icon: Brain,
      title: "Estate-Wide Intelligence",
      body: "Synthetix reads the full estate including code, IaC, topology, integrations, and data schema. It builds a live knowledge graph that survives change and powers every downstream agent decision.",
    },
    {
      icon: Building2,
      title: "Built for Regulated Industries",
      body: "Air-gappable deployment, four-tier change classification, HITL checkpoints, and signed audit trails designed for banking, financial services, insurance, and healthcare operating environments.",
    },
    {
      icon: TrendingUp,
      title: "Measurable Business Outcomes",
      body: "From compressed discovery timelines to reduced L2/L3 support burden, every Synthetix capability maps to a cost driver your CFO and CIO can track against a business case.",
    },
  ],

  agentWorkflowHeading: {
    eyebrow: "How It Works",
    title: "From Discovery to Deployment — Six Governed Stages",
    body: "Synthetix runs each stage in sequence with policy gates, human checkpoints, and a signed audit trail throughout.",
  },

  pipelineStages: [
    {
      id: 1,
      title: "Discover",
      icon: Search,
      content:
        "Agents crawl the full estate including application code, IaC, network topology, integrations, and data schemas, building a verified inventory before a single line of migration code is written.",
      relatedIds: [2],
    },
    {
      id: 2,
      title: "Analyze",
      icon: Network,
      content:
        "Synthetix constructs a path-level knowledge graph with confidence scoring across every system dependency, concentration risk, and regulatory touchpoint.",
      relatedIds: [1, 3],
    },
    {
      id: 3,
      title: "Architect",
      icon: LayoutGrid,
      content:
        "Target-state architecture is generated from verified estate intelligence, infrastructure constraints, and business intent. Risk-adjusted delivery wave sequencing your PMO can present to the steering committee.",
      relatedIds: [2, 4],
    },
    {
      id: 4,
      title: "Build",
      icon: Hammer,
      content:
        "Specialist generation agents execute migration in parallel waves. Each unit is reviewed by peer agents before it advances, with full module-level state tracking in Conductor.",
      relatedIds: [3, 5],
    },
    {
      id: 5,
      title: "Verify",
      icon: ShieldCheck,
      content:
        "The Examiner agent generates and runs tests across units, integration, and contract surfaces. Coverage gating prevents promotion until quality thresholds are met.",
      relatedIds: [4, 6],
    },
    {
      id: 6,
      title: "Govern",
      icon: Scale,
      content:
        "The Gatekeeper agent classifies every change across four tiers, enforces policy, signs evidence, and records a complete, audit-ready decision trail.",
      relatedIds: [5],
    },
  ],

  marqueeItems: [
    "Governed",
    "Traceable",
    "Auditable",
    "Reversible",
    "Evidence-Backed",
    "Policy-Gated",
    "Enterprise-Ready",
  ],

  whySynthetixHeading: {
    eyebrow: "The Distinction",
    title: "Why Synthetix",
  },

  otherAiTools: [
    "Assist individual developers at file level",
    "Prompt-driven, one task at a time",
    "No memory or context between sessions",
    "Limited auditability and governance",
    "Cloud-only deployment models",
    "No estate-wide system comprehension",
  ],

  synthetixTraits: [
    "Orchestrates governed delivery end-to-end",
    "Estate-wide context across code, infra, data, and integrations",
    "Signed provenance and policy gates on every action",
    "Four-tier change classification with reversible delivery waves",
    "Air-gappable for regulated and sovereign environments",
    "Specialist agents that review each output",
  ],

  agentsGridHeading: {
    eyebrow: "Agent Workforce",
    title: "The AI Agent Workforce Behind the Pipeline",
  },

  agentsGridSidebar: {
    rangeLabel: "01 – 09",
    blurb:
      "Nine specialist agents, each scoped to a single accountable function, coordinated by Conductor across discovery, architecture, build, verification, and governance.",
  },

  agentsGridCta: {
    title: "See It Run On Your Estate.",
    body: "Synthetix compresses discovery, architecture, build, and governance into one auditable execution run on a real segment of your environment.",
    ctaLabel: "Book a Demo",
  },

  agents: [
    {
      name: "Conductor",
      icon: Workflow,
      body: "Portfolio orchestration across every module, every delivery state, and every business function from Discovered to Sealed.",
    },
    {
      name: "Cartographer",
      icon: Compass,
      body: "Path-level comprehension of legacy code and IaC across Java, COBOL, VB6, PHP, Terraform and beyond.",
    },
    {
      name: "Architect",
      icon: Layers,
      body: "Target-state architecture generation synthesized from verified estate intelligence, infrastructure footprint, and business intent.",
    },
    {
      name: "Examiner",
      icon: ShieldCheck,
      body: "Native test generation and execution with coverage gating that reflects real system behavior across units, integration, and contract surfaces.",
    },
    {
      name: "Gatekeeper",
      icon: Scale,
      body: "Four-tier change classification with promote-gate semantics, versioned, reversible, and fully audited for regulated industries.",
    },
    {
      name: "Mentor",
      icon: GraduationCap,
      body: "Real-time guidance in the IDE that captures tribal knowledge as it is used and feeds it back into the platform.",
    },
    {
      name: "Estimator",
      icon: Calculator,
      body: "Risk-adjusted timelines and work breakdowns your CFO and PMO can defend in the steering committee.",
    },
    {
      name: "Critic",
      icon: Eye,
      body: "Inline review that catches hallucinations, scope drift, and unsafe migrations before anything reaches sign-off.",
    },
    {
      name: "Scout",
      icon: Radar,
      body: "Evidence-grounded intelligence at the pace the engagement demands.",
    },
  ],

  platformProofHeading: {
    eyebrow: "Enterprise Runs",
    title: "Representative Enterprise Performance",
  },

  proofPoints: [
    {
      metric: "184 modules mapped",
      label:
        "Modernization Run: Legacy estate analyzed with dependency maps, risk scoring, evidence edges, and governed migration waves.",
    },
    {
      metric: "Policy gates applied",
      label:
        "Governance Run: Policy gates, human checkpoints, signed evidence, and reversible change classification applied across the workflow.",
    },
    {
      metric: "Faster RCA and triage",
      label:
        "Support Run: Production incidents triaged with root-cause paths, fix recommendations, and refreshed runbooks.",
    },
    {
      metric: "Policy-gated remediation",
      label:
        "Infrastructure Run: IaC, topology, drift, and change impact assessed before remediation reaches approval.",
    },
  ],

  testimonialsHeading: {
    eyebrow: "Platform Views",
    title: "What the Platform Delivers",
  },

  testimonials: [
    {
      quote:
        "Synthetix is designed for enterprises that need AI execution with auditability, traceability, and human control built into every workflow.",
      attribution: "Enterprise AI Governance — Synthetix Platform View",
    },
    {
      quote:
        "From requirements and architecture to build, verification, support, and operations, Synthetix compresses the full lifecycle into one governed execution layer.",
      attribution: "Enterprise Delivery — Synthetix Platform View",
    },
    {
      quote:
        "Every artifact, decision, test, gate, and promotion can be traced back to source evidence, giving leaders confidence in AI-assisted execution.",
      attribution: "Enterprise Modernization — Synthetix Platform View",
    },
  ],

  businessCaseHeading: {
    eyebrow: "Business Case",
    title: "Capabilities, translated into cost, time, and risk.",
  },

  businessCase: [
    {
      icon: Clock,
      title: "Legacy Discovery",
      body: "Compress discovery into days with agent-led estate analysis.",
    },
    {
      icon: MapIcon,
      title: "Architecture Planning",
      body: "Evidence-backed architecture, wave plans, and risk-adjusted estimates from one knowledge graph.",
    },
    {
      icon: RefreshCw,
      title: "Rework",
      body: "Critic + Gatekeeper agents and gated reviews cut rework before promotion.",
    },
    {
      icon: FileCheck,
      title: "Governance Documentation",
      body: "Provenance, policy gates, and decision trails captured by default.",
    },
  ],

  faqHeading: {
    title: "Before You Explore Synthetix",
  },

  faqs: [
    {
      q: "How is Synthetix different from GitHub Copilot or other AI coding assistants?",
      a: "Copilots assist individual developers at file level. Synthetix orchestrates governed delivery across the full lifecycle including discovery, architecture, build, verification, and governance with estate-wide context and signed provenance on every action. It is a command layer, not a productivity add-on.",
    },
    {
      q: "Can Synthetix be deployed in air-gapped or on-premises environments?",
      a: "Yes. Synthetix is designed for regulated enterprise environments including banking, insurance, healthcare, and sovereign systems where cloud-only deployments are not permissible. Full air-gap and on-premises deployment options are available.",
    },
    {
      q: "How does Synthetix handle governance and compliance requirements?",
      a: "Every Synthetix action passes through configurable policy gates, HITL checkpoints, and four-tier change classification. All agent decisions are signed, traceable to source evidence, and output an audit-ready decision trail by default, not assembled after the fact.",
    },
    {
      q: "What legacy technology stacks does Synthetix support?",
      a: "Synthetix comprehends a broad range of legacy and modern technology stacks including COBOL, VB6, Java, Kotlin, PHP, Terraform, Ansible, CloudFormation, and Pulumi across mainframe, on-premises, hybrid, and cloud environments.",
    },
    {
      q: "How long does a typical enterprise modernization engagement take to reach value?",
      a: "Synthetix platform is structured to compress pre-delivery effort, discovery, dependency mapping, and architecture planning, from weeks or months to days. A representative proof run can be scoped and executed on a defined estate segment to establish baseline metrics before full program commitment.",
    },
  ],

  ctaBand: {
    title: "See It Run On Your Estate.",
    body: "Synthetix compresses discovery, architecture, build, and governance into one auditable execution run on a real segment of your environment.",
    primaryCta: { label: "Request a Demo", href: "#contact" },
    secondaryCta: { label: "Explore Synthetix", href: "#platform" },
  },
};

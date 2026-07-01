import type {
  AutonomyMode,
  DeploymentOption,
  PolicyClass,
  ProvenanceRecord,
  SecurityControl,
} from "@/lib/types/governance.types";

export interface GovernanceContent {
  hero: { eyebrow: string; title: string; body: string };
  hitl: { title: string; body: string; modes: AutonomyMode[] };
  policy: { title: string; body: string; classes: PolicyClass[] };
  provenance: { title: string; body: string; records: ProvenanceRecord[] };
  security: { title: string; body: string; controls: SecurityControl[] };
  deployment: { title: string; body: string; options: DeploymentOption[] };
  cta: { eyebrow: string; title: string; primary: string };
}

// Verbatim from /source-content/Governance.md — do not paraphrase.
export const governanceContent: GovernanceContent = {
  hero: {
    eyebrow: "Governance",
    title:
      "Enterprise-grade governance for every agent, workflow, and regulated environment.",
    body: "Autonomous agents deliver material value only when the organisation retains full control of how they operate. Synthetix is built on that principle.\n\nEvery agent action passes through a configurable human gate. Every decision carries a signed evidence trail. Every change is classified, policy-checked, and reversible before it reaches production.\n\nYour security team writes the rules, compliance function sets the thresholds, and risk appetite determines how much autonomy each workflow carries. Synthetix enforces it all, consistently, across every run, every environment, and every regulated domain you operate in.",
  },

  hitl: {
    title: "Configure exactly where human judgment takes over.",
    body: "Configure human review checkpoints per workflow, environment, and change classification. Three baseline operating modes. Infinite tuning.\n\nExpand autonomy as confidence builds. Pull it back whenever the risk profile changes.\n\nStart with maximum oversight on day one. Agents propose, your team decides, and nothing moves without explicit approval. As the platform accumulates confidence across successive runs, oversight parameters expand in step with demonstrated performance.\n\nMature continuous operations can reach high autonomy, where engineers receive exception escalations and periodic digests rather than reviewing every commit. Every autonomy setting is configurable at the environment level, the policy level, and the individual change classification level. You pull it back whenever the risk profile demands it.",
    modes: [
      {
        name: "Low Autonomy",
        context: "First engagement, tier-zero systems, regulated change classes.",
        agentPosture:
          "Agents surface options with full evidence packages. Execution waits on human instruction.",
        humanTouchpoints: "Every change reviewed by an engineer before promotion.",
      },
      {
        name: "Mid Autonomy",
        context: "Default configuration for Greenfield and Modernization programs.",
        agentPosture:
          "Agents draft, generate, and peer-review. Critic and Gatekeeper enforce quality and compliance in-flight.",
        humanTouchpoints:
          "Architecture sign-off and promotion gates at designated pipeline stages.",
      },
      {
        name: "High Autonomy",
        context:
          "Continuous Application and Infrastructure Support operations, low risk change classes.",
        agentPosture:
          "Agents act within policy boundaries. Gatekeeper enforces. Humans review by exception and escalation.",
        humanTouchpoints: "Exception escalation thresholds and scheduled program digests.",
      },
    ],
  },

  policy: {
    title: "Your policies. Enforced on every change.",
    body: "Your security and compliance function writes the policy. Gatekeeper enforces it on every change, every commit, every promotion without exception.\n\nThe Synthetix policy library defines what is permitted, what is blocked, and what requires escalation. Coverage spans security posture, regulatory compliance constraints, architectural conventions, code quality standards, license obligations, data residency requirements, and your organization's bespoke rules. Your teams write the rules. The platform enforces them uniformly.",
    classes: [
      {
        name: "Security",
        examples:
          "SAST and DAST findings, secrets detection, vulnerable dependency introduction.",
        defaultAction:
          "Block at Gatekeeper. Auto-routed to the security team with full evidence.",
      },
      {
        name: "Compliance",
        examples: "HIPAA, PCI-DSS, SOX, GDPR data-handling, and retention obligations.",
        defaultAction: "Block. Full audit trail generated with regulatory rule citation.",
      },
      {
        name: "Architecture",
        examples:
          "Service boundary violations, prohibited dependencies, deprecated API references.",
        defaultAction: "Block. Compliant alternative surfaced by the Architect agent.",
      },
      {
        name: "Quality",
        examples:
          "Test coverage thresholds, code complexity limits, contract drift. Threshold-gated.",
        defaultAction: "Routed to the Examiner agent for remediation.",
      },
      {
        name: "Operations",
        examples:
          "Change windows, blast-radius constraints, deployment velocity controls. Enforced against approved change windows.",
        defaultAction: "Escalation workflow triggered on breach.",
      },
    ],
  },

  provenance: {
    title: "Every decision. Signed. Traceable.",
    body: "Confidence-scored evidence chains, signed decision trails, audit-ready output. From an agent's first action to your final production promotion.\n\nEvery artifact produced by Synthetix, whether a line of code, an architecture decision, or a requirement specification, is traceable to its complete evidence base. Which agent produced it. Which Atlas graph nodes informed it. What confidence score it carries. Who approved it. What it depended on. And when it shipped. That record does not exist solely for internal review. It is the basis of every regulator inquiry, every postmortem, and every change advisory board submission.",
    records: [
      {
        name: "Decision Trail",
        whatsCaptured:
          "Every agent action: input state, output, confidence score, and downstream effect in sequence.",
        auditUse: "Internal assurance review. Regulatory inquiry. Incident postmortem.",
      },
      {
        name: "Evidence Chain",
        whatsCaptured:
          "Atlas graph nodes referenced. Source code paths traversed. External signals consumed.",
        auditUse: "Explain any output back to its grounding data, step by step.",
      },
      {
        name: "Approval Graph",
        whatsCaptured:
          "Who approved what change, when, with what contextual evidence, under which policy version.",
        auditUse: "SOX and ISO audit submissions. Change Advisory Board records.",
      },
      {
        name: "Reversibility Record",
        whatsCaptured:
          "Wave checkpoints across every run. Rollback plan attached to every promotion.",
        auditUse: "Incident response. Failed migration recovery. Regulatory rollback obligation.",
      },
    ],
  },

  security: {
    title:
      "The certifications, controls, and audit posture that regulated industries require before any contract is signed.",
    body: "Healthcare providers, financial institutions, insurance carriers, and public sector agencies operate under compliance obligations that are non-negotiable and non-deferrable. Every vendor evaluation begins with the same question: does your platform meet our regulatory requirements? Synthetix answers that question before it is asked. The certifications and security controls on this page are not items on a future roadmap. They are first-class engineering priorities, built into the platform from day one.",
    controls: [
      {
        category: "Certifications",
        name: "SOC 2 Type II",
        coverage:
          "Annual independent audit covering security, availability, processing integrity, confidentiality, and privacy.",
        status: "ACTIVE",
      },
      {
        category: "Certifications",
        name: "ISO 27001",
        coverage:
          "Information Security Management System certification. Expected Q3 2026.",
        status: "IN PROGRESS",
      },
      {
        category: "Certifications",
        name: "HIPAA",
        coverage:
          "BAA available. Compliance posture aligned with HIPAA Security and Privacy Rules.",
        status: "IN PROGRESS",
      },
      {
        category: "Certifications",
        name: "FedRAMP Moderate",
        coverage:
          "Authorization process initiated. Air-gapped deployment available for federal customers.",
        status: "ROADMAP",
      },
      {
        category: "Certifications",
        name: "GDPR",
        coverage:
          "EU data residency available. Data Processing Agreements in place. Right-to-erasure honored.",
        status: "ACTIVE",
      },
      {
        category: "Security Controls",
        name: "Encryption",
        coverage:
          "AES-256 at rest. TLS 1.3 in transit. Customer-managed keys (BYOK) supported.",
        status: "ACTIVE",
      },
      {
        category: "Security Controls",
        name: "Access Controls",
        coverage:
          "SSO via Okta, Microsoft Entra ID, and Ping Identity. SCIM provisioning. Role-based and attribute-based access controls.",
        status: "ACTIVE",
      },
      {
        category: "Security Controls",
        name: "Penetration Testing",
        coverage:
          "Continuous independent third-party security assessment. Findings remediated and independently re-validated.",
        status: "ACTIVE",
      },
    ],
  },

  deployment: {
    title:
      "Every deployment model your regulated environment demands, supported without compromise.",
    body: "The right deployment model is determined by your regulatory obligations, your internal risk policy, and the sensitivity of the systems Synthetix will operate on. For organisations where cloud is the answer, multi-tenant SaaS is available across US, EU, and APAC regions with data residency pinning.\n\nFor those requiring dedicated infrastructure, single-tenant VPC deployment runs within your own AWS, Azure, or GCP account. For on-premises mandates, Synthetix deploys as a Kubernetes-native workload on your own infrastructure. For sovereign and classified environments, fully air-gapped operation is supported with updates delivered via signed and verified bundles.",
    options: [
      {
        tag: "--- Default",
        mode: "SaaS",
        name: "Multi-tenant",
        description:
          "Multi-tenant cloud. Fastest to start. Available in US, EU, and APAC regions. Region pinning for data residency.",
      },
      {
        tag: "--- Isolated",
        mode: "Single-tenant VPC",
        name: "Single-tenant",
        description:
          "Dedicated VPC in your AWS, Azure, or GCP account. Customer-managed keys. No shared infrastructure.",
      },
      {
        tag: "--- On-Prem",
        mode: "Self-hosted",
        name: "Self-hosted",
        description:
          "Run Synthetix on your own infrastructure — on-premises, VMware, or OpenShift. Kubernetes-native deployment.",
      },
      {
        tag: "--- Regulated",
        mode: "Air-gapped",
        name: "Air-gapped",
        description:
          "Fully disconnected operation for sovereign, classified, and life-safety environments. Updates via signed and verified bundles.",
      },
    ],
  },

  cta: {
    eyebrow: "--- Begin",
    title: "Bring your compliance team.",
    primary: "Request a Governance Review",
  },
};

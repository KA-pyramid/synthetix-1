export interface AutonomyMode {
  name: string;
  context: string;
  agentPosture: string;
  humanTouchpoints: string;
}

export interface PolicyClass {
  name: string;
  examples: string;
  defaultAction: string;
}

export interface ProvenanceRecord {
  name: string;
  whatsCaptured: string;
  auditUse: string;
}

export interface SecurityControl {
  category: "Certifications" | "Security Controls";
  name: string;
  coverage: string;
  status: "ACTIVE" | "IN PROGRESS" | "ROADMAP";
}

export interface DeploymentOption {
  tag: string;
  mode: string;
  name: string;
  description: string;
}

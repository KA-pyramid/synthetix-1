export interface AgentProfile {
  slug: string;
  order: number;
  name: string;
  stage: string;
  role: string;
  headline: string;
  body: string;
  inputs: string[];
  outputs: string[];
  note?: string;
}

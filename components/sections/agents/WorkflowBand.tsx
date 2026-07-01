import type { AgentProfile } from "@/lib/types/agent.types";

export interface WorkflowBandProps {
  title: string;
  body: string;
  agents: AgentProfile[];
}

export function WorkflowBand({ title, agents }: WorkflowBandProps) {
  return (
    <div className="border border-dashed border-neutral-500 p-8 font-mono text-xs text-neutral-500">
      WorkflowBand — awaiting 21st.dev component ({title}, {agents.length} agents, workflow order)
    </div>
  );
}

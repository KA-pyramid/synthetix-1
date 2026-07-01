import type { AgentProfile } from "@/lib/types/agent.types";

// Full profile (Inputs/Outputs), used in AgentProfileSection.
export interface AgentDetailBlockProps {
  agent: AgentProfile;
}

export function AgentDetailBlock({ agent }: AgentDetailBlockProps) {
  return (
    <div className="border border-dashed border-neutral-500 p-4 font-mono text-xs text-neutral-500">
      AgentDetailBlock — awaiting 21st.dev component ({agent.name}: {agent.inputs.length} inputs, {agent.outputs.length} outputs)
    </div>
  );
}

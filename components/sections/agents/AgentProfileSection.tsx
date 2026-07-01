import type { AgentProfile } from "@/lib/types/agent.types";

// Reused 9x on /agents, one per agent — driven by props.
export interface AgentProfileSectionProps {
  agent: AgentProfile;
}

export function AgentProfileSection({ agent }: AgentProfileSectionProps) {
  return (
    <div
      id={agent.slug}
      className="border border-dashed border-neutral-500 p-8 font-mono text-xs text-neutral-500"
    >
      AgentProfileSection — awaiting 21st.dev component ({agent.order}. {agent.name})
    </div>
  );
}

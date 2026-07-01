import type { LucideIcon } from "lucide-react";

// Compact card, used in AgentsGridSection + WorkflowBand.
export interface AgentCardProps {
  name: string;
  icon: LucideIcon;
  body: string;
}

export function AgentCard({ name, body }: AgentCardProps) {
  return (
    <div className="border border-dashed border-neutral-500 p-4 font-mono text-xs text-neutral-500">
      AgentCard — awaiting 21st.dev component ({name}: {body})
    </div>
  );
}

import type { DeploymentOption } from "@/lib/types/governance.types";

// Governance#deployment (4 cards).
export interface DeploymentOptionCardProps {
  option: DeploymentOption;
}

export function DeploymentOptionCard({ option }: DeploymentOptionCardProps) {
  return (
    <div className="border border-dashed border-neutral-500 p-4 font-mono text-xs text-neutral-500">
      DeploymentOptionCard — awaiting 21st.dev component ({option.name || "content TODO"})
    </div>
  );
}

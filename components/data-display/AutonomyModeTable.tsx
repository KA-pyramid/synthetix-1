import type { AutonomyMode } from "@/lib/types/governance.types";

// Governance#hitl.
export interface AutonomyModeTableProps {
  modes: AutonomyMode[];
}

export function AutonomyModeTable({ modes }: AutonomyModeTableProps) {
  return (
    <div className="border border-dashed border-neutral-500 p-4 font-mono text-xs text-neutral-500">
      AutonomyModeTable — awaiting 21st.dev component ({modes.length} modes)
    </div>
  );
}

import type { PolicyClass } from "@/lib/types/governance.types";

// Governance#policy.
export interface PolicyClassTableProps {
  classes: PolicyClass[];
}

export function PolicyClassTable({ classes }: PolicyClassTableProps) {
  return (
    <div className="border border-dashed border-neutral-500 p-4 font-mono text-xs text-neutral-500">
      PolicyClassTable — awaiting 21st.dev component ({classes.length} classes)
    </div>
  );
}

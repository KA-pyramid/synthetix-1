import type { Stat } from "@/lib/types/content.types";

export interface StatBlockProps {
  stat: Stat;
}

export function StatBlock({ stat }: StatBlockProps) {
  return (
    <div className="border border-dashed border-neutral-500 p-4 font-mono text-xs text-neutral-500">
      StatBlock — awaiting 21st.dev component ({stat.label})
    </div>
  );
}

import type { Stat } from "@/lib/types/content.types";
import { StatBlock } from "./StatBlock";

export interface StatGridProps {
  stats: Stat[];
}

export function StatGrid({ stats }: StatGridProps) {
  return (
    <div className="border border-dashed border-neutral-500 p-4 font-mono text-xs text-neutral-500">
      StatGrid — awaiting 21st.dev component
      {stats.map((stat) => (
        <StatBlock key={stat.label} stat={stat} />
      ))}
    </div>
  );
}

import type { ComparisonRow, CompetitorTool } from "@/content/why.content";

export interface CompetitorsSectionProps {
  title: string;
  intro: string;
  tools: CompetitorTool[];
  distinctTitle: string;
  distinctBody: string;
  comparisonTable: ComparisonRow[];
}

export function CompetitorsSection({ title, tools, comparisonTable }: CompetitorsSectionProps) {
  return (
    <div id="competitors" className="border border-dashed border-neutral-500 p-8 font-mono text-xs text-neutral-500">
      CompetitorsSection — awaiting 21st.dev component ({title}, {tools.length} tools, {comparisonTable.length} comparison rows)
    </div>
  );
}

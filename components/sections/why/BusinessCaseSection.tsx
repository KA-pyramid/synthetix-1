import type { CostDriver, ProgramEconomicsRow } from "@/content/why.content";

export interface BusinessCaseSectionProps {
  title: string;
  intro: string;
  costDrivers: CostDriver[];
  economicsTable: ProgramEconomicsRow[];
  proofRunModel: string;
  roiSummary: string;
}

export function BusinessCaseSection({ title, costDrivers, economicsTable }: BusinessCaseSectionProps) {
  return (
    <div id="business-case" className="border border-dashed border-neutral-500 p-8 font-mono text-xs text-neutral-500">
      BusinessCaseSection — awaiting 21st.dev component ({title}, {costDrivers.length} cost drivers, {economicsTable.length} economics rows)
    </div>
  );
}

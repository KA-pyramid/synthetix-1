import type { StakeholderBlock } from "@/content/why.content";

export interface StakeholderValueSectionProps {
  title: string;
  intro: string;
  blocks: StakeholderBlock[];
}

export function StakeholderValueSection({ title, blocks }: StakeholderValueSectionProps) {
  return (
    <div id="stakeholders" className="border border-dashed border-neutral-500 p-8 font-mono text-xs text-neutral-500">
      StakeholderValueSection — awaiting 21st.dev component ({title}, {blocks.length} stakeholder blocks)
    </div>
  );
}

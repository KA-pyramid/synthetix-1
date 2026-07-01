export interface StakeholderValueSectionProps {
  title: string;
  body: string;
}

export function StakeholderValueSection({ title }: StakeholderValueSectionProps) {
  return (
    <div id="stakeholders" className="border border-dashed border-neutral-500 p-8 font-mono text-xs text-neutral-500">
      StakeholderValueSection — awaiting 21st.dev component ({title || "content TODO"})
    </div>
  );
}

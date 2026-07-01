export interface SecurityComplianceSectionProps {
  title: string;
  body: string;
}

export function SecurityComplianceSection({ title }: SecurityComplianceSectionProps) {
  return (
    <div id="security" className="border border-dashed border-neutral-500 p-8 font-mono text-xs text-neutral-500">
      SecurityComplianceSection — awaiting 21st.dev component ({title || "content TODO"})
    </div>
  );
}

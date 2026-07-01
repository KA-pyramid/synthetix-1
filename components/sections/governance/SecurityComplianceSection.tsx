import type { SecurityControl } from "@/lib/types/governance.types";

export interface SecurityComplianceSectionProps {
  title: string;
  body: string;
  controls: SecurityControl[];
}

export function SecurityComplianceSection({ title, controls }: SecurityComplianceSectionProps) {
  return (
    <div id="security" className="border border-dashed border-neutral-500 p-8 font-mono text-xs text-neutral-500">
      SecurityComplianceSection — awaiting 21st.dev component ({title}, {controls.length} controls)
    </div>
  );
}

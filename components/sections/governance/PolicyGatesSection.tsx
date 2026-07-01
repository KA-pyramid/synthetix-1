import type { PolicyClass } from "@/lib/types/governance.types";

export interface PolicyGatesSectionProps {
  title: string;
  body: string;
  classes: PolicyClass[];
}

export function PolicyGatesSection({ title, classes }: PolicyGatesSectionProps) {
  return (
    <div id="policy" className="border border-dashed border-neutral-500 p-8 font-mono text-xs text-neutral-500">
      PolicyGatesSection — awaiting 21st.dev component ({title || "content TODO"}, {classes.length} classes)
    </div>
  );
}

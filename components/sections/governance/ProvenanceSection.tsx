import type { ProvenanceRecord } from "@/lib/types/governance.types";

export interface ProvenanceSectionProps {
  title: string;
  body: string;
  records: ProvenanceRecord[];
}

export function ProvenanceSection({ title, records }: ProvenanceSectionProps) {
  return (
    <div id="provenance" className="border border-dashed border-neutral-500 p-8 font-mono text-xs text-neutral-500">
      ProvenanceSection — awaiting 21st.dev component ({title}, {records.length} records)
    </div>
  );
}

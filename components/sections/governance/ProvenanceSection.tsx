export interface ProvenanceSectionProps {
  title: string;
  body: string;
}

export function ProvenanceSection({ title }: ProvenanceSectionProps) {
  return (
    <div id="provenance" className="border border-dashed border-neutral-500 p-8 font-mono text-xs text-neutral-500">
      ProvenanceSection — awaiting 21st.dev component ({title || "content TODO"})
    </div>
  );
}

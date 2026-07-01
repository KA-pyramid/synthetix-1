export interface CompetitorsSectionProps {
  title: string;
  body: string;
}

export function CompetitorsSection({ title }: CompetitorsSectionProps) {
  return (
    <div id="competitors" className="border border-dashed border-neutral-500 p-8 font-mono text-xs text-neutral-500">
      CompetitorsSection — awaiting 21st.dev component ({title || "content TODO"})
    </div>
  );
}

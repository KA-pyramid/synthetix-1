export interface BusinessCaseSectionProps {
  title: string;
  body: string;
}

export function BusinessCaseSection({ title }: BusinessCaseSectionProps) {
  return (
    <div id="business-case" className="border border-dashed border-neutral-500 p-8 font-mono text-xs text-neutral-500">
      BusinessCaseSection — awaiting 21st.dev component ({title || "content TODO"})
    </div>
  );
}

// Why#business-case.
export interface CostDriverBlockProps {
  title: string;
  body: string;
}

export function CostDriverBlock({ title, body }: CostDriverBlockProps) {
  return (
    <div className="border border-dashed border-neutral-500 p-4 font-mono text-xs text-neutral-500">
      CostDriverBlock — awaiting 21st.dev component ({title}: {body})
    </div>
  );
}

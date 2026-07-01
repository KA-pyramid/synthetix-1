// Only for genuinely sequential content (the 6-stage pipeline, the 9-step
// agent workflow). Do not use on non-sequential content (FAQs, agent grid,
// integration categories).
export interface NumberedStepProps {
  index: number;
  title: string;
  body: string;
}

export function NumberedStep({ index, title }: NumberedStepProps) {
  return (
    <div className="border border-dashed border-neutral-500 p-4 font-mono text-xs text-neutral-500">
      NumberedStep — awaiting 21st.dev component ({index} — {title})
    </div>
  );
}

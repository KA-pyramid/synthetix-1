export interface SectionEyebrowProps {
  text: string;
}

export function SectionEyebrow({ text }: SectionEyebrowProps) {
  return (
    <div className="border border-dashed border-neutral-500 p-2 font-mono text-xs text-neutral-500">
      SectionEyebrow — awaiting 21st.dev component ({text})
    </div>
  );
}

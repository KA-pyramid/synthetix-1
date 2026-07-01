export interface BrandFrameTagProps {
  text: string;
}

export function BrandFrameTag({ text }: BrandFrameTagProps) {
  return (
    <div className="border border-dashed border-neutral-500 p-2 font-mono text-xs italic text-neutral-500">
      BrandFrameTag — awaiting 21st.dev component ({text})
    </div>
  );
}

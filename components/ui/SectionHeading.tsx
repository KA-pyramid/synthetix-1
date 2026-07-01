import type { SectionHeading as SectionHeadingContent } from "@/lib/types/content.types";

export interface SectionHeadingProps {
  heading: SectionHeadingContent;
}

export function SectionHeading({ heading }: SectionHeadingProps) {
  return (
    <div className="border border-dashed border-neutral-500 p-4 font-mono text-xs text-neutral-500">
      SectionHeading — awaiting 21st.dev component ({heading.title})
    </div>
  );
}

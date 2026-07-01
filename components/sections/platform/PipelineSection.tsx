import type { PlatformContent } from "@/content/platform.content";

export interface PipelineSectionProps {
  pipeline: PlatformContent["pipeline"];
}

export function PipelineSection({ pipeline }: PipelineSectionProps) {
  return (
    <div id="how" className="border border-dashed border-neutral-500 p-8 font-mono text-xs text-neutral-500">
      PipelineSection — awaiting 21st.dev component ({pipeline.stages.length} stages)
    </div>
  );
}

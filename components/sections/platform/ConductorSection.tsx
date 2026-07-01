import type { PlatformContent } from "@/content/platform.content";

export interface ConductorSectionProps {
  conductor: PlatformContent["conductor"];
}

export function ConductorSection({ conductor }: ConductorSectionProps) {
  return (
    <div id="conductor" className="border border-dashed border-neutral-500 p-8 font-mono text-xs text-neutral-500">
      ConductorSection — awaiting 21st.dev component ({conductor.title})
    </div>
  );
}

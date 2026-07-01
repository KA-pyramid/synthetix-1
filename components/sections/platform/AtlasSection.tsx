import type { PlatformContent } from "@/content/platform.content";

export interface AtlasSectionProps {
  atlas: PlatformContent["atlas"];
}

export function AtlasSection({ atlas }: AtlasSectionProps) {
  return (
    <div id="atlas" className="border border-dashed border-neutral-500 p-8 font-mono text-xs text-neutral-500">
      AtlasSection — awaiting 21st.dev component ({atlas.title})
    </div>
  );
}

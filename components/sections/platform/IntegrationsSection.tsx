import type { PlatformContent } from "@/content/platform.content";

export interface IntegrationsSectionProps {
  integrations: PlatformContent["integrations"];
}

export function IntegrationsSection({ integrations }: IntegrationsSectionProps) {
  return (
    <div id="integrations" className="border border-dashed border-neutral-500 p-8 font-mono text-xs text-neutral-500">
      IntegrationsSection — awaiting 21st.dev component ({integrations.categories.length} categories)
    </div>
  );
}

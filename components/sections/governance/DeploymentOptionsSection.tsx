import type { DeploymentOption } from "@/lib/types/governance.types";

export interface DeploymentOptionsSectionProps {
  title: string;
  body: string;
  options: DeploymentOption[];
}

export function DeploymentOptionsSection({ title, options }: DeploymentOptionsSectionProps) {
  return (
    <div id="deployment" className="border border-dashed border-neutral-500 p-8 font-mono text-xs text-neutral-500">
      DeploymentOptionsSection — awaiting 21st.dev component ({title || "content TODO"}, {options.length} options)
    </div>
  );
}

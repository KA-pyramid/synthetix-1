import type { AutonomyMode } from "@/lib/types/governance.types";

export interface HITLSectionProps {
  title: string;
  body: string;
  modes: AutonomyMode[];
}

export function HITLSection({ title, modes }: HITLSectionProps) {
  return (
    <div id="hitl" className="border border-dashed border-neutral-500 p-8 font-mono text-xs text-neutral-500">
      HITLSection — awaiting 21st.dev component ({title || "content TODO"}, {modes.length} modes)
    </div>
  );
}

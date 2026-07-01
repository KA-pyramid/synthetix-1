import type { SolutionTrack } from "@/lib/types/solution.types";

// Reused 4x on /solutions — Greenfield, Modernization, App Support, Infra
// Support — driven by props, not 4 separate components.
export interface SolutionTrackSectionProps {
  track: SolutionTrack;
}

export function SolutionTrackSection({ track }: SolutionTrackSectionProps) {
  return (
    <div
      id={track.slug}
      className="border border-dashed border-neutral-500 p-8 font-mono text-xs text-neutral-500"
    >
      SolutionTrackSection — awaiting 21st.dev component ({track.functionalName} / {track.brandFrame})
    </div>
  );
}

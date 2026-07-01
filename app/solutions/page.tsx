import { SolutionsHero } from "@/components/sections/solutions/SolutionsHero";
import { SolutionTrackSection } from "@/components/sections/solutions/SolutionTrackSection";
import { CTABand } from "@/components/sections/shared/CTABand";
import { getSolutionsContent } from "@/lib/content/solutions";

export default function SolutionsPage() {
  const { heading, tracks, cta } = getSolutionsContent();

  return (
    <main>
      <SolutionsHero heading={heading} />
      {tracks.map((track) => (
        <SolutionTrackSection key={track.slug} track={track} />
      ))}
      <CTABand
        title={cta.primary}
        body={cta.secondary}
        primaryCta={{ label: cta.primary, href: "/company/contact" }}
        secondaryCta={{ label: cta.secondary, href: "/platform" }}
      />
    </main>
  );
}

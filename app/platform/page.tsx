import { PlatformHero } from "@/components/sections/platform/PlatformHero";
import { PipelineSection } from "@/components/sections/platform/PipelineSection";
import { ConductorSection } from "@/components/sections/platform/ConductorSection";
import { AtlasSection } from "@/components/sections/platform/AtlasSection";
import { IntegrationsSection } from "@/components/sections/platform/IntegrationsSection";
import { CTABand } from "@/components/sections/shared/CTABand";
import { getPlatformContent } from "@/lib/content/platform";

export default function PlatformPage() {
  const { hero, pipeline, conductor, atlas, integrations, cta } = getPlatformContent();

  return (
    <main>
      <PlatformHero hero={hero} />
      <PipelineSection pipeline={pipeline} />
      <ConductorSection conductor={conductor} />
      <AtlasSection atlas={atlas} />
      <IntegrationsSection integrations={integrations} />
      <CTABand
        title={cta.title}
        body={cta.secondary}
        primaryCta={{ label: cta.primary, href: "/company/contact" }}
        secondaryCta={{ label: cta.secondary, href: "/agents" }}
      />
    </main>
  );
}

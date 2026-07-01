import { WhyHero } from "@/components/sections/why/WhyHero";
import { CompetitorsSection } from "@/components/sections/why/CompetitorsSection";
import { StakeholderValueSection } from "@/components/sections/why/StakeholderValueSection";
import { BusinessCaseSection } from "@/components/sections/why/BusinessCaseSection";
import { CTABand } from "@/components/sections/shared/CTABand";
import { getWhyContent } from "@/lib/content/why";

export default function WhyPage() {
  const { hero, competitors, stakeholders, businessCase } = getWhyContent();

  return (
    <main>
      <WhyHero hero={hero} />
      <CompetitorsSection title={competitors.title} body={competitors.body} />
      <StakeholderValueSection title={stakeholders.title} body={stakeholders.body} />
      <BusinessCaseSection title={businessCase.title} body={businessCase.body} />
      {/* TODO: source copy not yet provided for /why closing CTA */}
      <CTABand
        title=""
        body=""
        primaryCta={{ label: "Request a Demo", href: "/company/contact" }}
        secondaryCta={{ label: "Explore Synthetix", href: "/platform" }}
      />
    </main>
  );
}

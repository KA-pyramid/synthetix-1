import { WhyHero } from "@/components/sections/why/WhyHero";
import { CompetitorsSection } from "@/components/sections/why/CompetitorsSection";
import { StakeholderValueSection } from "@/components/sections/why/StakeholderValueSection";
import { BusinessCaseSection } from "@/components/sections/why/BusinessCaseSection";
import { CTABand } from "@/components/sections/shared/CTABand";
import { getWhyContent } from "@/lib/content/why";

export default function WhyPage() {
  const { hero, competitors, stakeholders, businessCase, cta } = getWhyContent();

  return (
    <main>
      <WhyHero hero={hero} />
      <CompetitorsSection
        title={competitors.title}
        intro={competitors.intro}
        tools={competitors.tools}
        distinctTitle={competitors.distinctTitle}
        distinctBody={competitors.distinctBody}
        comparisonTable={competitors.comparisonTable}
      />
      <StakeholderValueSection
        title={stakeholders.title}
        intro={stakeholders.intro}
        blocks={stakeholders.blocks}
      />
      <BusinessCaseSection
        title={businessCase.title}
        intro={businessCase.intro}
        costDrivers={businessCase.costDrivers}
        economicsTable={businessCase.economicsTable}
        proofRunModel={businessCase.proofRunModel}
        roiSummary={businessCase.roiSummary}
      />
      <CTABand
        title={cta.title}
        body={cta.body}
        primaryCta={{ label: cta.primary, href: "/company/contact" }}
      />
    </main>
  );
}

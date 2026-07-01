import { GovernanceHero } from "@/components/sections/governance/GovernanceHero";
import { HITLSection } from "@/components/sections/governance/HITLSection";
import { PolicyGatesSection } from "@/components/sections/governance/PolicyGatesSection";
import { ProvenanceSection } from "@/components/sections/governance/ProvenanceSection";
import { SecurityComplianceSection } from "@/components/sections/governance/SecurityComplianceSection";
import { DeploymentOptionsSection } from "@/components/sections/governance/DeploymentOptionsSection";
import { CTABand } from "@/components/sections/shared/CTABand";
import { getGovernanceContent } from "@/lib/content/governance";

export default function GovernancePage() {
  const { hero, hitl, policy, provenance, security, deployment } = getGovernanceContent();

  return (
    <main>
      <GovernanceHero hero={hero} />
      <HITLSection title={hitl.title} body={hitl.body} modes={hitl.modes} />
      <PolicyGatesSection title={policy.title} body={policy.body} classes={policy.classes} />
      <ProvenanceSection title={provenance.title} body={provenance.body} />
      <SecurityComplianceSection title={security.title} body={security.body} />
      <DeploymentOptionsSection title={deployment.title} body={deployment.body} options={deployment.options} />
      {/* TODO: source copy not yet provided for /governance closing CTA */}
      <CTABand
        title=""
        body=""
        primaryCta={{ label: "Request a Demo", href: "/company/contact" }}
        secondaryCta={{ label: "Explore Synthetix", href: "/platform" }}
      />
    </main>
  );
}

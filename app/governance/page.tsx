import { GovernanceHero } from "@/components/sections/governance/GovernanceHero";
import { HITLSection } from "@/components/sections/governance/HITLSection";
import { PolicyGatesSection } from "@/components/sections/governance/PolicyGatesSection";
import { ProvenanceSection } from "@/components/sections/governance/ProvenanceSection";
import { SecurityComplianceSection } from "@/components/sections/governance/SecurityComplianceSection";
import { DeploymentOptionsSection } from "@/components/sections/governance/DeploymentOptionsSection";
import { CTABand } from "@/components/sections/shared/CTABand";
import { getGovernanceContent } from "@/lib/content/governance";

export default function GovernancePage() {
  const { hero, hitl, policy, provenance, security, deployment, cta } = getGovernanceContent();

  return (
    <main>
      <GovernanceHero hero={hero} />
      <HITLSection title={hitl.title} body={hitl.body} modes={hitl.modes} />
      <PolicyGatesSection title={policy.title} body={policy.body} classes={policy.classes} />
      <ProvenanceSection title={provenance.title} body={provenance.body} records={provenance.records} />
      <SecurityComplianceSection title={security.title} body={security.body} controls={security.controls} />
      <DeploymentOptionsSection title={deployment.title} body={deployment.body} options={deployment.options} />
      <CTABand
        title={cta.title}
        body=""
        primaryCta={{ label: cta.primary, href: "/company/contact" }}
      />
    </main>
  );
}

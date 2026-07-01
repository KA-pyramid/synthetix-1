import { AgentsHero } from "@/components/sections/agents/AgentsHero";
import { WorkflowBand } from "@/components/sections/agents/WorkflowBand";
import { AgentProfileSection } from "@/components/sections/agents/AgentProfileSection";
import { CTABand } from "@/components/sections/shared/CTABand";
import { getAgentsContent } from "@/lib/content/agents";

export default function AgentsPage() {
  const { hero, agents } = getAgentsContent();

  return (
    <main>
      <AgentsHero hero={hero} />
      <WorkflowBand agents={agents} />
      {agents.map((agent) => (
        <AgentProfileSection key={agent.slug} agent={agent} />
      ))}
      {/* TODO: source copy not yet provided for /agents closing CTA */}
      <CTABand
        title=""
        body=""
        primaryCta={{ label: "Request a Demo", href: "/company/contact" }}
        secondaryCta={{ label: "Explore Synthetix", href: "/platform" }}
      />
    </main>
  );
}

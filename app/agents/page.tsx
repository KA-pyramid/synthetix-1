import { AgentsHero } from "@/components/sections/agents/AgentsHero";
import { WorkflowBand } from "@/components/sections/agents/WorkflowBand";
import { AgentProfileSection } from "@/components/sections/agents/AgentProfileSection";
import { CTABand } from "@/components/sections/shared/CTABand";
import { getAgentsContent } from "@/lib/content/agents";

export default function AgentsPage() {
  const { hero, workflowBand, agents, cta } = getAgentsContent();

  return (
    <main>
      <AgentsHero hero={hero} />
      <WorkflowBand title={workflowBand.title} body={workflowBand.body} agents={agents} />
      {agents.map((agent) => (
        <AgentProfileSection key={agent.slug} agent={agent} />
      ))}
      <CTABand
        title={cta.title}
        body=""
        primaryCta={{ label: cta.primary, href: "/company/contact" }}
        secondaryCta={{ label: cta.secondary, href: "/governance" }}
      />
    </main>
  );
}

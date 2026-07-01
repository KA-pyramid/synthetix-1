import { HeroSection } from "@/components/sections/home/HeroSection";
import { ImpactSection } from "@/components/sections/home/ImpactSection";
import { ManifestoSection } from "@/components/sections/home/ManifestoSection";
import { TracksSection } from "@/components/sections/home/TracksSection";
import { DomainsSection } from "@/components/sections/home/DomainsSection";
import {
  AgentWorkflowSection,
  MarqueeStrip,
} from "@/components/sections/home/AgentWorkflowSection";
import { WhySynthetixSection } from "@/components/sections/home/WhySynthetixSection";
import { AgentsGridSection } from "@/components/sections/home/AgentsGridSection";
import { PlatformProofSection } from "@/components/sections/home/PlatformProofSection";
import { TestimonialsSection } from "@/components/sections/home/TestimonialsSection";
import { WhyEnterprisesChooseSection } from "@/components/sections/home/WhyEnterprisesChooseSection";
import { FAQSection } from "@/components/sections/home/FAQSection";
import { CTASection } from "@/components/sections/home/CTASection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ImpactSection />
      <ManifestoSection />
      <TracksSection />
      <DomainsSection />
      <AgentWorkflowSection />
      <MarqueeStrip />
      <WhySynthetixSection />
      <AgentsGridSection />
      <PlatformProofSection />
      <TestimonialsSection />
      <WhyEnterprisesChooseSection />
      <FAQSection />
      <CTASection />
    </main>
  );
}

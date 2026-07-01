import AnimatedHero from "@/components/ui/modern-animated-hero-section";
import { getHomeContent } from "@/lib/content/home";

export function HeroSection() {
  const { hero } = getHomeContent();
  return (
    <AnimatedHero
      eyebrow={hero.eyebrow}
      title={hero.title}
      subtitle={hero.subtitle}
      primaryCta={hero.primaryCta}
      secondaryCta={hero.secondaryCta}
    />
  );
}

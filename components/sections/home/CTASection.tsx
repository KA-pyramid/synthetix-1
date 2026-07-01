import { getHomeContent } from "@/lib/content/home";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";

export function CTASection() {
  const { ctaBand } = getHomeContent();
  return (
    <section className="bg-gradient-hero px-6 py-24" id="contact">
      <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
        <h2 className="font-display text-3xl font-bold text-white md:text-4xl">
          {ctaBand.title}
        </h2>
        <p className="mt-4 font-body text-base text-white/90 md:text-lg">
          {ctaBand.body}
        </p>
        <div className="mt-8 flex flex-col gap-4 sm:flex-row">
          <InteractiveHoverButton href={ctaBand.primaryCta.href} variant="outline">
            {ctaBand.primaryCta.label}
          </InteractiveHoverButton>
          <InteractiveHoverButton href={ctaBand.secondaryCta.href} variant="outline-inverse">
            {ctaBand.secondaryCta.label}
          </InteractiveHoverButton>
        </div>
      </div>
    </section>
  );
}

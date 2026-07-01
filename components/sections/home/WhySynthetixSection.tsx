import { Check, X } from "lucide-react";
import { getHomeContent } from "@/lib/content/home";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";

export function WhySynthetixSection() {
  const { whySynthetixHeading, otherAiTools, synthetixTraits } = getHomeContent();
  return (
    <section className="bg-white px-6 py-24" id="why">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <span className="font-body text-sm font-semibold uppercase tracking-wide text-brand-blue">
            {whySynthetixHeading.eyebrow}
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold text-brand-black md:text-4xl">
            {whySynthetixHeading.title}
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-8">
            <h3 className="font-display text-xl font-semibold text-brand-black">
              Other AI Tools
            </h3>
            <ul className="mt-6 space-y-4">
              {otherAiTools.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <X className="mt-0.5 h-5 w-5 shrink-0 text-[--color-danger]" />
                  <span className="font-body text-sm text-[--text-secondary]">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-brand-blue bg-brand-blue/5 p-8">
            <h3 className="font-display text-xl font-semibold text-brand-black">
              Synthetix
            </h3>
            <ul className="mt-6 space-y-4">
              {synthetixTraits.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-[--color-success]" />
                  <span className="font-body text-sm text-brand-black">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 text-center">
          <InteractiveHoverButton href="#contact">Book a Demo</InteractiveHoverButton>
        </div>
      </div>
    </section>
  );
}

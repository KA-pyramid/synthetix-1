"use client";

import { getHomeContent } from "@/lib/content/home";
import { FeatureAccordion } from "@/components/ui/feature-accordion";

export function DomainsSection() {
  const { domainsHeading, platformCapabilities } = getHomeContent();
  return (
    <section className="bg-neutral-50 px-6 py-24" id="platform">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-3xl font-bold text-brand-black md:text-4xl">
            {domainsHeading.title}
          </h2>
          <p className="mt-6 font-body text-base text-[--text-secondary] md:text-lg">
            {domainsHeading.body}
          </p>
        </div>

        <FeatureAccordion items={platformCapabilities} />
      </div>
    </section>
  );
}

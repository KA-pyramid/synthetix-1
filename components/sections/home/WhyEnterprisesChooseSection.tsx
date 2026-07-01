"use client";

import { getHomeContent } from "@/lib/content/home";
import { DisplayCards } from "@/components/ui/display-cards";

export function WhyEnterprisesChooseSection() {
  const { businessCaseHeading, businessCase } = getHomeContent();
  return (
    <section className="overflow-hidden bg-neutral-50 px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <span className="font-body text-sm font-semibold uppercase tracking-wide text-brand-blue">
            {businessCaseHeading.eyebrow}
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold text-brand-black md:text-4xl">
            {businessCaseHeading.title}
          </h2>
        </div>

        <div className="mt-6 flex min-h-[27rem] items-center justify-center pl-10 sm:pl-16">
          <DisplayCards items={businessCase} />
        </div>
      </div>
    </section>
  );
}

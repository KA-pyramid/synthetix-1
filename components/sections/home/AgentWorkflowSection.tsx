"use client";

import { ArrowRight } from "lucide-react";
import { RadialOrbitalTimeline } from "@/components/ui/radial-orbital-timeline";
import { getHomeContent } from "@/lib/content/home";

export function AgentWorkflowSection() {
  const { agentWorkflowHeading, pipelineStages } = getHomeContent();
  return (
    <section className="bg-white px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <div className="mx-auto max-w-2xl text-center">
          <span className="font-body text-sm font-semibold uppercase tracking-wide text-brand-blue">
            {agentWorkflowHeading.eyebrow}
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold text-brand-black md:text-4xl">
            {agentWorkflowHeading.title}
          </h2>
          <p className="mt-4 font-body text-base text-[--text-secondary]">
            {agentWorkflowHeading.body}
          </p>
        </div>

        <div className="mt-14">
          <RadialOrbitalTimeline items={pipelineStages} />
        </div>

        <div className="mt-6 text-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 font-body text-sm font-semibold text-brand-blue"
          >
            Request a Demo
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

export function MarqueeStrip() {
  const { marqueeItems } = getHomeContent();
  const items = [...marqueeItems, ...marqueeItems, ...marqueeItems];
  return (
    <section className="overflow-hidden bg-gradient-primary py-6">
      <div className="flex animate-marquee whitespace-nowrap">
        {items.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="mx-8 font-display text-sm font-medium uppercase tracking-widest text-white"
          >
            {item}
          </span>
        ))}
      </div>
    </section>
  );
}

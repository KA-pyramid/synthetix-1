"use client";

import { useRef, useState } from "react";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { getHomeContent } from "@/lib/content/home";

export function AgentsGridSection() {
  const { agentsGridHeading, agentsGridSidebar, agentsGridCta, agents } = getHomeContent();
  const trackRef = useRef<HTMLDivElement>(null);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(true);

  const updateScrollState = () => {
    const el = trackRef.current;
    if (!el) return;
    setCanScrollPrev(el.scrollLeft > 8);
    setCanScrollNext(el.scrollLeft < el.scrollWidth - el.clientWidth - 8);
  };

  const scrollByCard = (direction: 1 | -1) => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-agent-card]");
    const amount = (card?.offsetWidth ?? 320) + 24;
    el.scrollBy({ left: direction * amount, behavior: "smooth" });
  };

  return (
    <section className="bg-neutral-50 px-6 py-24" id="agents">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex flex-col justify-between gap-6 md:mb-14 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <span className="font-body text-sm font-semibold uppercase tracking-wide text-brand-blue">
              {agentsGridHeading.eyebrow}
            </span>
            <h2 className="mt-3 font-display text-3xl font-bold text-brand-black md:text-4xl">
              {agentsGridHeading.title}
            </h2>
            <p className="mt-4 font-body text-sm leading-relaxed text-[--text-secondary] md:text-base">
              {agentsGridSidebar.blurb}
            </p>
          </div>

          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => scrollByCard(-1)}
              disabled={!canScrollPrev}
              aria-label="Previous agent"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-neutral-200 bg-white text-brand-black transition-colors hover:bg-neutral-50 disabled:opacity-40"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={() => scrollByCard(1)}
              disabled={!canScrollNext}
              aria-label="Next agent"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-neutral-200 bg-white text-brand-black transition-colors hover:bg-neutral-50 disabled:opacity-40"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div
          ref={trackRef}
          onScroll={updateScrollState}
          className="hide-scrollbar flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth pb-2"
        >
          {agents.map((agent, i) => {
            const Icon = agent.icon;
            return (
              <a
                key={agent.name}
                href={`/agents#${agent.name.toLowerCase()}`}
                data-agent-card
                className="group relative block h-[320px] w-[280px] shrink-0 snap-start overflow-hidden rounded-3xl border border-neutral-200 bg-white shadow-sm md:h-[360px] md:w-[320px]"
              >
                <div className="relative h-full w-full bg-gradient-primary transition-all duration-500 group-hover:h-1/2">
                  <span className="absolute left-5 top-5 flex h-8 w-8 items-center justify-center rounded-full bg-white/15 font-body text-xs font-semibold text-white backdrop-blur-sm">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <Icon className="absolute inset-0 m-auto h-16 w-16 text-white/90" />
                </div>

                <div className="absolute bottom-0 left-0 flex h-0 w-full flex-col justify-center gap-1 bg-white/95 px-6 opacity-0 backdrop-blur-sm transition-all duration-500 group-hover:h-1/2 group-hover:opacity-100">
                  <h3 className="font-display text-lg font-semibold text-brand-black">
                    {agent.name}
                  </h3>
                  <p className="line-clamp-2 font-body text-sm leading-relaxed text-[--text-secondary]">
                    {agent.body}
                  </p>
                  <span className="absolute bottom-4 right-4 flex h-9 w-9 items-center justify-center rounded-full border border-neutral-200 text-brand-blue transition-transform duration-500 group-hover:-rotate-45">
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </a>
            );
          })}
        </div>

        <div className="mt-16 rounded-2xl bg-white px-8 py-12 text-center shadow-sm">
          <h3 className="font-display text-2xl font-bold text-brand-black">
            {agentsGridCta.title}
          </h3>
          <p className="mx-auto mt-3 max-w-xl font-body text-sm text-[--text-secondary]">
            {agentsGridCta.body}
          </p>
          <a
            href="#contact"
            className="mt-6 inline-block rounded-lg bg-brand-blue px-8 py-3.5 font-body text-sm font-semibold text-white transition-colors hover:bg-brand-blue-mid"
          >
            {agentsGridCta.ctaLabel}
          </a>
        </div>
      </div>
    </section>
  );
}

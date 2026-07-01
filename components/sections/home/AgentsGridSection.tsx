import { ContainerScroll, CardSticky } from "@/components/ui/container-scroll";
import { getHomeContent } from "@/lib/content/home";

export function AgentsGridSection() {
  const { agentsGridHeading, agentsGridSidebar, agentsGridCta, agents } = getHomeContent();
  return (
    <section className="bg-neutral-50 px-6 py-24" id="agents">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <span className="font-body text-sm font-semibold uppercase tracking-wide text-brand-blue">
            {agentsGridHeading.eyebrow}
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold text-brand-black md:text-4xl">
            {agentsGridHeading.title}
          </h2>
        </div>

        <ContainerScroll className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-[minmax(0,300px)_1fr] lg:gap-12">
          <div className="hidden lg:block">
            <div className="sticky top-24 rounded-2xl border border-neutral-200 bg-white p-8">
              <span className="font-body text-xs font-semibold uppercase tracking-wider text-brand-blue">
                {agentsGridSidebar.rangeLabel}
              </span>
              <p className="mt-4 font-body text-sm leading-relaxed text-[--text-secondary]">
                {agentsGridSidebar.blurb}
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            {agents.map((agent, i) => {
              const Icon = agent.icon;
              return (
                <CardSticky
                  key={agent.name}
                  index={i}
                  incrementY={16}
                  incrementZ={10}
                  baseTop={96}
                  className="min-h-[220px] rounded-2xl border border-neutral-200 border-t-2 border-t-transparent bg-white p-8 shadow-md transition-colors hover:border-t-brand-cyan"
                >
                  <div className="flex items-start gap-5">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-blue/10 text-brand-blue">
                      <Icon className="h-6 w-6" />
                    </span>
                    <div>
                      <div className="flex items-center gap-3">
                        <span className="font-body text-xs font-semibold text-neutral-500">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <h3 className="font-display text-lg font-semibold text-brand-black">
                          {agent.name}
                        </h3>
                      </div>
                      <p className="mt-2 font-body text-sm text-[--text-secondary]">
                        {agent.body}
                      </p>
                    </div>
                  </div>
                </CardSticky>
              );
            })}
          </div>
        </ContainerScroll>

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

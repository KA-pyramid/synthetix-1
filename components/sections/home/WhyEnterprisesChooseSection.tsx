import { getHomeContent } from "@/lib/content/home";

export function WhyEnterprisesChooseSection() {
  const { businessCaseHeading, businessCase } = getHomeContent();
  return (
    <section className="bg-neutral-50 px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <span className="font-body text-sm font-semibold uppercase tracking-wide text-brand-blue">
            {businessCaseHeading.eyebrow}
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold text-brand-black md:text-4xl">
            {businessCaseHeading.title}
          </h2>
        </div>

        <div className="mt-14 divide-y divide-neutral-200 rounded-2xl bg-white shadow-sm">
          {businessCase.map((item) => (
            <div
              key={item.title}
              className="flex flex-col items-start gap-4 px-8 py-6 sm:flex-row sm:items-center"
            >
              <item.icon className="h-6 w-6 shrink-0 text-brand-blue" />
              <div>
                <h3 className="font-display text-base font-semibold text-brand-black">
                  {item.title}
                </h3>
                <p className="mt-1 font-body text-sm text-[--text-secondary]">
                  {item.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

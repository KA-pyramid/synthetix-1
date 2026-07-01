import { getHomeContent } from "@/lib/content/home";

export function PlatformProofSection() {
  const { platformProofHeading, proofPoints } = getHomeContent();
  return (
    <section className="bg-neutral-50 px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <span className="font-body text-sm font-semibold uppercase tracking-wide text-brand-blue">
            {platformProofHeading.eyebrow}
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold text-brand-black md:text-4xl">
            {platformProofHeading.title}
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {proofPoints.map((point) => (
            <div
              key={point.metric}
              className="rounded-2xl bg-white p-6 shadow-sm"
            >
              <span className="font-display text-2xl font-bold text-brand-blue">
                {point.metric}
              </span>
              <p className="mt-3 font-body text-sm leading-relaxed text-[--text-secondary]">
                {point.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

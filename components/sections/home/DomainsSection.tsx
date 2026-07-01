import { getHomeContent } from "@/lib/content/home";

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

        <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {platformCapabilities.map((cap) => (
            <div key={cap.title} className="flex flex-col items-start">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-blue/10">
                <cap.icon className="h-6 w-6 text-brand-blue" />
              </div>
              <h3 className="mt-4 font-display text-lg font-semibold text-brand-black">
                {cap.title}
              </h3>
              <p className="mt-2 font-body text-sm leading-relaxed text-[--text-secondary]">
                {cap.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

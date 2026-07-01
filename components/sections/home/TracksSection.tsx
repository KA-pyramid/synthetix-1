import { SolutionsTabs } from "@/components/ui/feature-tabs";
import { getHomeContent } from "@/lib/content/home";

export function TracksSection() {
  const { tracksHeading } = getHomeContent();
  return (
    <section className="bg-white px-6 py-24" id="solutions">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <span className="font-body text-sm font-semibold uppercase tracking-wide text-brand-blue">
            {tracksHeading.eyebrow}
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold text-brand-black md:text-4xl">
            {tracksHeading.title}
          </h2>
        </div>

        <SolutionsTabs />
      </div>
    </section>
  );
}

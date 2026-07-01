import { NumberTicker } from "@/components/ui/number-ticker";
import { getHomeContent } from "@/lib/content/home";
import type { Stat } from "@/lib/types/content.types";

function StatItem({ stat }: { stat: Stat }) {
  return (
    <div className="flex flex-col items-center px-6 py-8 text-center">
      <NumberTicker
        value={stat.value}
        suffix={stat.suffix}
        padStart={stat.padStart ?? 0}
        className="font-display text-4xl text-brand-blue md:text-5xl"
      />
      <span className="mt-2 font-body text-sm text-[--text-secondary]">
        {stat.label}
      </span>
    </div>
  );
}

export function ImpactSection() {
  const { stats } = getHomeContent();
  return (
    <section className="bg-neutral-50">
      <div className="mx-auto grid max-w-7xl grid-cols-1 divide-y divide-neutral-200 sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-5">
        {stats.map((stat) => (
          <StatItem key={stat.label} stat={stat} />
        ))}
      </div>
    </section>
  );
}

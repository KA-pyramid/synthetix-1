import { getHomeContent } from "@/lib/content/home";

export function CTASection() {
  const { ctaBand } = getHomeContent();
  return (
    <section className="bg-gradient-hero px-6 py-24" id="contact">
      <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
        <h2 className="font-display text-3xl font-bold text-white md:text-4xl">
          {ctaBand.title}
        </h2>
        <p className="mt-4 font-body text-base text-white/90 md:text-lg">
          {ctaBand.body}
        </p>
        <div className="mt-8 flex flex-col gap-4 sm:flex-row">
          <a
            href={ctaBand.primaryCta.href}
            className="rounded-lg bg-white px-8 py-3.5 font-body text-sm font-semibold text-brand-blue transition-opacity hover:opacity-90"
          >
            {ctaBand.primaryCta.label}
          </a>
          <a
            href={ctaBand.secondaryCta.href}
            className="rounded-lg border border-white px-8 py-3.5 font-body text-sm font-semibold text-white transition-colors hover:bg-white/10"
          >
            {ctaBand.secondaryCta.label}
          </a>
        </div>
      </div>
    </section>
  );
}

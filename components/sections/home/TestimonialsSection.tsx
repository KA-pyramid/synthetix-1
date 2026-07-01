import { Quote } from "lucide-react";
import { getHomeContent } from "@/lib/content/home";

export function TestimonialsSection() {
  const { testimonialsHeading, testimonials } = getHomeContent();
  return (
    <section className="bg-white px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <span className="font-body text-sm font-semibold uppercase tracking-wide text-brand-blue">
            {testimonialsHeading.eyebrow}
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold text-brand-black md:text-4xl">
            {testimonialsHeading.title}
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <div
              key={t.attribution}
              className="rounded-2xl border border-neutral-200 bg-white p-8"
            >
              <Quote className="h-8 w-8 text-brand-cyan" />
              <p className="mt-4 font-body text-sm leading-relaxed text-brand-black">
                {t.quote}
              </p>
              <p className="mt-6 font-body text-xs italic text-[--text-secondary]">
                {t.attribution}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

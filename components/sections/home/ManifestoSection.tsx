import { getHomeContent } from "@/lib/content/home";

export function ManifestoSection() {
  const { manifesto } = getHomeContent();
  return (
    <section className="bg-white px-6 py-24" id="governance">
      <div className="mx-auto max-w-3xl">
        <h2 className="font-display text-4xl font-bold leading-tight tracking-tight text-brand-black md:text-5xl">
          {manifesto.title}
        </h2>
        <p className="mt-6 font-body text-base leading-relaxed text-[--text-secondary] md:text-lg">
          {manifesto.body}
        </p>
      </div>
    </section>
  );
}

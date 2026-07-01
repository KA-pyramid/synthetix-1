export interface WhyHeroProps {
  hero: { title: string; body: string };
}

export function WhyHero({ hero }: WhyHeroProps) {
  return (
    <div className="border border-dashed border-neutral-500 p-8 font-mono text-xs text-neutral-500">
      WhyHero — awaiting 21st.dev component ({hero.title || "content TODO"})
    </div>
  );
}

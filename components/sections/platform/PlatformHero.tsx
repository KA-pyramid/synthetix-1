export interface PlatformHeroProps {
  hero: { eyebrow: string; title: string; body: string };
}

export function PlatformHero({ hero }: PlatformHeroProps) {
  return (
    <div className="border border-dashed border-neutral-500 p-8 font-mono text-xs text-neutral-500">
      PlatformHero — awaiting 21st.dev component ({hero.title})
    </div>
  );
}

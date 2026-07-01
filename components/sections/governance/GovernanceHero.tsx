export interface GovernanceHeroProps {
  hero: { eyebrow: string; title: string; body: string };
}

export function GovernanceHero({ hero }: GovernanceHeroProps) {
  return (
    <div className="border border-dashed border-neutral-500 p-8 font-mono text-xs text-neutral-500">
      GovernanceHero — awaiting 21st.dev component ({hero.title || "content TODO"})
    </div>
  );
}

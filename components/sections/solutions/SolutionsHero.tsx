export interface SolutionsHeroProps {
  heading: { title: string; body: string };
}

export function SolutionsHero({ heading }: SolutionsHeroProps) {
  return (
    <div className="border border-dashed border-neutral-500 p-8 font-mono text-xs text-neutral-500">
      SolutionsHero — awaiting 21st.dev component ({heading.title})
    </div>
  );
}

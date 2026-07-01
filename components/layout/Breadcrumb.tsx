export interface BreadcrumbProps {
  items: { label: string; href: string }[];
}

export function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <div className="border border-dashed border-neutral-500 p-2 font-mono text-xs text-neutral-500">
      Breadcrumb — awaiting 21st.dev component ({items.map((i) => i.label).join(" / ")})
    </div>
  );
}

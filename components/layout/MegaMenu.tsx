import { getNavConfig } from "@/lib/content/nav";

// Reads content/nav.config.ts. Not yet wired into Header — the current
// Header renders a flat link list; this replaces it once real mega-menu
// visual design (21st.dev component) arrives.
export function MegaMenu() {
  const nav = getNavConfig();
  return (
    <div className="border border-dashed border-neutral-500 p-4 font-mono text-xs text-neutral-500">
      MegaMenu — awaiting 21st.dev component ({nav.primary.length} nav items)
    </div>
  );
}

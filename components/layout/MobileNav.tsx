import { getNavConfig } from "@/lib/content/nav";

// Reads content/nav.config.ts. Not yet wired into Header — the current
// Header has its own inline mobile menu; this replaces it once real
// mobile-nav visual design (21st.dev component) arrives.
export function MobileNav() {
  const nav = getNavConfig();
  return (
    <div className="border border-dashed border-neutral-500 p-4 font-mono text-xs text-neutral-500">
      MobileNav — awaiting 21st.dev component ({nav.primary.length} nav items)
    </div>
  );
}

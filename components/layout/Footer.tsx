import Image from "next/image";
import { getNavConfig } from "@/lib/content/nav";

// Extracted from the original homepage Footer — JSX/styling untouched.
export function Footer() {
  const nav = getNavConfig();

  return (
    <footer className="bg-brand-black px-6 py-16">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <span className="flex items-center gap-2 font-display text-xl font-semibold text-white">
            <Image src="/logo-mark.png" alt="" width={32} height={24} className="h-6 w-auto" />
            {nav.siteName}
          </span>
          <p className="mt-3 font-body text-sm text-[--text-secondary]">
            {nav.footerTagline}
          </p>
          <p className="mt-6 font-body text-xs text-[--text-secondary]">
            &copy; {new Date().getFullYear()} {nav.siteName}. All rights reserved.
          </p>
        </div>

        {nav.footerColumns.map((col) => (
          <div key={col.title}>
            <h4 className="font-display text-sm font-semibold text-white">
              {col.title}
            </h4>
            <ul className="mt-4 space-y-3">
              {col.links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="font-body text-sm text-[--text-secondary] transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mx-auto mt-12 max-w-7xl border-t border-neutral-700 pt-6">
        <p className="font-body text-xs text-[--text-secondary]">
          {nav.siteName} — Governed Agentic Execution Platform.
        </p>
      </div>
    </footer>
  );
}

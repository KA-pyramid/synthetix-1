"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Menu } from "lucide-react";
import { getNavConfig } from "@/lib/content/nav";

// Extracted from the original homepage Navbar — JSX/styling untouched.
// Only the top 5 primary items are shown for now (Resources/Company mega
// menu entries are deferred to the MegaMenu.tsx visual-design pass).
export function Header() {
  const nav = getNavConfig();
  const links = nav.primary.slice(0, 5);
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 bg-white transition-shadow ${
        scrolled ? "border-b border-neutral-200" : "border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="/" className="flex items-center gap-2 font-display text-xl font-semibold text-brand-black">
          <Image src="/logo-mark.png" alt="" width={32} height={24} className="h-6 w-auto" priority />
          {nav.siteName}
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-body text-sm text-[--text-secondary] transition-colors hover:text-brand-blue"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden md:block">
          <a
            href="#contact"
            className="rounded-lg bg-brand-blue px-5 py-2.5 font-body text-sm font-medium text-white transition-colors hover:bg-brand-blue-mid"
          >
            Request a Demo
          </a>
        </div>

        <button
          className="md:hidden"
          aria-label="Toggle menu"
          onClick={() => setMobileOpen((o) => !o)}
        >
          <Menu className="h-6 w-6 text-brand-black" />
        </button>
      </nav>

      {mobileOpen && (
        <div className="border-t border-neutral-200 bg-white px-6 py-4 md:hidden">
          <div className="flex flex-col gap-4">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-body text-sm text-[--text-secondary] hover:text-brand-blue"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="rounded-lg bg-brand-blue px-5 py-2.5 text-center font-body text-sm font-medium text-white"
            >
              Request a Demo
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

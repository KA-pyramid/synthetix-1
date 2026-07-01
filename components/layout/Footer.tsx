"use client";

import Image from "next/image";
import { useState } from "react";
import { Send, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { getNavConfig } from "@/lib/content/nav";

const socialLinks = [
  { label: "Facebook", href: "#", icon: Facebook },
  { label: "Twitter", href: "#", icon: Twitter },
  { label: "Instagram", href: "#", icon: Instagram },
  { label: "LinkedIn", href: "#", icon: Linkedin },
];

export function Footer() {
  const nav = getNavConfig();
  const [email, setEmail] = useState("");

  return (
    <footer className="bg-brand-black px-6 py-16">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-6">
        <div className="lg:col-span-2">
          <span className="flex items-center gap-2 font-display text-xl font-semibold text-white">
            <Image src="/logo-mark.png" alt="" width={32} height={24} className="h-6 w-auto" />
            {nav.siteName}
          </span>
          <p className="mt-3 font-body text-sm text-white/60">
            {nav.footerTagline}
          </p>
          <form onSubmit={(e) => e.preventDefault()} className="relative mt-6">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full rounded-lg border border-white/15 bg-white/5 py-3 pl-4 pr-12 font-body text-sm text-white placeholder:text-white/40 focus:border-brand-blue focus:outline-none"
            />
            <button
              type="submit"
              aria-label="Subscribe"
              className="absolute right-1.5 top-1.5 flex h-8 w-8 items-center justify-center rounded-full bg-brand-blue text-white transition-colors hover:bg-brand-blue-mid"
            >
              <Send className="h-4 w-4" />
            </button>
          </form>
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
                    className="font-body text-sm text-white/60 transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div>
          <h4 className="font-display text-sm font-semibold text-white">
            Follow Us
          </h4>
          <div className="mt-4 flex gap-3">
            {socialLinks.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                title={label}
                aria-label={label}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-white/70 transition-colors hover:border-brand-blue hover:text-brand-blue"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="mx-auto mt-12 flex max-w-7xl flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 sm:flex-row">
        <p className="font-body text-xs text-white/50">
          &copy; {new Date().getFullYear()} {nav.siteName}. All rights reserved.
        </p>
        <p className="font-body text-xs text-white/50">
          {nav.siteName} — Governed Agentic Execution Platform.
        </p>
      </div>
    </footer>
  );
}

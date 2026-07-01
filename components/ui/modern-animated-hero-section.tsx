"use client";

import type React from "react";
import { RetroGrid } from "@/components/ui/retro-grid";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";

interface CtaLink {
  label: string;
  href: string;
}

interface AnimatedHeroProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  primaryCta?: CtaLink;
  secondaryCta?: CtaLink;
}

const AnimatedHero: React.FC<AnimatedHeroProps> = ({
  eyebrow,
  title,
  subtitle,
  primaryCta,
  secondaryCta,
}) => {
  const words = title.split(" ").map((text) => ({ text }));

  return (
    <div className="relative w-full min-h-screen overflow-hidden bg-white">
      {/* Retro grid backdrop */}
      <RetroGrid angle={65} />

      {/* Foreground content */}
      <div className="relative z-20 flex min-h-screen flex-col items-center justify-center px-6 text-center">
        {eyebrow && (
          <span className="mb-6 inline-block rounded-full bg-brand-blue/10 px-4 py-1.5 font-body text-sm font-medium text-brand-blue">
            {eyebrow}
          </span>
        )}

        <TypewriterEffectSmooth
          words={words}
          className="justify-center"
          textClassName="max-w-full text-sm text-brand-black sm:text-lg md:text-2xl lg:text-4xl xl:text-6xl"
          cursorClassName="h-5 sm:h-6 md:h-8 lg:h-10 xl:h-12"
        />

        {subtitle && (
          <p className="mt-6 max-w-2xl font-body text-base text-[--text-secondary] md:text-lg">
            {subtitle}
          </p>
        )}

        {(primaryCta || secondaryCta) && (
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            {primaryCta && (
              <a
                href={primaryCta.href}
                className="rounded-lg bg-brand-blue px-8 py-3.5 font-body text-sm font-semibold text-white transition-colors hover:bg-brand-blue-mid"
              >
                {primaryCta.label}
              </a>
            )}
            {secondaryCta && (
              <a
                href={secondaryCta.href}
                className="rounded-lg border border-neutral-200 px-8 py-3.5 font-body text-sm font-semibold text-brand-black transition-colors hover:border-brand-blue hover:text-brand-blue"
              >
                {secondaryCta.label}
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default AnimatedHero;

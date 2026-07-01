"use client";

import type React from "react";
import { useState, useEffect, useCallback, useRef } from "react";
import { RetroGrid } from "@/components/ui/retro-grid";

interface Character {
  char: string;
  x: number;
  y: number;
  speed: number;
}

class TextScramble {
  el: HTMLElement;
  chars: string;
  queue: Array<{
    from: string;
    to: string;
    start: number;
    end: number;
    char?: string;
  }>;
  frame: number;
  frameRequest: number;
  resolve: (value: void | PromiseLike<void>) => void;

  constructor(el: HTMLElement) {
    this.el = el;
    this.chars = "!<>-_\\/[]{}—=+*^?#";
    this.queue = [];
    this.frame = 0;
    this.frameRequest = 0;
    this.resolve = () => {};
    this.update = this.update.bind(this);
  }

  setText(newText: string) {
    const oldText = this.el.innerText;
    const length = Math.max(oldText.length, newText.length);
    const promise = new Promise<void>((resolve) => (this.resolve = resolve));
    this.queue = [];

    for (let i = 0; i < length; i++) {
      const from = oldText[i] || "";
      const to = newText[i] || "";
      const start = Math.floor(Math.random() * 40);
      const end = start + Math.floor(Math.random() * 40);
      this.queue.push({ from, to, start, end });
    }

    cancelAnimationFrame(this.frameRequest);
    this.frame = 0;
    this.update();
    return promise;
  }

  update() {
    let output = "";
    let complete = 0;

    for (let i = 0, n = this.queue.length; i < n; i++) {
      let { from, to, start, end, char } = this.queue[i];
      if (this.frame >= end) {
        complete++;
        output += to;
      } else if (this.frame >= start) {
        if (!char || Math.random() < 0.28) {
          char = this.chars[Math.floor(Math.random() * this.chars.length)];
          this.queue[i].char = char;
        }
        output += `<span class="dud">${char}</span>`;
      } else {
        output += from;
      }
    }

    this.el.innerHTML = output;
    if (complete === this.queue.length) {
      this.resolve();
    } else {
      this.frameRequest = requestAnimationFrame(this.update);
      this.frame++;
    }
  }
}

interface ScrambledTitleProps {
  text: string;
  className?: string;
  rescrambleIntervalMs?: number;
}

const ScrambledTitle: React.FC<ScrambledTitleProps> = ({
  text,
  className,
  rescrambleIntervalMs,
}) => {
  const elementRef = useRef<HTMLHeadingElement>(null);
  const scramblerRef = useRef<TextScramble | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if (elementRef.current && !scramblerRef.current) {
      scramblerRef.current = new TextScramble(elementRef.current);
      setMounted(true);
    }
  }, []);

  useEffect(() => {
    if (!mounted || !scramblerRef.current) return;

    let cancelled = false;
    let timeout: ReturnType<typeof setTimeout>;

    const run = () => {
      if (cancelled || !scramblerRef.current) return;
      scramblerRef.current.setText(text).then(() => {
        if (cancelled || !rescrambleIntervalMs) return;
        timeout = setTimeout(run, rescrambleIntervalMs);
      });
    };

    run();

    return () => {
      cancelled = true;
      clearTimeout(timeout);
    };
  }, [mounted, text, rescrambleIntervalMs]);

  return (
    <h1
      ref={elementRef}
      className={className}
      style={{ fontFamily: "var(--font-display)" }}
    >
      {text}
    </h1>
  );
};

interface CtaLink {
  label: string;
  href: string;
}

interface RainingLettersProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  primaryCta?: CtaLink;
  secondaryCta?: CtaLink;
}

const RainingLetters: React.FC<RainingLettersProps> = ({
  eyebrow,
  title,
  subtitle,
  primaryCta,
  secondaryCta,
}) => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [activeIndices, setActiveIndices] = useState<Set<number>>(new Set());

  const createCharacters = useCallback(() => {
    const allChars =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-=[]{}|;:,.<>?";
    const charCount = 220;
    const newCharacters: Character[] = [];

    for (let i = 0; i < charCount; i++) {
      newCharacters.push({
        char: allChars[Math.floor(Math.random() * allChars.length)],
        x: Math.random() * 100,
        y: Math.random() * 100,
        speed: 0.1 + Math.random() * 0.3,
      });
    }

    return newCharacters;
  }, []);

  useEffect(() => {
    setCharacters(createCharacters());
  }, [createCharacters]);

  useEffect(() => {
    const updateActiveIndices = () => {
      const newActiveIndices = new Set<number>();
      const numActive = Math.floor(Math.random() * 3) + 3;
      for (let i = 0; i < numActive; i++) {
        newActiveIndices.add(Math.floor(Math.random() * characters.length));
      }
      setActiveIndices(newActiveIndices);
    };

    const flickerInterval = setInterval(updateActiveIndices, 50);
    return () => clearInterval(flickerInterval);
  }, [characters.length]);

  useEffect(() => {
    let animationFrameId: number;

    const updatePositions = () => {
      setCharacters((prevChars) =>
        prevChars.map((char) => ({
          ...char,
          y: char.y + char.speed,
          ...(char.y >= 100 && {
            y: -5,
            x: Math.random() * 100,
            char: "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-=[]{}|;:,.<>?"[
              Math.floor(
                Math.random() *
                  "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-=[]{}|;:,.<>?"
                    .length
              )
            ],
          }),
        }))
      );
      animationFrameId = requestAnimationFrame(updatePositions);
    };

    animationFrameId = requestAnimationFrame(updatePositions);
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    <div className="relative w-full min-h-screen overflow-hidden bg-brand-black">
      {/* Retro grid backdrop */}
      <RetroGrid angle={65} />

      {/* Foreground content */}
      <div className="relative z-20 flex min-h-screen flex-col items-center justify-center px-6 text-center">
        {eyebrow && (
          <span className="mb-6 inline-block rounded-full bg-brand-blue/20 px-4 py-1.5 font-body text-sm font-medium text-brand-blue-sky">
            {eyebrow}
          </span>
        )}

        <ScrambledTitle
          text={title}
          rescrambleIntervalMs={9000}
          className="max-w-5xl text-4xl font-bold uppercase tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
        />

        {subtitle && (
          <p className="mt-6 max-w-2xl font-body text-base text-neutral-200 md:text-lg">
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
                className="rounded-lg border border-white/30 px-8 py-3.5 font-body text-sm font-semibold text-white transition-colors hover:border-brand-cyan hover:text-brand-cyan"
              >
                {secondaryCta.label}
              </a>
            )}
          </div>
        )}
      </div>

      {/* Raining characters */}
      {characters.map((char, index) => (
        <span
          key={index}
          className={`absolute text-xs transition-colors duration-100 ${
            activeIndices.has(index)
              ? "z-10 scale-125 font-bold text-brand-aqua"
              : "font-light text-neutral-700"
          }`}
          style={{
            left: `${char.x}%`,
            top: `${char.y}%`,
            transform: `translate(-50%, -50%) ${
              activeIndices.has(index) ? "scale(1.25)" : "scale(1)"
            }`,
            textShadow: activeIndices.has(index)
              ? "0 0 8px rgba(103,220,228,0.8), 0 0 12px rgba(58,200,213,0.4)"
              : "none",
            opacity: activeIndices.has(index) ? 1 : 0.35,
            transition: "color 0.1s, transform 0.1s, text-shadow 0.1s",
            willChange: "transform, top",
            fontSize: "1.4rem",
          }}
        >
          {char.char}
        </span>
      ))}

      <style jsx global>{`
        .dud {
          color: #3ac8d5;
          opacity: 0.8;
        }
      `}</style>
    </div>
  );
};

export default RainingLetters;

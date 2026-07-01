"use client";

import { useState } from "react";
import type { LucideIcon } from "lucide-react";
import { Plus } from "lucide-react";
import { cn } from "@/lib/utils";

interface FeatureAccordionItem {
  icon: LucideIcon;
  title: string;
  body: string;
}

interface FeatureAccordionProps {
  items: FeatureAccordionItem[];
}

export function FeatureAccordion({ items }: FeatureAccordionProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const ActiveIcon = items[activeIndex].icon;

  return (
    <div className="mt-14 grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
      <div className="divide-y divide-neutral-200 border-t border-neutral-200">
        {items.map((item, index) => {
          const isActive = index === activeIndex;
          const Icon = item.icon;
          return (
            <div key={item.title}>
              <button
                type="button"
                onClick={() => setActiveIndex(index)}
                className="flex w-full items-center gap-4 py-6 text-left"
              >
                <span
                  className={cn(
                    "flex h-10 w-10 shrink-0 items-center justify-center rounded-full transition-colors duration-300",
                    isActive ? "bg-brand-blue text-white" : "bg-brand-blue/10 text-brand-blue"
                  )}
                >
                  <Icon className="h-5 w-5" />
                </span>
                <span
                  className={cn(
                    "flex-1 font-display text-lg font-semibold transition-colors duration-300",
                    isActive ? "text-brand-black" : "text-[--text-secondary]"
                  )}
                >
                  {item.title}
                </span>
                <Plus
                  className={cn(
                    "h-5 w-5 shrink-0 text-[--text-secondary] transition-transform duration-300",
                    isActive && "rotate-45 text-brand-blue"
                  )}
                />
              </button>
              <div
                className={cn(
                  "grid overflow-hidden transition-all duration-300 ease-in-out",
                  isActive ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                )}
              >
                <div className="overflow-hidden">
                  <p className="pb-6 pl-14 font-body text-sm leading-relaxed text-[--text-secondary]">
                    {item.body}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="flex aspect-square w-full items-center justify-center rounded-3xl bg-gradient-primary p-12 lg:aspect-auto lg:h-full lg:min-h-[420px]">
        <ActiveIcon
          key={activeIndex}
          className="h-32 w-32 animate-fade-in text-white/90 md:h-40 md:w-40"
          strokeWidth={1.25}
        />
      </div>
    </div>
  );
}

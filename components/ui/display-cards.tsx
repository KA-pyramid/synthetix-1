"use client";

import { useState } from "react";
import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export interface DisplayCardItem {
  icon: LucideIcon;
  title: string;
  body: string;
}

const STEP_X = 3;
const STEP_Y = 2.25;
const HOVER_LIFT_X = 2.5;
const HOVER_LIFT_Y = 2;

function DisplayCard({
  icon: Icon,
  title,
  body,
  index,
}: DisplayCardItem & { index: number }) {
  const [hovered, setHovered] = useState(false);
  const baseX = index * STEP_X;
  const baseY = index * STEP_Y;
  const x = hovered ? Math.max(baseX - HOVER_LIFT_X, 0) : baseX;
  const y = hovered ? Math.max(baseY - HOVER_LIFT_Y, 0) : baseY;

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        transform: `translate(${x}rem, ${y}rem) skewY(-8deg)`,
        gridArea: "stack",
        zIndex: hovered ? 20 : index,
      }}
      className={cn(
        "flex h-36 w-[22rem] select-none flex-col justify-between rounded-xl border border-neutral-200 bg-white/90 px-5 py-4 shadow-md backdrop-blur-sm transition-all duration-500 ease-out",
        hovered ? "grayscale-0 border-brand-blue/40 shadow-lg" : "grayscale-[60%]"
      )}
    >
      <div className="flex items-center gap-2.5">
        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-blue/10 text-brand-blue">
          <Icon className="h-4 w-4" />
        </span>
        <p className="font-display text-base font-semibold text-brand-black">{title}</p>
      </div>
      <p className="font-body text-sm leading-relaxed text-[--text-secondary]">{body}</p>
    </div>
  );
}

export function DisplayCards({ items }: { items: DisplayCardItem[] }) {
  return (
    <div
      className="grid place-items-center py-6"
      style={{ gridTemplateAreas: "'stack'" }}
    >
      {items.map((item, i) => (
        <DisplayCard key={item.title} {...item} index={i} />
      ))}
    </div>
  );
}

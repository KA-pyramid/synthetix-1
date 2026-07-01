"use client";

import { useEffect, useState } from "react";
import { type LucideIcon, Link as LinkIcon } from "lucide-react";

export interface OrbitalItem {
  id: number;
  title: string;
  content: string;
  icon: LucideIcon;
  relatedIds: number[];
}

interface NodePosition {
  x: number;
  y: number;
  zIndex: number;
  opacity: number;
}

export function RadialOrbitalTimeline({ items }: { items: OrbitalItem[] }) {
  const [expandedId, setExpandedId] = useState<number | null>(null);
  const [rotationAngle, setRotationAngle] = useState(0);
  const [autoRotate, setAutoRotate] = useState(true);

  useEffect(() => {
    let interval: ReturnType<typeof setInterval> | undefined;
    if (autoRotate) {
      interval = setInterval(() => {
        setRotationAngle((prev) => (prev + 0.3) % 360);
      }, 50);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [autoRotate]);

  const calculateNodePosition = (index: number, total: number): NodePosition => {
    const angle = ((index / total) * 360 + rotationAngle) % 360;
    const radius = 170;
    const radian = (angle * Math.PI) / 180;
    const x = radius * Math.cos(radian);
    const y = radius * Math.sin(radian);
    const zIndex = Math.round(100 + 50 * Math.cos(radian));
    const opacity = Math.max(0.4, Math.min(1, 0.4 + 0.6 * ((1 + Math.sin(radian)) / 2)));
    return { x, y, zIndex, opacity };
  };

  const selected = items.find((i) => i.id === expandedId) ?? null;
  const relatedIds = selected ? selected.relatedIds : [];

  const selectItem = (id: number | null) => {
    setExpandedId(id);
    setAutoRotate(id === null);
  };

  return (
    <div className="relative w-full overflow-hidden rounded-2xl bg-brand-black">
      <div
        className="relative flex h-[380px] w-full items-center justify-center md:h-[440px]"
        onClick={() => selectItem(null)}
      >
        {/* Pulsing center orb */}
        <div className="absolute z-10 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-primary">
          <div className="absolute h-16 w-16 animate-ping rounded-full border border-brand-aqua/30 opacity-70" />
          <div
            className="absolute h-20 w-20 animate-ping rounded-full border border-brand-aqua/20 opacity-50"
            style={{ animationDelay: "0.5s" }}
          />
          <div className="h-6 w-6 rounded-full bg-white/90" />
        </div>

        <div className="absolute h-[340px] w-[340px] rounded-full border border-white/10 md:h-[380px] md:w-[380px]" />

        {items.map((item, index) => {
          const position = calculateNodePosition(index, items.length);
          const isExpanded = expandedId === item.id;
          const isRelated = relatedIds.includes(item.id);
          const Icon = item.icon;

          return (
            <div
              key={item.id}
              className="absolute cursor-pointer transition-all duration-700"
              style={{
                transform: `translate(${position.x}px, ${position.y}px)`,
                zIndex: isExpanded ? 200 : position.zIndex,
                opacity: isExpanded ? 1 : position.opacity,
              }}
              onClick={(e) => {
                e.stopPropagation();
                selectItem(isExpanded ? null : item.id);
              }}
            >
              <div
                className={`flex h-11 w-11 items-center justify-center rounded-full border-2 transition-all duration-300 ${
                  isExpanded
                    ? "scale-150 border-brand-aqua bg-white text-brand-black shadow-lg shadow-brand-aqua/30"
                    : isRelated
                    ? "animate-pulse border-brand-aqua bg-brand-aqua/20 text-white"
                    : "border-white/40 bg-brand-black text-white"
                }`}
              >
                <Icon size={16} />
              </div>

              <div
                className={`absolute top-12 left-1/2 -translate-x-1/2 whitespace-nowrap font-body text-xs font-semibold tracking-wider transition-all duration-300 ${
                  isExpanded ? "scale-125 text-white" : "text-white/70"
                }`}
              >
                {item.title}
              </div>
            </div>
          );
        })}
      </div>

      {/* Stable detail panel — decoupled from node position so it never clips */}
      <div className="border-t border-white/10 p-6 md:p-8">
        {selected ? (
          <div onClick={(e) => e.stopPropagation()}>
            <span className="inline-block rounded-full border border-brand-aqua/40 bg-brand-aqua/10 px-2 py-0.5 font-body text-xs text-brand-aqua">
              Stage {String(selected.id).padStart(2, "0")} of{" "}
              {String(items.length).padStart(2, "0")}
            </span>
            <h4 className="mt-3 font-display text-lg font-semibold text-white">
              {selected.title}
            </h4>
            <p className="mt-2 font-body text-sm leading-relaxed text-white/80">
              {selected.content}
            </p>

            {selected.relatedIds.length > 0 && (
              <div className="mt-4 border-t border-white/10 pt-3">
                <div className="mb-2 flex items-center gap-1">
                  <LinkIcon size={10} className="text-white/70" />
                  <h5 className="font-body text-xs uppercase tracking-wider text-white/70">
                    Connected Stages
                  </h5>
                </div>
                <div className="flex flex-wrap gap-1">
                  {selected.relatedIds.map((relId) => {
                    const related = items.find((i) => i.id === relId);
                    return (
                      <button
                        key={relId}
                        onClick={(e) => {
                          e.stopPropagation();
                          selectItem(relId);
                        }}
                        className="flex items-center rounded-md border border-white/20 bg-transparent px-2 py-1 font-body text-xs text-white/80 transition-all hover:bg-white/10 hover:text-white"
                      >
                        {related == null ? relId : related.title}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        ) : (
          <p className="text-center font-body text-sm text-white/50">
            Select a stage to see how it fits the governed pipeline.
          </p>
        )}
      </div>
    </div>
  );
}

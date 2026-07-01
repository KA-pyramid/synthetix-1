"use client";

import { useEffect, useMemo, useRef } from "react";
import { motion, useInView, useSpring, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

function Digit({
  digit,
  delay,
}: {
  digit: number;
  delay: number;
}) {
  const y = useSpring(10, { stiffness: 60, damping: 20, mass: 0.8 });
  const yPercent = useTransform(y, (v) => `${-(((v % 10) + 10) % 10) * 10}%`);

  useEffect(() => {
    const timeout = setTimeout(() => y.set(digit), delay * 1000);
    return () => clearTimeout(timeout);
  }, [digit, delay, y]);

  return (
    <span
      className="relative inline-block overflow-hidden"
      style={{ height: "1em", width: "0.6em" }}
    >
      <motion.span
        className="absolute inset-x-0 flex flex-col items-center"
        style={{ y: yPercent }}
      >
        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((n) => (
          <span
            key={n}
            className="flex h-[10%] items-center justify-center"
            style={{ height: "1em" }}
          >
            {n}
          </span>
        ))}
      </motion.span>
    </span>
  );
}

export function NumberTicker({
  value,
  className,
  delay = 0,
  prefix,
  suffix,
  decimals = 0,
  padStart = 0,
  duration = 1.5,
}: {
  value: number;
  className?: string;
  delay?: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  padStart?: number;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  const chars = useMemo(() => {
    const fixed = value.toFixed(decimals);
    const [intPart, decPart] = fixed.split(".");
    const paddedInt = intPart.padStart(padStart, "0");
    const withCommas = paddedInt.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return (decPart ? `${withCommas}.${decPart}` : withCommas).split("");
  }, [value, decimals, padStart]);

  const totalDigits = chars.filter((c) => /\d/.test(c)).length;
  let digitIndex = 0;

  return (
    <span
      ref={ref}
      className={cn(
        "inline-flex items-baseline tabular-nums font-bold tracking-tight",
        className
      )}
    >
      {prefix && <span>{prefix}</span>}
      {chars.map((char, i) => {
        if (/\d/.test(char)) {
          const charDelay = delay + (digitIndex / totalDigits) * duration * 0.6;
          digitIndex += 1;
          return inView ? (
            <Digit key={i} digit={parseInt(char, 10)} delay={charDelay} />
          ) : (
            <span key={i} className="inline-block" style={{ width: "0.6em" }}>
              0
            </span>
          );
        }
        return <span key={i}>{char}</span>;
      })}
      {suffix && <span>{suffix}</span>}
    </span>
  );
}

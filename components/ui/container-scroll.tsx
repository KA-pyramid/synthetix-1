"use client";

import type React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function ContainerScroll({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn("relative", className)}
      style={{ perspective: "1000px" }}
    >
      {children}
    </div>
  );
}

export function CardSticky({
  index,
  incrementY = 10,
  incrementZ = 10,
  baseTop = 96,
  children,
  className,
}: {
  index: number;
  incrementY?: number;
  incrementZ?: number;
  baseTop?: number;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      layout="position"
      style={{
        top: baseTop + index * incrementY,
        zIndex: index * incrementZ,
      }}
      className={cn("sticky", className)}
    >
      {children}
    </motion.div>
  );
}

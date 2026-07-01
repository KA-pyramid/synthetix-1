import type { ReactNode } from "react";

export interface BadgeProps {
  children: ReactNode;
  variant?: "default" | "success" | "warning" | "danger" | "info";
}

export function Badge({ children }: BadgeProps) {
  return (
    <span className="border border-dashed border-neutral-500 px-2 py-1 font-mono text-xs text-neutral-500">
      Badge — awaiting 21st.dev component: {children}
    </span>
  );
}

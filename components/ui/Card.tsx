import type { ReactNode } from "react";

export interface CardProps {
  children: ReactNode;
  className?: string;
}

export function Card({ children, className }: CardProps) {
  return (
    <div className={`border border-dashed border-neutral-500 p-4 font-mono text-xs text-neutral-500 ${className ?? ""}`}>
      Card — awaiting 21st.dev component
      {children}
    </div>
  );
}

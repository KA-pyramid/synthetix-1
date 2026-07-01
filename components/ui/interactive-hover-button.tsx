import type { AnchorHTMLAttributes, ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

type Variant = "solid" | "outline" | "outline-inverse";

interface InteractiveHoverButtonProps
  extends AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: Variant;
  children: ReactNode;
}

const variantStyles: Record<Variant, { idle: string; dot: string; revealText: string }> = {
  solid: {
    idle: "border-transparent bg-brand-blue text-white",
    dot: "bg-brand-blue-mid",
    revealText: "text-white",
  },
  outline: {
    idle: "border-neutral-200 bg-white text-brand-blue",
    dot: "bg-brand-blue",
    revealText: "text-white",
  },
  "outline-inverse": {
    idle: "border-white/40 bg-transparent text-white",
    dot: "bg-white",
    revealText: "text-brand-blue",
  },
};

export function InteractiveHoverButton({
  variant = "solid",
  className,
  children,
  ...props
}: InteractiveHoverButtonProps) {
  const styles = variantStyles[variant];

  return (
    <a
      {...props}
      className={cn(
        "group relative inline-flex items-center justify-center overflow-hidden rounded-lg border px-8 py-3.5 font-body text-sm font-semibold transition-colors duration-300",
        styles.idle,
        className
      )}
    >
      <span className="relative z-20 inline-block transition-all duration-300 group-hover:translate-x-12 group-hover:opacity-0">
        {children}
      </span>
      <span
        className={cn(
          "absolute inset-0 z-10 flex translate-x-12 items-center justify-center gap-2 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100",
          styles.revealText
        )}
      >
        {children}
        <ArrowRight className="h-4 w-4" />
      </span>
      <span
        className={cn(
          "absolute left-2 top-1/2 z-0 h-2 w-2 -translate-y-1/2 rounded-full transition-all duration-300 group-hover:left-0 group-hover:top-0 group-hover:h-full group-hover:w-full group-hover:translate-y-0 group-hover:rounded-lg",
          styles.dot
        )}
      />
    </a>
  );
}

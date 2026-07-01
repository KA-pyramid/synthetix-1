import type { CTA } from "@/lib/types/content.types";

export interface CTAButtonProps {
  cta: CTA;
  variant?: "primary" | "secondary";
}

export function CTAButton({ cta }: CTAButtonProps) {
  return (
    <a
      href={cta.href}
      className="border border-dashed border-neutral-500 p-2 font-mono text-xs text-neutral-500"
    >
      CTAButton — awaiting 21st.dev component ({cta.label})
    </a>
  );
}

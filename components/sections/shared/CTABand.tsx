import type { CTA } from "@/lib/types/content.types";

// Every page's closing CTA — one component, varied props.
export interface CTABandProps {
  title: string;
  body: string;
  primaryCta: CTA;
  secondaryCta?: CTA;
}

export function CTABand({ title, primaryCta }: CTABandProps) {
  return (
    <div id="contact" className="border border-dashed border-neutral-500 p-8 font-mono text-xs text-neutral-500">
      CTABand — awaiting 21st.dev component ({title} / {primaryCta.label})
    </div>
  );
}

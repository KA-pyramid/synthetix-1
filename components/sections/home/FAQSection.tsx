"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { getHomeContent } from "@/lib/content/home";

export function FAQSection() {
  const { faqHeading, faqs } = getHomeContent();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-white px-6 py-24">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-center font-display text-3xl font-bold text-brand-black md:text-4xl">
          {faqHeading.title}
        </h2>

        <div className="mt-12 space-y-4">
          {faqs.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={item.q}
                className={`rounded-xl border border-neutral-200 px-6 py-5 transition-colors ${
                  isOpen ? "border-l-4 border-l-brand-blue" : ""
                }`}
              >
                <button
                  className="flex w-full items-center justify-between gap-4 text-left"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  aria-expanded={isOpen}
                >
                  <span className="font-display text-base font-medium text-brand-black">
                    {item.q}
                  </span>
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-brand-blue transition-transform ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <p className="mt-3 font-body text-sm leading-relaxed text-[--text-secondary]">
                    {item.a}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

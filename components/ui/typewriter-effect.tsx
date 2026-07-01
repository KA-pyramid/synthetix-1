"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface Word {
  text: string;
  className?: string;
}

export function TypewriterEffectSmooth({
  words,
  className,
  textClassName,
  cursorClassName,
}: {
  words: Word[];
  className?: string;
  textClassName?: string;
  cursorClassName?: string;
}) {
  const wordsArray = words.map((word) => ({
    ...word,
    text: word.text.split(""),
  }));

  return (
    <div className={cn("flex items-end", className)}>
      <motion.div
        className="overflow-hidden pb-2"
        initial={{ width: "0%" }}
        whileInView={{ width: "fit-content" }}
        transition={{ duration: 2, ease: "linear", delay: 0.5 }}
      >
        <div
          className={cn("font-bold uppercase tracking-tight", textClassName)}
          style={{ whiteSpace: "nowrap" }}
        >
          {wordsArray.map((word, idx) => (
            <span key={`word-${idx}`} className="inline-block">
              {word.text.map((char, index) => (
                <span key={`char-${index}`} className={word.className}>
                  {char}
                </span>
              ))}
              &nbsp;
            </span>
          ))}
        </div>
      </motion.div>
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
        className={cn("mb-2 block w-[3px] rounded-sm bg-brand-aqua", cursorClassName)}
      />
    </div>
  );
}

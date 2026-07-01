import type { LucideIcon } from "lucide-react";

export interface Stat {
  value: number;
  suffix?: string;
  prefix?: string;
  padStart?: number;
  label: string;
}

export interface CTA {
  label: string;
  href: string;
}

export interface Eyebrow {
  text: string;
}

export interface SectionHeading {
  eyebrow?: string;
  title: string;
  body?: string;
}

export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export interface IconBlock {
  icon: LucideIcon;
  title: string;
  body: string;
}

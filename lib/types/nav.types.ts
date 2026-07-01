import type { NavItem } from "./content.types";

export interface FooterColumn {
  title: string;
  links: { label: string; href: string }[];
}

export interface NavConfig {
  primary: NavItem[];
  requestDemoCta: { label: string; href: string };
  footerColumns: FooterColumn[];
  siteName: string;
  footerTagline: string;
}

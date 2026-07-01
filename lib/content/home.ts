import { homeContent } from "@/content/home.content";
import type { HomeContent } from "@/lib/types/home.types";

// Seam for swapping in a headless CMS (e.g. WPGraphQL) later — only this
// function changes; every component and page stays untouched.
export function getHomeContent(): HomeContent {
  return homeContent;
}

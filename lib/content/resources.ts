import { blogContent } from "@/content/resources/blog.content";
import { casesContent } from "@/content/resources/cases.content";
import { briefsContent } from "@/content/resources/briefs.content";
import { docsContent } from "@/content/resources/docs.content";

const RESOURCES_MAP = {
  blog: blogContent,
  cases: casesContent,
  briefs: briefsContent,
  docs: docsContent,
} as const;

export type ResourcesSlug = keyof typeof RESOURCES_MAP;

export function getResourcesContent(slug: ResourcesSlug) {
  return RESOURCES_MAP[slug];
}

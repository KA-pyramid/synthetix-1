import { storyContent } from "@/content/company/story.content";
import { teamContent } from "@/content/company/team.content";
import { careersContent } from "@/content/company/careers.content";
import { contactContent } from "@/content/company/contact.content";

const COMPANY_MAP = {
  story: storyContent,
  team: teamContent,
  careers: careersContent,
  contact: contactContent,
} as const;

export type CompanySlug = keyof typeof COMPANY_MAP;

export function getCompanyContent(slug: CompanySlug) {
  return COMPANY_MAP[slug];
}

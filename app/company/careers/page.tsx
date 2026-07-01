import { getCompanyContent } from "@/lib/content/company";

export default function CompanyCareersPage() {
  const content = getCompanyContent("careers");
  return (
    <main>
      <div className="border border-dashed border-neutral-500 p-8 font-mono text-xs text-neutral-500">
        Company / Careers — awaiting 21st.dev component ({content.title || "content TODO"})
      </div>
    </main>
  );
}

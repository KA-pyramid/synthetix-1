import { getCompanyContent } from "@/lib/content/company";

export default function CompanyStoryPage() {
  const content = getCompanyContent("story");
  return (
    <main>
      <div className="border border-dashed border-neutral-500 p-8 font-mono text-xs text-neutral-500">
        Company / Story — awaiting 21st.dev component ({content.title || "content TODO"})
      </div>
    </main>
  );
}

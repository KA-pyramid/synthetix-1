import { getCompanyContent } from "@/lib/content/company";

export default function CompanyTeamPage() {
  const content = getCompanyContent("team");
  return (
    <main>
      <div className="border border-dashed border-neutral-500 p-8 font-mono text-xs text-neutral-500">
        Company / Team — awaiting 21st.dev component ({content.title || "content TODO"})
      </div>
    </main>
  );
}

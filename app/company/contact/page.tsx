import { getCompanyContent } from "@/lib/content/company";

export default function CompanyContactPage() {
  const content = getCompanyContent("contact");
  return (
    <main>
      <div className="border border-dashed border-neutral-500 p-8 font-mono text-xs text-neutral-500">
        Company / Contact — awaiting 21st.dev component ({content.title || "content TODO"})
      </div>
    </main>
  );
}

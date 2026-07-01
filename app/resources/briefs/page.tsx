import { getResourcesContent } from "@/lib/content/resources";

export default function ResourcesBriefsPage() {
  const content = getResourcesContent("briefs");
  return (
    <main>
      <div className="border border-dashed border-neutral-500 p-8 font-mono text-xs text-neutral-500">
        Resources / Briefs — awaiting 21st.dev component ({content.title || "content TODO"})
      </div>
    </main>
  );
}

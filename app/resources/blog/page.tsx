import { getResourcesContent } from "@/lib/content/resources";

export default function ResourcesBlogPage() {
  const content = getResourcesContent("blog");
  return (
    <main>
      <div className="border border-dashed border-neutral-500 p-8 font-mono text-xs text-neutral-500">
        Resources / Blog — awaiting 21st.dev component ({content.title || "content TODO"})
      </div>
    </main>
  );
}

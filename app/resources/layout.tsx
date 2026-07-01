import { Breadcrumb } from "@/components/layout/Breadcrumb";

export default function ResourcesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <Breadcrumb items={[{ label: "Resources", href: "/resources/blog" }]} />
      {children}
    </div>
  );
}

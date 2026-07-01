import { Breadcrumb } from "@/components/layout/Breadcrumb";

export default function CompanyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <Breadcrumb items={[{ label: "Company", href: "/company/story" }]} />
      {children}
    </div>
  );
}

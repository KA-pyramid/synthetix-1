export interface DataTableProps {
  columns: string[];
  rows: (string | number)[][];
}

export function DataTable({ columns }: DataTableProps) {
  return (
    <div className="border border-dashed border-neutral-500 p-4 font-mono text-xs text-neutral-500">
      DataTable — awaiting 21st.dev component ({columns.join(", ")})
    </div>
  );
}

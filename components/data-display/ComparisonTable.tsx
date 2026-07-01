// Why#competitors capability matrix.
export interface ComparisonTableProps {
  rows: { capability: string; others: string; synthetix: string }[];
}

export function ComparisonTable({ rows }: ComparisonTableProps) {
  return (
    <div className="border border-dashed border-neutral-500 p-4 font-mono text-xs text-neutral-500">
      ComparisonTable — awaiting 21st.dev component ({rows.length} rows)
    </div>
  );
}

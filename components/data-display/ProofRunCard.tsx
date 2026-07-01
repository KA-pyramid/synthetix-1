// Home "Platform Proof".
export interface ProofRunCardProps {
  metric: string;
  label: string;
}

export function ProofRunCard({ metric, label }: ProofRunCardProps) {
  return (
    <div className="border border-dashed border-neutral-500 p-4 font-mono text-xs text-neutral-500">
      ProofRunCard — awaiting 21st.dev component ({metric}: {label})
    </div>
  );
}

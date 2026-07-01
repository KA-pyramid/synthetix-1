import { getHomeContent } from "@/lib/content/home";

function NetworkIllustration() {
  const nodes = [
    [20, 30], [60, 15], [110, 45], [160, 20], [200, 60],
    [40, 90], [90, 110], [140, 95], [190, 130], [70, 150],
    [130, 160], [30, 180],
  ];
  const edges = [
    [0, 1], [1, 2], [2, 3], [3, 4], [0, 5], [1, 5], [5, 6],
    [6, 7], [7, 8], [2, 7], [5, 9], [6, 10], [9, 10], [9, 11],
    [10, 8], [4, 8],
  ];

  return (
    <svg
      viewBox="0 0 220 200"
      className="h-full w-full"
      aria-hidden="true"
    >
      {edges.map(([a, b], i) => (
        <line
          key={i}
          x1={nodes[a][0]}
          y1={nodes[a][1]}
          x2={nodes[b][0]}
          y2={nodes[b][1]}
          stroke="#3AC8D5"
          strokeOpacity={0.2}
          strokeWidth={1.5}
        />
      ))}
      {nodes.map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r={4} fill="#3AC8D5" fillOpacity={0.2} />
      ))}
    </svg>
  );
}

export function ManifestoSection() {
  const { manifesto } = getHomeContent();
  return (
    <section className="bg-white px-6 py-24" id="governance">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 md:grid-cols-2">
        <div>
          <h2 className="font-display text-3xl font-bold text-brand-black md:text-4xl">
            {manifesto.title}
          </h2>
          <p className="mt-6 font-body text-base leading-relaxed text-[--text-secondary] md:text-lg">
            {manifesto.body}
          </p>
        </div>
        <div className="h-64 rounded-2xl bg-neutral-50 p-6 md:h-80">
          <NetworkIllustration />
        </div>
      </div>
    </section>
  );
}

import { getAllTheses } from "@/lib/theses";
import Link from "next/link";

const maturityOrder = {
  Conviction: 0,
  Established: 1,
  Emerging: 2,
  Hypothesis: 3,
};

const maturityIcons: Record<string, string> = {
  Conviction: "★",
  Established: "◆",
  Emerging: "▲",
  Hypothesis: "○",
};

export default function HomePage() {
  const theses = getAllTheses().sort(
    (a, b) => maturityOrder[a.maturity] - maturityOrder[b.maturity]
  );

  const grouped = {
    Conviction: theses.filter((t) => t.maturity === "Conviction"),
    Established: theses.filter((t) => t.maturity === "Established"),
    Emerging: theses.filter((t) => t.maturity === "Emerging"),
    Hypothesis: theses.filter((t) => t.maturity === "Hypothesis"),
  };

  const totalTheses = theses.length;
  const convictionCount = grouped.Conviction.length;

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      {/* Header with stats */}
      <div className="mb-12">
        <h1 className="pixel-header text-xl mb-4 text-gray-800">
          INVESTMENT THESES
        </h1>
        <p className="text-gray-600 max-w-2xl mb-6">
          Active research on healthcare and technology investment opportunities.
          Each thesis represents a developing investment belief.
        </p>

        {/* Stats bar */}
        <div className="flex gap-6 text-sm">
          <div className="flex items-center gap-2">
            <span className="pixel-header text-xs text-gray-500">TOTAL</span>
            <span className="font-mono font-bold text-lg">{totalTheses}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="pixel-header text-xs text-gray-500">★ CONVICTION</span>
            <span className="font-mono font-bold text-lg text-accent">{convictionCount}</span>
          </div>
          <div className="flex-1 max-w-xs">
            <div className="progress-nintendo">
              <div
                className="progress-nintendo-fill"
                style={{ width: `${(convictionCount / Math.max(totalTheses, 1)) * 100}%` }}
              />
            </div>
          </div>
        </div>
      </div>

      {Object.entries(grouped).map(
        ([maturity, items]) =>
          items.length > 0 && (
            <section key={maturity} className="mb-12">
              <h2 className="pixel-header text-xs text-gray-500 mb-4 flex items-center gap-2">
                <span>{maturityIcons[maturity]}</span>
                {maturity.toUpperCase()}
                <span className="font-mono text-gray-400">({items.length})</span>
              </h2>
              <div className="grid gap-4">
                {items.map((thesis) => (
                  <Link
                    key={thesis.slug}
                    href={`/thesis/${encodeURIComponent(thesis.slug)}`}
                    className="block p-5 card-nintendo bg-white group"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1 min-w-0">
                        <h3 className="font-mono font-bold text-lg mb-2 group-hover:text-accent transition-colors">
                          {thesis.title}
                        </h3>
                        {thesis.take && (
                          <p className="text-gray-600 text-sm leading-relaxed">
                            {thesis.take}
                          </p>
                        )}
                      </div>
                      <span
                        className={`badge badge-${maturity.toLowerCase()} shrink-0`}
                      >
                        {maturity}
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          )
      )}

      {theses.length === 0 && (
        <div className="text-center py-20 text-gray-500">
          <p className="pixel-header text-sm mb-4">NO THESES FOUND</p>
          <p className="text-sm">
            Add markdown files to <code className="text-xs">content/Theses/</code>
          </p>
        </div>
      )}
    </div>
  );
}

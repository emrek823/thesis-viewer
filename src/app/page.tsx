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
      {/* Hero Section */}
      <div className="mb-12">
        <h1 className="font-mono font-bold text-3xl mb-6 text-gray-900">
          Living Investment Theses
        </h1>

        {/* Intro copy */}
        <div className="max-w-3xl mb-8 space-y-4 text-gray-700 leading-relaxed">
          <p>
            Every expert call, earnings transcript, regulatory filing, and deal memo we encounter
            gets saved to a persistent file system — tens of thousands of primary sources accumulating
            over time. An AI agent traverses this full corpus, reading documents in full — not
            summaries, not chunks — to surface connections and contradictions we&apos;d miss working
            sequentially. No embeddings, no knowledge graph infrastructure. The reasoning itself is
            the query engine.
          </p>
          <p>
            But the AI doesn&apos;t write the thesis. We do. Investment conviction in healthcare lives
            in non-verifiable domains — what constitutes a &ldquo;good&rdquo; thesis can&apos;t be
            checked against a ground truth the way code or math can. We&apos;ve iterated through
            multiple approaches to automate thesis generation and the quality never meets the bar.
            The same pattern shows up across healthcare: as AI moves past low-hanging fruit into
            judgment-heavy decisions, human expertise becomes more important, not less. These theses
            are the product of that conviction — AI-augmented research, manually written.
          </p>
          <p>
            <strong>Select any text inside a thesis and click &ldquo;Comment&rdquo;</strong> to
            send us pushback, corrections, or additional evidence — it goes straight to our team.
            You can also{" "}
            <a href="https://virtue.vc" className="text-accent hover:underline">reach out</a> if
            you&apos;re building in these spaces.
          </p>
        </div>

        {/* Process diagram */}
        <div className="mb-8">
          <img
            src="/thesis-process.svg"
            alt="Thesis development process: Research Footprint → AI Interview → Refined Thesis"
            className="w-full max-w-3xl"
          />
        </div>
      </div>

      {/* Header with stats */}
      <div className="mb-12">
        <h2 className="font-mono uppercase tracking-wider text-xl mb-4 text-gray-800">
          ACTIVE THESES
        </h2>
        <p className="text-gray-600 max-w-2xl mb-6">
          Click any thesis to read, challenge, or suggest improvements.
        </p>

        {/* Stats bar */}
        <div className="flex gap-6 text-sm">
          <div className="flex items-center gap-2">
            <span className="font-mono uppercase tracking-wider text-xs text-gray-500">TOTAL</span>
            <span className="font-mono font-bold text-lg">{totalTheses}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-mono uppercase tracking-wider text-xs text-gray-500">★ CONVICTION</span>
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
              <h2 className="font-mono uppercase tracking-wider text-xs text-gray-500 mb-4 flex items-center gap-2">
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
          <p className="font-mono uppercase tracking-wider text-sm mb-4">NO THESES FOUND</p>
          <p className="text-sm">
            Add markdown files to <code className="text-xs">content/Theses/</code>
          </p>
        </div>
      )}
    </div>
  );
}

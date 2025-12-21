import { getAllTheses } from "@/lib/theses";
import Link from "next/link";

const maturityOrder = {
  Conviction: 0,
  Established: 1,
  Emerging: 2,
  Hypothesis: 3,
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

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <div className="mb-12">
        <h1 className="font-mono font-bold text-3xl mb-3">Investment Theses</h1>
        <p className="text-gray-600 max-w-2xl">
          Active research on healthcare and technology investment opportunities.
          Each thesis represents a developing investment belief.
        </p>
      </div>

      {Object.entries(grouped).map(
        ([maturity, items]) =>
          items.length > 0 && (
            <section key={maturity} className="mb-12">
              <h2 className="font-mono font-bold text-sm uppercase tracking-wider text-gray-500 mb-4">
                {maturity}
              </h2>
              <div className="grid gap-4">
                {items.map((thesis) => (
                  <Link
                    key={thesis.slug}
                    href={`/thesis/${thesis.slug}`}
                    className="block p-5 border border-gray-200 rounded-lg hover:border-accent hover:shadow-sm transition-all group"
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
          <p className="mb-2">No theses found.</p>
          <p className="text-sm">
            Add markdown files to <code className="text-xs">content/Theses/</code>
          </p>
        </div>
      )}
    </div>
  );
}

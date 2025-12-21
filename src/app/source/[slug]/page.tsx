import { getSourceWithBacklinks, getAllSources } from "@/lib/theses";
import { notFound } from "next/navigation";
import Link from "next/link";
import { SourceContent } from "@/components/SourceContent";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const sources = getAllSources();
  return sources.map((s) => ({ slug: s.slug }));
}

const folderLabels: Record<string, string> = {
  Clippings: "Web Article",
  Chats: "Claude Chat",
  Granola: "Meeting Notes",
  Downloads: "Document",
};

const folderIcons: Record<string, string> = {
  Clippings: "link",
  Chats: "message-circle",
  Granola: "users",
  Downloads: "file-text",
};

export default async function SourcePage({ params }: Props) {
  const { slug } = await params;
  const source = getSourceWithBacklinks(decodeURIComponent(slug));

  if (!source) {
    notFound();
  }

  const typeLabel = source.folder ? folderLabels[source.folder] || source.folder : "Source";

  return (
    <div className="max-w-4xl mx-auto px-6 py-8">
      <div className="mb-6">
        <Link
          href="/"
          className="text-sm text-gray-500 hover:text-accent transition-colors"
        >
          &larr; All Theses
        </Link>
      </div>

      <article>
        <header className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="px-2 py-1 text-xs font-mono bg-gray-100 text-gray-600 rounded">
              {typeLabel}
            </span>
            {source.date && (
              <span className="text-sm text-gray-500">{source.date}</span>
            )}
          </div>
          <h1 className="font-mono font-bold text-2xl mb-4">{source.title}</h1>

          {/* Backlinks */}
          {source.backlinks.length > 0 && (
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
              <h2 className="text-xs font-mono uppercase tracking-wider text-gray-500 mb-3">
                Cited in {source.backlinks.length} {source.backlinks.length === 1 ? "thesis" : "theses"}
              </h2>
              <div className="flex flex-wrap gap-2">
                {source.backlinks.map((link) => (
                  <Link
                    key={link.slug}
                    href={`/thesis/${link.slug}`}
                    className="inline-flex items-center gap-2 px-3 py-1.5 bg-white border border-gray-200 rounded-lg hover:border-accent hover:text-accent transition-colors text-sm"
                  >
                    <span
                      className={`w-2 h-2 rounded-full ${
                        link.maturity === "Conviction"
                          ? "bg-green-500"
                          : link.maturity === "Established"
                          ? "bg-blue-500"
                          : link.maturity === "Emerging"
                          ? "bg-yellow-500"
                          : "bg-gray-400"
                      }`}
                    />
                    {link.title}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </header>

        <div className="prose prose-gray max-w-none">
          <SourceContent content={source.content} />
        </div>
      </article>
    </div>
  );
}

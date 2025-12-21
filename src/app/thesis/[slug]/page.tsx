import { getThesis, getAllTheses } from "@/lib/theses";
import { resolveWikilinks } from "@/lib/wikilinks";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ThesisContent } from "@/components/ThesisContent";
import { SourcesPanel } from "@/components/SourcesPanel";
import { ChatSidebar } from "@/components/ChatSidebar";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const theses = getAllTheses();
  return theses.map((t) => ({ slug: t.slug }));
}

export default async function ThesisPage({ params }: Props) {
  const { slug } = await params;
  const thesis = getThesis(slug);

  if (!thesis) {
    notFound();
  }

  const processedContent = resolveWikilinks(thesis.content);

  return (
    <div className="max-w-6xl mx-auto px-6 py-8">
      <div className="mb-6">
        <Link
          href="/"
          className="text-sm text-gray-500 hover:text-accent transition-colors"
        >
          &larr; All Theses
        </Link>
      </div>

      <div className="flex gap-8">
        <article className="flex-1 min-w-0">
          <header className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <span
                className={`badge badge-${thesis.maturity.toLowerCase()}`}
              >
                {thesis.maturity}
              </span>
            </div>
            <h1 className="font-mono font-bold text-3xl">{thesis.title}</h1>
          </header>

          <div className="prose max-w-none">
            <ThesisContent content={processedContent} />
          </div>
        </article>

        {thesis.sources.length > 0 && (
          <aside className="w-80 shrink-0 hidden lg:block">
            <SourcesPanel sources={thesis.sources} />
          </aside>
        )}
      </div>

      <ChatSidebar thesisSlug={slug} thesisTitle={thesis.title} />
    </div>
  );
}

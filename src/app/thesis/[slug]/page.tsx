import { getThesis, getAllTheses } from "@/lib/theses";
import { resolveWikilinks } from "@/lib/wikilinks";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ThesisWithAnnotations } from "@/components/ThesisWithAnnotations";
import { SourcesPanel } from "@/components/SourcesPanel";
import { ChatSidebar } from "@/components/ChatSidebar";
import { ThesisExplainer } from "@/components/ThesisExplainer";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const theses = getAllTheses();
  return theses.map((t) => ({ slug: t.slug }));
}

export default async function ThesisPage({ params }: Props) {
  const { slug } = await params;
  const decodedSlug = decodeURIComponent(slug);
  const thesis = getThesis(decodedSlug);

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

      <ThesisExplainer />

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

          <ThesisWithAnnotations
            content={processedContent}
            thesisTitle={thesis.title}
            thesisSlug={decodedSlug}
          />
        </article>

        {thesis.sources.length > 0 && (
          <aside className="w-80 shrink-0 hidden lg:block">
            <SourcesPanel sources={thesis.sources} />
          </aside>
        )}
      </div>

      <ChatSidebar thesisSlug={decodedSlug} thesisTitle={thesis.title} />
    </div>
  );
}

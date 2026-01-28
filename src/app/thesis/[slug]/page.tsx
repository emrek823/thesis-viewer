import { getThesis, getAllTheses } from "@/lib/theses";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ThesisWithAnnotations } from "@/components/ThesisWithAnnotations";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const theses = getAllTheses();
  return theses.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const thesis = getThesis(decodeURIComponent(slug));
  if (!thesis) return { title: "Thesis Not Found" };
  return {
    title: `${thesis.title} | Virtue VC`,
    description: thesis.take || `Investment thesis: ${thesis.title}`,
    openGraph: {
      title: `${thesis.title} | Virtue VC`,
      description: thesis.take || `Investment thesis: ${thesis.title}`,
      type: "article",
    },
  };
}

export default async function ThesisPage({ params }: Props) {
  const { slug } = await params;
  const decodedSlug = decodeURIComponent(slug);
  const thesis = getThesis(decodedSlug);

  if (!thesis) {
    notFound();
  }

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
            <span
              className={`badge badge-${thesis.maturity.toLowerCase()}`}
            >
              {thesis.maturity}
            </span>
          </div>
          <h1 className="font-mono font-bold text-3xl">{thesis.title}</h1>
        </header>

        <ThesisWithAnnotations
          content={thesis.content}
          thesisTitle={thesis.title}
          thesisSlug={decodedSlug}
        />
      </article>
    </div>
  );
}

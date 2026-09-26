import { notFound } from "next/navigation";
import Link from "next/link";
import { tools, getToolBySlug, getCategoryById } from "@/data/tools";
import { formatRating } from "@/lib/utils";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return tools.map((tool) => ({ slug: tool.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const tool = getToolBySlug(slug);
  if (!tool) return { title: "Tool not found" };
  return {
    title: `${tool.name} Review 2026 – Pricing, Pros & Cons`,
    description: tool.description,
  };
}

export default async function ToolPage({ params }: Props) {
  const { slug } = await params;
  const tool = getToolBySlug(slug);
  if (!tool) notFound();

  const category = getCategoryById(tool.category);

  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 py-10">
      <div className="mb-6">
        <Link
          href={category ? `/category/${category.id}` : "/tools"}
          className="text-sm text-brand-600 hover:underline"
        >
          ← {category ? category.name : "All tools"}
        </Link>
      </div>

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-8">
        <div>
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-900">{tool.name}</h1>
          <p className="mt-2 text-lg text-slate-600">{tool.description}</p>
          <div className="mt-3 flex flex-wrap items-center gap-3 text-sm">
            <span className="inline-flex items-center gap-1 rounded-full bg-amber-50 px-3 py-1 font-medium text-amber-700">
              ★ {formatRating(tool.rating)}
            </span>
            <span className="rounded-full bg-slate-100 px-3 py-1 text-slate-600 capitalize">
              {tool.category}
            </span>
            <span className="font-medium text-brand-600">{tool.pricing}</span>
          </div>
        </div>
        <a
          href={tool.affiliateUrl}
          target="_blank"
          rel="noopener noreferrer sponsored"
          className="shrink-0 rounded-full bg-brand-600 px-6 py-3 text-center font-semibold text-white hover:bg-brand-700 transition shadow-sm"
        >
          Visit {tool.name} →
        </a>
      </div>

      {/* Long description */}
      <div className="prose prose-slate max-w-none mb-10">
        <p className="text-slate-700 leading-relaxed">{tool.longDescription}</p>
      </div>

      {/* Pros & Cons */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        <div className="rounded-2xl border border-green-100 bg-green-50/50 p-6">
          <h2 className="font-semibold text-lg text-green-800 mb-3">Pros</h2>
          <ul className="space-y-2">
            {tool.pros.map((pro) => (
              <li key={pro} className="flex items-start gap-2 text-sm text-green-900">
                <span className="mt-0.5 text-green-600">✓</span>
                {pro}
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-2xl border border-red-100 bg-red-50/50 p-6">
          <h2 className="font-semibold text-lg text-red-800 mb-3">Cons</h2>
          <ul className="space-y-2">
            {tool.cons.map((con) => (
              <li key={con} className="flex items-start gap-2 text-sm text-red-900">
                <span className="mt-0.5 text-red-600">−</span>
                {con}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Features & Pricing */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        <div className="rounded-2xl border border-slate-200 bg-white p-6">
          <h2 className="font-semibold text-lg text-slate-900 mb-3">Key Features</h2>
          <ul className="space-y-2">
            {tool.features.map((f) => (
              <li key={f} className="flex items-center gap-2 text-sm text-slate-700">
                <span className="text-brand-500">•</span>
                {f}
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-white p-6">
          <h2 className="font-semibold text-lg text-slate-900 mb-3">Pricing</h2>
          <p className="text-2xl font-bold text-brand-600">{tool.pricing}</p>
          <p className="mt-2 text-sm text-slate-600">{tool.pricingDetails}</p>
          <p className="mt-4 text-sm text-slate-500">
            <strong>Best for:</strong> {tool.bestFor}
          </p>
        </div>
      </div>

      {/* CTA */}
      <div className="rounded-2xl bg-brand-600 p-8 text-center text-white">
        <h2 className="text-xl font-bold">Ready to try {tool.name}?</h2>
        <p className="mt-2 text-brand-100 text-sm">
          Click below to visit the official site. We may earn a commission at no extra cost to you.
        </p>
        <a
          href={tool.affiliateUrl}
          target="_blank"
          rel="noopener noreferrer sponsored"
          className="mt-5 inline-block rounded-full bg-white px-8 py-3 font-semibold text-brand-700 hover:bg-brand-50 transition"
        >
          Get Started with {tool.name} →
        </a>
      </div>

      {/* Related note */}
      <p className="mt-8 text-center text-xs text-slate-400">
        Last reviewed: September 2026 · Affiliate disclosure applies
      </p>
    </div>
  );
}

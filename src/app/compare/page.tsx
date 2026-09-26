import { tools } from "@/data/tools";
import Link from "next/link";
import { formatRating } from "@/lib/utils";

export const metadata = {
  title: "Compare AI Tools for Content Creators",
  description: "Side-by-side comparison of the best AI writing, video, image and SEO tools.",
};

export default function ComparePage() {
  // Show top tools sorted by rating
  const sorted = [...tools].sort((a, b) => b.rating - a.rating).slice(0, 12);

  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 py-10">
      <h1 className="text-3xl font-bold text-slate-900 mb-2">Compare AI Tools</h1>
      <p className="text-slate-600 mb-8">
        Quick overview of ratings, pricing and best use cases. Click any tool for full review.
      </p>

      <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
        <table className="w-full text-sm text-left">
          <thead className="bg-slate-50 text-slate-600 border-b border-slate-200">
            <tr>
              <th className="px-4 py-3 font-semibold">Tool</th>
              <th className="px-4 py-3 font-semibold">Category</th>
              <th className="px-4 py-3 font-semibold">Rating</th>
              <th className="px-4 py-3 font-semibold">Pricing</th>
              <th className="px-4 py-3 font-semibold">Best For</th>
              <th className="px-4 py-3 font-semibold"></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {sorted.map((tool) => (
              <tr key={tool.id} className="hover:bg-slate-50/50">
                <td className="px-4 py-3 font-medium text-slate-900">
                  <Link href={`/tools/${tool.slug}`} className="hover:text-brand-600">
                    {tool.name}
                  </Link>
                </td>
                <td className="px-4 py-3 capitalize text-slate-600">{tool.category}</td>
                <td className="px-4 py-3">
                  <span className="inline-flex items-center gap-1 text-amber-700 font-medium">
                    ★ {formatRating(tool.rating)}
                  </span>
                </td>
                <td className="px-4 py-3 text-slate-700">{tool.pricing}</td>
                <td className="px-4 py-3 text-slate-600 max-w-xs truncate">{tool.bestFor}</td>
                <td className="px-4 py-3">
                  <Link
                    href={`/tools/${tool.slug}`}
                    className="text-brand-600 font-medium hover:underline"
                  >
                    Review →
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

import Link from "next/link";
import { Tool } from "@/data/tools";
import { formatRating } from "@/lib/utils";

export function ToolCard({ tool }: { tool: Tool }) {
  return (
    <Link
      href={`/tools/${tool.slug}`}
      className="group block rounded-2xl border border-slate-200 bg-white p-5 shadow-sm hover:shadow-md hover:border-brand-300 transition-all"
    >
      <div className="flex items-start justify-between gap-3">
        <div>
          <h3 className="font-semibold text-lg text-slate-900 group-hover:text-brand-700 transition">
            {tool.name}
          </h3>
          <p className="text-sm text-slate-500 mt-0.5 capitalize">{tool.category}</p>
        </div>
        <div className="flex items-center gap-1 rounded-full bg-amber-50 px-2.5 py-1 text-sm font-medium text-amber-700">
          <span>★</span>
          <span>{formatRating(tool.rating)}</span>
        </div>
      </div>

      <p className="mt-3 text-sm text-slate-600 line-clamp-2">{tool.description}</p>

      <div className="mt-4 flex items-center justify-between">
        <span className="text-sm font-medium text-brand-600">{tool.pricing}</span>
        <span className="text-sm text-slate-400 group-hover:text-brand-600 transition">
          View details →
        </span>
      </div>
    </Link>
  );
}

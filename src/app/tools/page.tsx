import { tools, categories } from "@/data/tools";
import { ToolCard } from "@/components/ToolCard";
import Link from "next/link";

export const metadata = {
  title: "All AI Tools for Content Creators",
  description: "Browse our complete directory of AI writing, video, image, audio and SEO tools for creators.",
};

export default function ToolsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 py-10">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900">All AI Tools</h1>
        <p className="mt-2 text-slate-600">
          {tools.length} carefully selected tools for content creators. Filter by category below.
        </p>
      </div>

      <div className="flex flex-wrap gap-2 mb-8">
        <Link
          href="/tools"
          className="rounded-full bg-brand-600 px-4 py-1.5 text-sm font-medium text-white"
        >
          All
        </Link>
        {categories.map((cat) => (
          <Link
            key={cat.id}
            href={`/category/${cat.id}`}
            className="rounded-full border border-slate-200 bg-white px-4 py-1.5 text-sm font-medium text-slate-700 hover:border-brand-300 hover:text-brand-700 transition"
          >
            {cat.icon} {cat.name}
          </Link>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {tools.map((tool) => (
          <ToolCard key={tool.id} tool={tool} />
        ))}
      </div>
    </div>
  );
}

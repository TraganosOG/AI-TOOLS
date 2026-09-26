import { notFound } from "next/navigation";
import { categories, getToolsByCategory, getCategoryById } from "@/data/tools";
import { ToolCard } from "@/components/ToolCard";
import Link from "next/link";

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateStaticParams() {
  return categories.map((cat) => ({ id: cat.id }));
}

export async function generateMetadata({ params }: Props) {
  const { id } = await params;
  const category = getCategoryById(id);
  if (!category) return { title: "Category not found" };
  return {
    title: `${category.name} AI Tools for Content Creators`,
    description: category.description,
  };
}

export default async function CategoryPage({ params }: Props) {
  const { id } = await params;
  const category = getCategoryById(id);
  if (!category) notFound();

  const categoryTools = getToolsByCategory(id);

  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 py-10">
      <div className="mb-2">
        <Link href="/tools" className="text-sm text-brand-600 hover:underline">
          ← All tools
        </Link>
      </div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900 flex items-center gap-3">
          <span>{category.icon}</span> {category.name}
        </h1>
        <p className="mt-2 text-slate-600">{category.description}</p>
        <p className="mt-1 text-sm text-slate-500">{categoryTools.length} tools</p>
      </div>

      {categoryTools.length === 0 ? (
        <p className="text-slate-500">No tools in this category yet.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {categoryTools.map((tool) => (
            <ToolCard key={tool.id} tool={tool} />
          ))}
        </div>
      )}
    </div>
  );
}

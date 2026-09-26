import Link from "next/link";
import { tools, categories, getFeaturedTools, getToolsByCategory } from "@/data/tools";
import { ToolCard } from "@/components/ToolCard";
import { CategoryCard } from "@/components/CategoryCard";

export default function HomePage() {
  const featured = getFeaturedTools();

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-b from-brand-50 to-white border-b border-slate-100">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-16 sm:py-24 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-900 text-balance">
            The Best AI Tools for{" "}
            <span className="text-brand-600">Content Creators</span>
          </h1>
          <p className="mt-5 text-lg text-slate-600 max-w-2xl mx-auto">
            Honest reviews and comparisons of AI writing, video, image, audio & SEO tools.
            Updated regularly so you always know what actually works in 2026.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              href="/tools"
              className="rounded-full bg-brand-600 px-6 py-3 text-base font-semibold text-white hover:bg-brand-700 transition shadow-sm"
            >
              Browse All Tools
            </Link>
            <Link
              href="/compare"
              className="rounded-full border border-slate-300 bg-white px-6 py-3 text-base font-semibold text-slate-700 hover:bg-slate-50 transition"
            >
              Compare Tools
            </Link>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 py-14">
        <h2 className="text-2xl font-bold text-slate-900 mb-6">Browse by Category</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {categories.map((cat) => (
            <CategoryCard
              key={cat.id}
              id={cat.id}
              name={cat.name}
              icon={cat.icon}
              description={cat.description}
              count={getToolsByCategory(cat.id).length}
            />
          ))}
        </div>
      </section>

      {/* Featured */}
      <section className="bg-slate-50 border-y border-slate-100">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-14">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-slate-900">Featured Tools</h2>
            <Link href="/tools" className="text-sm font-medium text-brand-600 hover:underline">
              View all →
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {featured.slice(0, 6).map((tool) => (
              <ToolCard key={tool.id} tool={tool} />
            ))}
          </div>
        </div>
      </section>

      {/* Why this site */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 py-14">
        <h2 className="text-2xl font-bold text-slate-900 mb-6 text-center">
          Why creators trust this directory
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="p-6">
            <div className="text-3xl mb-3">🔍</div>
            <h3 className="font-semibold text-lg">Independent reviews</h3>
            <p className="mt-2 text-sm text-slate-600">
              We test tools ourselves and update ratings based on real usage — not paid placements.
            </p>
          </div>
          <div className="p-6">
            <div className="text-3xl mb-3">💰</div>
            <h3 className="font-semibold text-lg">Transparent pricing</h3>
            <p className="mt-2 text-sm text-slate-600">
              Clear pricing, free plans, and what you actually get at each tier.
            </p>
          </div>
          <div className="p-6">
            <div className="text-3xl mb-3">⚡</div>
            <h3 className="font-semibold text-lg">Always up to date</h3>
            <p className="mt-2 text-sm text-slate-600">
              New tools and major updates are added regularly so you never miss the next big thing.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-600 text-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-14 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold">Ready to level up your content?</h2>
          <p className="mt-3 text-brand-100 max-w-xl mx-auto">
            Explore {tools.length}+ carefully selected AI tools used by thousands of creators.
          </p>
          <Link
            href="/tools"
            className="mt-6 inline-block rounded-full bg-white px-6 py-3 text-base font-semibold text-brand-700 hover:bg-brand-50 transition"
          >
            Explore All Tools
          </Link>
        </div>
      </section>
    </div>
  );
}

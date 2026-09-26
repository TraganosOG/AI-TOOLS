import Link from "next/link";
import { categories } from "@/data/tools";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2 font-bold text-xl text-brand-700">
            <span className="text-2xl">🚀</span>
            <span>Creator AI Tools</span>
          </Link>

          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-600">
            <Link href="/tools" className="hover:text-brand-600 transition">
              All Tools
            </Link>
            {categories.slice(0, 4).map((cat) => (
              <Link
                key={cat.id}
                href={`/category/${cat.id}`}
                className="hover:text-brand-600 transition"
              >
                {cat.name}
              </Link>
            ))}
            <Link href="/compare" className="hover:text-brand-600 transition">
              Compare
            </Link>
          </nav>

          <Link
            href="/tools"
            className="rounded-full bg-brand-600 px-4 py-2 text-sm font-semibold text-white hover:bg-brand-700 transition"
          >
            Explore Tools
          </Link>
        </div>
      </div>
    </header>
  );
}

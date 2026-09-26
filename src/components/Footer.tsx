import Link from "next/link";
import { categories } from "@/data/tools";

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-2 font-bold text-lg text-brand-700 mb-3">
              <span>🚀</span> Creator AI Tools
            </Link>
            <p className="text-slate-600 text-sm max-w-md">
              The independent directory of the best AI tools for content creators.
              Honest reviews, real comparisons, and up-to-date pricing — updated regularly.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-slate-900 mb-3">Categories</h3>
            <ul className="space-y-2 text-sm text-slate-600">
              {categories.map((cat) => (
                <li key={cat.id}>
                  <Link href={`/category/${cat.id}`} className="hover:text-brand-600">
                    {cat.icon} {cat.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-slate-900 mb-3">Quick Links</h3>
            <ul className="space-y-2 text-sm text-slate-600">
              <li>
                <Link href="/tools" className="hover:text-brand-600">
                  All Tools
                </Link>
              </li>
              <li>
                <Link href="/compare" className="hover:text-brand-600">
                  Compare Tools
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-brand-600">
                  About
                </Link>
              </li>
              <li>
                <Link href="/disclosure" className="hover:text-brand-600">
                  Affiliate Disclosure
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-slate-200 text-center text-sm text-slate-500">
          <p>
            © {new Date().getFullYear()} Creator AI Tools. All rights reserved.
          </p>
          <p className="mt-1">
            We may earn a commission when you buy through our links. This helps keep the site free.
          </p>
        </div>
      </div>
    </footer>
  );
}

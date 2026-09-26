import Link from "next/link";

type Props = {
  id: string;
  name: string;
  icon: string;
  description: string;
  count: number;
};

export function CategoryCard({ id, name, icon, description, count }: Props) {
  return (
    <Link
      href={`/category/${id}`}
      className="group flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md hover:border-brand-300 transition-all"
    >
      <div className="text-3xl mb-3">{icon}</div>
      <h3 className="font-semibold text-lg text-slate-900 group-hover:text-brand-700">
        {name}
      </h3>
      <p className="mt-1 text-sm text-slate-600 flex-1">{description}</p>
      <p className="mt-3 text-sm font-medium text-brand-600">{count} tools →</p>
    </Link>
  );
}

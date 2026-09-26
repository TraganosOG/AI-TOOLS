export const metadata = {
  title: "Affiliate Disclosure",
  description: "How we make money and our commitment to transparent recommendations.",
};

export default function DisclosurePage() {
  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 py-12">
      <h1 className="text-3xl font-bold text-slate-900 mb-6">Affiliate Disclosure</h1>
      <div className="prose prose-slate max-w-none space-y-4 text-slate-700">
        <p>
          Creator AI Tools is a free resource. To support the time and infrastructure required to
          research, test, and maintain this directory, we participate in affiliate programs.
        </p>
        <p>
          This means that when you click a link to a tool and later purchase a plan or subscription,
          we may receive a commission from the company. The price you pay is the same (or sometimes
          better if a special offer is available).
        </p>
        <p>
          Our ratings, reviews, and rankings are not sold. Featured placement is based on a
          combination of product quality, popularity among creators, and usefulness — not on how
          much commission a tool pays.
        </p>
        <p>
          We strive to keep all pricing and feature information accurate and up to date. However,
          companies change their plans frequently. Always verify the latest details on the official
          website before purchasing.
        </p>
        <p>
          By using this site you acknowledge that some links are affiliate links. Thank you for
          supporting independent tool directories.
        </p>
      </div>
    </div>
  );
}

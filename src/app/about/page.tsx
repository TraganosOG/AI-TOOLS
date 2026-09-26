export const metadata = {
  title: "About Creator AI Tools",
  description: "Learn about our mission to help content creators find the best AI tools.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 py-12">
      <h1 className="text-3xl font-bold text-slate-900 mb-6">About Creator AI Tools</h1>
      <div className="prose prose-slate max-w-none space-y-4 text-slate-700">
        <p>
          Creator AI Tools is an independent directory dedicated to helping content creators —
          YouTubers, bloggers, social media managers, course creators, and freelancers — discover
          and evaluate the best AI tools available in 2026.
        </p>
        <p>
          We focus on practical value: honest ratings, clear pricing, real pros & cons, and
          straightforward recommendations based on how the tools actually perform for everyday
          creators.
        </p>
        <p>
          This site is designed to be largely automated. New tools and updates are researched and
          published with the help of AI systems, while maintaining editorial standards so that
          recommendations remain useful and trustworthy.
        </p>
        <p>
          We participate in affiliate programs. When you click through and make a purchase, we may
          earn a commission at no additional cost to you. This is how we keep the directory free
          and regularly updated.
        </p>
        <p>
          Questions or suggestions? Reach out — we are always improving the list of tools and the
          quality of reviews.
        </p>
      </div>
    </div>
  );
}

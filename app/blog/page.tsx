import { Categories } from "../components/categories";
import { LatestPost } from "../components/latest-post";
import { getCategories } from "../lib/queries";
import { latestPost } from "../lib/post";

export default async function BlogPage() {
  let cat = [];
  let posts = [];

  try {
    cat = await getCategories();
  } catch (e) {
    console.warn("Category fetch error:", e);
  }

  try {
    posts = await latestPost();
  } catch (e) {
    console.warn("Posts fetch error:", e);
  }

  return (
    <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      {/* Blog Page Header */}
      <section className="text-center max-w-3xl mx-auto space-y-4">
        <span className="px-3.5 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/20 text-xs font-semibold text-violet-300">
          Knowledge Base & Insights
        </span>
        <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight leading-tight">
          All <span className="text-gradient">Blog Articles</span>
        </h1>
        <p className="text-base text-slate-300">
          Browse through our complete collection of WordPress tutorials, Next.js architecture blueprints, and frontend development guides.
        </p>

        {/* Search & Filter bar */}
        <div className="pt-4 max-w-xl mx-auto flex gap-3">
          <div className="relative flex-1">
            <input
              type="text"
              placeholder="Search by keywords, tags, or titles..."
              readOnly
              className="w-full bg-slate-900 border border-slate-700/80 rounded-2xl py-3 pl-10 pr-4 text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-violet-500"
            />
            <svg
              className="w-4 h-4 text-slate-500 absolute left-3.5 top-3.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
          <button className="px-5 py-3 bg-violet-600 hover:bg-violet-500 text-white font-semibold text-sm rounded-2xl transition-all">
            Filter
          </button>
        </div>
      </section>

      {/* Category Pills */}
      <section>
        <Categories cat={cat} />
      </section>

      {/* Post Grid */}
      <section>
        <LatestPost posts={posts} />
      </section>
    </main>
  );
}

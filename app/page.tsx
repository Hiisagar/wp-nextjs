import { Categories } from "./components/categories";
import { getCategories } from "./lib/queries";
import { latestPost } from "./lib/post";
import { LatestPost } from "./components/latest-post";

export default async function Home() {
  let cat = [];
  let posts = [];

  try {
    cat = await getCategories();
  } catch (error) {
    console.warn("Categories fetch note:", error);
  }

  try {
    posts = await latestPost();
  } catch (error) {
    console.warn("Posts fetch note:", error);
  }

  return (
    <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      {/* Hero Banner Section */}
      <section className="relative glass-card rounded-3xl p-8 sm:p-12 md:p-16 overflow-hidden border border-slate-800/80">
        {/* Glow ambient lights inside card */}
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-violet-600/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-3xl space-y-6">
          {/* Tagline Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/20 text-xs font-semibold text-violet-300">
            <span className="w-2 h-2 rounded-full bg-violet-400 animate-ping" />
            Headless WordPress & Next.js 16
          </div>

          {/* Hero Headline */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-tight">
            Insights, Code & <br />
            <span className="text-gradient">Modern Web Tech.</span>
          </h1>

          {/* Hero Subtitle */}
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            Explore carefully crafted articles, step-by-step guides, and practical insights on building fast, scalable web applications with React, Next.js, and WordPress.
          </p>

          {/* Quick Metrics */}
          <div className="pt-6 grid grid-cols-3 gap-6 border-t border-slate-800/80 text-slate-400">
            <div>
              <p className="text-2xl font-bold text-white">50+</p>
              <p className="text-xs text-slate-400">Published Posts</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-white">10k+</p>
              <p className="text-xs text-slate-400">Monthly Readers</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-white">100%</p>
              <p className="text-xs text-slate-400">Free Content</p>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Filter Bar */}
      <section>
        <Categories cat={cat} />
      </section>

      {/* Latest Articles Section */}
      <section>
        <LatestPost posts={posts} />
      </section>

      {/* Bottom Newsletter Card */}
      <section className="glass-card rounded-3xl p-8 sm:p-12 border border-slate-800 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-violet-600/10 via-indigo-600/10 to-pink-600/10 pointer-events-none" />
        <div className="relative z-10 max-w-2xl mx-auto space-y-4">
          <span className="px-3 py-1 text-xs font-bold uppercase tracking-wider bg-violet-500/20 text-violet-300 rounded-full">
            Stay Updated
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Never Miss a New Article
          </h2>
          <p className="text-sm text-slate-300">
            Subscribe to our weekly newsletter to get handpicked web dev insights delivered directly to your inbox.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              readOnly
              className="flex-1 bg-slate-900 border border-slate-700/80 rounded-xl px-4 py-3 text-sm text-slate-200 placeholder-slate-500 focus:outline-none"
            />
            <button className="px-6 py-3 bg-violet-600 hover:bg-violet-500 text-white font-semibold text-sm rounded-xl shadow-md shadow-violet-600/30 transition-all">
              Subscribe Now
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
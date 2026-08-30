type Post = {
  id: number;
  date?: string;
  slug?: string;
  status?: "publish" | "future" | "draft" | "pending" | "private";
  type?: "post";
  link?: string;
  title: {
    rendered: string;
  };
  content?: {
    rendered: string;
    protected?: boolean;
  };
  excerpt?: {
    rendered: string;
    protected?: boolean;
  };
  author?: number;
  featured_media?: number;
  categories?: number[];
  tags?: number[];
};

// Fallback demo posts if WP API is not connected yet
const DEMO_POSTS: Post[] = [
  {
    id: 101,
    title: { rendered: "Building Headless WordPress Sites with Next.js 16 App Router" },
    excerpt: {
      rendered:
        "Learn how to combine the editing power of WordPress with the blazing-fast performance of Next.js 16 and React 19 for a modern web experience.",
      protected: false,
    },
    date: "2026-08-28T10:00:00",
  },
  {
    id: 102,
    title: { rendered: "Mastering Modern CSS & Glassmorphism Aesthetics in Web Design" },
    excerpt: {
      rendered:
        "Explore how subtle gradients, glassmorphism card layouts, and micro-interactions elevate overall user engagement and visual feedback.",
      protected: false,
    },
    date: "2026-08-25T14:30:00",
  },
  {
    id: 103,
    title: { rendered: "Optimizing Server Components & WP REST API Caching" },
    excerpt: {
      rendered:
        "Discover best practices for caching WordPress REST API queries in Next.js Server Components for instant load speeds and superior SEO.",
      protected: false,
    },
    date: "2026-08-20T09:15:00",
  },
];

export async function LatestPost({ posts }: { posts: Post[] }) {
  const postList = Array.isArray(posts) && posts.length > 0 ? posts : DEMO_POSTS;

  return (
    <div className="w-full">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight flex items-center gap-3">
            <span>Latest</span>
            <span className="text-gradient">Articles</span>
          </h2>
          <p className="text-sm text-slate-400 mt-1">
            Fresh thoughts, engineering guides, and design trends
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {postList.map((post: Post, index: number) => {
          const rawExcerpt =
            post.excerpt?.rendered ||
            post.content?.rendered ||
            "Discover insights and technical tutorials in this blog post.";

          // Remove HTML tags for clean snippet text
          const cleanText = rawExcerpt.replace(/<[^>]*>?/gm, "");
          const formattedDate = post.date
            ? new Date(post.date).toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
                year: "numeric",
              })
            : "Aug 2026";

          return (
            <article
              key={post.id}
              className="glass-card glass-card-hover rounded-2xl overflow-hidden flex flex-col justify-between group"
            >
              {/* Card Header & Visual Gradient */}
              <div className="relative h-48 w-full bg-slate-900 overflow-hidden flex items-center justify-center p-6 border-b border-slate-800/80">
                <div
                  className={`absolute inset-0 opacity-40 bg-gradient-to-br ${
                    index % 3 === 0
                      ? "from-violet-600/50 via-indigo-600/30 to-slate-900"
                      : index % 3 === 1
                      ? "from-blue-600/50 via-cyan-600/30 to-slate-900"
                      : "from-pink-600/50 via-purple-600/30 to-slate-900"
                  }`}
                />
                
                {/* Floating Category Badge */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="px-3 py-1 text-[11px] font-bold uppercase tracking-wider bg-slate-950/80 border border-slate-700/80 text-violet-300 rounded-full backdrop-blur-md">
                    {index % 3 === 0 ? "WordPress" : index % 3 === 1 ? "Next.js" : "Design"}
                  </span>
                </div>

                {/* Decorative Graphic Icon */}
                <div className="relative z-10 w-14 h-14 rounded-2xl bg-slate-950/60 border border-slate-700/50 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-xl">
                  <svg
                    className="w-7 h-7 text-violet-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                    />
                  </svg>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-3 text-xs text-slate-400">
                    <span>{formattedDate}</span>
                    <span>•</span>
                    <span>5 min read</span>
                  </div>

                  <h3
                    className="text-lg font-bold text-white group-hover:text-violet-300 transition-colors line-clamp-2 leading-snug"
                    dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                  />

                  <p className="text-sm text-slate-400 line-clamp-3 leading-relaxed">
                    {cleanText}
                  </p>
                </div>

                {/* Card Footer / Author metadata */}
                <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-violet-500 to-pink-500 flex items-center justify-center text-[10px] font-bold text-white shadow-sm">
                      {String.fromCharCode(65 + (index % 5))}
                    </div>
                    <span className="text-xs font-semibold text-slate-300">
                      Editorial Team
                    </span>
                  </div>

                  <span className="text-xs font-semibold text-violet-400 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    Read Article
                    <svg
                      className="w-3.5 h-3.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                      />
                    </svg>
                  </span>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex-1 flex items-center justify-center max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <section className="glass-card rounded-3xl p-12 sm:p-16 border border-slate-800 text-center max-w-lg w-full relative overflow-hidden space-y-6">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-violet-600/20 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 space-y-4">
          <span className="text-7xl sm:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-indigo-400 to-pink-400">
            404
          </span>

          <h1 className="text-2xl font-bold text-white tracking-tight">
            Page Not Found
          </h1>

          <p className="text-sm text-slate-400 leading-relaxed">
            Sorry, the article or page you are looking for doesn't exist or may have been moved.
          </p>

          <div className="pt-4">
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white font-semibold text-sm rounded-xl shadow-lg shadow-violet-600/30 transition-all hover:scale-105"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Return to Homepage
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}


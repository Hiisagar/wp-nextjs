import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 glass-header backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-violet-600 via-indigo-600 to-pink-500 p-0.5 shadow-lg shadow-indigo-500/20 group-hover:scale-105 transition-transform duration-300">
              <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
                <span className="font-black text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-pink-400 text-lg">
                  WP
                </span>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-tight text-white flex items-center gap-1.5">
                Next<span className="text-gradient">Blog</span>
              </span>
              <span className="text-[10px] font-medium tracking-widest text-slate-400 uppercase">
                WordPress + Next.js
              </span>
            </div>
          </Link>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 bg-slate-900/60 p-1.5 rounded-full border border-slate-800/80">
            <Link
              href="/"
              className="px-4 py-2 text-sm font-medium text-slate-200 hover:text-white rounded-full hover:bg-slate-800/60 transition-all"
            >
              Home
            </Link>
            <Link
              href="/blog"
              className="px-4 py-2 text-sm font-medium text-slate-300 hover:text-white rounded-full hover:bg-slate-800/60 transition-all"
            >
              Articles
            </Link>
            <Link
              href="/about"
              className="px-4 py-2 text-sm font-medium text-slate-300 hover:text-white rounded-full hover:bg-slate-800/60 transition-all"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="px-4 py-2 text-sm font-medium text-slate-300 hover:text-white rounded-full hover:bg-slate-800/60 transition-all"
            >
              Contact
            </Link>
          </nav>

          {/* Right Action Bar */}
          <div className="flex items-center gap-3">
            {/* Search Input Mockup */}
            <div className="hidden lg:flex items-center relative">
              <input
                type="text"
                placeholder="Search articles..."
                readOnly
                className="w-48 bg-slate-900/80 border border-slate-800 text-xs text-slate-300 placeholder-slate-500 rounded-full py-2 pl-9 pr-4 focus:outline-none focus:border-violet-500/50 cursor-pointer"
              />
              <svg
                className="w-4 h-4 text-slate-500 absolute left-3 pointer-events-none"
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

            {/* Subscribe CTA */}
            <button className="px-4 py-2 text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-violet-600 to-indigo-600 rounded-full hover:from-violet-500 hover:to-indigo-500 shadow-md shadow-violet-600/25 transition-all duration-300 hover:shadow-violet-600/40 hover:-translate-y-0.5">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}



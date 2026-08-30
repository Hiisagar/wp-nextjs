import Link from "next/link";
import { getCategories } from "../lib/queries"

export default async function Footer() {

  const cat = await getCategories();

  return (
    <footer className="relative mt-auto border-t border-slate-800/80 bg-slate-950/80 text-slate-400">
      {/* Top subtle glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-violet-500/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Column 1: Brand & Newsletter */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-violet-600 to-indigo-600 flex items-center justify-center text-white font-bold text-sm shadow-md shadow-violet-500/20">
                WP
              </div>
              <span className="text-lg font-bold text-white tracking-tight">
                Next<span className="text-gradient">Blog</span>
              </span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              Empowering creators and developers with modern web tutorials, insights, and headless WordPress architecture powered by Next.js.
            </p>
            {/* Mini Newsletter Box */}
            <div className="pt-2">
              <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                Join our newsletter
              </label>
              <div className="flex gap-2 max-w-sm">
                <input
                  type="email"
                  placeholder="Enter your email"
                  readOnly
                  className="flex-1 bg-slate-900 border border-slate-800 rounded-lg px-3 py-2 text-xs text-slate-200 placeholder-slate-500 focus:outline-none"
                />
                <button className="px-4 py-2 bg-violet-600 hover:bg-violet-500 text-white font-medium text-xs rounded-lg transition-colors shadow-md shadow-violet-600/20">
                  Join
                </button>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-200">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-violet-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-violet-400 transition-colors">
                  Latest Articles
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-violet-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-violet-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Topics */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-200">
              Categories
            </h3>
            <ul className="space-y-2 text-sm">

              {cat.map((category, index) => (
                <li key={index}>
                <span className="hover:text-violet-400 transition-colors cursor-pointer">
                  {category.name}
                </span>
              </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Tech Stack Badges */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-200">
              Powered By
            </h3>
            <div className="flex flex-wrap gap-2 pt-1">
              <span className="px-2.5 py-1 text-xs rounded-md bg-slate-900 border border-slate-800 text-slate-300">
                Headless WP
              </span>
              <span className="px-2.5 py-1 text-xs rounded-md bg-slate-900 border border-slate-800 text-slate-300">
                Next.js 16
              </span>
              <span className="px-2.5 py-1 text-xs rounded-md bg-slate-900 border border-slate-800 text-slate-300">
                React 19
              </span>
              <span className="px-2.5 py-1 text-xs rounded-md bg-slate-900 border border-slate-800 text-slate-300">
                Tailwind CSS
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} NextBlog Theme. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span className="hover:text-slate-400 cursor-pointer">Privacy Policy</span>
            <span className="hover:text-slate-400 cursor-pointer">Terms of Service</span>
            <span className="hover:text-slate-400 cursor-pointer">Sitemap</span>
          </div>
        </div>
      </div>
    </footer>
  );
}


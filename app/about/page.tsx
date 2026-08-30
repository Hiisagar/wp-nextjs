export default function About() {
  return (
    <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
      {/* Hero Header */}
      <section className="text-center max-w-3xl mx-auto space-y-4">
        <span className="px-3.5 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/20 text-xs font-semibold text-violet-300">
          Our Story & Mission
        </span>
        <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight leading-tight">
          About <span className="text-gradient">NextBlog</span>
        </h1>
        <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
          We are passionate about creating useful, clean, and engaging digital experiences by bridging headless content management with next-generation frontend performance.
        </p>
      </section>

      {/* Main Vision Card */}
      <section className="glass-card rounded-3xl p-8 sm:p-12 border border-slate-800 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-violet-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center relative z-10">
          <div className="space-y-6">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Headless WordPress Meets <br />
              <span className="text-gradient-purple">Next.js 16</span>
            </h2>
            <p className="text-slate-300 text-sm leading-relaxed">
              This blog is crafted using Next.js as the high-speed frontend and WordPress as the powerful headless CMS backend. WordPress allows seamless content publishing while Next.js delivers lightning-fast page transitions, static optimizations, and modern aesthetics.
            </p>
            <p className="text-slate-400 text-sm leading-relaxed">
              Our mission is to empower developers, designers, and creators with insights, architectural best practices, and actionable tutorials.
            </p>

            <div className="flex flex-wrap gap-2 pt-2">
              <span className="px-3 py-1 bg-slate-900 border border-slate-800 rounded-lg text-xs font-medium text-slate-300">
                React 19
              </span>
              <span className="px-3 py-1 bg-slate-900 border border-slate-800 rounded-lg text-xs font-medium text-slate-300">
                Next.js App Router
              </span>
              <span className="px-3 py-1 bg-slate-900 border border-slate-800 rounded-lg text-xs font-medium text-slate-300">
                WP REST API
              </span>
              <span className="px-3 py-1 bg-slate-900 border border-slate-800 rounded-lg text-xs font-medium text-slate-300">
                Tailwind CSS v4
              </span>
            </div>
          </div>

          <div className="glass-card rounded-2xl p-6 border border-slate-800/90 space-y-4 bg-slate-950/60">
            <h3 className="text-xs font-bold uppercase tracking-wider text-violet-400">
              Why NextBlog?
            </h3>
            <div className="space-y-3">
              <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800/80 flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-violet-500/10 border border-violet-500/20 flex items-center justify-center text-violet-400 font-bold shrink-0">
                  ⚡
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">Ultra Fast Speed</h4>
                  <p className="text-xs text-slate-400">Instant page loads powered by server components and optimized caching.</p>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800/80 flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 font-bold shrink-0">
                  🎨
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">Modern Aesthetics</h4>
                  <p className="text-xs text-slate-400">Dark theme UI, glassmorphism elements, and smooth micro-animations.</p>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800/80 flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-pink-500/10 border border-pink-500/20 flex items-center justify-center text-pink-400 font-bold shrink-0">
                  📚
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">Curated Tutorials</h4>
                  <p className="text-xs text-slate-400">In-depth guides on fullstack web development and headless CMS setup.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Grid */}
      <section className="space-y-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            What We Focus On
          </h2>
          <p className="text-sm text-slate-400 mt-1">
            Core tech stacks and knowledge domains covered on this platform
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              title: "Web Development",
              desc: "Modern JavaScript, TypeScript, dynamic Web APIs, and UI architecture.",
              icon: "💻",
            },
            {
              title: "WordPress CMS",
              desc: "Custom themes, REST API extensions, Gutenberg blocks, and headless WP setup.",
              icon: "🔌",
            },
            {
              title: "Next.js & React",
              desc: "Server Side Rendering, Static Site Generation, Server Actions, and Hooks.",
              icon: "⚛️",
            },
            {
              title: "Technical Articles",
              desc: "Hands-on tutorials, architecture comparisons, and practical code snippets.",
              icon: "✍️",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="glass-card glass-card-hover rounded-2xl p-6 border border-slate-800/80 flex flex-col justify-between space-y-4"
            >
              <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-2xl">
                {item.icon}
              </div>
              <div>
                <h3 className="text-base font-bold text-white mb-1">{item.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}


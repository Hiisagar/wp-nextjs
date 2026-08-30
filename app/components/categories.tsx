type CategoryItem = {
  id: number;
  count: number;
  description: string;
  link: string;
  name: string;
  slug: string;
  taxonomy: "category";
  parent: number;
};

export async function Categories({ cat }: { cat: CategoryItem[] }) {
  const categoryList = Array.isArray(cat) ? cat : [];

  return (
    <div className="w-full">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-violet-500 animate-pulse" />
          Explore Topics
        </h2>
        <span className="text-xs text-slate-500">
          {categoryList.length} Categories
        </span>
      </div>

      <div className="flex items-center gap-2.5 overflow-x-auto pb-3 pt-1 no-scrollbar">
        {/* 'All' pill active state demo */}
        <button className="px-4 py-2 rounded-full text-xs font-semibold bg-gradient-to-r from-violet-600 to-indigo-600 text-white shadow-md shadow-violet-600/20 whitespace-nowrap flex items-center gap-2 transition-transform hover:scale-105">
          <span>All Articles</span>
        </button>

        {categoryList.map((category: CategoryItem) => (
          <button
            key={category.id}
            className="px-4 py-2 rounded-full text-xs font-medium bg-slate-900/90 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700 hover:bg-slate-800/80 whitespace-nowrap flex items-center gap-2 transition-all duration-200 group"
          >
            <span>{category.name}</span>
            {category.count !== undefined && (
              <span className="px-1.5 py-0.5 rounded-full text-[10px] bg-slate-800 group-hover:bg-slate-700 text-slate-400 group-hover:text-slate-200 transition-colors">
                {category.count}
              </span>
            )}
          </button>
        ))}

        {categoryList.length === 0 && (
          <div className="flex gap-2">
            {["Technology", "Design", "WordPress", "React", "Tutorials"].map(
              (dummy, i) => (
                <span
                  key={i}
                  className="px-4 py-2 rounded-full text-xs font-medium bg-slate-900/70 border border-slate-800/80 text-slate-400"
                >
                  {dummy}
                </span>
              )
            )}
          </div>
        )}
      </div>
    </div>
  );
}
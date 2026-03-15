import { Link } from 'react-router-dom';

const featuredComics = [
  { id: '1', title: '命中注定遇见你', genre: 'romance', gradient: 'from-pink-400 to-rose-500', rating: 4.8, readers: 12500, description: '一场意外的相遇，开启一段浪漫的故事...' },
  { id: '2', title: '午夜图书馆', genre: 'mystery', gradient: 'from-purple-400 to-indigo-500', rating: 4.9, readers: 8900, description: '深夜的图书馆藏着什么秘密？' },
  { id: '3', title: '异世界转生记', genre: 'fantasy', gradient: 'from-blue-400 to-cyan-500', rating: 4.7, readers: 15000, description: '穿越异世界，开启冒险之旅' },
  { id: '4', title: '星际迷航', genre: 'scifi', gradient: 'from-cyan-400 to-teal-500', rating: 4.6, readers: 7200, description: '探索未知星球，发现新文明' },
  { id: '5', title: '午夜惊魂', genre: 'horror', gradient: 'from-gray-600 to-gray-800', rating: 4.5, readers: 5500, description: '午夜的诡异事件，等待你来解开' },
];

const FeaturedComics = () => {
  return (
    <section className="py-20 px-4 bg-gray-900/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              ✨ 本周热门
            </span>
          </h2>
        </div>

        <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide">
          {featuredComics.map((comic) => (
            <Link
              key={comic.id}
              to={`/read/${comic.id}`}
              className="min-w-[280px] flex-shrink-0 bg-gray-800/50 backdrop-blur-lg rounded-2xl overflow-hidden border border-white/10 hover:border-purple-500/30 transition-all duration-300"
            >
              {/* Cover */}
              <div className={`h-40 bg-gradient-to-br ${comic.gradient} rounded-t-lg`}></div>

              {/* Content */}
              <div className="p-4">
                <h3 className="text-lg font-bold text-white mb-2">{comic.title}</h3>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs text-gray-400">{comic.genre}</span>
                  <div className="flex items-center gap-1">
                    <span className="text-yellow-400">★</span>
                    <span className="text-sm text-gray-300">{comic.rating}</span>
                  </div>
                </div>
                <p className="text-xs text-gray-400 mb-3 line-clamp-2">{comic.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">{comic.readers.toLocaleString()} 阅读</span>
                  <span className="px-4 py-1.5 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-sm rounded-lg">
                    开始阅读
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedComics;

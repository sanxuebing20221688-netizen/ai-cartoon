import { Link } from 'react-router-dom';

const genres = [
  { id: 'romance', name: '恋爱', icon: '💕', description: '甜蜜邂逅，心动瞬间', color: 'from-pink-500 to-rose-500' },
  { id: 'mystery', name: '悬疑', icon: '🔍', description: '层层迷雾，真相待揭', color: 'from-purple-500 to-violet-500' },
  { id: 'fantasy', name: '玄幻', icon: '🐉', description: '奇幻世界，冒险启程', color: 'from-blue-500 to-cyan-500' },
  { id: 'scifi', name: '科幻', icon: '🚀', description: '未来科技，星际冒险', color: 'from-cyan-500 to-teal-500' },
  { id: 'horror', name: '恐怖', icon: '👻', description: '惊悚氛围，刺激体验', color: 'from-gray-600 to-gray-800' },
];

const GenreSection = () => {
  return (
    <section className="py-20 px-4 bg-gray-900">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              🔥 选择你的故事类型
            </span>
          </h2>
          <p className="text-gray-400 text-lg">
            从你喜欢的题材开始，AI将为你定制专属故事
          </p>
        </div>

        {/* Genre Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {genres.map((genre) => (
            <Link key={genre.id} to={`/create?genre=${genre.id}`}>
              <div className="group relative h-full p-6 rounded-2xl bg-gray-800/50 backdrop-blur-sm border border-gray-700 hover:border-purple-500/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                {/* Gradient Overlay */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${genre.color} opacity-0 group-hover:opacity-10 transition-opacity`} />

                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">
                    {genre.icon}
                  </div>

                  {/* Name */}
                  <h3 className="text-xl font-bold text-white mb-2">
                    {genre.name}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-400 text-sm">
                    {genre.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GenreSection;

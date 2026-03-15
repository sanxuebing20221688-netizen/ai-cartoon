const platformFeatures = [
  { icon: '🎨', title: 'AI实时生成', description: '5秒生成下一话' },
  { icon: '🌳', title: '多分支剧情', description: '每个选择都有影响' },
  { icon: '🏆', title: '结局收集', description: '探索所有可能性' },
  { icon: '💎', title: '个性定制', description: '专属你的故事' },
];

const Features = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              🌟 为什么选择我们
            </span>
          </h2>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          {platformFeatures.map((feature) => (
            <div
              key={feature.title}
              className="p-6 bg-gray-800/30 backdrop-blur-lg rounded-2xl border border-white/5 hover:border-purple-500/20 transition-all duration-300 hover:scale-105"
            >
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
              <p className="text-gray-400 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;

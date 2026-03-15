const howItWorksSteps = [
  { step: 1, title: '选择题材', description: '选择你喜欢的故事类型', icon: '🎯' },
  { step: 2, title: '创建角色', description: 'AI帮你设计独特角色', icon: '🎨' },
  { step: 3, title: '阅读互动', description: '每个选择改变剧情', icon: '📖' },
  { step: 4, title: '收集结局', description: '探索多种可能性', icon: '🏆' },
];

const HowItWorks = () => {
  return (
    <section className="py-20 px-4 bg-gray-900/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              🎮 如何创作你的专属漫画
            </span>
          </h2>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {howItWorksSteps.map((item, index) => (
            <div key={item.step} className="text-center relative">
              {/* Step Number */}
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold text-2xl shadow-lg">
                {item.step}
              </div>

              {/* Icon */}
              <div className="text-5xl mb-4">{item.icon}</div>

              {/* Title */}
              <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>

              {/* Description */}
              <p className="text-gray-400 text-sm">{item.description}</p>

              {/* Arrow (except last) */}
              {index < howItWorksSteps.length - 1 && (
                <div className="hidden md:block absolute top-8 left-full w-full text-center text-purple-500/50 text-3xl transform -translate-x-8">
                  →
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;

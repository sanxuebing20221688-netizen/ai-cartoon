// Genre Types
export const genres = [
  {
    id: 'romance',
    name: '恋爱',
    nameEn: 'Romance',
    icon: '💕',
    description: '甜蜜邂逅，心动瞬间',
    color: 'from-pink-500 to-rose-500',
    bgColor: 'bg-pink-500/10',
    borderColor: 'border-pink-500/30',
  },
  {
    id: 'mystery',
    name: '悬疑',
    nameEn: 'Mystery',
    icon: '🔍',
    description: '层层迷雾，真相待揭',
    color: 'from-purple-500 to-indigo-500',
    bgColor: 'bg-purple-500/10',
    borderColor: 'border-purple-500/30',
  },
  {
    id: 'fantasy',
    name: '玄幻',
    nameEn: 'Fantasy',
    icon: '🐉',
    description: '奇幻世界，冒险启程',
    color: 'from-blue-500 to-cyan-500',
    bgColor: 'bg-blue-500/10',
    borderColor: 'border-blue-500/30',
  },
  {
    id: 'scifi',
    name: '科幻',
    nameEn: 'Sci-Fi',
    icon: '🚀',
    description: '未来科技，星际冒险',
    color: 'from-cyan-500 to-teal-500',
    bgColor: 'bg-cyan-500/10',
    borderColor: 'border-cyan-500/30',
  },
  {
    id: 'horror',
    name: '恐怖',
    nameEn: 'Horror',
    icon: '👻',
    description: '惊悚氛围，刺激体验',
    color: 'from-gray-600 to-gray-800',
    bgColor: 'bg-gray-500/10',
    borderColor: 'border-gray-500/30',
  },
];

// Character Options
export const hairStyles = [
  { id: 'long', name: '长发' },
  { id: 'short', name: '短发' },
  { id: 'curly', name: '卷发' },
  { id: 'straight', name: '直发' },
  { id: 'wavy', name: '波浪' },
  { id: 'ponytail', name: '马尾' },
];

export const hairColors = [
  { id: 'black', name: '黑色', color: '#1a1a2e' },
  { id: 'brown', name: '棕色', color: '#8B4513' },
  { id: 'blonde', name: '金色', color: '#FFD700' },
  { id: 'red', name: '红色', color: '#DC143C' },
  { id: 'blue', name: '蓝色', color: '#4169E1' },
  { id: 'purple', name: '紫色', color: '#9370DB' },
  { id: 'white', name: '白色', color: '#F8F8FF' },
  { id: 'pink', name: '粉色', color: '#FF69B4' },
];

export const eyeColors = [
  { id: 'black', name: '黑色', color: '#1a1a2e' },
  { id: 'brown', name: '棕色', color: '#8B4513' },
  { id: 'blue', name: '蓝色', color: '#4169E1' },
  { id: 'green', name: '绿色', color: '#2E8B57' },
  { id: 'purple', name: '紫色', color: '#9370DB' },
  { id: 'amber', name: '琥珀色', color: '#FFBF00' },
];

export const specialFeatures = [
  { id: 'glasses', name: '眼镜', icon: '👓' },
  { id: 'mole', name: '痣', icon: '⚫' },
  { id: 'scar', name: '伤疤', icon: '⚔️' },
  { id: 'tattoo', name: '纹身', icon: '🎨' },
  { id: 'earring', name: '耳环', icon: '💎' },
  { id: 'freckles', name: '雀斑', icon: '✨' },
];

export const personalityTraits = [
  { id: 'gentle', name: '温柔' },
  { id: 'cheerful', name: '开朗' },
  { id: 'aloof', name: '高冷' },
  { id: 'mysterious', name: '神秘' },
  { id: 'brave', name: '勇敢' },
  { id: 'careful', name: '细心' },
  { id: 'humorous', name: '幽默' },
  { id: 'tsundere', name: '傲娇' },
  { id: 'shy', name: '害羞' },
  { id: 'confident', name: '自信' },
];

export const characterNames = {
  male: ['浩然', '子轩', '宇轩', '梓睿', '明轩', '俊杰', '伟泽', '皓轩', '博文', '思远'],
  female: ['诗涵', '梦琪', '雨萱', '欣妍', '诗婷', '思琪', '雅琳', '紫萱', '欣怡', '雨涵'],
};

// Story Settings
export const storyBackgrounds = [
  {
    id: 'campus',
    name: '校园',
    icon: '🏫',
    description: '青春校园，纯爱故事',
  },
  {
    id: 'workplace',
    name: '职场',
    icon: '🏢',
    description: '职场邂逅，都市浪漫',
  },
  {
    id: 'neighborhood',
    name: '邻里',
    icon: '🏠',
    description: '青梅竹马，温馨日常',
  },
  {
    id: 'fantasy-world',
    name: '奇幻',
    icon: '🌸',
    description: '跨越世界，命中注定',
  },
];

export const loveInterestTypes = [
  {
    id: 'gentle-senior',
    name: '温柔学长/学姐',
    icon: '🤵',
    description: '温柔体贴，细心呵护',
  },
  {
    id: 'cool-aloof',
    name: '高冷男神/女神',
    icon: '😎',
    description: '外表冷漠，内心温柔',
  },
  {
    id: 'sunny-cheerful',
    name: '阳光男孩/女孩',
    icon: '😊',
    description: '开朗活泼，带来欢笑',
  },
  {
    id: 'mysterious-newcomer',
    name: '神秘转校生/新人',
    icon: '🎭',
    description: '神秘莫测，吸引探索',
  },
  {
    id: 'tsundere-childhood',
    name: '傲娇青梅竹马',
    icon: '👊',
    description: '口是心非，暗中关心',
  },
];

// Featured Comics (placeholder data)
export const featuredComics = [
  {
    id: '1',
    title: '命中注定遇见你',
    genre: 'romance',
    coverGradient: 'from-pink-400 to-rose-500',
    rating: 4.8,
    readerCount: 12500,
    description: '一场意外的相遇，开启一段浪漫的故事...',
  },
  {
    id: '2',
    title: '午夜图书馆',
    genre: 'mystery',
    coverGradient: 'from-purple-400 to-indigo-500',
    rating: 4.9,
    readerCount: 8900,
    description: '深夜的图书馆藏着什么秘密？',
  },
  {
    id: '3',
    title: '异世界转生记',
    genre: 'fantasy',
    coverGradient: 'from-blue-400 to-cyan-500',
    rating: 4.7,
    readerCount: 15000,
    description: '穿越异世界，开启冒险之旅',
  },
  {
    id: '4',
    title: '星际迷航',
    genre: 'scifi',
    coverGradient: 'from-cyan-400 to-teal-500',
    rating: 4.6,
    readerCount: 7200,
    description: '探索未知星球，发现新文明',
  },
  {
    id: '5',
    title: '午夜惊魂',
    genre: 'horror',
    coverGradient: 'from-gray-600 to-gray-800',
    rating: 4.5,
    readerCount: 5500,
    description: '午夜的诡异事件，等待你来解开',
  },
];

// How It Works Steps
export const howItWorksSteps = [
  {
    step: 1,
    title: '选择题材',
    description: '选择你喜欢的故事类型',
    icon: '🎯',
  },
  {
    step: 2,
    title: '创建角色',
    description: 'AI帮你设计独特角色',
    icon: '🎨',
  },
  {
    step: 3,
    title: '阅读互动',
    description: '每个选择改变剧情',
    icon: '📖',
  },
  {
    step: 4,
    title: '收集结局',
    description: '探索多种可能性',
    icon: '🏆',
  },
];

// Features
export const platformFeatures = [
  {
    id: 'ai-generation',
    title: 'AI实时生成',
    description: '5秒生成下一话',
    icon: '🎨',
  },
  {
    id: 'branching-story',
    title: '多分支剧情',
    description: '每个选择都有影响',
    icon: '🌳',
  },
  {
    id: 'ending-collection',
    title: '结局收集',
    description: '探索所有可能性',
    icon: '🏆',
  },
  {
    id: 'personalization',
    title: '个性定制',
    description: '专属你的故事',
    icon: '💎',
  },
];

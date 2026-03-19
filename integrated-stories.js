// AI故事数据集成到平台
// 这个文件包含5个AI生成的完整故事，可以直接加载到AI漫画平台

const AI_STORIES = [
    {
        id: 'story-001',
        title: '水晶勇者的传说',
        genre: '玄幻',
        icon: '🐉',
        description: '在魔法大陆上，一位普通少女意外获得了传说中的水晶剑，踏上了寻找失落魔法王国、对抗黑暗势力的冒险之旅。',
        coverImage: 'https://coze-coding-project.tos.coze.site/coze_storage_7614545905022271515/image/generate_image_5592f512-2a00-4fa9-8c81-ec27c844bdd6.jpeg?sign=1805432807-2b301f2a27-0-6ef27dca5c17b393409f2d6977f389a838491cbd7db519bcaf6b5f11dc881c9e',
        sceneImages: [
            'https://coze-coding-project.tos.coze.site/coze_storage_7614545905022271515/image/generate_image_a38d78fb-9c53-483a-9ff6-33a25ea7e272.jpeg?sign=1805432958-b0ff42f4ab-0-6f64398f0585960ac8778eaec91de6059201eb17b0325f03bc51f7d303a421d4'
        ],
        rating: 4.9,
        readers: '15.2K',
        author: 'AI创作者',
        totalChapters: 10,
        currentChapters: 4,
        tags: ['奇幻', '冒险', '魔法', '转世', '战斗'],
        chapters: [
            {
                chapterNumber: 1,
                title: '命运的邂逅',
                scenes: [
                    {
                        sceneNumber: 1,
                        title: '平凡的日常',
                        content: '艾莉亚是一个普通的村庄少女，每天帮助父母打理杂货店。一天傍晚，她在森林中采药时，发现了一道奇异的光芒...',
                        choices: [
                            { text: '🔮 靠近光芒查看', nextScene: 2 },
                            { text: '🏠 返回村庄报告', nextScene: 3 }
                        ]
                    },
                    {
                        sceneNumber: 2,
                        title: '水晶剑的觉醒',
                        content: '艾莉亚小心翼翼地靠近光芒，发现那是一把插在石头中的水晶剑。当她触碰到剑柄的瞬间，剑身发出了耀眼的蓝光，古老的记忆涌入她的脑海...',
                        dialogues: [
                            { character: '神秘声音', text: '终于等到你了，被选中者...' },
                            { character: '艾莉亚', text: '这是...什么？为什么我能听懂它说话？' }
                        ]
                    },
                    {
                        sceneNumber: 3,
                        title: '村长的警告',
                        content: '艾莉亚跑回村庄，将看到的光芒告诉村长。村长脸色大变，告诉她那是传说中的"试炼之光"，只有被选中的人才能看到...',
                        dialogues: [
                            { character: '村长', text: '孩子，你看到的是传说中的试炼之光。这意味着...你可能是预言中的水晶勇者。' },
                            { character: '艾莉亚', text: '水晶勇者？我只是个普通的村姑啊！' }
                        ]
                    }
                ]
            },
            {
                chapterNumber: 2,
                title: '魔法学院',
                scenes: [
                    {
                        sceneNumber: 1,
                        title: '踏上旅程',
                        content: '在村长的指引下，艾莉亚带着水晶剑踏上了前往魔法学院的旅程。路上，她遇到了一个神秘的少年...',
                        dialogues: [
                            { character: '神秘少年', text: '那把剑...你是被选中者？' },
                            { character: '艾莉亚', text: '你是谁？你怎么知道的？' },
                            { character: '神秘少年', text: '我叫凯尔，是来保护你的。黑暗势力已经开始行动了。' }
                        ]
                    }
                ]
            }
        ]
    },
    {
        id: 'story-002',
        title: '赛博少女2077',
        genre: '科幻',
        icon: '🤖',
        description: '在2077年的未来都市，一位拥有特殊能力的机甲少女与反抗军一起，对抗控制城市的巨型企业的独裁统治。',
        coverImage: 'https://coze-coding-project.tos.coze.site/coze_storage_7614545905022271515/image/generate_image_6d8e0aec-9700-45f1-8572-87f26625b0d8.jpeg?sign=1805432815-b49c53d3a2-0-8c83c17b5d8020c2181e3315ac08d7e321370d3aa959a9aed826bd1050f01ec8',
        sceneImages: [
            'https://coze-coding-project.tos.coze.site/coze_storage_7614545905022271515/image/generate_image_2b421070-1cff-4b1d-9833-a5baa55b50bd.jpeg?sign=1805432966-e1fe31e7ad-0-edbb741f16d1933d7fb193f73578cc825c0ba09b058fce23786057949ad4b6fc'
        ],
        rating: 4.8,
        readers: '18.5K',
        author: 'AI创作者',
        totalChapters: 8,
        currentChapters: 3,
        tags: ['科幻', '机甲', '反乌托邦', '战斗', '觉醒'],
        chapters: [
            {
                chapterNumber: 1,
                title: '觉醒',
                scenes: [
                    {
                        sceneNumber: 1,
                        title: '贫民窟的少女',
                        content: '2077年，新东京。17岁的零在贫民窟的废弃工厂里醒来，她的记忆只停留在三个月前。唯一的线索是手臂上神秘的编号：X-771...',
                        choices: [
                            { text: '🔍 寻找记忆线索', nextScene: 2 },
                            { text: '🍞 先找食物生存', nextScene: 3 }
                        ]
                    },
                    {
                        sceneNumber: 2,
                        title: '神秘芯片',
                        content: '零在工厂的角落里发现了一个隐藏的保险箱，里面有一块发光的数据芯片。当她触碰芯片的瞬间，大量的信息涌入她的脑海...',
                        dialogues: [
                            { character: '系统音', text: '神经连接建立...记忆数据恢复中...' },
                            { character: '零', text: '这些是...我的记忆？我曾经是...实验体？' }
                        ]
                    }
                ]
            }
        ]
    },
    {
        id: 'story-003',
        title: '剑影江湖',
        genre: '武侠',
        icon: '⚔️',
        description: '江湖风云变幻，一位隐世高人的弟子踏入江湖，在寻找师父失踪真相的过程中，卷入了一场惊天阴谋。',
        coverImage: 'https://coze-coding-project.tos.coze.site/coze_storage_7614545905022271515/image/generate_image_222fdfc0-552f-4eaa-bd27-0ab83692ee4f.jpeg?sign=1805432820-f4a9819cb2-0-bfaa061590353af8f32475356d314c85af74de8c01bc5359229191d531fe33b6',
        sceneImages: [
            'https://coze-coding-project.tos.coze.site/coze_storage_7614545905022271515/image/generate_image_f6f739a8-a770-4573-9b6e-47d0d2e852f3.jpeg?sign=1805432984-4608507fb5-0-f9f05a24b599b6b78ed683dd35210a28019d42c5d0f8565117dee4589b7d41ac'
        ],
        rating: 4.9,
        readers: '22.3K',
        author: 'AI创作者',
        totalChapters: 12,
        currentChapters: 3,
        tags: ['武侠', '江湖', '恩怨', '阴谋', '爱情'],
        chapters: [
            {
                chapterNumber: 1,
                title: '出山',
                scenes: [
                    {
                        sceneNumber: 1,
                        title: '师徒离别',
                        content: '云深不知处，少年林墨正在竹林中练剑。师父突然告诉他，是时候下山了，并交给他一把古剑和一封密信...',
                        dialogues: [
                            { character: '师父', text: '墨儿，十八年了，该让你知道真相了。' },
                            { character: '林墨', text: '师父，您要去哪里？' },
                            { character: '师父', text: '去赴一个十八年之约。如果三个月后我没有回来，打开这封信。' }
                        ]
                    }
                ]
            }
        ]
    },
    {
        id: 'story-004',
        title: '樱花下的约定',
        genre: '恋爱',
        icon: '💕',
        description: '高中二年级的春天，内向的文学社少女与冷酷的转学生因一本遗失的日记而相遇，在樱花飞舞的季节里谱写了一段青涩的恋爱故事。',
        coverImage: 'https://coze-coding-project.tos.coze.site/coze_storage_7614545905022271515/image/generate_image_7a7ec611-cc6a-4330-9b2d-6848e2c6503e.jpeg?sign=1805432845-3ba06852cd-0-d167b6dc771648ad60c05ceffe1269d297a147092316927e722220099387ea13',
        sceneImages: [
            'https://coze-coding-project.tos.coze.site/coze_storage_7614545905022271515/image/generate_image_d9832092-3aea-4b7d-be1f-b27e1ed30aa2.jpeg?sign=1805432996-0305645e3f-0-81dffa5282888f3237be2a6aa77e4ea0d9818939f4e523cd71966253a566f887'
        ],
        rating: 4.7,
        readers: '25.8K',
        author: 'AI创作者',
        totalChapters: 6,
        currentChapters: 3,
        tags: ['恋爱', '校园', '青春', '治愈', '文学'],
        chapters: [
            {
                chapterNumber: 1,
                title: '春天的邂逅',
                scenes: [
                    {
                        sceneNumber: 1,
                        title: '樱花树下的意外',
                        content: '春假结束的第一天，文学少女小雨在上学路上发现了一本掉落的日记本。封面上写着"不要打开"，但她还是忍不住翻开了第一页...',
                        dialogues: [
                            { character: '小雨', text: '这是谁的日记呢...写得真好，像是小说一样。' },
                            { character: '???', text: '你在看什么？' },
                            { character: '小雨', text: '啊！对不起，这是你的吗？' }
                        ]
                    }
                ]
            }
        ]
    },
    {
        id: 'story-005',
        title: '午夜校舍',
        genre: '恐怖',
        icon: '👻',
        description: '一所废弃的旧校舍流传着恐怖的传说。调查社团的五名成员在月圆之夜进入校舍，却发现自己陷入了一个无法逃脱的恐怖循环...',
        coverImage: 'https://coze-coding-project.tos.coze.site/coze_storage_7614545905022271515/image/generate_image_c32548e3-8b34-4507-bf84-a264ed0682df.jpeg?sign=1805432866-0913395e95-0-cfd4047124fa78d968bb65fd0e446f1b094928af0c01fee1d32dfabd6643e396',
        sceneImages: [
            'https://coze-coding-project.tos.coze.site/coze_storage_7614545905022271515/image/generate_image_314075ec-dae5-46de-a5be-e397241f06e5.jpeg?sign=1805433004-6f85788097-0-ed0410b11a64e7774d000f695d42dbe0c0b6fa4ae3788cf942caa4ca94fe64f3'
        ],
        rating: 4.6,
        readers: '19.7K',
        author: 'AI创作者',
        totalChapters: 5,
        currentChapters: 3,
        tags: ['恐怖', '悬疑', '超自然', '校园', '诅咒'],
        chapters: [
            {
                chapterNumber: 1,
                title: '废弃校舍',
                scenes: [
                    {
                        sceneNumber: 1,
                        title: '都市传说',
                        content: '樱丘高中的旧校舍因为一场火灾被废弃了十年。传说每到月圆之夜，那里就会传出学生的哭声...',
                        choices: [
                            { text: '🔦 组织探险队调查', nextScene: 2 },
                            { text: '⚠️ 劝大家不要去', nextScene: 3 }
                        ]
                    },
                    {
                        sceneNumber: 2,
                        title: '午夜集合',
                        content: '调查社团的五名成员在午夜十二点悄悄潜入旧校舍。月光透过破碎的窗户照进来，走廊尽头似乎有人影闪过...',
                        dialogues: [
                            { character: '社长', text: '大家拿好手电筒，不要走散了。' },
                            { character: '小明', text: '社、社长，你有没有听到什么声音？' },
                            { character: '小美', text: '别自己吓自己了，快走吧。' }
                        ]
                    }
                ]
            }
        ]
    }
];

// 扩展原有的漫画数据库
const extendedComicsDB = [
    ...AI_STORIES,
    // 保留原有示例数据
    { id: 'comic1', title: '命中注定遇见你', genre: '恋爱', icon: '💕', rating: 4.8, readers: '12.5K', author: 'AI创作者' },
    { id: 'comic2', title: '午夜图书馆', genre: '悬疑', icon: '🔍', rating: 4.9, readers: '8.9K', author: '神秘作家' },
];

// 故事场景数据映射
const storyScenesMap = {};
AI_STORIES.forEach(story => {
    storyScenesMap[story.id] = story.chapters;
});

// 导出给平台使用
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { AI_STORIES, extendedComicsDB, storyScenesMap };
}

// 如果在浏览器中运行，挂载到全局
if (typeof window !== 'undefined') {
    window.AI_STORIES = AI_STORIES;
    window.EXTENDED_COMICS_DB = extendedComicsDB;
    window.STORY_SCENES_MAP = storyScenesMap;
    console.log('[AI故事集成] 已加载 ' + AI_STORIES.length + ' 个AI故事');
}

// 优化版 AI对话生成 - 基于情节分析
async function generateAIWithDoubao(plot, genre) {
    const prompts = {
        '恋爱': `作为${genre}小说作家，为以下情节生成5个场景的完整对话。返回JSON格式：
{
  "scenes": [
    {
      "scene": 1,
      "setting": "场景描述",
      "dialogues": [
        {"speaker": "角色名", "text": "对话内容"},
        ...
      ]
    }
  ]
}

情节：${plot}

要求：
1. 每个场景有2-3句对话
2. 对话要符合${genre}风格
3. 要有情感变化和情节推进
4. 每个场景间要有逻辑连接`,
        '武侠': `作为武侠小说作家，为以下情节生成5个场景的对话。返回JSON格式。
情节：${plot}

要求：
1. 体现江湖恩仇、武林争斗
2. 突出武功对决和内力比拼
3. 包含师父师徒情谊
4. 最终成为一代大侠
5. 用词要古风古韵，符合武侠小说风格`,
        '玄幻': `作为玄幻小说作家，为以下情节生成5个场景的对话。返回JSON格式。
情节：${plot}

要求：
1. 描述修仙、魔法、神兽、秘境
2. 突出修仙艰难和境界提升
3. 包含灵石、功法、境界等元素
4. 最终飞升仙界
5. 用词要空灵缥缈`,
        '搞笑': `作为搞笑小说作家，为以下情节生成5个场景的对话。返回JSON格式。
情节：${plot}

要求：
1. 轻松幽默，让人捧腹大笑
2. 包含日常生活中的沙雕瞬间
3. 对话要机智幽默
4. 情节反转要出人意料
5. 整体氛围轻松愉快`,
        '霸宠': `作为霸总文小说作家，为以下情节生成5个场景的对话。返回JSON格式。
情节：${plot}

要求：
1. 体现霸道总裁的占有欲
2. 描写女主的柔弱与坚强
3. 暧线拉扯、甜宠日常
4. 最终双向奔赴
5. 用词要优雅高冷`,
        '穿越': `作为穿越小说作家，为以下情节生成5个场景的对话。返回JSON格式。
情节：${plot}

要求：
1. 描述现代人在古代的生存挑战
2. 体现古代与现代的冲突
3. 展现主角的智慧和能力
4. 最终改变历史或改变命运
5. 用词要符合时代背景`
    };

    try {
        const response = await fetch(DOUBAO_ENDPOINT, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${DOUBAO_API_KEY}`
            },
            body: JSON.stringify({
                model: "doubao-seed-2-0-pro-260215",
                input: [{
                    role: "user",
                    content: [{
                        type: "input_text",
                        text: prompts[genre]
                    }]
                }]
            })
        });

        const data = await response.json();
        
        // 解析AI返回的JSON
        const content = data.output.choices[0].message.content[0].text;
        let parsed;
        try {
            parsed = JSON.parse(content);
        } catch (e) {
            // 如果AI返回的不是标准JSON，尝试提取
            parsed = extractJSONFromString(content);
        }
        
        return parsed;

    } catch (error) {
        console.error('AI生成失败:', error);
        // 降级到模板生成
        return generateTemplateScenes(plot, genre);
    }
}

function extractJSONFromString(text) {
    // 尝试从文本中提取JSON
    const jsonMatch = text.match(/\{[\s\S]*"scenes"[\s\S]*:[\s\S]*\[/s\S]*\}/);
    if (jsonMatch) {
        return JSON.parse(jsonMatch[0]);
    }
    return null;
}

function generateTemplateScenes(plot, genre) {
    // 基于情节关键词生成场景
    const keywords = extractKeywords(plot);
    
    const sceneTemplates = {
        '恋爱': [
            {
                panel: '💕',
                dialogues: [
                    {speaker: '旁白', text: `场景1：${keywords.location || '校园'}，${keywords.action || '相遇'}`},
                    {speaker: '你', text: `我注意到${keywords.target || '她'}...`}
                ],
                choices: [
                    {text: '🌹 上前搭讪', next: 1},
                    {text: '👀 悄情观察', next: 2}
                ]
            }
        ]
    };

    // 如果没有匹配，使用通用模板
    return sceneTemplates[genre] || sceneTemplates['恋爱'];
}

function extractKeywords(plot) {
    const keywords = {
        location: extractKeyword(plot, ['校园', '图书馆', '咖啡厅', '公寓', '校园']),
        action: extractKeyword(plot, ['相遇', '醒来', '发现', '遇到', '认识']),
        target: extractKeyword(plot, ['她', '他', '女生', '男生', '人']),
        object: extractKeyword(plot, ['书', '剑', '手机', '信', '药'])
    };
    return keywords;
}

function extractKeyword(text, words) {
    for (let word of words) {
        if (text.includes(word)) {
            return word;
        }
    }
    return '';
}

// 角色性格系统
const personalityTraits = {
    '勇敢': {
        desc: '勇敢无畏',
        behavior: '面对困难不退缩',
        speechStyle: '坚定有力'
    },
    '温柔': {
        desc: '温柔体贴',
        behavior: '体贴照顾他人',
        speechStyle: '轻柔温暖'
    },
    '聪明': {
        desc: '聪明机智',
        'behavior: '善于分析解决问题',
        speechStyle: '逻辑清晰'
    },
    '幽默': {
        desc: '幽默风趣',
        behavior: '用幽默化解尴尬',
        speechStyle: '轻松活泼'
    },
    '冷静': {
        desc: '冷静沉着',
        behavior: '遇事不慌',
        speechStyle: '理性客观'
    },
    '善良': {
        desc: '善良纯朴',
        behavior: '乐于助人',
        speechStyle: '亲切和善'
    },
    '叛逆': {
        desc: '叛逆不羁',
        'behavior: '挑战传统',
        'speechStyle: '犀利直白'
    },
    '神秘': {
        desc: '神秘莫测',
        'behavior: '保留底牌',
        speechStyle: '深沉难测'
    }
};

// 情感系统
const emotions = {
    'happy': ['开心', '兴奋', '惊喜', '满足'],
    'sad': ['失落', '伤心', '失望', '难过'],
    'angry': ['生气', '愤怒', '恼火', '愤慨'],
    'fear': ['恐惧', '害怕', '紧张', '担心'],
    'surprise': ['惊讶', '震惊', '错愕', '不可思议'],
    'love': ['喜欢', '爱上', '迷恋', '倾心'],
    'confused': ['困惑', '不解', '迷茫', '犹豫']
};

// 角色关系系统
const relationshipTypes = {
    'friend': '朋友',
    'lover': '恋人',
    'enemy': '敌人',
    'mentor': '师父',
    'disciple': '徒弟',
    'family': '家人',
    'stranger': '陌生人',
    'rival': '竞争对手'
};

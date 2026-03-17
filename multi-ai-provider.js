// 多AI服务商接入系统
// 支持：豆包、OpenAI、Claude、智谱AI、通义千问

// AI服务商配置
const AI_PROVIDERS = {
    // 豆包 (火山引擎)
    doubao: {
        name: '豆包',
        endpoint: 'https://ark.cn-beijing.volces.com/api/v3/responses',
        model: 'doubao-seed-2-0-pro-260215',
        apiKey: '', // 用户配置
        enabled: true,
        maxRetries: 3,
        retryDelay: 2000
    },
    // OpenAI
    openai: {
        name: 'OpenAI',
        endpoint: 'https://api.openai.com/v1/chat/completions',
        model: 'gpt-3.5-turbo',
        apiKey: '', // 用户配置
        enabled: false,
        maxRetries: 3,
        retryDelay: 2000
    },
    // Claude (Anthropic)
    claude: {
        name: 'Claude',
        endpoint: 'https://api.anthropic.com/v1/messages',
        model: 'claude-3-haiku-20240307',
        apiKey: '', // 用户配置
        enabled: false,
        maxRetries: 3,
        retryDelay: 2000
    },
    // 智谱AI
    zhipu: {
        name: '智谱AI',
        endpoint: 'https://open.bigmodel.cn/api/paas/v4/chat/completions',
        model: 'glm-4',
        apiKey: '', // 用户配置
        enabled: false,
        maxRetries: 3,
        retryDelay: 2000
    },
    // 阿里通义千问
    qwen: {
        name: '通义千问',
        endpoint: 'https://dashscope.aliyuncs.com/compatible-mode/v1/chat/completions',
        model: 'qwen-turbo',
        apiKey: '', // 用户配置
        enabled: false,
        maxRetries: 3,
        retryDelay: 2000
    }
};

// 当前使用的AI服务商（按优先级）
let activeProviders = ['doubao'];

// API Key 配置（从localStorage加载）
function loadAIConfig() {
    const config = localStorage.getItem('aiProviderConfig');
    if (config) {
        const parsed = JSON.parse(config);
        Object.keys(parsed).forEach(key => {
            if (AI_PROVIDERS[key]) {
                AI_PROVIDERS[key].apiKey = parsed[key].apiKey;
                AI_PROVIDERS[key].enabled = parsed[key].enabled;
            }
        });
    }
    
    // 设置活跃提供商
    activeProviders = Object.keys(AI_PROVIDERS).filter(k => AI_PROVIDERS[k].enabled && AI_PROVIDERS[k].apiKey);
    if (activeProviders.length === 0) activeProviders = ['doubao'];
}

// 保存AI配置
function saveAIConfig() {
    const config = {};
    Object.keys(AI_PROVIDERS).forEach(key => {
        config[key] = {
            apiKey: AI_PROVIDERS[key].apiKey,
            enabled: AI_PROVIDERS[key].enabled
        };
    });
    localStorage.setItem('aiProviderConfig', JSON.stringify(config));
}

// 多AI调用（带自动降级和重试）
async function callAIWithFallback(prompt, genre) {
    let lastError = null;
    
    for (const provider of activeProviders) {
        try {
            console.log(`尝试使用 ${AI_PROVIDERS[provider].name} 生成故事...`);
            const result = await callAIProvider(provider, prompt, genre);
            if (result) {
                console.log(`${AI_PROVIDERS[provider].name} 生成成功！`);
                return result;
            }
        } catch (error) {
            console.error(`${AI_PROVIDERS[provider].name} 调用失败:`, error);
            lastError = error;
            
            // 如果是限流错误，尝试下一个提供商
            if (error.status === 429 || error.code === 'rate_limit_error') {
                console.log('触发限流，自动切换到下一个服务商...');
                continue;
            }
            
            // 其他错误也尝试下一个
            continue;
        }
    }
    
    // 所有提供商都失败，使用模板生成
    console.warn('所有AI服务商都失败，使用模板生成');
    return generateTemplateScenes(prompt, genre);
}

// 调用指定AI服务商
async function callAIProvider(provider, prompt, genre) {
    const config = AI_PROVIDERS[provider];
    if (!config.enabled || !config.apiKey) {
        throw new Error(`${config.name} 未启用或未配置API Key`);
    }
    
    let attempts = 0;
    while (attempts < config.maxRetries) {
        try {
            switch (provider) {
                case 'doubao':
                    return await callDoubao(config, prompt, genre);
                case 'openai':
                    return await callOpenAI(config, prompt, genre);
                case 'claude':
                    return await callClaude(config, prompt, genre);
                case 'zhipu':
                    return await callZhipu(config, prompt, genre);
                case 'qwen':
                    return await callQwen(config, prompt, genre);
                default:
                    throw new Error(`未知提供商: ${provider}`);
            }
        } catch (error) {
            attempts++;
            if (attempts >= config.maxRetries) {
                throw error;
            }
            console.log(`${config.name} 第${attempts}次失败，${config.retryDelay/1000}秒后重试...`);
            await sleep(config.retryDelay);
        }
    }
}

// 豆包API调用
async function callDoubao(config, prompt, genre) {
    const response = await fetch(config.endpoint, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${config.apiKey}`
        },
        body: JSON.stringify({
            model: config.model,
            input: [{
                role: "user",
                content: [{
                    type: "input_text",
                    text: prompt
                }]
            }]
        })
    });
    
    if (!response.ok) {
        const err = await response.json();
        throw { status: response.status, ...err };
    }
    
    const data = await response.json();
    return parseAIResponse(data, 'doubao');
}

// OpenAI API调用
async function callOpenAI(config, prompt, genre) {
    const response = await fetch(config.endpoint, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${config.apiKey}`
        },
        body: JSON.stringify({
            model: config.model,
            messages: [{ role: "user", content: prompt }],
            temperature: 0.7
        })
    });
    
    if (!response.ok) {
        const err = await response.json();
        throw { status: response.status, ...err };
    }
    
    const data = await response.json();
    return parseAIResponse(data, 'openai');
}

// Claude API调用
async function callClaude(config, prompt, genre) {
    const response = await fetch(config.endpoint, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'x-api-key': config.apiKey,
            'anthropic-version': '2023-06-01'
        },
        body: JSON.stringify({
            model: config.model,
            messages: [{ role: "user", content: prompt }],
            max_tokens: 1024
        })
    });
    
    if (!response.ok) {
        const err = await response.json();
        throw { status: response.status, ...err };
    }
    
    const data = await response.json();
    return parseAIResponse(data, 'claude');
}

// 智谱AI调用
async function callZhipu(config, prompt, genre) {
    const response = await fetch(config.endpoint, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${config.apiKey}`
        },
        body: JSON.stringify({
            model: config.model,
            messages: [{ role: "user", content: prompt }]
        })
    });
    
    if (!response.ok) {
        const err = await response.json();
        throw { status: response.status, ...err };
    }
    
    const data = await response.json();
    return parseAIResponse(data, 'zhipu');
}

// 通义千问调用
async function callQwen(config, prompt, genre) {
    const response = await fetch(config.endpoint, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${config.apiKey}`
        },
        body: JSON.stringify({
            model: config.model,
            messages: [{ role: "user", content: prompt }]
        })
    });
    
    if (!response.ok) {
        const err = await response.json();
        throw { status: response.status, ...err };
    }
    
    const data = await response.json();
    return parseAIResponse(data, 'qwen');
}

// 解析AI响应
function parseAIResponse(data, provider) {
    let content = '';
    
    try {
        switch (provider) {
            case 'doubao':
                content = data.output.choices[0].message.content[0].text;
                break;
            case 'openai':
            case 'zhipu':
            case 'qwen':
                content = data.choices[0].message.content;
                break;
            case 'claude':
                content = data.content[0].text;
                break;
        }
        
        // 尝试解析JSON
        let parsed;
        try {
            parsed = JSON.parse(content);
        } catch (e) {
            parsed = extractJSONFromString(content);
        }
        
        return parsed;
    } catch (error) {
        console.error('解析AI响应失败:', error);
        return null;
    }
}

// 从字符串中提取JSON
function extractJSONFromString(text) {
    const jsonMatch = text.match(/\{[\s\S]*\}/);
    if (jsonMatch) {
        try {
            return JSON.parse(jsonMatch[0]);
        } catch (e) {}
    }
    return null;
}

// 工具函数
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// 生成提示词（复用原有逻辑）
function generatePrompt(plot, genre, sceneCount = 5) {
    const prompts = {
        '恋爱': `作为恋爱小说作家，为以下情节生成${sceneCount}个场景的对话。情节：${plot}`,
        '武侠': `作为武侠小说作家，为以下情节生成${sceneCount}个场景的对话。情节：${plot}`,
        '玄幻': `作为玄幻小说作家，为以下情节生成${sceneCount}个场景的对话。情节：${plot}`,
        '科幻': `作为科幻小说作家，为以下情节生成${sceneCount}个场景的对话。情节：${plot}`,
        '恐怖': `作为恐怖小说作家，为以下情节生成${sceneCount}个场景的对话。情节：${plot}`,
        '搞笑': `作为搞笑小说作家，为以下情节生成${sceneCount}个场景的对话。情节：${plot}`,
        '霸宠': `作为霸总小说作家，为以下情节生成${sceneCount}个场景的对话。情节：${plot}`,
        '穿越': `作为穿越小说作家，为以下情节生成${sceneCount}个场景的对话。情节：${plot}`
    };
    
    return prompts[genre] || prompts['恋爱'];
}

// 导出到全局
window.AI_PROVIDERS = AI_PROVIDERS;
window.loadAIConfig = loadAIConfig;
window.saveAIConfig = saveAIConfig;
window.callAIWithFallback = callAIWithFallback;

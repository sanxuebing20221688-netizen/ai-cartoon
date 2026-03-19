// 多AI服务商接入系统
// 支持：豆包、OpenAI、Claude
// ❌ 已移除：智谱AI(GLM-4)、通义千问、minimax（成本过高）

// AI服务商配置
const AI_PROVIDERS = {
    // 豆包 (火山引擎) - 默认
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
        apiKey: '', // 用户需要配置
        enabled: false,
        maxRetries: 3,
        retryDelay: 2000
    },
    // Claude (Anthropic)
    claude: {
        name: 'Claude',
        endpoint: 'https://api.anthropic.com/v1/messages',
        model: 'claude-3-haiku-20240307',
        apiKey: '', // 用户需要配置
        enabled: false,
        maxRetries: 3,
        retryDelay:2000
    }
};

// 当前使用的AI服务商（已清理，只保留豆包）
let activeProviders = ['doubao'];
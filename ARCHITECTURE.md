# AI漫画平台 - 新架构设计文档

## 🎯 架构优化目标

### 核心目标
1. **安全性** - API Key后端托管，避免前端暴露
2. **可扩展性** - 模块化设计，易于添加新功能
3. **数据持久化** - 云端存储，跨设备同步
4. **成本控制** - 精确追踪AI调用成本
5. **用户体验** - 更快的响应速度和更好的交互

### 优化点对比

| 维度 | 当前架构 | 新架构 | 提升 |
|------|---------|--------|------|
| 数据存储 | localStorage | MongoDB + OSS | ✅ 跨设备同步 |
| API安全性 | 前端暴露 | 后端代理 | ✅ 100% 安全 |
| 成本追踪 | 无 | 时序数据库 | ✅ 精确到0.001元 |
| 限流控制 | 令牌桶 | Redis + Nginx | ✅ 分布式限流 |
| 扩展性 | 单文件 | 微服务架构 | ✅ 易于扩展 |
| 性能 | 前端渲染 | SSR + CDN | ✅ 更快加载 |

---

## 🏗️ 技术栈选型

### 前端技术栈
```
框架: Next.js 14 (App Router)
语言: TypeScript 5.x
样式: TailwindCSS 3.x
状态管理: Zustand / Redux Toolkit
UI组件: shadcn/ui
表单: React Hook Form + Zod
HTTP客户端: Axios / SWR
```

### 后端技术栈
```
框架: Next.js API Routes / Express.js (可切换)
语言: TypeScript 5.x
ORM: Prisma
数据库: MongoDB 7.x
缓存: Redis 7.x
文件存储: 阿里云OSS / 腾讯云COS
```

### AI服务层
```
编排层: 自研AI调度器
限流: Redis + 滑动窗口算法
成本追踪: InfluxDB (时序数据库)
容错: 断路器 + 重试机制
```

### DevOps
```
容器化: Docker + Docker Compose
部署: Vercel (前端) + Railway/Render (后端)
监控: Sentry (错误追踪) + Prometheus (指标)
日志: LogRocket
```

---

## 📁 项目目录结构

```
ai-comic-platform/
├── apps/
│   ├── web/                    # Next.js 前端应用
│   │   ├── app/                # App Router页面
│   │   │   ├── (auth)/         # 认证相关页面
│   │   │   │   ├── login/
│   │   │   │   └── register/
│   │   │   ├── (main)/         # 主应用页面
│   │   │   │   ├── home/       # 首页
│   │   │   │   ├── create/     # 创建页面
│   │   │   │   ├── read/       # 阅读页面
│   │   │   │   ├── browse/     # 浏览页面
│   │   │   │   └── profile/    # 个人中心
│   │   │   ├── api/            # API路由
│   │   │   │   ├── auth/       # 认证API
│   │   │   │   ├── comics/     # 漫画API
│   │   │   │   ├── ai/         # AI生成API
│   │   │   │   └── payment/    # 支付API
│   │   │   └── layout.tsx      # 根布局
│   │   ├── components/         # React组件
│   │   │   ├── ui/             # 基础UI组件
│   │   │   ├── forms/          # 表单组件
│   │   │   ├── comic/          # 漫画相关组件
│   │   │   └── ai/             # AI相关组件
│   │   ├── lib/                # 工具库
│   │   │   ├── api.ts          # API客户端
│   │   │   ├── auth.ts         # 认证工具
│   │   │   ├── utils.ts        # 通用工具
│   │   │   └── constants.ts    # 常量定义
│   │   ├── hooks/              # 自定义Hooks
│   │   │   ├── useAuth.ts      # 认证Hook
│   │   │   ├── useComic.ts     # 漫画Hook
│   │   │   └── useAI.ts        # AI生成Hook
│   │   ├── stores/             # 状态管理
│   │   │   ├── authStore.ts    # 认证状态
│   │   │   ├── comicStore.ts   # 漫画状态
│   │   │   └── uiStore.ts      # UI状态
│   │   ├── types/              # TypeScript类型定义
│   │   ├── public/             # 静态资源
│   │   ├── styles/             # 样式文件
│   │   ├── package.json
│   │   ├── tsconfig.json
│   │   └── next.config.js
│   │
│   └── api/                    # Express后端服务（可选）
│       ├── src/
│       │   ├── controllers/    # 控制器
│       │   │   ├── authController.ts
│       │   │   ├── comicController.ts
│       │   │   ├── aiController.ts
│       │   │   └── paymentController.ts
│       │   ├── services/       # 业务逻辑层
│       │   │   ├── ai/         # AI服务层
│       │   │   │   ├── AiScheduler.ts       # AI调度器
│       │   │   │   ├── RateLimiter.ts       # 限流器
│       │   │   │   ├── CostTracker.ts       # 成本追踪
│       │   │   │   ├── providers/           # AI提供商
│       │   │   │   │   ├── DoubaoProvider.ts
│       │   │   │   │   ├── OpenAIProvider.ts
│       │   │   │   │   ├── ClaudeProvider.ts
│       │   │   │   │   ├── ZhipuProvider.ts
│       │   │   │   │   └── QwenProvider.ts
│       │   │   │   └── fallback/            # Fallback机制
│       │   │   ├── auth/
│       │   │   ├── comic/
│       │   │   └── payment/
│       │   ├── models/         # 数据模型（Mongoose Schema）
│       │   │   ├── User.ts
│       │   │   ├── Comic.ts
│       │   │   ├── Scene.ts
│       │   │   ├── Order.ts
│       │   │   └── Payment.ts
│       │   ├── middleware/     # 中间件
│       │   │   ├── auth.ts
│       │   │   ├── rateLimit.ts
│       │   │   └── errorHandler.ts
│       │   ├── routes/         # 路由定义
│       │   │   ├── auth.routes.ts
│       │   │   ├── comic.routes.ts
│       │   │   ├── ai.routes.ts
│       │   │   └── payment.routes.ts
│       │   ├── utils/          # 工具函数
│       │   │   ├── logger.ts
│       │   │   ├── validators.ts
│       │   │   └── error.ts
│       │   ├── config/         # 配置文件
│       │   │   ├── database.ts
│       │   │   ├── redis.ts
│       │   │   └── ai-providers.ts
│       │   └── app.ts
│       ├── package.json
│       └── tsconfig.json
│
├── packages/                   # Monorepo共享包
│   ├── shared/                 # 共享类型定义
│   │   ├── types/
│   │   └── utils/
│   ├── ui/                     # 共享UI组件
│   └── config/                 # 共享配置
│
├── docs/                       # 文档
│   ├── api/                    # API文档
│   ├── architecture/           # 架构文档
│   └── deployment/             # 部署文档
│
├── scripts/                    # 脚本
│   ├── setup.sh                # 环境设置
│   ├── migrate.sh              # 数据迁移
│   └── deploy.sh               # 部署脚本
│
├── docker-compose.yml          # Docker编排
├── package.json                # 根package.json
├── pnpm-workspace.yaml         # pnpm workspace配置
├── turbo.json                  # Turbo配置
└── README.md
```

---

## 🔐 安全架构

### API安全
```
1. API Key托管
   - 所有AI API Key存储在后端环境变量
   - 前端无法直接访问
   - 使用加密配置管理

2. 认证授权
   - JWT Token认证
   - Refresh Token机制
   - Role-based Access Control (RBAC)
   - OAuth 2.0 / 微信登录

3. 限流控制
   - Redis分布式限流
   - 按用户/IP/API维度限流
   - 滑动窗口算法
   - 智能降级

4. 数据加密
   - HTTPS传输加密
   - 敏感数据加密存储
   - 密码bcrypt哈希
```

### AI成本控制
```
1. 成本追踪
   - 每次调用记录到时序数据库
   - 精确计算Token消耗
   - 按用户/类型/服务商统计

2. 预算控制
   - 用户每日/每月预算上限
   - 超预算自动降级到模板
   - 实时成本告警

3. 智能降级
   - API失败 → 自动降级到模板
   - 成本超限 → 使用缓存模板
   - 流量高峰 → 启用CDN缓存
```

---

## 🗄️ 数据模型设计

### MongoDB Schema

#### User（用户）
```typescript
{
  _id: ObjectId
  openId: string              // 微信openId
  nickname: string
  avatar: string              // OSS URL
  email: string?
  phone: string?
  wallet: {
    balance: number           // 金币余额
    points: number            // 积分
  }
  subscription: {
    plan: 'free' | 'basic' | 'premium'
    expiresAt: Date?
  }
  stats: {
    comicsCreated: number
    comicsRead: number
    endingsCollected: number
  }
  createdAt: Date
  updatedAt: Date
}
```

#### Comic（漫画）
```typescript
{
  _id: ObjectId
  userId: ObjectId
  title: string
  genre: string                // 恋爱/悬疑/玄幻...
  style: string                // anime/realistic/pixel...
  summary: string
  cover: string                // OSS URL
  referenceImages: string[]    // OSS URLs
  scenes: [
    {
      scene: number
      panel: string             // emoji / image URL
      setting: string
      dialogues: [
        {
          speaker: string
          text: string
        }
      ]
      choices: [
        {
          text: string
          next: number
        }
      ]
      ending?: string
    }
  ]
  aiProvider: string           // doubao/openai/claude...
  aiModel: string
  tokensUsed: number
  cost: number                 // AI调用成本
  status: 'draft' | 'published' | 'archived'
  stats: {
    views: number
    likes: number
    shares: number
  }
  createdAt: Date
  updatedAt: Date
}
```

#### Order（订单）
```typescript
{
  _id: ObjectId
  userId: ObjectId
  type: 'topup' | 'subscription'
  amount: number
  currency: 'CNY' | 'USD'
  paymentMethod: 'wechat' | 'alipay'
  status: 'pending' | 'paid' | 'failed' | 'refunded'
  transactionId: string?
  metadata: {
    plan?: string
    description: string
  }
  createdAt: Date
  updatedAt: Date
}
```

#### Payment（支付记录）
```typescript
{
  _id: ObjectId
  orderId: ObjectId
  userId: ObjectId
  provider: 'wechat' | 'alipay'
  providerOrderId: string
  amount: number
  status: 'pending' | 'success' | 'failed'
  paidAt: Date?
  createdAt: Date
}
```

---

## 🔌 API设计

### 认证相关
```
POST /api/auth/register      # 注册
POST /api/auth/login         # 登录
POST /api/auth/logout        # 登出
POST /api/auth/refresh       # 刷新Token
GET  /api/auth/me            # 获取当前用户信息
```

### 漫画相关
```
GET    /api/comics              # 获取漫画列表
GET    /api/comics/:id          # 获取漫画详情
POST   /api/comics              # 创建漫画
PUT    /api/comics/:id          # 更新漫画
DELETE /api/comics/:id          # 删除漫画
GET    /api/comics/:id/scenes   # 获取漫画场景
GET    /api/comics/my           # 我的漫画
```

### AI生成相关
```
POST   /api/ai/generate         # AI生成漫画
POST   /api/ai/generate-preview # AI生成预览
GET    /api/ai/providers        # 获取可用AI提供商
GET    /api/ai/cost             # 查询生成成本
POST   /api/ai/upload-reference # 上传参考图
```

### 支付相关
```
POST   /api/payment/create      # 创建支付订单
POST   /api/payment/notify      # 支付回调
GET    /api/payment/orders      # 获取订单列表
GET    /api/payment/wallet      # 获取钱包余额
POST   /api/payment/topup       # 充值
GET    /api/payment/subscription # 获取订阅信息
```

---

## 🚦 性能优化策略

### 前端优化
1. **Next.js SSR** - 首屏服务端渲染
2. **代码分割** - 路由级别+组件级别
3. **图片优化** - Next.js Image组件 + WebP
4. **缓存策略** - SWR数据缓存 + CDN
5. **懒加载** - 路由懒加载 + 图片懒加载

### 后端优化
1. **Redis缓存** - 热点数据缓存
2. **数据库索引** - 合理设计索引
3. **连接池** - 数据库连接池管理
4. **异步处理** - 队列处理耗时任务
5. **CDN加速** - 静态资源CDN

### AI调用优化
1. **批量处理** - 减少API调用次数
2. **结果缓存** - 相同输入返回缓存结果
3. **智能降级** - API失败使用模板
4. **成本优化** - 选择性价比最高的AI
5. **并行调用** - 多场景并行生成

---

## 📊 监控与日志

### 监控指标
```
1. 系统指标
   - CPU使用率
   - 内存使用率
   - 响应时间
   - 错误率

2. 业务指标
   - 用户活跃度
   - 漫画创建量
   - AI调用成功率
   - 成本/收入

3. AI指标
   - API调用次数
   - Token消耗量
   - 生成成功率
   - 降级触发次数
```

### 日志系统
```
1. 应用日志
   - Winston / Pino
   - 按级别分类（error/warn/info/debug）
   - 结构化日志

2. 错误追踪
   - Sentry
   - 自动上报错误
   - 堆栈追踪

3. 用户行为
   - LogRocket
   - 会话回放
   - 性能分析
```

---

## 🚀 部署方案

### 前端部署（Vercel）
```bash
# 环境变量
NEXT_PUBLIC_API_URL=https://api.example.com
NEXT_PUBLIC_OSS_ENDPOINT=https://oss.example.com

# 部署命令
vercel --prod
```

### 后端部署（Railway/Render）
```bash
# 环境变量
MONGODB_URI=mongodb://...
REDIS_URL=redis://...
AI_DOUBAO_API_KEY=xxx
AI_OPENAI_API_KEY=xxx

# 部署命令
railway up
```

### 数据库部署
```
MongoDB: MongoDB Atlas (云托管)
Redis: Redis Cloud / Railway Redis
InfluxDB: InfluxDB Cloud
OSS: 阿里云OSS / 腾讯云COS
```

---

## 💰 成本预估

### 开发成本
- 前端开发: 2-3周
- 后端开发: 3-4周
- 测试优化: 1-2周
- 总计: 6-9周

### 运营成本（月）
| 项目 | 费用 | 说明 |
|------|------|------|
| MongoDB Atlas | $57 | M10实例 |
| Redis Cloud | $25 | 256MB |
| Vercel Pro | $20 | 前端托管 |
| Railway/Render | $20 | 后端托管 |
| OSS存储 | $10 | 100GB |
| AI调用 | 变动 | 按使用量计费 |
| **总计** | **$132+** | 基础套餐 |

---

## 📅 实施计划

### Phase 1: 基础架构（2周）
- [x] 初始化项目
- [ ] 数据库设计与连接
- [ ] 认证系统
- [ ] 基础API框架

### Phase 2: 核心功能（3周）
- [ ] 漫画CRUD
- [ ] AI生成服务
- [ ] 成本追踪系统
- [ ] 文件上传（OSS）

### Phase 3: 支付系统（2周）
- [ ] 微信支付集成
- [ ] 支付宝集成
- [ ] 订单管理
- [ ] 钱包系统

### Phase 4: 优化与测试（2周）
- [ ] 性能优化
- [ ] 安全加固
- [ ] 单元测试
- [ ] 集成测试

### Phase 5: 部署上线（1周）
- [ ] 生产环境配置
- [ ] 数据迁移
- [ ] 监控配置
- [ ] 正式上线

---

## 🎯 下一步行动

1. **评估决策** - Boss Bing评估是否重构
2. **技术选型确认** - 确认是否使用Next.js
3. **资源准备** - 准备服务器、域名、云服务
4. **团队组建** - 需要的前端/后端开发人力

---

**文档版本:** v1.0
**创建时间:** 2026-03-18
**创建人:** PP (AI助手)

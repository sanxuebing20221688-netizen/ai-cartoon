# AI互动漫画平台 - 部署指南

## 📋 部署前检查清单

- [x] 商用版代码已完成（1012行）
- [x] Git 仓库已初始化
- [x] Vercel 已配置
- [ ] GitHub Token 已生成
- [ ] 代码已上传

---

## 🚀 快速部署（3步完成）

### 第1步：获取 GitHub Token

1. **访问：** https://github.com/settings/tokens

2. **点击：** "Generate new token" → "Generate new token (classic)"

3. **配置：**
   - Note: `AI Comic Platform Deploy`
   - Expiration: `No expiration` 或选择有效期
   - 勾选权限：
     - ✅ `repo` (完整仓库访问权限)
     - ✅ `workflow` (如需 GitHub Actions)

4. **点击：** "Generate token"

5. **复制 Token**（只显示一次！）

---

### 第2步：运行部署脚本

在项目目录运行：

```bash
cd /workspace/projects/workspace/ai-comic-platform
bash deploy.sh YOUR_GITHUB_TOKEN
```

**示例：**
```bash
bash deploy.sh ghp_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
```

---

### 第3步：验证部署

**1. 检查 GitHub 仓库：**
```
https://github.com/sanxuebing20221688-netizen/ai-cartoon
```

**2. 等待 Vercel 自动部署（1-2分钟）：**
```
https://aicartoon-gl6vetjcp-sanxuebing20221688-5169s-projects.vercel.app/
```

**3. 验证功能：**
- [ ] 首页显示 9 种故事类型
- [ ] 会员弹窗可以打开
- [ ] 积分充值弹窗正常
- [ ] 可以登录/注册
- [ ] 可以浏览故事

---

## 🛠️ 手动部署（如果脚本失败）

### 1. 替换主文件

```bash
cd /workspace/projects/workspace/ai-comic-platform
cp commercial.html index.html
```

### 2. 提交更改

```bash
git add .
git commit -m "Update to V3.0 Commercial Version"
```

### 3. 推送到 GitHub

```bash
# 方法 A：使用 Token
git remote set-url origin https://YOUR_TOKEN@github.com/sanxuebing20221688-netizen/ai-cartoon.git
git push origin main

# 方法 B：使用 SSH
git remote set-url origin git@github.com:sanxuebing20221688-netizen/ai-cartoon.git
git push origin main
```

---

## 📊 部署后验证

### 检查文件大小

GitHub 应显示：
- `index.html`: 约 60KB
- `commercial.html`: 约 60KB

### 检查行数

在浏览器中查看源代码：
- 应该有 1012 行代码

---

## 🌐 Vercel 部署状态

**访问 Vercel 仪表板：**
```
https://vercel.com
```

**查看部署日志：**
1. 找到项目 `aicartoon`
2. 点击 "Deployments"
3. 查看最新部署状态
4. 如果失败，查看错误信息

---

## ⚠️ 常见问题

### Q1: 推送失败 - Authentication failed

**解决：**
- 检查 Token 是否正确
- 确认 Token 有 `repo` 权限
- 重新生成 Token

### Q2: Vercel 部署失败

**解决：**
1. 检查 GitHub 仓库是否更新
2. 在 Vercel 重新触发部署
3. 查看 Vercel 日志获取错误信息

### Q3: 网站无法访问

**解决：**
1. 清除浏览器缓存（Ctrl+Shift+R）
2. 检查 Vercel 部署状态
3. 等待 1-2 分钟后重试

---

## 📞 需要帮助？

如果遇到问题，请提供：
1. 错误信息截图
2. 执行的命令
3. 部署日志

---

## ✨ 部署成功后功能

### 用户体验
- ✅ 登录注册（昵称）
- ✅ 个人资料管理
- ✅ 收藏功能
- ✅ 阅读进度保存
- ✅ 成就徽章系统

### 商业功能
- ✅ 3级会员（普通/豪华/钻石）
- ✅ 积分充值（100/300/648）
- ✅ VIP专属内容
- ✅ 评论系统
- ✅ 评分系统

### 内容
- ✅ 37个故事
- ✅ 9种类型
- ✅ 100+分支剧情

---

## 💰 商业价值

**预期收益（1000月活用户）：**
- 会员订阅：¥60,000/月
- 积分充值：¥20,000/月
- **总计：约 ¥80,000/月**

---

**部署时间：** 约 5-10 分钟
**难度：** ⭐⭐ 简单

---

祝您部署成功！🎉

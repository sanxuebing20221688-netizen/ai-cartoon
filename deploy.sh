#!/bin/bash

# AI互动漫画平台 - 自动部署脚本
# 使用方法: bash deploy.sh [GITHUB_TOKEN]

set -e

echo "🚀 开始部署 AI互动漫画平台..."
echo ""

# 检查参数
if [ -z "$1" ]; then
    echo "❌ 错误: 请提供 GitHub Token"
    echo ""
    echo "使用方法:"
    echo "  bash deploy.sh YOUR_GITHUB_TOKEN"
    echo ""
    echo "获取 Token:"
    echo "  1. 访问: https://github.com/settings/tokens"
    echo "  2. 点击 'Generate new token (classic)'"
    echo "  3. 勾选 'repo' 权限"
    echo "  4. 复制生成的 Token"
    echo ""
    exit 1
fi

GITHUB_TOKEN="$1"
REPO="sanxuebing20221688-netizen/ai-cartoon"
COMMIT_MESSAGE="Update to V3.0 Commercial Version - 1012 lines with membership and payment system"

echo "📝 步骤 1/5: 检查文件..."
if [ ! -f "commercial.html" ]; then
    echo "❌ 错误: 找不到 commercial.html"
    exit 1
fi
echo "✅ 文件检查完成"
echo ""

echo "📋 步骤 2/5: 备份当前版本..."
if [ -f "index.html" ]; then
    cp index.html "index-backup-$(date +%Y%m%d-%H%M%S).html"
fi
echo "✅ 备份完成"
echo ""

echo "🔄 步骤 3/5: 更新主文件..."
cp commercial.html index.html
echo "✅ 主文件更新完成"
echo ""

echo "📤 步骤 4/5: 提交到 GitHub..."
git add .
git commit -m "$COMMIT_MESSAGE" 2>/dev/null || echo "✅ 已提交或无更改"
echo ""

echo "🚀 步骤 5/5: 推送到 GitHub..."
# 使用 token 推送
git remote set-url origin "https://${GITHUB_TOKEN}@github.com/${REPO}.git"
git push origin main
echo ""

echo "✅ 部署完成！"
echo ""
echo "🌐 Vercel 地址:"
echo "   https://aicartoon-gl6vetjcp-sanxuebing20221688-5169s-projects.vercel.app/"
echo ""
echo "📊 GitHub 仓库:"
echo "   https://github.com/sanxuebing20221688-netizen/ai-cartoon"
echo ""
echo "⏳ Vercel 将在 1-2 分钟内自动部署..."
echo ""
echo "✨ 部署成功后，您的平台将具备以下功能:"
echo "   - 3级会员系统（普通/豪华/钻石）"
echo "   - 积分充值系统"
echo "   - 评论和评分功能"
echo "   - 37个故事，9种类型"
echo "   - 商业化功能完整"
echo ""

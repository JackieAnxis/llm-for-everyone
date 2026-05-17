# GitHub Pages 部署实施计划

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** 将 llm-for-everyone 仓库的 Markdown 文档构建为 VitePress 静态文档站，通过 GitHub Actions 自动部署到 `jackieanxis.github.io/llm-for-everyone/`。

**Architecture:** 在仓库根目录初始化 VitePress，`srcDir` 指向 `docs/`，配置中文默认主题和蓝绿色调。GitHub Actions 在 push main 时自动构建并推送到主站仓库的子目录。

**Tech Stack:** VitePress, Node.js, GitHub Actions

---

## File Structure

| 操作 | 文件路径 | 职责 |
|------|----------|------|
| 创建 | `package.json` | Node 依赖声明和 npm scripts |
| 创建 | `.vitepress/config.mts` | VitePress 站点配置（导航、侧边栏、主题） |
| 创建 | `docs/index.md` | 站点首页 |
| 修改 | `docs/00-neural_network/01-what-is-neural-network.md` | 图片路径从 `../../assets/` 改为 `/assets/`（VitePress 公共资源） |
| 移动 | `assets/` → `docs/public/assets/` | 图片作为 VitePress 公共资源，通过绝对路径引用 |
| 创建 | `.github/workflows/deploy.yml` | GitHub Actions 自动部署流程 |
| 创建 | `.gitignore` | 忽略 node_modules 和构建产物 |

---

### Task 1: 初始化 VitePress 项目

**Files:**
- 创建: `package.json`
- 创建: `.gitignore`

- [ ] **Step 1: 创建 package.json**

```json
{
  "name": "llm-for-everyone",
  "version": "1.0.0",
  "private": true,
  "scripts": {
    "docs:dev": "vitepress dev docs",
    "docs:build": "vitepress build docs",
    "docs:preview": "vitepress preview docs"
  },
  "devDependencies": {
    "vitepress": "^1.6.0"
  }
}
```

- [ ] **Step 2: 创建 .gitignore**

```
node_modules/
docs/.vitepress/dist/
docs/.vitepress/cache/
.DS_Store
```

- [ ] **Step 3: 安装依赖**

Run: `npm install`
Expected: 依赖安装成功，生成 package-lock.json

- [ ] **Step 4: 验证安装成功**

Run: `npx vitepress --version`
Expected: 输出 VitePress 版本号

- [ ] **Step 5: 提交**

```bash
git add package.json package-lock.json .gitignore
git commit -m "chore: initialize VitePress project"
```

---

### Task 2: 配置 VitePress 站点

**Files:**
- 创建: `docs/.vitepress/config.mts`
- 创建: `docs/index.md`

- [ ] **Step 1: 创建 VitePress 配置文件**

创建 `docs/.vitepress/config.mts`：

```mts
import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'zh-CN',
  title: '大模型入门',
  description: '面向所有人的大语言模型入门教程',
  base: '/llm-for-everyone/',

  themeConfig: {
    nav: [
      { text: '神经网络基础', link: '/00-neural_network/01-what-is-neural-network' },
      { text: '推理过程', link: '/01-inference/01-overview' },
      { text: '参考资料', link: '/references/embedding' },
    ],

    sidebar: {
      '/00-neural_network/': [
        {
          text: '神经网络基础',
          items: [
            { text: '神经网络是什么', link: '/00-neural_network/01-what-is-neural-network' },
            { text: '神经元、层和激活函数', link: '/00-neural_network/02-neuron-layer-and-activation' },
            { text: '前向传播是什么', link: '/00-neural_network/03-forward-pass' },
            { text: '损失函数是什么', link: '/00-neural_network/04-loss-function' },
            { text: '梯度下降是什么', link: '/00-neural_network/05-gradient-descent' },
            { text: '反向传播是什么', link: '/00-neural_network/06-backpropagation' },
            { text: '训练循环是什么', link: '/00-neural_network/07-training-loop' },
            { text: '本章小结', link: '/00-neural_network/08-summary' },
          ],
        },
      ],
      '/01-inference/': [
        {
          text: '推理过程',
          items: [
            { text: '推理过程概览', link: '/01-inference/01-overview' },
            { text: '套聊天模板', link: '/01-inference/02-apply_chat_template' },
            { text: 'Token 是怎么被切出来的', link: '/01-inference/03-tokenize' },
            { text: '模型如何预测下一个 token', link: '/01-inference/04a-token_predict_overview' },
            { text: 'Decoder Block 是什么', link: '/01-inference/04b-decoder_block' },
            { text: '采样一个 token', link: '/01-inference/05-token_sample' },
          ],
        },
      ],
      '/references/': [
        {
          text: '参考资料',
          items: [
            { text: 'Embedding 表长什么样', link: '/references/embedding' },
            { text: '最经典的做法：sinusoidal positional encoding', link: '/references/positional_encoding' },
            { text: '为什么需要 Self-Attention', link: '/references/self-attention' },
            { text: 'Feed Forward 在哪里', link: '/references/feed-forward' },
            { text: '为什么需要 Norm', link: '/references/norm' },
            { text: 'Logits 不是概率', link: '/references/logits' },
          ],
        },
      ],
    },

    search: {
      provider: 'local',
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/JackieAnxis/llm-for-everyone' },
    ],
  },
})
```

- [ ] **Step 2: 创建首页**

创建 `docs/index.md`：

```md
---
layout: home

hero:
  name: 大模型入门
  text: 面向所有人的 LLM 教程
  tagline: 从神经网络基础到大语言模型推理，用直觉和例子建立理解
  actions:
    - theme: brand
      text: 开始阅读
      link: /00-neural_network/01-what-is-neural-network
    - theme: alt
      text: 推理过程
      link: /01-inference/01-overview
---
```

- [ ] **Step 3: 提交**

```bash
git add docs/.vitepress/config.mts docs/index.md
git commit -m "feat: add VitePress config and home page"
```

---

### Task 3: 处理图片路径

**Files:**
- 移动: `assets/` → `docs/public/assets/`
- 修改: `docs/00-neural_network/01-what-is-neural-network.md:3`

VitePress 的 `srcDir` 是 `docs/`，文档中的相对路径 `../../assets/` 会解析到仓库根目录的 `assets/`，但 VitePress 只处理 `srcDir` 内的文件。解决方案：将图片放到 `docs/public/` 下，用绝对路径 `/assets/xxx` 引用。

- [ ] **Step 1: 将 assets 移动到 docs/public 下**

```bash
mkdir -p docs/public
mv assets/ docs/public/assets/
```

- [ ] **Step 2: 更新文档中的图片引用**

修改 `docs/00-neural_network/01-what-is-neural-network.md` 第 3 行：

```
（原来）![神经网络是什么](../../assets/00-neural-network-01-what-is-neural-network.png)
（改为）![神经网络是什么](/assets/00-neural-network-01-what-is-neural-network.png)
```

- [ ] **Step 3: 提交**

```bash
git add -A
git commit -m "fix: move assets to docs/public for VitePress compatibility"
```

---

### Task 4: 本地构建验证

- [ ] **Step 1: 运行构建**

Run: `npm run docs:build`
Expected: 构建成功，输出到 `docs/.vitepress/dist/`，无错误

- [ ] **Step 2: 检查构建产物**

Run: `ls docs/.vitepress/dist/`
Expected: 看到 `index.html`、`llm-for-everyone/`（base 路径目录）、`assets/` 等

- [ ] **Step 3: 本地预览验证**

Run: `npm run docs:preview`
Expected: 服务启动在 localhost:4173，用浏览器打开可正常访问站点

- [ ] **Step 4: 确认无误后关闭预览服务**

---

### Task 5: 创建 GitHub Actions 部署流程

**Files:**
- 创建: `.github/workflows/deploy.yml`

- [ ] **Step 1: 创建 workflow 文件**

创建 `.github/workflows/deploy.yml`：

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]
  workflow_dispatch:

permissions:
  contents: read

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout 本仓库
        uses: actions/checkout@v4

      - name: 设置 Node.js
        uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: npm

      - name: 安装依赖
        run: npm ci

      - name: 构建 VitePress
        run: npm run docs:build

      - name: Checkout 主站仓库
        uses: actions/checkout@v4
        with:
          repository: JackieAnxis/jackieanxis.github.io
          token: ${{ secrets.DEPLOY_TOKEN }}
          path: main-site

      - name: 部署到主站子目录
        run: |
          rm -rf main-site/llm-for-everyone
          cp -r docs/.vitepress/dist/llm-for-everyone main-site/llm-for-everyone
          cd main-site
          git config user.name "github-actions[bot]"
          git config user.email "github-actions[bot]@users.noreply.github.com"
          git add llm-for-everyone/
          git diff --cached --quiet || git commit -m "deploy: update llm-for-everyone"
          git push

      - name: 构建产物 Artifact
        uses: actions/upload-artifact@v4
        with:
          name: dist
          path: docs/.vitepress/dist
```

- [ ] **Step 2: 提交**

```bash
git add .github/workflows/deploy.yml
git commit -m "ci: add GitHub Actions deploy workflow"
```

---

### Task 6: 最终验证和清理

- [ ] **Step 1: 确认完整的文件结构正确**

Run: `find . -maxdepth 3 -not -path './node_modules/*' -not -path './.git/*' -not -path './external/*' -not -path './docs/.vitepress/cache/*' -not -path './docs/.vitepress/dist/*' | sort`
Expected: 看到所有新增文件就位

- [ ] **Step 2: 再次完整构建确认无错误**

Run: `npm run docs:build`
Expected: 构建成功，无警告或错误

- [ ] **Step 3: 最终提交（如有未提交的更改）**

检查 `git status`，确保所有更改已提交。

---

## 手动步骤（用户在 GitHub 上操作）

以下步骤需要用户手动完成：

1. **创建 GitHub 仓库**：在 GitHub 上创建 `JackieAnxis/llm-for-everyone` 仓库
2. **添加 remote 并推送**：
   ```bash
   git remote add origin git@github.com:JackieAnxis/llm-for-everyone.git
   git push -u origin main
   ```
3. **创建 PAT**：GitHub Settings → Developer settings → Personal access tokens → 生成一个有 `repo` 权限的 token
4. **配置 Secret**：在本仓库的 Settings → Secrets and variables → Actions 中添加 `DEPLOY_TOKEN`
5. **确认主站无冲突**：确保 `jackieanxis.github.io` 仓库中 `llm-for-everyone/` 目录不存在或可被覆盖

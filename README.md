# 天机阁 - 命理算命应用

这是一个基于 Next.js 和 AI 的命理算命 Web 应用，使用 OpenRouter API 提供真实的命理分析服务。

## 功能特点

- 🎯 基于生辰八字的命理分析
- 🤖 使用 AI 模型生成专业的命理报告
- ✨ 流式响应，实时显示生成内容
- 🎨 精美的神秘风格 UI 设计
- 📱 响应式设计，支持移动端

## 技术栈

- **框架**: Next.js 15 (App Router)
- **UI 组件**: shadcn/ui
- **样式**: Tailwind CSS
- **AI 服务**: OpenRouter API
- **语言**: TypeScript

## 开始使用

### 1. 安装依赖

```bash
npm install
# 或
yarn install
# 或
pnpm install
# 或
bun install
```

### 2. 配置环境变量

在项目根目录创建 `.env.local` 文件，并添加你的 OpenRouter API Key：

```bash
OPENROUTER_API_KEY=your_openrouter_api_key_here
```

**重要**: 请将 `your_openrouter_api_key_here` 替换为你的实际 API Key。

### 3. 运行开发服务器

```bash
npm run dev
# 或
yarn dev
# 或
pnpm dev
# 或
bun dev
```

打开 [http://localhost:3000](http://localhost:3000) 查看应用。

### 4. 构建生产版本

```bash
npm run build
npm start
```

## 项目结构

```
src/
├── app/
│   ├── api/
│   │   └── fortune/
│   │       └── route.ts      # API 路由，处理命理计算请求
│   ├── page.tsx              # 主页面组件
│   ├── layout.tsx            # 布局组件
│   └── ClientBody.tsx        # 客户端包装组件
└── components/
    └── ui/                   # shadcn/ui 组件
```

## API 说明

应用使用 `/api/fortune` 端点来处理命理计算请求。该端点：

- 接收用户的生辰信息（性别、出生日期、出生时间、出生地点）
- 调用 OpenRouter API 生成命理报告
- 以流式方式返回结果，提供实时反馈

## 注意事项

- 请妥善保管你的 API Key，不要将其提交到版本控制系统
- `.env.local` 文件已在 `.gitignore` 中，不会被提交
- 命理分析结果仅供参考，请理性对待

## 部署

### Vercel 自动部署（推荐）

项目已配置好自动部署，只需完成以下步骤：

#### 第一次设置（只需做一次）：

1. **访问 Vercel**
   - 打开 https://vercel.com
   - 使用 GitHub 账号登录

2. **导入项目**
   - 点击 "Add New..." → "Project"
   - 选择你的 GitHub 仓库：`gaga4986ga-design/888`
   - 点击 "Import"

3. **配置项目**
   - **Framework Preset**: Next.js（会自动检测）
   - **Root Directory**: `./`（默认）
   - **Build Command**: `npm run build`（默认）
   - **Output Directory**: `.next`（默认）
   - **Install Command**: `npm install`（默认）

4. **添加环境变量**（重要！）
   - 在 "Environment Variables" 部分
   - 点击 "Add" 添加新变量：
     - **Name**: `OPENROUTER_API_KEY`
     - **Value**: 你的 API Key（`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`）
     - **Environment**: 选择 `Production`, `Preview`, `Development`（全选）

5. **部署**
   - 点击 "Deploy"
   - 等待部署完成（通常 2-3 分钟）

#### 自动部署（设置完成后）：

✅ **完成第一次设置后，以后每次你推送代码到 GitHub，Vercel 会自动：**
- 检测到代码变更
- 自动触发新的部署
- 构建并部署最新版本
- 你可以在 Vercel 仪表板查看部署状态

#### 查看部署状态：

- 访问 Vercel 仪表板：https://vercel.com/dashboard
- 每次部署都会显示：
  - ✅ 成功（绿色）
  - ⏳ 进行中（黄色）
  - ❌ 失败（红色，可查看错误日志）

#### 部署后的访问：

- Vercel 会自动分配一个域名，格式：`https://888-xxx.vercel.app`
- 你也可以在项目设置中添加自定义域名

### 其他平台

确保在部署平台的环境变量中设置 `OPENROUTER_API_KEY`。

## License

MIT

# 🚀 Vercel 自动部署指南

## 快速设置（5 分钟完成）

### 第一步：登录 Vercel
1. 访问：https://vercel.com
2. 点击右上角 "Sign Up" 或 "Log In"
3. 选择 "Continue with GitHub"（使用 GitHub 账号登录）

### 第二步：导入项目
1. 登录后，点击 "Add New..." → "Project"
2. 在仓库列表中找到：`gaga4986ga-design/888`
3. 点击 "Import"

### 第三步：配置项目（使用默认设置即可）
- ✅ Framework Preset: **Next.js**（自动检测）
- ✅ Root Directory: `./`（默认）
- ✅ Build Command: `npm run build`（默认）
- ✅ Output Directory: `.next`（默认）

### 第四步：添加环境变量（⚠️ 重要！）
1. 在 "Environment Variables" 区域
2. 点击 "Add" 按钮
3. 填写：
   - **Name**: `OPENROUTER_API_KEY`
   - **Value**: `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`
   - **Environment**: 勾选所有（Production、Preview、Development）

### 第五步：部署
1. 点击右下角 "Deploy" 按钮
2. 等待 2-3 分钟，部署完成
3. 看到 ✅ "Ready" 表示成功

## ✨ 自动部署已启用

**完成上述设置后，以后每次你：**
- 修改代码
- 提交到 GitHub（`git push`）
- Vercel 会自动检测并部署最新版本

**无需任何额外操作！** 🎉

## 📍 查看部署状态

1. 访问 Vercel 仪表板：https://vercel.com/dashboard
2. 点击你的项目
3. 在 "Deployments" 标签可以看到所有部署记录

## 🌐 访问你的网站

部署完成后，Vercel 会给你一个免费域名：
- 格式：`https://888-xxxxx.vercel.app`
- 你可以在项目设置中添加自定义域名

## 🔧 常见问题

### 部署失败？
- 检查环境变量是否已添加
- 查看部署日志中的错误信息
- 确保 `package.json` 中的构建脚本正确

### 需要更新环境变量？
- 在 Vercel 项目设置 → Environment Variables 中修改
- 修改后需要重新部署（点击 "Redeploy"）

### 想停止自动部署？
- 在项目设置 → Git 中可以断开连接
- 或删除 Vercel 项目

---

**提示**：第一次部署后，以后每次 `git push` 都会自动部署，非常方便！


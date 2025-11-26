# 🚀 Cursor 一键提交和自动部署指南

## ✅ 已完成的配置

你的项目已经配置好了：
- ✅ Git 仓库已连接到 GitHub
- ✅ Vercel 自动部署已配置
- ✅ 环境变量已设置（本地）

## 📝 在 Cursor 中提交代码的步骤

### 方法一：使用 Cursor 的 Git 界面（推荐）

1. **修改代码后**
   - 在 Cursor 左侧边栏找到 "Source Control"（源代码管理）图标
   - 或按快捷键：`Ctrl + Shift + G` (Windows/Linux) 或 `Cmd + Shift + G` (Mac)

2. **暂存更改（Stage）**
   - 在 "Changes" 列表中，点击文件旁边的 `+` 号
   - 或点击 "Stage All Changes"（暂存所有更改）

3. **提交（Commit）**
   - 在顶部输入框填写提交信息，例如：`更新首页样式`
   - 点击 "Commit" 按钮（或按 `Cmd + Enter`）

4. **推送（Push/Publish）**
   - 点击 "Sync Changes" 或 "Push" 按钮
   - 或点击 "Publish Branch"（如果是第一次）
   - 代码会自动推送到 GitHub

5. **自动部署**
   - 推送成功后，Vercel 会自动检测到代码变更
   - 自动开始构建和部署（通常 2-3 分钟）
   - 在 Vercel 仪表板可以查看部署状态

### 方法二：使用终端命令

如果你想用命令行：

```bash
# 1. 查看更改
git status

# 2. 添加所有更改
git add .

# 3. 提交
git commit -m "你的提交信息"

# 4. 推送到 GitHub
git push
```

## ⚙️ 第一次在 Vercel 设置（只需一次）

如果 Vercel 部署显示失败（红色 X），需要完成以下设置：

### 1. 登录 Vercel
- 访问：https://vercel.com
- 使用 GitHub 账号登录

### 2. 导入项目
- 点击 "Add New..." → "Project"
- 选择仓库：`gaga4986ga-design/888`
- 点击 "Import"

### 3. 配置环境变量（⚠️ 必须！）
在 "Environment Variables" 部分添加：

```
Name: OPENROUTER_API_KEY
Value: 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
Environment: 全选（Production、Preview、Development）
```

### 4. 部署设置
- Framework Preset: **Next.js**（自动检测）
- Build Command: `npm run build`（默认）
- Output Directory: `.next`（默认）
- Install Command: `npm install`（默认）

### 5. 点击 "Deploy"

## 🔄 以后的工作流程

**完成第一次 Vercel 设置后，以后的工作流程非常简单：**

1. 在 Cursor 中修改代码
2. 点击 "Source Control" → "Commit" → "Push"
3. ✅ 完成！Vercel 会自动部署

**无需任何额外操作！**

## 🔍 检查部署状态

### 在 Vercel 中查看：
1. 访问：https://vercel.com/dashboard
2. 点击你的项目
3. 在 "Deployments" 标签查看所有部署

### 在 GitHub 中查看：
1. 访问你的仓库：https://github.com/gaga4986ga-design/888
2. 在右侧 "Deployments" 部分可以看到部署状态

## ❗ 常见问题

### 问题 1：Vercel 部署失败
**原因**：通常是环境变量没有设置
**解决**：
1. 在 Vercel 项目设置中添加 `OPENROUTER_API_KEY`
2. 点击 "Redeploy" 重新部署

### 问题 2：Cursor 中看不到 Git 选项
**解决**：
1. 确保项目已用 Git 初始化（已完成 ✅）
2. 重启 Cursor
3. 或使用终端命令提交

### 问题 3：推送时要求输入密码
**解决**：
- 使用 GitHub Personal Access Token
- 或在 Cursor 设置中配置 Git 凭据

## 📌 快速参考

**提交代码的快捷键：**
- Mac: `Cmd + Shift + G` → 打开 Git 面板
- Windows/Linux: `Ctrl + Shift + G` → 打开 Git 面板

**提交后推送：**
- 点击 "Sync Changes" 或 "Push" 按钮

---

**提示**：第一次设置 Vercel 后，以后只需要在 Cursor 中 Commit + Push，一切都会自动完成！🎉


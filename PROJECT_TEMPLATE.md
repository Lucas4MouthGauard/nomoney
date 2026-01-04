# 项目模板 - 基于用户习惯

## 快速创建新项目

### 1. 项目命名规则
```
项目名 = GitHub 仓库名 = Vercel 项目名
```

### 2. 标准文件结构
```
{project-name}/
├── index.html          # 主页面（必需）
├── styles.css          # 样式文件
├── script.js           # JavaScript（可选）
├── vercel.json         # Vercel 配置
├── package.json         # 项目配置
├── .gitignore          # Git 忽略
├── .vercelignore       # Vercel 忽略
└── README.md           # 项目说明
```

### 3. vercel.json 模板
```json
{
  "name": "{project-name}",
  "outputDirectory": ".",
  "buildCommand": "",
  "installCommand": ""
}
```

### 4. package.json 模板
```json
{
  "name": "{project-name}",
  "version": "1.0.0",
  "main": "index.html",
  "scripts": {
    "build": "echo 'Static site - no build needed'"
  },
  "keywords": ["static", "website"],
  "license": "MIT"
}
```

### 5. .gitignore 模板
```
# OS files
.DS_Store
.DS_Store?
._*

# Editor files
.vscode/
.idea/
*.swp
*.swo

# Logs
*.log

# Environment variables
.env
.env.local

# Vercel
.vercel
```

### 6. .vercelignore 模板
```
README.md
.gitignore
.vercelignore
```

### 7. Git 初始化命令
```bash
# 在项目目录中执行
git init
git remote add origin https://github.com/Lucas4MouthGauard/{project-name}.git
git add .
git commit -m "Initial commit"
git branch -M main
git push -u origin main
```

### 8. Vercel 部署步骤
1. 在 Vercel 中导入 GitHub 仓库
2. 项目名称设置为：`{project-name}`（与 GitHub 仓库名一致）
3. Framework Preset: "Other"
4. Build Command: 留空
5. Output Directory: `.`
6. Install Command: 留空

## 参考项目
- Xpanda1 - 成功的静态网站配置示例
- nomoney - 当前项目


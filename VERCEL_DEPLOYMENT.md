# Vercel 部署检查清单

## ✅ 已修复的问题

### 1. **vercel.json 配置问题（已修复）**
   - ❌ **原问题**：`rewrites` 会将所有请求（包括静态资源）重定向到 index.html
   - ✅ **修复**：移除了 `rewrites`，因为这是纯静态网站，不需要路由重写
   - ✅ **结果**：静态资源（CSS、JS、图片）现在可以正常加载

### 2. **缓存策略优化**
   - ✅ HTML 文件：短期缓存（1小时）
   - ✅ 静态资源（CSS、JS、图片）：长期缓存（1年，immutable）

## 📋 部署前检查清单

### 文件结构
- [x] `index.html` 在根目录
- [x] 所有静态资源使用相对路径
- [x] `vercel.json` 配置正确
- [x] `.gitignore` 已配置
- [x] `.vercelignore` 已配置

### 资源路径检查
- [x] `styles.css` - 相对路径 ✅
- [x] `script.js` - 相对路径 ✅
- [x] `nomoney.png` - 相对路径 ✅
- [x] `panda.svg` - 相对路径 ✅

### Vercel 配置
- [x] JSON 格式正确
- [x] 无语法错误
- [x] 缓存策略合理
- [x] 无冲突的 rewrites 规则

## 🚀 部署步骤

1. **推送到 GitHub**
   ```bash
   git add .
   git commit -m "Fix vercel.json: Remove rewrites to allow static assets"
   git push
   ```

2. **在 Vercel 中**
   - 导入 GitHub 仓库
   - Vercel 会自动检测静态网站
   - 无需构建命令（纯静态）
   - 输出目录：根目录（默认）

3. **验证部署**
   - 检查所有资源是否正常加载
   - 检查缓存头是否正确
   - 测试中英文切换功能
   - 测试所有动画效果

## ⚠️ 注意事项

1. **不要添加 rewrites**：除非未来需要 SPA 路由，否则不要添加 rewrites
2. **静态资源路径**：保持使用相对路径，不要使用绝对路径
3. **缓存策略**：静态资源使用长期缓存，HTML 使用短期缓存

## 🔍 常见问题

### Q: 为什么移除了 rewrites？
A: 因为这是纯静态网站，所有资源都在根目录。rewrites 会将静态资源请求也重定向到 index.html，导致资源无法加载。

### Q: 如果未来需要 SPA 路由怎么办？
A: 可以添加 rewrites，但需要排除静态资源：
```json
"rewrites": [
  {
    "source": "/((?!.*\\.(css|js|png|svg|jpg|jpeg|gif|ico)).*)",
    "destination": "/index.html"
  }
]
```


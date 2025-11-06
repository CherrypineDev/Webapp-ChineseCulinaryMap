## 概述
本模板是一款 **零配置开箱即用的基础前端开发模板**，涵盖 HTML（页面结构）、CSS（样式美化）、JavaScript（交互逻辑）全流程开发所需环境，无需手动安装依赖或配置工具链。模板已预置 Node.js 运行环境、开发服务器（http-server）、包管理工具（npm/yarn/pnpm）及 Git 版本控制，同时优化了 Cloud Studio 云端预览体验，适合前端新手入门学习、快速搭建静态页面或简单交互应用（如个人博客、 landing page、小型工具）。

核心优势：
- **环境全预装**：无需关注 Node.js、服务器等工具的安装与配置，终端执行命令即可启动开发；
- **热重载支持**：开发服务器支持实时刷新，修改代码后刷新浏览器即可查看效果，提升开发效率；
- **标准化结构**：目录清晰（页面入口、样式、脚本、资源分离），符合前端开发最佳实践；
- **多浏览器适配**：优化兼容 Chrome、Firefox、Safari 等主流浏览器，减少跨浏览器兼容性问题。


## 环境配置
模板已预集成所有前端开发必需环境，无需额外安装，关键配置如下：

| 环境/工具          | 版本/规格                | 说明                                                                 |
|---------------------|--------------------------|----------------------------------------------------------------------|
| Node.js             | v18.13.0+                 | 支持 ES6+ 语法，确保与包管理工具、开发服务器兼容性                    |
| 包管理工具          | npm + yarn + pnpm         | 三种工具可选，已配置腾讯云镜像源，下载依赖速度更快                    |
| 开发服务器          | http-server               | 轻量静态服务器，支持禁用缓存（`-c-1`），实时预览页面                 |
| 版本控制            | Git                       | 预装 Git，支持代码提交、分支管理，便于版本回溯与协作                  |
| 浏览器兼容性        | 适配 Chrome 90+/Firefox 88+/Safari 14+ | 支持 Flexbox、Grid、ES6+ 等现代前端特性                              |
| 默认预览端口        | 8080                      | 开发服务器默认端口，与 Cloud Studio 端口管理无缝适配                  |


## 项目结构
模板采用标准化目录设计，文件职责清晰，便于快速定位与扩展：
```
workspace/
├── index.html          # 页面入口文件（HTML 结构核心，定义页面元素与语义化标签）
├── style.css           # 样式文件（控制页面外观，支持 Flexbox、Grid、CSS 变量等现代特性）
├── script.js           # 交互脚本文件（实现页面动态效果，如按钮点击、表单验证、DOM 操作）
├── img/                # 静态资源目录（存放图片，大型项目可扩展 fonts/、videos/ 等目录）
│   ├── output.png      # 示例预览图（参考启动后效果）
│   └── qr-code.png     # Cloud Studio 用户群二维码（获取技术支持）
└── README.md           # 项目说明文档（本文件，含使用指南与基础知识点）
```


## 使用说明
### 1. 启动

- 快速启动：你可以通过点击 JupyterLab 顶部的 **运行按钮** 快速启动。

    <img src="img/image1.png" width=800px>

- 手动启动：打开 Cloud Studio 终端，执行以下命令启动静态服务器（禁用缓存，确保实时加载最新代码）：
   ```bash
   http-server -c-1
   ```
   - `http-server`：启动静态服务器命令；
   - `-c-1`：关键参数，禁用浏览器缓存，避免修改代码后看不到更新。

**启动成功标识**：终端显示 `Starting up http-server, serving ./` 及 `Available on: http://localhost:8080`。

### 2. 访问与预览项目
1. 点击 Cloud Studio 右侧的 **【端口管理】** 按钮；
2. 找到端口 `8080`（开发服务器默认端口），点击对应的 **【查看预览】**；

<img src="img/output.png" width=600px>

### 3. 实时开发与预览
- 修改 `index.html`（如添加一个按钮）、`style.css`（如修改字体颜色）或 `script.js`（如添加点击事件）后，**刷新浏览器**即可看到最新效果；
- 若修改后无变化，检查终端是否仍保持服务器运行状态（若已关闭，重新执行 `http-server -c-1`）。


## 快速开始（新手引导）
### 步骤 1：创建页面结构（HTML）
编辑 `index.html`，定义页面核心元素，推荐使用语义化标签提升可读性与 SEO：
```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>我的第一个前端页面</title>
    <!-- 引入 CSS 样式文件 -->
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <!-- 语义化头部 -->
    <header class="page-header">
        <h1>欢迎使用 HTML-CSS-JS 模板</h1>
    </header>

    <!-- 主内容区 -->
    <main class="page-main">
        <div class="card">
            <img src="img/output.png" alt="示例图片" class="card-img">
            <p class="card-text">这是一个基础卡片组件</p>
            <button id="clickBtn" class="card-btn">点击我</button>
        </div>
    </main>

    <!-- 引入 JavaScript 脚本（建议放body末尾，确保DOM加载完成） -->
    <script src="script.js"></script>
</body>
</html>
```

### 步骤 2：添加样式（CSS）
编辑 `style.css`，美化页面，示例实现卡片与按钮样式：
```css
/* 全局样式重置（避免浏览器默认样式差异） */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

/* 页面背景与字体 */
body {
    font-family: "Microsoft YaHei", sans-serif;
    background-color: #f5f5f5;
    padding: 20px;
}

/* 头部样式 */
.page-header {
    text-align: center;
    margin-bottom: 30px;
    color: #333;
}

/* 卡片组件样式 */
.card {
    max-width: 400px;
    margin: 0 auto;
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    padding: 20px;
    text-align: center;
}

.card-img {
    width: 100%;
    border-radius: 4px;
    margin-bottom: 15px;
}

.card-text {
    color: #666;
    margin-bottom: 20px;
}

/* 按钮样式（hover 交互效果） */
.card-btn {
    padding: 10px 20px;
    background-color: #4285f4;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px;
    transition: background-color 0.3s;
}

.card-btn:hover {
    background-color: #3367d6;
}
```

### 步骤 3：实现交互（JavaScript）
编辑 `script.js`，添加按钮点击事件，示例弹出提示框：
```javascript
// 等待 DOM 加载完成后执行
document.addEventListener('DOMContentLoaded', () => {
    // 获取按钮元素
    const clickBtn = document.getElementById('clickBtn');
    
    // 添加点击事件监听
    clickBtn.addEventListener('click', () => {
        // 弹出提示框
        alert('按钮被点击啦！这是 JavaScript 交互效果～');
        
        // 可选：修改卡片文本内容
        const cardText = document.querySelector('.card-text');
        cardText.textContent = '你点击了按钮，文本已更新！';
    });
});
```

### 步骤 4：资源管理
- 图片资源：将需要的图片放入 `img/` 目录，在 HTML 中通过相对路径引用（如 `src="img/xxx.png"`）；
- 扩展资源：若需添加字体、视频等，可在 `workspace/` 下新建 `fonts/`、`videos/` 目录，保持目录结构清晰。


## 学习资源
### 1. 官方/权威文档（优先推荐）
- [MDN Web 文档](https://developer.mozilla.org/zh-CN/)：最全面的前端技术文档，涵盖 HTML、CSS、JS 所有知识点，权威且免费；
- [W3Schools](https://www.w3schools.com/)：入门友好，含交互式示例，适合新手快速上手。

### 2. 在线学习平台
- [FreeCodeCamp](https://www.freecodecamp.org/)：免费前端课程，含实战项目（如构建个人博客），学完可获证书；
- [掘金](https://juejin.cn/)：中文技术社区，有大量前端实战文章、面试经验，适合进阶学习；
- [慕课网](https://www.imooc.com/)：含系统前端课程（部分付费），适合有计划系统学习的用户。

### 3. 经典书籍
- 《JavaScript 高级程序设计》（第 4 版）：深入讲解 JS 核心原理，适合进阶；
- 《CSS 揭秘》：介绍 CSS 高级技巧，提升样式设计能力；
- 《你不知道的 JavaScript》（上中下卷）：深入 JS 底层机制，解决常见困惑。


## 常见问题解答
### 1. 开发环境相关
#### Q1：启动 `http-server` 提示“命令不存在”？
A1：执行 `npm install -g http-server` 全局安装开发服务器，安装完成后重新执行启动命令。

#### Q2：修改代码后浏览器看不到更新？
A2：确保启动服务器时添加了 `-c-1` 参数（禁用缓存），或按 Ctrl+Shift+R 强制刷新浏览器（忽略缓存）。

### 2. 前端功能相关
#### Q1：如何解决跨域问题（如 JS 请求外部接口报错）？
A1：开发环境可使用 `http-server` 的 CORS 参数：`http-server -c-1 --cors`，允许跨域请求；生产环境需后端配置 CORS 头部（`Access-Control-Allow-Origin: *`）。

#### Q2：如何实现移动端响应式布局？
A2：1. 在 HTML 头部添加视口标签 `<meta name="viewport" content="width=device-width, initial-scale=1.0">`；2. 使用 CSS 媒体查询，如：
```css
/* 屏幕宽度 ≤768px 时生效（移动端） */
@media (max-width: 768px) {
    .card {
        width: 90%; /* 卡片占屏幕 90% 宽度 */
    }
}
```

#### Q3：JS 无法获取 DOM 元素（提示 `null`）？
A3：确保 JS 代码在 DOM 加载完成后执行：1. 将 `<script>` 标签放在 `<body>` 末尾；2. 或使用 `DOMContentLoaded` 事件（如前文示例）。


## 帮助和支持
### 1. Cloud Studio 相关支持
- [Cloud Studio 官方帮助文档](https://cloudstudio.net/docs/)
- [本模板已内置 腾讯云智能编码工具CodeBuddy Code, 点击查看使用文档](https://cloudstudio.net/docs/guide/code_editing/productivity_plugin/codebuddycode/)
### 2. 用户反馈群
扫码加入 Cloud Studio 用户反馈群，获取实时前端开发技术支持：
- 腾讯云工程师群内答疑，解决 HTML/CSS/JS 开发问题；
- 优先体验产品上新功能，获取前端实战案例；
- 与其他开发者交流前端学习经验、项目技巧。

<img title="" src="img/qr-code.png" alt="Cloud Studio 用户反馈群" width="270">
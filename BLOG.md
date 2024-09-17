# 趣味项目：UI 复现微信官网首页

![alt text](https://pic.imgdb.cn/item/66e947c5f21886ccc0e093de.png)

## 项目概述

工作之余，尝试联系一下 UI 绘制布局

项目地址：https://github.com/xxhls/weixin.qq.com
在线地址：https://xxhls.github.io/weixin.qq.com/

## 技术选型

- 构建工具: [Vite](https://cn.vitejs.dev/)
- UI 框架: [React](https://zh-hans.react.dev/learn)
- CSS 预处理器: [SCSS](https://sass-lang.com/documentation/syntax/)
- CSS 原子框架: [TailwindCSS](https://www.tailwindcss.cn/)
- 路由管理: [React Router](https://reactrouter.com/en/main)
- 代码格式化: [Biome](https://biomejs.dev/zh-cn/) & [Stylelint](https://www.stylelint.cn/)
- CI/CD: [GitHub Action](https://docs.github.com/zh/actions)
- 在线部署: [GitHub Page](https://pages.github.com/)
- 图床: [聚合图床](https://www.superbed.cn/)

## 目录结构

- .github/
    - workflows/
        - github-pages.yml  // 部署github pages工作流
- node_modules/
- public/
- src/
    - assets/
    - components/ // 组件库
        - Banner/
        - ChangeLog/
        - Download/
        - Footer/
        - LinkItem/
        - LoadItem/
        - LogItem/
        - OtherItem/
        - Others/
    - constants/
        - platformsIcon  // 平台图标表
    - layout/
        - index.tsx  // 布局文件
    - pages/
        - index/index.tsx  // 首页
    - router/
        - index.tsx  // 路由管理
    - styles/
        - common.scss  // scss公共混入
        - variables.scss  // scss变量
    - App.tsx
    - main.css
    - main.tsx
    - vite-env.d.ts
- .gitignore
- stylelintrc.json  // stylelint配置文件
- biome.json  // biome配置文件
- index.html  // 首页html
- package.json
- package-lock.json
- postcss.config.js  // postcss配置文件
- tailwind.config.js  // tailwindcss配置文件
- tsconfig.json  // ts配置文件
- tsconfig.app.json
- tsconfig.node.json
- vite.config.ts  // vite配置文件

## 页面结构

- App
    - Layout
        - RouterProvider
            - IndexPage
                - Banner
                    - Changelog
                        - LogItem
                    - Download
                        - LoadItem
                    - Others
                        - OtherItem
                - Links
                    - Link
                - Footer

## 数据流转

1. 全部的数据存储在index下的mockData.json中
2. 数据不递进从index传递下去，直接在业务组件内部引入json得到

## 样式说明

- 全部样式数值被存储为scss变量
- 单重样式的复用使用tailwindcss
- 多重样式的复用使用scss混入+形参

## 常量说明

- platformIcons存储了平台与图标的对应关系，值为聚合图床上的链接，静态资源中也进行了留存

## 部署说明

- 直接使用github actions部署在github pages上

## 其他说明

后续还会进一步完善，欢迎交流~

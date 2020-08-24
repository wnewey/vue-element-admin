# 前端文档

## 总体说明

1、项目文件分为两大部分:

>src: 代码
>
>doc: 文档

通过不同的命令将目标文件编译到指定的文件夹

2、内管组件基于 ElementUI 按需进行修改（使用 element-theme 配置全局主题 element-variables.scss）

3、编辑器使用 VsCode（**版本号为1.4+，低于该版本配置方式不同**），样式插件安装 Vetur,Beautify，基于.vscode文件夹下的settings.json配置自动格式化。
>除 Vue 和 JavaScript 文件按指定的格式化工具外，其余使用 vscode 自带的格式化工具

## 安装编译

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# build for docs
npm run docs:dev
npm run docs:build

# install compont
npm run install:compont
```
**文档基于 vuepress，进入 docs 查看**

## 目录结构

```sh
── README.md
├── build  // webpack编译构建文件
├── config // 编译配置
├── dist // 编译目标文件夹
├── package-lock.json
├── package.json
├── grui // 组件封装及 ui 样式
│   ├── index.js
│   └── packages
│   └── theme
│   │   ├── color.less
│   │   ├── fontsize.less
│   │   └── theme.less
│   ├── mock // 接口数据模拟
│   │   ├── data
│   │   └── index.js
├── src
│   ├── api
│   ├── config
│   ├── entry.html
│   ├── entry.js
│   ├── entry.vue
│   ├── extends
│   │   ├── directives
│   │   ├── filters
│   │   ├── mixins
│   │   └── utils
│   ├── pages
│   │   ├── 403.vue
│   │   ├── 404.vue
│   │   ├── index
│   │   │   └── dashboard.vue
│   │   ├── layout
│   │   │   ├── components
│   │   │   ├── index.vue
│   │   │   ├── layout.less
│   │   │   └── mixin
│   ├── router
│   │   ├── _import_development.js
│   │   ├── _import_production.js
│   │   ├── index.js
│   │   └── menus.js
│   ├── static
│   │   ├── image
│   │   └── style
│   ├── store
│   │   ├── getters.js
│   │   ├── index.js
│   │   └── modules
├── element-ui-theme // 主题样式文件，在 element-ui 官网生成后导入

```


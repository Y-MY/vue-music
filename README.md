# vue-music

> 移动端音乐WebApp

# 技术栈
### 前端
- Vue：用于构建用户界面的 MVVM 框架。
- vue-router：为单页面应用提供的路由系统
- Less：css 预编译处理器
- ES6：ECMAScript 新一代语法，模块化、解构赋值、Promise、Class 等方法非常好用

### 自动化构建及其他工具
- webpack：项目的编译打包
- vue-cli：Vue 脚手架工具，快速搭建项目

# 踩坑
### 安装less踩坑
该项目基本上使用less编写样式

1.安装less和less-loader
```
npm install less@3.9.0 --save-dev
npm install less-loader@5.0.0 --save-dev
```
2.最后在页面代码中引用：
```
<style lang="less" scoped>
</style>
```

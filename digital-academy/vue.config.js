const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false, //关闭语法检查
  publicPath: './', // 基本路径
  outputDir: 'dist', // 输出文件目录 默认值
  assetsDir: './assets',//放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录
  indexPath: 'index.html',//打包生成的 index.html 文件的存储位置 默认值
})

const path = require('path');
module.exports = {
    mode: "development", // 根据环境使用相应的内置优化
    entry: "/src/index.js", // 入口文件
    output: {
      // 出口文件
      filename: "bundle.js",
      path: path.resolve(__dirname, "../dist"),
      publicPath: "/",
    },
    plugins: [], // 使用的插件
    module: {
      generator: {}, // 生成器
      parser: {}, // 解析器
      rules: [], // 修改模块的创建方式
    }, // 模块加载方案
  };
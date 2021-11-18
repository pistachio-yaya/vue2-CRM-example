const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { VueLoaderPlugin } = require('vue-loader');

module.exports = {
    mode: "development", // 根据环境使用相应的内置优化
    entry: "/index.js", // 入口文件
    output: {
      // 出口文件
      filename: "bundle.js",
      path: path.resolve(__dirname, "../dist"),
      publicPath: "/",
    },
    devServer: {
      port: 3009, // 启动端口
      hot: true, // 是否开启热模块替换
      open: true, // 是否开启自动打开页面
      proxy: {
      }
    },
    plugins: [
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            template: "./index.html",
            filename: "index.html",
            title: "Vue -> Web App",
            minify: {
              collapseWhitespace: true, // 去掉空格
              removeComments: true, // 去掉注释
            },
          }),
    ], // 使用的插件
    module: {
      generator: {}, // 生成器
      parser: {}, // 解析器
      rules: [
         {
          test: /\.vue$/,
          use: [
          {
            loader: "cache-loader",
          },
          {
            loader: "thread-loader",
          },
          {
            loader: "vue-loader",
            options: {
              compilerOptions: {
                preserveWhitespace: false,
              },
            },
          },
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ], // 修改模块的创建方式
    }, // 模块加载方案
  };
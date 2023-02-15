// 路径模块
const path = require("path");
// html末班插件
const HtmlWebpackPlugin = require("html-webpack-plugin");
// 提取css插件
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// 压缩css插件
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
// 压缩js插件
const TerserPlugin = require("terser-webpack-plugin");
// 解析.vue文件的
const { VueLoaderPlugin } = require("vue-loader");
// eslint插件
const ESLintPlugin = require("eslint-webpack-plugin");
// 移动指定文件
const CopyPlugin = require("copy-webpack-plugin");
// 生成唯一id
const uuid = require("uuid");
// 环境变量
const NODE_ENV = process.env.NODE_ENV;
module.exports = {
  entry: {
    // index: "./src/index.ts"
    index: "./src/main.js"
  },
  output: {
    filename: "static/js/[name].js",
    path: path.resolve(__dirname, "dist"),
    clean: true
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          {
            loader: "postcss-loader"
          }
        ]
      },
      {
        test: /\.less$/i,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader",
          "less-loader"
        ]
      },
      {
        test: /\.(png|jpg|gif|webp)$/i,
        type: "asset",
        generator: {
          filename: "static/images/[hash][ext][query]"
        }
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
        generator: {
          filename: "static/iconfont/[hash][ext][query]"
        }
      },
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/
      },
      {
        test: /\.vue$/,
        loader: "vue-loader"
      }
    ]
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js", ".vue", ".jsx", ".tsx"]
  },
  optimization: {
    // 懒加载,引入自node_modules的可以实现分包,以及超出体积也可以分包
    splitChunks: {
      chunks: "all",
      name: () => {
        return uuid.v4();
      },
      minSize: 20000,
      minRemainingSize: 0,
      minChunks: 1,
      maxAsyncRequests: 30,
      maxInitialRequests: 30,
      enforceSizeThreshold: 50000
    },
    // CssMinimizerPlugin要在开发环境生效,必须设置这个,参考https://www.webpackjs.com/plugins/css-minimizer-webpack-plugin/
    minimize: true,
    minimizer: [new CssMinimizerPlugin(), NODE_ENV == "development" ? { apply() { } } : new TerserPlugin()]
  },
  mode: NODE_ENV,
  devtool: NODE_ENV == "development" ? "source-map" : false,
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      chunks: ["index"],
      filename: "index.html"
    }),
    new MiniCssExtractPlugin({
      filename: "static/css/[name].css"
    }),
    new VueLoaderPlugin(),
    new ESLintPlugin({
      context: path.resolve(__dirname, "src"),
      exclude: "assets"
    }),
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, "./public"), to: path.resolve(__dirname, "./dist"), globOptions: {
            ignore: ["**/index.html"],
          },
        },
      ],
    }),
  ]

};

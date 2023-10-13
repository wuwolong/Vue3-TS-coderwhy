const HtmlWebpackPlugin = require("html-webpack-plugin");
const { VueLoaderPlugin } = require("vue-loader");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const Components = require("unplugin-vue-components/webpack");
const AutoImport = require("unplugin-auto-import/webpack");
const { ElementPlusResolver } = require("unplugin-vue-components/resolvers");

const path = require("path");
const devMode = process.env.NODE_ENV !== "production";
module.exports = {
  entry: "./src/index.ts",
  resolve: {
    extensions: [".vue", ".wasm", ".mjs", ".js", ".json"],
    alias: {
      "@": path.resolve(__dirname, "../src"),
    },
  },
  cache: {
    type: "filesystem",
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: "ts-loader",
        exclude: /node_modules/,
        options: {
          appendTsSuffixTo: [/\.vue$/],
        },
      },
      {
        test: /\.vue$/,
        use: "vue-loader",
      },
      {
        test: /\.(t|j)s$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            cacheDirectory: true,
          },
        },
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          devMode ? "style-loader" : MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.(png|svg|jpe?g|gif)$/,
        type: "asset",
        generator: {
          filename: "images/[name]-[hash][ext]",
        },
      },
      {
        test: /\.(eot|svg|ttf|woff2?|)$/,
        type: "asset/resource",
        generator: {
          filename: "fonts/[name]-[hash][ext]",
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "webpack5-ts-vue",
      template: "./index.html",
    }),
    new VueLoaderPlugin(),
    // Components({
    //   // dirs 指定组件所在位置，默认为 src/components
    //   // 可以让我们使用自己定义组件的时候免去 import 的麻烦
    //   dirs: ["src/components/"],
    //   // 配置需要将哪些后缀类型的文件进行自动按需引入
    //   extensions: ["vue", "md"],
    //   // 解析的 UI 组件库，这里以 Element Plus 和 Ant Design Vue 为例
    //   resolvers: [ElementPlusResolver()],
    // }),
    // AutoImport({
    //   imports: ["vue", "vue-router"],
    //   include: [/\.[tj]sx?$/, /\.vue$/, /\.vue\?vue/, /\.md$/],
    //   dts: "../auto-imports.d.ts",
    //   resolvers: [ElementPlusResolver()],
    // }),
  ],
};

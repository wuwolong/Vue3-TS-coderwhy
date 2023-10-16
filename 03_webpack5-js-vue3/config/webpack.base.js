const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { VueLoaderPlugin } = require('vue-loader')
const AutoImport = require('unplugin-auto-import/webpack')
const Components = require('unplugin-vue-components/webpack')
const { ElementPlusResolver } = require('unplugin-vue-components/resolvers')
const DefineOptions = require('unplugin-vue-define-options/webpack')
const { DefinePlugin } = require('webpack')
// console.log(process.env.NODE_ENV)
const devMode = process.env.NODE_ENV !== 'production'
module.exports = {
  entry: path.resolve(__dirname, '../src/main.js'),
  devtool: 'source-map',
  output: {
    filename: 'js/[name]-[hash:5].js',
    path: path.resolve(__dirname, '../dist'),
    clean: true,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '../src'),
    },
    extensions: ['.vue', '.ts', '...'],
  },
  plugins: [
    new DefinePlugin({
      __VUE_OPTIONS_API__: false,
      __VUE_PROD_DEVTOOLS__: false,
      BASE_URL: "'./'",
    }),
    new HtmlWebpackPlugin({
      title: 'webpack5-js-vue3',
      template: path.resolve(__dirname, '../index.html'),
    }),
    new VueLoaderPlugin(),
    DefineOptions(),
    AutoImport({
      includes: [/\.vue$/i, /\.[tj]sx?$/],
      imports: ['vue', 'vue-router'],
    }),
    Components({
      dirs: [path.resolve(__dirname, '../src/components')],
      extensions: ['vue'],
      deep: true,
      resolvers: [ElementPlusResolver()],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.vue$/i,
        use: ['vue-loader'],
      },
      {
        test: /\.js$/i,
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true,
          },
        },
        // exclude: /node_modules/,
        // use: {
        //   loader: 'babel-loader',
        //   options: {
        //     presets:[
        //       '@babel/preset-env',
        //     ]
        //     cacheDirectory: true,
        //   },
        // },
      },
      {
        test: /\.(le|c)ss$/i,
        use: [
          devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'less-loader',
        ],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'images/[name]-[hash:5][ext]',
        },
      },
      {
        test: /\.(eot|svg|ttf|woff2?|)$/,
        type: 'asset/resource',
        generator: {
          filename: 'fonts/[name]-[hash:5][ext]',
        },
      },
    ],
  },
}

const { merge } = require('webpack-merge')

const baseConfig = require('./webpack.base.js')
const ESLintPlugin = require('eslint-webpack-plugin')
module.exports = merge(baseConfig, {
  mode: 'development',
  target: 'web',
  devServer: {
    hot: true,
    open: true,
  },
  plugins: [new ESLintPlugin({ extensions: ['js', 'ts', 'vue'] })],
})

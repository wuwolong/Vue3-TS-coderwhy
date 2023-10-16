const { merge } = require('webpack-merge')
const baseConfig = require('./webpack.base.js')
const path = require('path')
console.log(path.join(__dirname, '../public'))
module.exports = merge(baseConfig, {
  mode: 'development',
  devtool: 'source-map',
  devServer: {
    hot: true,
    open: true,
    static: {
      directory: path.join(__dirname, '../public'),
    },
  },
})

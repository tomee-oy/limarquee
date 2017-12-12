/*
 * @Author: ouyangdecai 
 * @Date: 2017-12-12 11:30:09 
 * @Description: 开发时的webpack配置
 * @Last Modified by: ouyangdecai
 * @Last Modified time: 2017-12-12 14:29:44
 */
const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  entry: {
    index:["webpack-hot-middleware/client?noInfo=true&reload=true", path.resolve('test/index.js')]
    // index: path.join(__dirname, 'test', 'index.js')
  },
  output: {
    publicPath: '/',
    filename: `[name].bundle.js`,
    path: '/'
  },
  module: {
    rules: [{
      test: /\.js|\.jsx$/,
      exclude: /node_modules/,
      use: 'babel-loader'
    }, {
      test: /\.css$/,
      exclude: /node_modules/,
      use: ['style-loader', 'css-loader']
    }]
  },
  // devServer: {
  //   contentBase: path.join(__dirname, '/dist'),
  //   historyApiFallback: true,//不跳转
  //   inline: true//实时刷新
  // },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve('test/index.html'),
    }),
    new webpack.HotModuleReplacementPlugin()
  ]
}
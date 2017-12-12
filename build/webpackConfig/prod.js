/**
 * @Author:      孙雨珩
 * @DateTime:    2017-07-20 16:02:08
 * @Description: 在生产环境下使用的webpack编译配置
 * @Last Modified By:   孙雨珩
 * @Last Modified Time:    2017-07-20 16:02:08
 */

const webpack = require('webpack')
const path = require('path')
const config = require('../config')

module.exports = 
  {
    devtool: '#source-map',
    entry: {
      index: path.resolve(path.join(__dirname, '../..', 'src/index.js'))
    },
    output: {
      path: path.resolve(path.join(__dirname, '../..', 'lib')),
      // dist文件夹对应的url地址
      // 最终所有静态资源文件都会以绝对路径的方式引入
      publicPath: config.prod.assetsPublicPath,
      // chunkhash可以避免浏览器无效缓存
      // entry chunk产出时的文件名称
      filename: '[name].js',
    },
    module: {
      rules: [
        // 使得可以require样式文件
        {
          test: /\.css$/,
          exclude: /node_modules/,
          use: ['style-loader', 'css-loader']
        },
        {
          test: /\.js|\.jsx$/,
          exclude: /node_modules/,
          use: 'babel-loader'
        }
      ]
    }
  }
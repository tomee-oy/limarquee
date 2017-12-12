/*
 * @Author: ouyangdecai 
 * @Date: 2017-12-12 11:16:15 
 * @Description: 启动本地服务器
 * @Last Modified by: ouyangdecai
 * @Last Modified time: 2017-12-12 20:24:00
 */
const config = require('./config')
const express = require('express')
const app = express()
const webpack = require('webpack')
const devMiddleware = require('webpack-dev-middleware')
const hotMiddleware = require('webpack-hot-middleware')
const webpackConfig = require('./webpackConfig/dev.js')
const complier = webpack(webpackConfig)

const { port } = config.dev

app.use(devMiddleware(complier,{
  publicPath: webpackConfig.output.publicPath,
  quiet: false
}))
app.use(hotMiddleware(complier))

app.listen(port)
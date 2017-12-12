
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpackConfig = {
  entry: {
    index: path.join(__dirname, 'test', 'index.js')
  },
  output: {
    filename: `[name].bundle.js`,
    path: path.resolve('dist')
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
  devServer: {
    contentBase: path.join(__dirname, '/dist'),
    historyApiFallback: true,//不跳转
    inline: true//实时刷新
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: __dirname + '/test/index.html',
    })
  ]
}
module.exports = webpackConfig
/**
 * @Author:      孙雨珩
 * @DateTime:    2017-07-20 18:09:41
 * @Description: 进行生产环境的构建
 * @Last Modified By:   孙雨珩
 * @Last Modified Time:    2017-07-20 18:09:41
 */

// postcss处理浏览器前缀时时会读取package.json中我们对生产环境的配置
process.env.NODE_ENV = 'production'
const path = require('path')
const ora = require('ora')
const rm = require('rimraf')
const chalk = require('chalk')
const webpack = require('webpack')

const webpackConfig = require('./webpackConfig/prod')

const spinner = ora('项目构建中...')
spinner.start()

// 删除上次构建产出的文件
rm(
  path.join(__dirname,'..','lib'),
  err => {
    if (err) {
      throw err
    }
    webpack(
      webpackConfig,
      (err, stats) => {
        spinner.stop()
        if (err) {
          throw err
        }
        // 输出构建结果
        process.stdout.write(stats.toString({
          colors: true,
          modules: false,
          children: false,
          chunks: false,
          chunkModules: false
        }) + '\n\n')

        console.log(chalk.cyan('  构建完成。\n'))
      }
    )
  }
)
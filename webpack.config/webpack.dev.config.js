const merge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base.config')

const devWebpackConfig = merge(baseWebpackConfig, {

    mode: "development",
    devtool: "cheap-module-eval-source-map",
    devServer: {
        contentBase: baseWebpackConfig.externals.paths.dist,
        overlay: true
    }
})

module.exports = new Promise((resolve, reject) => {
    resolve(devWebpackConfig)
})
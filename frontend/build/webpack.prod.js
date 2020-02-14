const merge = require("webpack-merge");
const uglifyJsPlugin = require('uglifyjs-webpack-plugin')
const MiniCss = require('mini-css-extract-plugin')
const VueLoaderPlugin = require("vue-loader/lib/plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin')


const webpackCommonConfig = require('./webpack.base')

module.exports = function(env){
    const plugins = [
        new MiniCss({
            filename: '../stylesheets/app.css'
        }),
        new CleanWebpackPlugin(),
        new VueLoaderPlugin()
    ]

    return merge(webpackCommonConfig(env),{
        mode: 'production',
        // output: {
        //     publicPath: '//chaosho.com'
        // },
        optimization: {
            minimizer: [
                new uglifyJsPlugin({
                    uglifyOptions: {
                        compress: {
                            warnings: false,
                            drop_debugger: false,
                            drop_console: true
                        }
                    }
                })
            ]
        },
        stats: {
            chunkGroups: false,
            chunkModules: false,
            chunkOrigins: false,
            modules: false,
            source: false,
            children: false
        },
        plugins,
        // devtool: 'source-map'
    })
}
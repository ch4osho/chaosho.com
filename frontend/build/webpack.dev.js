const merge = require('webpack-merge')
const webpack = require('webpack')
const VueLoaderPlugin = require("vue-loader/lib/plugin");
const { resolve } = require('./bundle')
const webpackBaseConfig = require('./webpack.base')

module.exports = function(){
    return merge(webpackBaseConfig(),{
        mode: 'development',
        plugins: [
            new webpack.HotModuleReplacementPlugin(),
            new VueLoaderPlugin()
        ],
        // devtool: 'cheap-module-source-map'
         devServer: {
            contentBase: resolve("dist"),
            host: "0.0.0.0",
            useLocalIp: true,
            open: true,
            hot: true,
            historyApiFallback: true,
            inline: true,
            proxy: {
                '/Android': {
                    target: 'http://gank.io/api/data/Android',
                    changeOrigin: true,
                    pathRewrite: {
                        '^/Android': '/wocao'
                    }
                },
                '/lala': {
                    target: 'http://gank.io/api/data/Android',
                    changeOrigin: true,
                    pathRewrite: {
                        '^/lala': '/wocao'
                    }
                },
                '/baba': {
                    target: 'http://gank.io/api/data/Android',
                    changeOrigin: true,
                    // pathRewrite: {
                    //     '^/lala': '/'
                    // }
                }
            }
         }
    })
}
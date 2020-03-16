const WebpackMerge = require('webpack-merge')
const webpack = require('webpack')
const { resolve } = require("./bundle");
const baseConfig = require('./webpack.config.base')


module.exports = (env) => {
    return WebpackMerge(baseConfig(env),{
        mode: "development",
        resolve: {
          alias: {
            "api": resolve("src/utils/api.dev.js")
          }
        },
        devServer: {
            contentBase: [resolve('dist')],
            host: process.env.HOST || "0.0.0.0",
            port: 80,
            useLocalIp: true,
            overlay: {
              errors: true,
              warnings: true,
            },
            open: true,
            hot: true,
            // watchContentBase: true,
            historyApiFallback: true,
            inline: true,
            disableHostCheck: true,
            stats: {
              assets: false,
              chunks: false,
              chunkGroups: false,
              chunkModules: false,
              chunkOrigins: false,
              modules: false,
              moduleTrace: false,
              source: false,
              builtAt: false,
              children: false,
              hash: false,
            },
            proxy: {
              "/v1":{
                target: "http://h5game.rastargame.com/",
                changeOrigin: true,
                pathRewrite: {
                  "^/v1": "v1"
                },
                secure: false
              },
              "/h5": {
                target: "https://apppay.rastargame.com/",
                changeOrigin: true,
                pathRewrite: {
                  "^/h5": "/h5",
                },
              },
              "/mobile": {
                target: "https://pay.rastargame.com/",
                changeOrigin: true,
                pathRewrite: {
                  "^/mobile": "/mobile",
                },
              },
            }
          },
        plugins: [
            new webpack.HotModuleReplacementPlugin()
        ]
    })
}
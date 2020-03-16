const WebpackMerge = require('webpack-merge')
const baseConfig = require('./webpack.config.base')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const UglifyjsWebpackPlugin = require('uglifyjs-webpack-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const { resolve } = require("./bundle.js")
const externals = require("./externals")

module.exports = (env) => {
    const plugins = [
        new MiniCssExtractPlugin({
          filename: "static/css/[name].css",
        }),
        new BundleAnalyzerPlugin({
          reportFilename: 'report.html',
          defaultSizes: 'parsed'
        }),
      ];

    return WebpackMerge(baseConfig(env),{
        mode: "production",
        resolve: {
          alias: {
            "api": resolve("src/utils/api.js")
          }
        },
        optimization: {
            splitChunks: {
              cacheGroups: {
                commons: {
                  test: /[\\/]node_modules[\\/]/,
                  name: "vendor",
                  chunks: "all",
                },
              },
            },
            minimizer: [
              new UglifyjsWebpackPlugin({
                uglifyOptions: {
                  compress: {
                    drop_debugger: false,
                    drop_console: false,
                  },
                },
              }),
              new OptimizeCSSAssetsPlugin({
                cssProcessorOptions: {
                  safe: true,
                },
              }),
            ],
          },
          stats: {
            chunkGroups: false,
            chunkModules: false,
            chunkOrigins: false,
            modules: false,
            moduleTrace: false,
            source: false,
            children: false,
          },
          plugins,
          // externals
    })
}
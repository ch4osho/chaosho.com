const merge = require("webpack-merge");
const webpack = require("webpack");
const VueLoaderPlugin = require("vue-loader/lib/plugin");
const { resolve } = require("./bundle");
const webpackBaseConfig = require("./webpack.base");

module.exports = function(env) {
  return merge(webpackBaseConfig(env), {
    mode: "development",
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new VueLoaderPlugin(),
      new webpack.DefinePlugin({
        "process.env": {
          NODE_ENV: '"dev"',
          ROOT_FUND_API: '"/pingzhongdata"',
          ROOT_FUND_NEWS_API: '"/FundMNewApi"',
          ROOT_MY_API: '"/localhost"',
        },
      }),
    ],
    // devtool: 'cheap-module-source-map'
    devServer: {
      contentBase: resolve("dist"),
      host: "0.0.0.0",
      // host: "192.168.1.103",
      useLocalIp: true,
      open: true,
      hot: true,
      historyApiFallback: true,
      inline: true,
      proxy: {
        "/pingzhongdata": {
          target: "http://fund.eastmoney.com/pingzhongdata",
          changeOrigin: true,
          pathRewrite: {
            "^/pingzhongdata": "/",
          },
        },
        "/FundMNewApi": {
          target: "http://fundmobapi.eastmoney.com/FundMNewApi",
          changeOrigin: true,
          pathRewrite: {
            "^/FundMNewApi": "/",
          },
        },
        "/localhost": {
          target: "http://localhost:8088",
          changeOrigin: true,
          pathRewrite: {
            "^/localhost": "/",
          },
        },
      },
    },
  });
};

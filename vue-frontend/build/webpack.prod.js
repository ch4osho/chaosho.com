const merge = require("webpack-merge");
const webpack = require("webpack");
const uglifyJsPlugin = require("uglifyjs-webpack-plugin");
const MiniCss = require("mini-css-extract-plugin");
const VueLoaderPlugin = require("vue-loader/lib/plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const webpackCommonConfig = require("./webpack.base");

module.exports = function(env) {
  const plugins = [
    new MiniCss({
      filename: "./stylesheets/app.css",
    }),
    new CleanWebpackPlugin(),
    new VueLoaderPlugin(),
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: '"prod"',
        ROOT_FUND_API: '"//fund.eastmoney.com/pingzhongdata"',
        ROOT_FUND_NEWS_API: '"//fundmobapi.eastmoney.com/FundMNewApi"',
        ROOT_MY_API: '"//chaosho.com"',
        ROOT_SUGGEST_API: '"//fundsuggest.eastmoney.com"',
      },
    }),
  ];

  return merge(webpackCommonConfig(env), {
    mode: "production",
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
              drop_console: true,
            },
          },
        }),
      ],
      // splitChunks: {
      // chunks: "all",  // async表示抽取异步模块，all表示对所有模块生效，initial表示对同步模块生效
      // cacheGroups: {
      //     vendors: {  // 抽离第三方插件
      //         test: /[\\/]node_modules[\\/]/,     // 指定是node_modules下的第三方包
      //         name: "vendors",
      //         priority: -10                       // 抽取优先级
      //     },
      //     utilCommon: {   // 抽离自定义工具库
      //         name: "common",
      //         minSize: 0,     // 将引用模块分离成新代码文件的最小体积
      //         minChunks: 2,   // 表示将引用模块如不同文件引用了多少次，才能分离生成新chunk
      //         priority: -20
      //     }
      // }
      // }
    },
    stats: {
      chunkGroups: false,
      chunkModules: false,
      chunkOrigins: false,
      modules: false,
      source: false,
      children: false,
    },
    plugins,
    // devtool: 'source-map'
  });
};

const { initConfig,resolve } = require('./bundle.js')
const initLoader = require('./loaders.js')
// 每次打包清理dist目录
const { CleanWebpackPlugin } = require('clean-webpack-plugin')


const config = {
    // devtool: 'cheap-module-source-map',
    // mode: 'production',
    module: {
        rules: [],
    },
    plugins: [],
    resolve: {
        alias: {
          'Vue': 'vue/dist/vue.js'
        }
    },
}

module.exports = function(env){
    const {
        entry,
        output,
        htmlPlugins
    } = initConfig(env)
    const loaders = initLoader(env)

    config.entry = entry;
    config.output = output;
    config.module.rules.push(...loaders);
    config.plugins.push(...htmlPlugins)
    return config
}
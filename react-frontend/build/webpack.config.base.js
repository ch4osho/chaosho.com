const { CleanWebpackPlugin } = require('clean-webpack-plugin')


const initLoaders = require('./loader.js')
const {initConfig,resolve} = require('./bundle')

const config = {
    module: {
        rules: []
    },
    plugins: []
}

module.exports = (env)=>{
    const {
        entry,
        output,
        htmlPlugins
    } = initConfig(env)

    config.entry = entry
    config.output = output
    config.module.rules.push(...initLoaders(env))
    config.plugins.push(...htmlPlugins)


    return config
}

// 提取css文件
const MiniCssExtraPlugin = require('mini-css-extract-plugin')
const { resolve } = require('./bundle')

// const cssLoader = {
//     test: /\.css$/,
//     exclude: /node_modules/,
//     use: [
//         MiniCssExtraPlugin.loader,
//         'style-loader',
//         'css-loader',
//         // 'postcss-loader'
//     ],
// }

const sassLoader = {
    test: /\.(sa|sc|c)ss$/,
    exclude: /node_modules/,
    use: [
        // MiniCssExtraPlugin.loader,
        // 'style-loader',
        'css-loader',
        // 'postcss-loader',
        'sass-loader',
        // {
        //     loader: 'sass-resources-loader',
        //     options: {
        //         resources: resolve('src/sass/base.scss')
        //     }
        // }
    ]
}

const jsLoader = {
    test: /\.js$/,
    exclude: /node_modules/,
    use: [
        {
            loader: 'babel-loader',
            options: {
                presets: [
                    [
                        'babel-preset-env',{
                            targets: {
                                browsers: ['> 1%', 'last 2 versions']
                            }
                        }
                    ]
                ]
            }
        }
    ]
}

const vueLoader = {
    test: /\.vue$/,
    exclude: /node_modules/,
    loader: 'vue-loader'
}

const fileLoader = {
    // 文字资源
    test: /\.(png|svg|jpg|jpeg|gif)$/,
    loader: 'url-loader',
    options: {
        limit: 10000,
        outputPath: '/images',
        publicPath: 'http://chaosho.com/static/vue/images'
    }
}

const initLoader = function (env) {
    const loaders = []

    env === 'dev' ? sassLoader.use.unshift('style-loader') : sassLoader.use.unshift(MiniCssExtraPlugin.loader)

    loaders.push(sassLoader,jsLoader,fileLoader,vueLoader)

    return loaders
}

module.exports =  initLoader

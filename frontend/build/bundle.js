const path = require('path')
const fs = require('fs')

const publicPath = "public/javascripts"
const tplPath = "public/app.html"

const resolve = (p) => path.resolve(__dirname, "..", p)
const resolveToPublic = (p) => path.resolve(__dirname, "../..", p)


// 多页面入口
// const entryDir = resolve("src")
// const entryFiles = fs.readdirSync(entryDir)

// html模板
const HtmlWebpackPlugin = require('html-webpack-plugin')

let entry = '',output = {},htmlPlugins = []


// 别名
function resolveAlias() {
    Object.keys(alias.forEach(attr=> {
        const val = alias[attr]
        alias[attr] = resolve(val)
    }))
}

// 入口和出口
function resolveEntryAndOutput(env) {

    // 多页面入口
    // entryFiles.forEach(dir=>{
    //     entry[dir] = resolve(`${entryDir}/${dir}`);
    //     output = {
    //         filename: "js/[name].js",
    //         path: resolve('dist')
    //     }
    // })
    // if (env === 'dev') output.path = resolve('dist')
    //     else output.path = resolveToPublic('publicPath')

    env === 'dev' ? output.path = resolve('dist') : output.path = resolveToPublic(publicPath)

    entry = resolve('src/main.js'),

    output.filename = "index.js"
    

}

// html模板
function resolveHtmlTemplate(env){

    // 多页面打包
    // entryFiles.forEach(dir=>{
    //     console.log(dir,'每个dir')
    //     const htmlPlugin = new HtmlWebpackPlugin({
    //         filename: `${dir}.html`,
    //         template: resolve('template/template.html'),
    //         chunks: [dir, "vendor"],
    //     })
    //     htmlPlugins.push(htmlPlugin)
    // })


    var htmlPlugin = new HtmlWebpackPlugin({
        filename: env === 'dev' ? resolve('dist/index.html') : resolveToPublic(tplPath),
        template: resolve('template/template.html')
    })
    htmlPlugins.push(htmlPlugin)

}

function initConfig(env){

    // resolveAlias()

    resolveEntryAndOutput(env)

    resolveHtmlTemplate(env)

    return {
        entry,
        output,
        htmlPlugins
    }
}

exports.resolve = resolve
exports.initConfig = initConfig
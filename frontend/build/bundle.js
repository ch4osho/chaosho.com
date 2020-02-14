const path = require('path')
const fs = require('fs')

const resolve = (p) => path.resolve(__dirname, "..", p)
const entryDir = resolve("src")
const entryFiles = fs.readdirSync(entryDir)

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
    // entryFiles.forEach(dir=>{
    //     entry[dir] = resolve(`${entryDir}/${dir}`);
    //     output = {
    //         filename: "js/[name].js",
    //         path: resolve('dist')
    //     }
    // })
    entry = resolve('src/main.js'),
    output = {
        filename: "index.js",
        path: resolve('dist')
    }

}

// html模板
function resolveHtmlTemplate(){
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
        filename: resolve('dist/index.html'),
        template: resolve('template/template.html')
    })
    htmlPlugins.push(htmlPlugin)
}

function initConfig(env){
    // resolveAlias()
    resolveEntryAndOutput(env)

    resolveHtmlTemplate()

    return {
        entry,
        output,
        htmlPlugins
    }
}

exports.resolve = resolve
exports.initConfig = initConfig
const fs = require('fs')
const path = require('path')
const resolve = dirname => path.resolve(__dirname, '..', dirname)
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
// 入口文件目录
const filesEntryDir = resolve('src/views')
// 输出文件目录
const filesOutputDist = resolve('dist')
// 模板文件
const tplDir = resolve('tpl/tpl.html')
// 入口文件名（数组）
const entryFiles = fs.readdirSync(filesEntryDir)

const entry = {}
const output = {}
const htmlPlugins = [
    new CleanWebpackPlugin()
]

// 处理入口和出口
function handleEntryAndOutput (env){
    entryFiles.forEach(dir=>{
           entry[dir] = resolve(`src/views/${dir}`)
           output.filename = 'static/js/[name].bundle.js'
        })
    output.path = filesOutputDist
}


// 处理html模板
function handleHtmlTpl(){
    entryFiles.forEach(dir=>{
        const htmlPlugin = new HtmlWebpackPlugin({
            filename: `${dir}.html`,
            template: tplDir,
            chunks: [dir, 'vendor']
        })
        htmlPlugins.push(htmlPlugin)
    })
}

// 初始化配置
function initConfig(env){
    handleEntryAndOutput(env)
    handleHtmlTpl()

    return {
        entry,
        output,
        htmlPlugins
    }
}

exports.initConfig = initConfig
exports.resolve = resolve

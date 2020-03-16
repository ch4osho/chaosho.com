const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { resolve } = require("./bundle.js")
// css
const cssLoader = {
    test: /\.css$/,
    exclude: /node_modules/,
    use: [
        "style-loader",
        "css-loader",
    ],
}

// js
const jsLoader = {
    test: /\.(js|jsx)$/,
    exclude: /node_modules/,
    loader: 'babel-loader',
    query:{
        plugins: [
            [
                'import', 
                { libraryName: 'antd', style: 'css' }
            ],
          ]
    }
}

// sass
const sassLoader = {
    test: /\.scss$/,
    exclude: /node_modules/,
    use: [
        "style-loader",
        "css-loader",
        "sass-loader",
        {
            loader: "sass-resources-loader",
            options: {
                resources: resolve("src/sass/style.scss"),
            }
        }
    ]
}

// antd按需加载
const antdCssLoader = {
    test:/\.css$/,
    exclude:/src/,
    use:[
        { loader: "style-loader",},
        {
            loader: "css-loader",
            options:{
                importLoaders:1
            }
        }
    ]
}

// file
const imgLoader = {
    test: /\.(png|jpg|jpeg|gif|svg)$/,
    loader: 'url-loader?limit=5000&name=static/img/[name].[ext]',
}

// 
const fontLoader = {
    test: /\.(woff|woff2|eot|ttf|otf)$/,
    use: {
      loader: "url-loader",
      options: {
        outputPath:"font",
      },
    },
  };


// 初始化loader
function initLoader (env){
    const loaders = []
    if (env == 'prod') {


        // 这里有坑，打包时 style-loader和sass-loader有冲突
        sassLoader.use.shift()

        cssLoader.use.shift()

        // 抽离css
        cssLoader.use.unshift({
            loader: MiniCssExtractPlugin.loader
        })

        // 抽离scss
        sassLoader.use.unshift({
            loader:MiniCssExtractPlugin.loader
        })


    }

    loaders.push(
        cssLoader,
        jsLoader,
        sassLoader,
        imgLoader,
        antdCssLoader,
        fontLoader
    )

    return loaders
}


module.exports = initLoader



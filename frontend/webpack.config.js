const env = process.env.ENVIROMENT.trim();
console.log(env)
// const option = process.env.OPTTION ? process.env.OPTION.trim() : "";
const webpackConfig = require(`./build/webpack.${env}.js`);
module.exports = webpackConfig(env);
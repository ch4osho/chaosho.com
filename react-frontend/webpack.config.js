const env = process.env.ENVIROMENT.trim();
const webpackConfig = require(`./build/webpack.config.${env}.js`);
module.exports = webpackConfig(env)


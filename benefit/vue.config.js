module.exports = {
  // Your configuration options go here
  // For example:
  // publicPath: process.env.NODE_ENV === 'production' ? '/my-project/' : '/'
}
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  configureWebpack: {
    plugins: [
      new MiniCssExtractPlugin()
    ]
  }
}
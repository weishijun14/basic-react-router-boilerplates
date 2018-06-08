const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    publicPath: '/',
    contentBase: './dist', // publicPath 了解
    hot: true,
    historyApiFallback: true // will redirect 404s to /index.html.
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
  output: {
    filename: 'index.[hash].js',
    path: path.resolve(__dirname, 'dist')
  }
});

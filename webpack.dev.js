const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common');
const AddAssetHtmlPlugin = require('add-asset-html-webpack-plugin');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    publicPath: '/',
    contentBase: path.join(__dirname, 'dist'), // publicPath 了解
    hot: true,
    historyApiFallback: true // will redirect 404s to /index.html.
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DllReferencePlugin({
      context: __dirname,
      manifest: require('./dist/static/vendor-manifest.json')
    })
    // new AddAssetHtmlPlugin({
    //   filepath: path.resolve(__dirname, './dist/static/vendor.dll.js'),
    //   includeSourcemap: false
    // })
  ]
});

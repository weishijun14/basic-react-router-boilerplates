const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
  .BundleAnalyzerPlugin;

module.exports = merge(common, {
  mode: 'production',
  devtool: 'source-map',
  plugins: [
    new CleanWebpackPlugin(['dist'], { exclude: './static' }),
    new webpack.DllReferencePlugin({
      context: __dirname,
      manifest: require('./dist/static/vendor-manifest.json')
    }),
    new BundleAnalyzerPlugin()
  ],
  output: {
    filename: '[name].[chunkhash].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/dist/'
  },
  optimization: {
    splitChunks: {
      automaticNameDelimiter: '.',
      chunks: 'all',
      name: true
    }
  }
});

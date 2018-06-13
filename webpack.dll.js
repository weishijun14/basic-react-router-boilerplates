const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: {
    vendor: ['react', '@reach/router', 'mo-js']
  },
  output: {
    path: path.join(__dirname, './dist/static/'),
    filename: '[name].dll.js',
    library: '[name]_library'
  },
  plugins: [
    new CleanWebpackPlugin(['dist/static']),
    new webpack.DllPlugin({
      path: path.join(__dirname, './dist/static/', '[name]-manifest.json'),
      name: '[name]_library',
      context: __dirname
    })
  ],
  optimization: {
    minimize: true
  },
  performance: {
    hints: false
  }
};

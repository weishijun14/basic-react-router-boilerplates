const path = require('path');
const webpack = require('webpack');

module.exports = {
  mode: 'production',
  entry: {
    vendor: ['react', '@reach/router']
  },
  output: {
    path: path.join(__dirname, './dist/static/'),
    filename: '[name].dll.js',
    library: '[name]_library'
  },
  plugins: [
    new webpack.DllPlugin({
      path: path.join(__dirname, './dist/static/', '[name]-manifest.json'),
      name: '[name]_library',
      context: __dirname
    })
  ],
  optimization: {
    minimize: true
  }
};

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: './src/index.js',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true
          }
        }
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          // 'style-loader',
          'css-loader',
          {
            loader: 'sass-loader',
            options: {
              includePaths: ['./src']
            }
          }
        ]
      },
      {
        test: /\.svg$/,
        use: [
          { loader: 'svg-sprite-loader', options: {} },
          {
            loader: 'image-webpack-loader',
            options: {
              svgo: {}
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: './src/index.html'
    })
  ],
  resolve: {
    alias: {
      test: path.resolve(__dirname, 'src/test/')
    }
  }
};

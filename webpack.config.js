const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: {
    index: path.join(__dirname, 'src', 'index.js'),
    singleSpa: path.join(__dirname, 'src', 'index.single-spa.js')
  },
  output: {
    path: path.join(__dirname, 'build'),
    libraryTarget: 'umd',
    filename: '[name].bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: [path.join(__dirname, 'node_modules')],
        loader: 'babel-loader',
      },
    ]
  },
  plugins: [
    new CopyWebpackPlugin([
      {from: path.resolve(__dirname, 'src/index.html')},
      {from: path.resolve(__dirname, 'src/404.html')}
    ]),
    new CleanWebpackPlugin(),
  ]
};
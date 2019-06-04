const config = require('./webpack.config.js');
const webpack = require('webpack');

config.devServer = {
  port: 9005,
  headers: {
    "Access-Control-Allow-Origin": "*",
  }
};

module.exports = config;
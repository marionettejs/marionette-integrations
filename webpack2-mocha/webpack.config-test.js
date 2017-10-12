'use strict';
const webpack = require('webpack');
var nodeExternals = require('webpack-node-externals');
const path = require('path');

module.exports = {
  target: 'node', // webpack should compile node compatible code
  externals: [nodeExternals()], // in order to ignore all modules in node_modules folder
  module: {
    rules: [{
      test: /\.jst$/,
      use: {
        loader: 'underscore-template-loader'
      }
    }]
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      _: 'underscore'
    })
  ],
  resolve: {
    modules: [
      path.join(__dirname, './node_modules'),
      path.join(__dirname, './app')
    ]
  },
  resolveLoader: {
    modules: [
      path.join(__dirname, './node_modules')
    ]
  },
  output: {
    // Bundle absolute resource paths in the source-map,
    // so VSCode can match the source file.
    devtoolModuleFilenameTemplate: '[absolute-resource-path]'
  },
  devtool: 'inline-source-map',
};


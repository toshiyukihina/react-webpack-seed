const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');

const TARGET = process.env.npm_lifecycle_event;

const PATHS = {
  app: path.join(__dirname, 'app'),
  build: path.join(__dirname, 'build')
};

const common = {
  entry: PATHS.app,

  resolve: {
    extensions: ['', '.js', '.jsx']
  },

  output: {
    path: PATHS.build,
    filename: 'bundle.js'
  },

  module: {
    loaders: [{
      test: /\.jsx?$/,
      loaders: ['babel'],
      include: PATHS.app
    }]
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: 'Hello React'
    })
  ]
};

if (TARGET === 'start' || !TARGET) {
  module.exports = merge(common, {
    devTool: 'eval-source-map',
    devServer: {
      historyApiFallback: true,
      hot: true,
      inline: true,
      progress: true,
      stats: 'errors-only',
      host: process.env.HOST,
      port: process.env.PORT
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin()
    ]
  });
}

if (TARGET === 'build') {
  module.exports = merge(common, {
  });
}

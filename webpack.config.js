var autoprefixer = require('autoprefixer');
var nested = require('postcss-nested');
var webpack = require('webpack');
var path = require('path');

const DEBUG = process.env.NODE_ENV !== 'production';

module.exports = {
  context: path.join(__dirname, './src'),
  entry: {
    jsx: './index.js',
    html: './index.html',
    vendor: [
      'react',
      'react-dom',
      'react-redux',
      'react-router',
      'redux'
    ]
  },
  output: {
    path: path.join(__dirname, './build'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.html$/,
        loader: 'file?name=[name].[ext]'
      },
      {
        test: /\.css$/,
        include: /client/,
        loaders: [
          'style-loader',
          `css-loader?${JSON.stringify({
            sourceMap: DEBUG,
            modules: true,
            localIndentName: '[name]__[local]___[hash:base64:3]'
          })}`,
          'postcss-loader'
        ]
      },
      {
        test: /\.scss$/,
        loaders: [
          'style-loader',
          `css-loader?${JSON.stringify({ sourceMap: DEBUG })}`,
          'postcss-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: DEBUG ? {
          plugins: [['react-transform', {
            transforms: [{
              transform: 'react-transform-hmr',
              imports: ['react'],
              locals: ['module']
            }]
          }]]
        } : {}
      }
    ]
  },
  resolve: {
    extensions: ['', '.js']
  },
  postcss: [
    nested(),
    autoprefixer({
      browsers: [ '> 1%', 'last 2 versions' ]
    })
  ],
  plugins: [
    new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.bundle.js'),
    new webpack.DefinePlugin({
      'process.env': { NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'development') }
    })
  ],
  devServer: {
    stats: {
      chunks: false,
      contentBase: './src',
      colors: true,
      hash: false,
      hot: true,
      modules: false,
      timings: false,
      version: false
    }
  }
};

import config from './config';
const webpack = require('webpack');
const isDevelop = (process.env.NODE_ENV === 'develop');

module.exports = {
  watch: isDevelop,

  entry: config.scripts,

  output: {
    filename: '[name].js'
  },

  devtool: isDevelop ? 'cheap-module-inline-source-map' : null,

  debug: true,

  resolve: {
    modulesDirectories: [
      'node_modules'
    ],
    extensions: ['.js', '']
  },

  module: {
    preLoaders: [{
      test: /\.js$/,
      loader: 'source-map-loader'
    }],
    loaders: [{
      test: /\.js$/,
      loader: 'babel',
      exclude: /node_modules/
    }, {
      test: /\.json$/,
      loader: 'json'
    }]
  },

  plugins: [
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      NODE_ENV: JSON.stringify(process.env.NODE_ENV),
      LANG: JSON.stringify('ru')
    })
  ]

};

if (!isDevelop) {
  module.exports.plugins.push(
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        drop_console: true,
        unsafe: true
      }
    })
  );
}

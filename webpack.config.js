const path = require('path');

module.exports = {
  entry: './assets/javascripts/source/index.js',
  output: {
    path: path.resolve(__dirname, 'assets/javascripts/bundled/'),
    filename: 'app.bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['react']
          }
        }
      }
    ]
  }
};

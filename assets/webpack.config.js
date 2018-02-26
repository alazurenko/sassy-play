const path = require('path');

module.exports = {
  entry: './app.js',
  output: {
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      test: /\.scss$/,
      use: [
        { loader: "style-loader" },
        { loader: "css-loader" },
        { loader: "sass-loader",
          // To include other libraries for Sass compilation
          // options: {
          //   includePaths: []
          // }
        }]
    }]
  },
  devServer: {
    contentBase: path.join(__dirname),
    compress: true,
    watchContentBase: true
  }
}
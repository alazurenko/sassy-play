const path = require('path');

module.exports = {
  entry: './app.js',
  output: {
    filename: 'bundle.js'
  },
  module: {
    rules: [{
        test: /\.scss$/,
        loader: "style-loader!css-loader!sass-loader",

        // To include other libraries into sass compilation
        // options: {
        //   includePaths: []
        // }
    }]
  },
  devServer: {
    contentBase: path.join(__dirname),
    compress: true,
    watchContentBase: true
  }
}
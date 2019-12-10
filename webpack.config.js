module.exports = {
  mode: 'development',
  entry: './src/app.js',
  output: {
    path: `${__dirname}/out`,
    filename: 'index.js',
  },
  module: {
    rules: [
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  }
}

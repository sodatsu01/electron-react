module.exports = {
  mode: 'development',
  entry: './src/app.js',
  output: {
    path: `${__dirname}/out`,
    filename: 'index.js',
    publicPath: 'http://localhost:8080/out/',
  },
  module: {
    rules: [
      {
        test: /\.js|\.jsx$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: [
            "@babel/preset-env",
            "@babel/react"
          ]
        }
      },
      {
        test: /\.scss$/,
        loader: 'style-loader!css-loader!sass-loader'
      }
    ]
  }
}

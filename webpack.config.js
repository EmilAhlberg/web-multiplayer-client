const HtmlWebPackPlugin = require('html-webpack-plugin')
const path = require('path')
module.exports = {
  context: __dirname,
  entry: './src/index.ts',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
    publicPath: '/'
  },
  devServer: {
    historyApiFallback: true
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json']
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader'
      },
      {
        test: /\.ts$/,
        use: 'babel-loader'
      },
      {
        test: /\.tsx$/,
        use: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|j?g|svg|gif)?$/,
        use: 'file-loader'
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: path.resolve(__dirname, 'public/index.html'),
      filename: 'index.html'
    })
  ]
}
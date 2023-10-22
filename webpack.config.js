const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: './src/assets/scripts/index.js',
  devtool: 'inline-source-map',
  devServer: {
    static: './dist',   
  },
  optimization: {
    runtimeChunk: 'single',
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
        title: 'Development',
        filename: 'index.html',
        template: 'src/index.html',
    })
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          
          "style-loader",
          {
            loader: "css-loader",
            options: {
              sourceMap: true,
            },
          },
         {
            loader:  "sass-loader",
            options: {
              sourceMap: true,
            },
         },     
         
        ],
      },
    ],   
  },
};
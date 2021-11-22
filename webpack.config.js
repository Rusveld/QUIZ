const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require("copy-webpack-plugin");


module.exports = {
    watch : true,
    watchOptions:{
        aggregateTimeout : 200,
        poll : 1000,
        ignored : /node_modules/
    },
    mode: 'production',
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module:{
    rules: [
        {
          test: /\.m?js$/,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env']
            }
          }
        },
        {
            test: /\.css$/i,
            use: [MiniCssExtractPlugin.loader, "css-loader"],
        }
      ]
    },
    plugins: [
        new MiniCssExtractPlugin({
          attributes: {
            id: "target",
            "data-target": "example",
          },
        }),
        new CopyPlugin({
            patterns: [
              { from: `${path.join(__dirname, 'src', 'assets')}`, to: `${path.join(__dirname, 'dist', 'assets')}` },
            ],
          }),
      ]
};
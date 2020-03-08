const CopyWebpackPlugin = require("copy-webpack-plugin");
const webpack = require("webpack");

module.exports = {
  mode: process.env.NODE_ENV || "development",
  entry: {
    options: "./src/options.js",
    content: "./src/content.js",
    sendMessage: "./src/sendMessage.js",
    receiveMessage: "./src/receiveMessage.js",
    sendMessageMain: "./src/sendMessageMain.js",
    receiveMessageMain: "./src/receiveMessageMain.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.jsx$/,
        use: [
          {
            loader: "babel-loader",
            options: { presets: ["@babel/env"] }
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: [".js"],
  },
  plugins: [
            new CopyWebpackPlugin([{ from: "static", to: "." }]),
            new webpack.ProvidePlugin({
              $: 'jquery',
              jQuery: 'jquery'
            })
          ],
  devtool:
    process.env.NODE_ENV === "production" ? false : "cheap-module-source-map"
};

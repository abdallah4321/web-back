const path = require("path");
const Htmlwebpackplugin = require("html-webpack-plugin");
module.exports = {
  mode: "development",
  entry: path.resolve(__dirname, "src/index.js"),
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.[contenthash].js",
    clean: true,
    assetModuleFilename: "[name][ext]",
  },
  devServer: {
    port: 3000,
    open: true,
    hot: true,
    compress: true,
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /(.png|svg|gif|jpeg|jpg)$/i,
        type: "asset/resource",
      },
    ],
  },
  plugins: [
    new Htmlwebpackplugin({
      title: "Webpack Lab",
      filename: "index.html",
      template: "src/template.html",
    }),
  ],
};

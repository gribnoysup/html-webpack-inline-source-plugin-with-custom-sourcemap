const { SourceMapDevToolPlugin } = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const HtmlWebpackInlineSourcePlugin = require("html-webpack-inline-source-plugin");

module.exports = {
  devtool: false,
  output: {
    publicPath: "/foo/bar"
  },
  plugins: [
    new HtmlWebpackPlugin({ inlineSource: ".(js|css)$" }),
    new HtmlWebpackInlineSourcePlugin(),
    new SourceMapDevToolPlugin({
      filename: "[file].map",
      append: `\n//# sourceMappingURL=https://example.com/[file].map`
    })
  ]
};

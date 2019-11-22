A combination of `SourceMapDevToolPlugin` with custom `sourceMappingURL` and `output.publicPath` in Webpack configuration produces a broken `sourceMappingURL`

To reproduce the issue:

```sh
npm install
npx webpack-cli
```

This will output the bundle to the `./dist` folder.

### Configuration

```js
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
```

### Current Output

```js
//# sourceMappingURL=/foo/bar/https:/example.com/main.js.map
```

### Expected Output

```js
//# sourceMappingURL=https://example.com/main.js.map
```

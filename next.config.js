const withTypescript = require("@zeit/next-typescript");
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");
const withCSS = require("@zeit/next-css");
const webpack = require("webpack");

const config = {
  webpack(config, options) {
    if (options.isServer && options.dev)
      config.plugins.push(new ForkTsCheckerWebpackPlugin());

    config.plugins.push(
      new webpack.DefinePlugin({
        "process.env.DEV": JSON.stringify(options.dev)
      })
    );

    config.module.rules.unshift({
      test: /\.worker\.ts/,
      use: {
        loader: "worker-loader",
        options: { fallback: true, inline: true }
      }
    });

    config.output.globalObject = `this`;

    return config;
  },

  target: "serverless"
};

module.exports = withCSS(withTypescript(config));

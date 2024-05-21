const sass = require("sass");
const sassLoader = require("sass-loader");

module.exports = {
  module: {
    rules: [
      {
        test: /\.(s[ac]ss)$/i, // Matches files with .sass, .scss, or .scss extensions (case-insensitive)
        use: [
          "style-loader", // Injects styles into the DOM during development
          "css-loader", // Converts CSS into CommonJS modules
          {
            loader: "sass-loader",
            options: {
              implementation: sass, // Explicitly use the installed Sass compiler
              sourceMap: true, // Enables source maps for debugging Sass
            },
          },
        ],
      },
    ],
  },
};

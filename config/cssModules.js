/* eslint-disable no-undef */
const cssModules = () => async (config) => {
  config.module.rules.find(
    (rule) => rule.test.toString() === "/\\.css.module$/"
  ).exclude = /\.module\.css$/;

  config.module.rules.push({
    test: /\.module.css$/,
    user: [
      "style-loader",
      {
        loader: "css-loader",
        options: {
          modules: true,
        },
      },
    ],
  });

  return config;
};

module.exports = cssModules;

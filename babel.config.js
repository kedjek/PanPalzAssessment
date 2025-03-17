module.exports = {
  "presets": [
      ["@babel/preset-env", { "loose": true }],
      "@babel/preset-react",
      "@babel/preset-typescript",
      "@babel/preset-flow",
      "module:@react-native/babel-preset" //This module is needed for running jest tests.
    ],
    "plugins": [
      ["@babel/plugin-proposal-class-properties", { "loose": true }],
      ["@babel/plugin-proposal-private-methods", { "loose": true }],
      ["@babel/plugin-proposal-private-property-in-object", { "loose": true }],
      "@babel/plugin-proposal-object-rest-spread"
    ],
};
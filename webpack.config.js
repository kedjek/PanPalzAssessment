const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './index.web.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/i,
        exclude: /node_modules\/(?!(react-native-web|react-native)\/).*/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.(js|jsx|ts|tsx)$/,
        include: [
          path.resolve(__dirname, 'src'),
          path.resolve(__dirname, 'node_modules/react-native'),
          path.resolve(__dirname, 'node_modules/react-native-web'),
          path.resolve(__dirname, 'node_modules/@react-native')
        ],
        use: 'babel-loader',
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        type: 'asset/resource', // This replaces url-loader/file-loader for Webpack 5
      },
      {
        test: /\.svg$/i,
        use: ['@svgr/webpack'], // Keep this for handling SVGs as React components
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
  resolve: {
    extensions: ['.web.tsx', '.web.ts', '.tsx', '.ts', '.web.js', '.js'],
    alias: {
      'react-native$': 'react-native-web',
    },
  },
};
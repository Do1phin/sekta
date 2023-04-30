import * as path from 'path';

const HtmlWebpackPlugin = require('html-webpack-plugin');
const mode = process.env.NODE_ENV || 'production';

const devServerConfig = {
  devServer: {
    historyApiFallback: true,
    host: 'localhost',
    port: 9000,
  },
  devtool: mode === 'production' ? 'hidden-source-map' : 'eval-cheap-module-source-map',
  entry: {
    index: './src/index.tsx',
  },
  output: {
    chunkFilename: './scripts/[name].[contenthash:8].chunk.js',
    clean: true,
    filename:  './scripts/[name].[contenthash:8].js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/app/index.html',
    }),
  ],
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
  mode,
  module: {
    rules: [
      {
        generator: {
          filename: './styles/[name][query][ext]',
        },
        test: /\.s[ac]ss$/i,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        exclude: [/node_modules/],
        test: /\.(ts|tsx|js|jsx)$/i,
        loader: 'babel-loader',
      },
      {
        test: /\.html/i,
        loader: 'html-loader',
      },
    ],
  },
};

export default devServerConfig;

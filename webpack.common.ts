import HtmlWebpackPlugin from 'html-webpack-plugin';
import path from 'path';
import type { Configuration } from 'webpack';
const mode = process.env.NODE_ENV || 'none';

const commonConfig: Configuration = {
  entry: {
    index: './src/index.tsx',
  },
  mode,
  module: {
    rules: [
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'assert/resource',
      },
      {
        exclude: [/node_modules/],
        loader: 'babel-loader',
        test: /\.(ts|tsx|js|jsx)$/i,
      },
      {
        loader: 'html-loader',
        test: /\.html/i,
      },
      {
        generator: {
          filename: 'assets/fonts/[name][ext]',
        },
        test: /\.woff2?$/i,
        type: 'asset/resource',
      },
    ],
  },
  output: {
    assetModuleFilename: 'assets/icons/[name][ext]',
    chunkFilename: './[name].[contenthash:8].chunk.js',
    clean: true,
    filename: './[name].[contenthash:8].js',
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
};

export { commonConfig };

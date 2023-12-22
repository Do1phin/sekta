import HtmlWebpackPlugin from 'html-webpack-plugin';
import * as path from 'path';
import type { Configuration } from 'webpack';
import * as webpack from 'webpack';

const SpeedMeasurePlugin = require('speed-measure-webpack-plugin');

const mode = process.env.NODE_ENV || 'none';
const smp = new SpeedMeasurePlugin();

const commonConfig: Configuration = smp.wrap({
  entry: {
    index: './src/index.tsx',
  },
  mode,
  module: {
    rules: [
      {
        test: /\.(png|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.svg$/,
        type: 'asset/inline',
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
          filename: './assets/fonts/[name][ext]',
        },
        test: /\.woff2?$/i,
        type: 'asset/resource',
      },
    ],
  },
  output: {
    assetModuleFilename: './assets/icons/[name][ext]',
    chunkFilename: './[name].[contenthash:5].chunk.js',
    clean: true,
    filename: './[name].[contenthash:5].js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/app/index.html',
    }),
    new webpack.ProgressPlugin({
      activeModules: true,
      dependencies: true,
      dependenciesCount: 10000,
      entries: true,
      modules: true,
      percentBy: 'entries',
    }),
  ],
  profile: true,
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
});

export { commonConfig };

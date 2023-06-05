import SentryCliPlugin from '@sentry/webpack-plugin';
import * as MiniCssExtractPlugin from 'mini-css-extract-plugin';
import merge from 'webpack-merge';

import { commonConfig } from './webpack.common';

const mode = process.env.NODE_ENV || 'production';

const prodConfig = merge(commonConfig, {
  devtool: mode === 'development' ? 'eval-source-map' : 'nosources-source-map',
  mode,
  module: {
    rules: [
      {
        generator: {
          filename: './styles/[name][query][ext]',
        },
        test: /\.s[ac]ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              modules: {
                auto: true,
                localIdentName: '[hash:base64:5]',
                mode: 'local',
              },
            },
          },
          'postcss-loader',
          'sass-loader',
        ],
      },
    ],
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        common: {
          chunks: 'all',
          minSize: 0,
          test: /[\\/]src[\\/]/,
        },
        vendor: {
          chunks: 'all',
          name: 'node_vendors',
          test: /[\\/]node_modules[\\/]/,
        },
      },
    },
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: './assets/styles/style.css',
    }),
  ],
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
});

if (process.env.SENTRY_RELEASE) {
  prodConfig.plugins.push(
    new SentryCliPlugin({
      authToken: process.env.SENTRY_AUTH_TOKEN,
      ignore: ['node_modules', 'webpack.dev.ts'],
      include: './dist',
      org: process.env.SENTRY_ORG,
      project: process.env.SENTRY_PROJECT,
    }),
  );
}

export default prodConfig;

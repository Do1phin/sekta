import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import merge from 'webpack-merge';

import { commonConfig } from './webpack.common.ts';
const { sentryWebpackPlugin } = import('@sentry/webpack-plugin');
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
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader'],
      },
    ],
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'style.css',
    }),
  ],
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
});

if (process.env.SENTRY_RELEASE) {
  prodConfig.plugins.push(
    sentryWebpackPlugin({
      authToken: process.env.SENTRY_AUTH_TOKEN,
      ignore: ['node_modules', 'webpack.dev.ts'],
      include: './dist',
      org: process.env.SENTRY_ORG,
      project: process.env.SENTRY_PROJECT,
    }),
  );
}

export default prodConfig;

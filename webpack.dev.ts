import type { Configuration } from 'webpack';
import type { Configuration as DevConfiguration } from 'webpack-dev-server';
import merge from 'webpack-merge';

import { commonConfig } from './webpack.common.ts';

const mode = process.env.NODE_ENV || 'development';

const devConfig = merge<Pick<Configuration, DevConfiguration>>(commonConfig, {
  devServer: {
    historyApiFallback: true,
    host: 'localhost',
    port: 9000,
  },
  devtool: mode === 'development' ? 'eval-source-map' : 'nosources-source-map',
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
    ],
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
});

export default devConfig;

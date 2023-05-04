import path from 'path';
import type { Configuration } from 'webpack';
import type { Configuration as DevConfiguration } from 'webpack-dev-server';
import merge from 'webpack-merge';

import { commonConfig } from './webpack.common.ts';

const mode = process.env.NODE_ENV || 'development';

const devConfig = merge<Pick<Configuration, DevConfiguration>>(commonConfig, {
  devServer: {
    historyApiFallback: true,
    host: '0.0.0.0',
    hot: 'only',
    port: 8080,
    static: {
      directory: path.join(__dirname, './'),
      serveIndex: true,
    },
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
  watchOptions: {
    aggregateTimeout: 500,
    poll: 1000,
  },
});

export default devConfig;

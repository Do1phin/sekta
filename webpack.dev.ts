import * as path from 'path';
import type { Configuration } from 'webpack';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import type { Configuration as DevConfiguration } from 'webpack-dev-server';
import merge from 'webpack-merge';

import { commonConfig } from './webpack.common';

const mode = process.env.NODE_ENV || 'development';

const devConfig = merge<Configuration | DevConfiguration>(commonConfig, {
  devServer: {
    historyApiFallback: true,
    host: '0.0.0.0',
    hot: 'only',
    port: 8080,
    proxy: {
      '/api': {
        secure: false,
        target: 'http://localhost:3000',
      },
    },
    server: 'http',
    static: {
      directory: path.join(__dirname, './'),
      serveIndex: true,
    },
  },
  devtool: mode === 'development' ? 'eval-source-map' : 'eval-source-map',
  module: {
    rules: [
      {
        generator: {
          filename: './styles/[name][query][ext]',
        },
        test: /\.(css|sass|scss)$/i,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              esModule: true,
              importLoaders: 1,
              modules: {
                auto: true,
                localIdentName: '[name]__[local]--[hash:base64:5]',
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
    minimize: true,
    runtimeChunk: {
      name: (entrypoint: { name: string }) => {
        return `runtimechunk~${entrypoint.name}`;
      },
    },
    splitChunks: {
      cacheGroups: {
        common: {
          chunks: 'all',
          minSize: 0,
          test: /[\\/]src[\\/]/,
        },
        vendor: {
          chunks: 'all',
          name: (module: any, chunks: any, cacheGroupKey: string) => {
            const moduleFileName = module
              .identifier()
              .split('/')
              .reduceRight((item: string) => {
                return item;
              });

            const allChunksNames = chunks.map((item: any) => item.name).join('~');
            return `${cacheGroupKey}-${allChunksNames}-${moduleFileName}`;
          },
          test: /[\\/]node_modules[\\/]/,
        },
      },
    },
  },
  plugins: [
    new BundleAnalyzerPlugin({
      analyzerMode: 'static',
      defaultSizes: 'gzip',
      openAnalyzer: false,
    }),
  ],
  stats: {
    children: true,
    colors: true,
  },
  target: ['web', 'es5'],
  watchOptions: {
    aggregateTimeout: 500,
    poll: 1000,
  },
});

export default devConfig;

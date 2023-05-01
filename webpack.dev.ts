import * as path from 'path';

const HtmlWebpackPlugin = require('html-webpack-plugin');
const { sentryWebpackPlugin } = require('@sentry/webpack-plugin');
const mode = process.env.NODE_ENV || 'production';

const config = {
  devServer: {
    historyApiFallback: true,
    host: 'localhost',
    port: 9000,
  },
  devtool: mode === 'production' ? 'nosources-source-map' : 'eval-source-map',
  entry: {
    index: './src/index.tsx',
  },
  output: {
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

if (process.env.SENTRY_RELEASE) {
  config.plugins.push(
    sentryWebpackPlugin({
      include: './dist',
      ignore: ['node_modules', 'webpack.dev.ts'],
      org: process.env.SENTRY_ORG,
      project: process.env.SENTRY_PROJECT,
      authToken: process.env.SENTRY_AUTH_TOKEN,
    }),
  );
}

export default config;

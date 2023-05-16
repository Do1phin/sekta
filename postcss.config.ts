export default {
  plugins: [
    ['postcss-preset-env'],
    ['autoprefixer'],
    [
      'css-declaration-sorter',
      {
        map: false,
        order: 'smacss',
      },
    ],
  ],
  syntax: 'postcss-scss',
};

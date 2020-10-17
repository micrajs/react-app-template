module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        modules: false,
        useBuiltIns: 'entry',
      },
    ],
    '@babel/preset-react',
  ],
  plugins: [["babel-plugin-styled-components", { "pure": true, "ssr": true }], 'react-hot-loader/babel'],
};

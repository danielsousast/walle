/* eslint-disable no-undef */
module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    'babel-plugin-styled-components',
    'react-native-reanimated/plugin',
    [
      'babel-plugin-root-import',
      {
        rootPathPrefix: '~',
        rootPathSuffix: 'src',
      },
    ],
  ],
};

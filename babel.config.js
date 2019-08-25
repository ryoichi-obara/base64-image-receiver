// babel.config.js
const presets =  [
  [
    '@babel/preset-env',
    {
      targets: {
        node: '8.10',
      },
    },
  ],
];
module.exports = { presets }

const path = require('path');

const shortcuts = [
  ['@components', 'src/components'],
  ['@theme', 'src/theme'],
  ['@client', 'src/client'],
  ['@state', 'src/state'],
  ['@public', 'public']
];

module.exports = {
  chainWebpack: config => {
    shortcuts.forEach(([alias, dest]) => {
      config.resolve.alias.set(alias, path.resolve(__dirname, dest));
      config.module.rules.delete('svg');
    });
  },
  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.svg$/,
          loader: 'vue-svg-loader'
        }
      ]
    }
  }
};

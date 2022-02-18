const path = require('path');

module.exports = {
  webpack: {
    alias: {
      '@': path.join(path.resolve(__dirname, './src')),
      '@components': path.join(path.resolve(__dirname, './src/components')),
      '@shared': path.join(path.resolve(__dirname, './src/components/shared')),
      '@pages': path.join(path.resolve(__dirname, './src/components/pages')),
    },
  },
};

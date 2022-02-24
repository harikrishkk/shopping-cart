const path = require('path');

module.exports = {
  webpack: {
    alias: {
      '@': path.join(path.resolve(__dirname, './src')),
      '@components': path.join(path.resolve(__dirname, './src/components')),
      '@shared': path.join(path.resolve(__dirname, './src/components/shared')),
      '@pages': path.join(path.resolve(__dirname, './src/components/pages')),
      '@context': path.join(path.resolve(__dirname, './src/context')),
      '@hooks': path.join(path.resolve(__dirname, './src/hooks')),
      '@api': path.join(path.resolve(__dirname, './src/api')),
      '@state': path.join(path.resolve(__dirname, './src/state')),
      '@styled': path.join(
        path.resolve(__dirname, './src/components/styled-components')
      ),
    },
  },
};

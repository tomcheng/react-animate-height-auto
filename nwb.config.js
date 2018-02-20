module.exports = {
  type: 'react-component',
  npm: {
    esModules: true,
    umd: {
      global: 'ReactAnimateHeightAuto',
      externals: {
        react: 'React'
      }
    }
  }
}

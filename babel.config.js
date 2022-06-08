module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/vuelance/'
    : '/',
  presets: [
    '@vue/cli-plugin-babel/preset'
  ]
}

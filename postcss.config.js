const postcssPresetEnv = require('postcss-preset-env')

module.exports = {
  plugins: [
    require('postcss-import'),
    require('postcss-math'),
    require('tailwindcss'),
    postcssPresetEnv({
      stage: 1
    })
  ]
}
const postcssPresetEnv = require('postcss-preset-env')

module.exports = {
  plugins: [
    require('postcss-import'),
    require('postcss-arithmetic'),
    require('tailwindcss'),
    postcssPresetEnv({
      stage: 1
    })
  ]
}

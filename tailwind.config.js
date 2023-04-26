const icons = require('@jcamp/tailwindcss-plugin-icons')
const animate = require('@jcamp/tailwindcss-plugin-animate')

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  theme: {
    extend: {},
  },
  plugins: [icons({ extraCssProperties: { display: 'flex' } }), animate()],
}

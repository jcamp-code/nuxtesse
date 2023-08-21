import type { Config } from 'tailwindcss'

import icons from '@jcamp/tailwindcss-plugin-icons'
import animate from '@jcamp/tailwindcss-plugin-animate'
import plugin from 'tailwindcss/plugin'
import typography from '@tailwindcss/typography'
import forms from '@tailwindcss/forms'
import aspectRatio from '@tailwindcss/aspect-ratio'

export default {
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

  plugins: [
    typography,
    forms,
    aspectRatio,
    icons({ extraCssProperties: { display: 'flex' } }),
    animate({}),
    // allows for use with nuxtlink
    plugin(({ addVariant }) => {
      addVariant('nla', ['&.router-link-active'])
    }),
  ],
} satisfies Config

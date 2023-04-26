import type { Config } from 'tailwindcss'

import icons from '@jcamp/tailwindcss-plugin-icons'
import animate from '@jcamp/tailwindcss-plugin-animate'

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
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    // @ts-expect-error icons and animate are functions
    icons({ extraCssProperties: { display: 'flex' } }),
    // @ts-expect-error icons and animate are functions
    animate(),
  ],
} satisfies Config

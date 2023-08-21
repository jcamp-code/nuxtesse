// formkit.config.js
import { generateClasses } from '@formkit/themes'
import { genesisIcons } from '@formkit/icons'

import myTailwindTheme from './formkit.config.tailwind'

export default {
  icons: {
    ...genesisIcons,
  },
  config: {
    classes: generateClasses(myTailwindTheme),
  },
}

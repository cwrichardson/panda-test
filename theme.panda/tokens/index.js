import { defineTokens } from '@pandacss/dev';

import { animations, easings } from './animations';
import { colors } from './colors';
import { shadows } from './shadows';
import { sizes } from './sizes';
import { zIndex } from './z-index';

export const tokens = defineTokens({
    animations,
    colors,
    easings,
    fonts: {
        body: { value: 'var(--font-merriweather), adobe-garamond-pro, serif' },
        heading: { value: 'var(--font-roboto), azo-sans-web, system-ui, sans-serif' }
    },
    shadows,
    sizes,
    zIndex
})
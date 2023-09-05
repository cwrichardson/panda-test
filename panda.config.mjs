import { defineConfig } from '@pandacss/dev';
import { recipes } from '@/theme.panda/recipes';
import { semanticTokens } from '@/theme.panda/semantic-tokens';
import { tokens } from '@/theme.panda/tokens';

export default defineConfig({
    // Whether to use css reset
    preflight: true,
    
    // Where to look for your css declarations
    include: ["./components/**/*.{js,jsx,ts,tsx}",
      "./pages/**/*.{js,jsx,ts,tsx}",
      "./app/**/*.{js,jsx,ts,tsx}",
      "./theme.panda/**/*.{js,jsx,ts,tsx}"],

    // use default presets
    presets: [
      '@pandacss/dev/presets',
      'pform-reset'
    ],

    // JSX Framework
    jsxFramework: 'react',

    // JSX Factory
    jsxFactory: 'panda',

    // Useful for theme customization
    theme: {
      extend: {
        recipes,
        semanticTokens,
        tokens
      }
    },

    // The output directory for your css system
    outdir: "styled-system",
})
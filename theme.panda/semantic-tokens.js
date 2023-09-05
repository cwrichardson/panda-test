import { defineSemanticTokens } from '@pandacss/dev'

export const semanticTokens = defineSemanticTokens({
    colors: {
        bg: {
            canvas: { value: { base: '{colors.idap.blue}' } },
            default: { value: { base: '{colors.idap.blue}' } },
            subtle: { value: { base: '{colors.idapBlue.700}' } },
            muted: { value: { base: '{colors.idapBlue.900}' } },
            emphasized: {
                value: { base: '{colors.idapBlue.600}' },
            },
            disabled: {
                value: { base: '{colors.idap.accent3}' },
            },
        },
        fg: {
            default: { value: { base: '{colors.white}' } },
            emphasized: {
                value: { base: '{colors.idap.accent1}' },
            },
            muted: { value: { base: '{colors.idapRed.300}' } },
            subtle: { value: { base: '{colors.idapRed.400}' } },
            disabled: {
                value: { base: '{colors.gray.800}' },
            },
        },
        accent: {
            default: { value: { base: '{colors.idap.accent1}' } },
            emphasized: {
                value: { base: '{colors.idapRed.200}' },
            },
            fg: { value: { base: '{colors.idap.accent1}' } },
        },
        
        border: {
            default: { value: { base: '{colors.idapBlue.800}' } },
            emphasized: {
                value: { base: '{colors.idapBlue.700}' },
            },
            outline: { value: { base: '{colors.idapBlue.400}' } },
            accent: { value: { base: '{colors.white}' } },
            disabled: {
                value: { base: '{colors.idapBlue.800}' },
            },
        },
    },
    shadows: {
        accent: {
            value: '0 0 0 1px {colors.border.accent}',
        },
        outline: {
            value: '0 0 0 1px {colors.border.outline}',
        },
        xs: {
            value: {
                base: '0px 1px 2px rgba(23, 23, 23,  0.1)',
                _dark: '0px 1px 2px rgba(0, 0, 0, 1.0)',
            },
        },
        sm: {
            value: {
                base: '0px 2px 4px rgba(23, 23, 23,  0.1)',
                _dark: '0px 2px 4px rgba(0, 0, 0, 1.0)',
            },
        },
        md: {
            value: {
                base: '0px 4px 8px rgba(23, 23, 23,  0.1)',
                _dark: '0px 4px 8px rgba(0, 0, 0, 1.0)',
            },
        },
        lg: {
            value: {
                base: '0px 8px 16px rgba(23, 23, 23,  0.1)',
                _dark: '0px 8px 16px rgba(0, 0, 0, 1.0)',
            },
        },
        xl: {
            value: {
                base: '0px 16px 24px rgba(23, 23, 23,  0.1)',
                _dark: '0px 16px 24px rgba(0, 0, 0, 1.0)',
            },
        },
    },
    radii: {
        l1: { value: '{radii.xs}' },
        l2: { value: '{radii.sm}' },
        l3: { value: '{radii.md}' },
    },
})
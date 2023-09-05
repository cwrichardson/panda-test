import { createAnatomy } from '@ark-ui/react'
import { defineParts, defineRecipe } from '@pandacss/dev'

const anatomy = createAnatomy('button', ['leftIcon', 'rightIcon'])
const parts = defineParts(anatomy.build())

export const buttonRecipe = defineRecipe({
    className: 'button',
    base: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        fontWeight: 600,
        letterSpacing: 'tight',
        paddingX: 6,
        paddingY: 3,
        borderRadius: '13px',
        transitionProperty: 'all',
        _hover: {
          cursor: 'pointer'
        },
/*         '&:is(a, button)': {
            _hover: {
               boxShadow: '6px 6px 0px 0px var(--shadow-color, black)'
            }
        }, */
        ...parts({
            leftIcon: {
                marginRight: 3
            },
            rightIcon: {
                marginLeft: 3
            }
        })
    },
    variants: {
        variant: {
            primary: {
                color: 'white',
                backgroundColor: 'idap.clickable',
                _hover: {
                    backgroundColor: 'idapYellow.600',
                },
                _focusVisible: {
                    zIndex: 1,
/*                     '--shadow': {
                        base: 'colors.idapYellow.50',
                        _dark: 'colors.gray.700',
                    },
                    boxShadow: '0 0 0 4px var(--shadow)', */
                },
            },
            secondary: {
                background: {
                    base: 'white',
                    _dark: 'transparent',
                },
                borderWidth: '1px',
                borderColor: 'border.emphasized',
                color: 'fg.emphasized',
                _hover: {
                    color: 'fg.default',
                    background: 'bg.subtle',
                    _disabled: {
                        borderColor: 'border.default',
                        background: 'bg.surface',
                        color: 'fg.subtle',
                        cursor: 'not-allowed',
                    },
                },
                _selected: {
                    background: 'bg.subtle',
                },
                _focusVisible: {
                    zIndex: 1,
                    '--shadow': {
                        base: 'colors.gray.100',
                        _dark: 'colors.gray.800',
                    },
                    boxShadow: '0 0 0 4px var(--shadow)',
                },
                _disabled: {
                    borderColor: 'border.default',
                    color: 'fg.subtle',
                    cursor: 'not-allowed',
                },
            },
            tertiary: {
                background: 'transparent',
                color: 'fg.emphasized',
                _hover: {
                    color: 'fg.default',
                    _disabled: {
                        borderColor: 'border.default',
                        color: 'fg.subtle',
                        cursor: 'not-allowed',
                    },
                },
                _selected: {
                    background: 'bg.subtle',
                },
                _focusVisible: {
                    zIndex: 1,
                    '--shadow': {
                        base: 'colors.gray.100',
                        _dark: 'colors.gray.800',
                    },
                    boxShadow: '0 0 0 4px var(--shadow)',
                },
                _disabled: {
                    borderColor: 'border.default',
                    color: 'fg.subtle',
                    cursor: 'not-allowed',
                },
            },
            link: {
                background: 'transparent',
                color: 'fg.muted',
                _hover: {
                    color: 'fg.emphasized',
                    textDecoration: 'none'
                },
                _disabled: {
                    color: 'fg.subtle',
                    cursor: 'not-allowed',
                },
                height: 'auto !important',
                px: '0 !important',
            },
        },
        color: {
            main: {
                bg: 'idap.clickable',
                color: 'white'
            },
            black: {
                bg: 'black',
                color: 'white',
                boxShadow: 'none'
            },
            white: {
                bg: 'white',
                color: 'black'
            },
            yellow: {
                bg: 'bg.main',
                color: 'text.main'
            },
            border: {
                bg: 'transparent',
                color: 'text.main',
                borderColor: 'text.headline',
                boxShadowColor: 'text.headline'
            },
            ghost: {
                bg: 'transparent',
                border: 'none',
                shadow: 'none',
                color: 'text.main'
            },
            'ghost.white': {
                bg: 'transparent',
                border: 'none',
                shadow: 'none',
                color: 'white'
            }
        },
        size: {
            sm: {
                paddingY: 3,
                textStyle: 'lg'
            },
            md: {
                textStyle: 'md',
                h: '12',
                minW: '12',
                md: {
                    textStyle: 'lg'
                },
                lg: {
                    textStyle: 'xl'
                }
            },
            lg: {
                textStyle: '2xl'
            },
            xl: {
                fontSize: '2rem',
                fontWeight: 'bold'
            }
        }
    },
    defaultVariants: {
        variant: 'primary',
        color: 'main',
        size: 'md'
    }
})
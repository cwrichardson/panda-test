import { createAnatomy } from '@ark-ui/react';
import { defineParts, defineRecipe } from '@pandacss/dev';

const parts = defineParts(createAnatomy('icon').parts('root', 'icon').build())

export const iconRecipe = defineRecipe({
    className: 'icon',
    description: 'Styled icons',
    base: parts({
        root: {
            alignItems: 'center',
            appearance: 'none',
            display: 'inline-flex',
            justifyContent: 'center',
            outline: 'none',
            position: 'relative',
            transitionProperty: 'base',
            transitionDuration: '100',
            transitionTimingFunction: 'ease-out',
            userSelect: 'none',
            verticalAlign: 'middle',
            whiteSpace: 'nowrap',
        },
        icon: {
            display: 'inline-block',
            alignSelf: 'center',
            flexShrink: '0',
        },
    }),
    defaultVariants: {
        variant: 'primary',
        size: 'md',
    },
    variants: {
        variant: {
            primary: {
                color: 'currentColor',
            },
            logo: parts({
                root: {
                    color: 'currentColor',
                    display: 'flex'
                },
                icon: {
                    height: '100%'
                }
            }),
            button: {
                bgColor: 'brand.clickable.500',
                color: 'white',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                _hover: {
                    bgColor: 'brand.clickable.600',
                    cursor: 'pointer'
                }
            }
        },
        size: {
            xs: parts({
                root: {
                    h: '8',
                    minW: '8',
                    textStyle: 'xs',
                },
                icon: {
                    fontSize: '1.0rem',
                    '--icon-spacing': '0.5rem',
                },
            }),
            sm: parts({
                root: {
                    h: '9',
                    minW: '9',
                    textStyle: 'sm',
                },
                icon: {
                    fontSize: '1.25rem',
                    '--icon-spacing': '0.5rem',
                },
            }),
            md: parts({
                root: {
                    h: '10',
                    minW: '10',
                    textStyle: 'md',
                },
                icon: {
                    fontSize: '1.25rem',
                    '--icon-spacing': '0.5rem',
                },
            }),
            lg: parts({
                root: {
                    h: '11',
                    minW: '11',
                    textStyle: 'md',
                },
                icon: {
                    fontSize: '2.5rem',
                    w: '2.5rem',
                    h: '2.5rem',
                    lineHeight: '1',
                    '--icon-spacing': '0.5rem',
                },
            }),
            xl: parts({
                root: {
                    h: '12',
                    minW: '12',
                    textStyle: 'md',
                },
                icon: {
                    fontSize: '1.25rem',
                    '--icon-spacing': '0.5rem',
                },
            }),
            '2xl': parts({
                root: {
                    h: '15',
                    minW: '15',
                    fontSize: 'lg',
                },
                icon: {
                    fontSize: '1.5rem',
                    '--icon-spacing': '0.75rem',
                },
            }),
        },
    },
})
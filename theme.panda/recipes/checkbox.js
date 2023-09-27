import { checkboxAnatomy } from '@ark-ui/react';
import { defineSlotRecipe } from '@pandacss/dev';

export const checkboxRecipe = defineSlotRecipe({
    className: 'checkbox',
    description: 'A checkbox style',
    slots: checkboxAnatomy.keys(),
    base: {
        root: {
            alignItems: 'center',
            display: 'flex',
        },
        label: {
            color: 'idap.lightText',
        },
        control: {
            alignItems: 'center',
            borderColor: 'border',
            borderWidth: '1px',
            color: 'idap.accent2',
            cursor: 'pointer',
            display: 'flex',
            justifyContent: 'center',
            transitionDuration: 'normal',
            transitionProperty: 'border-color, background',
            transitionTimingFunction: 'default',
            _hover: {
                borderColor: 'idap.clickable',
            },
            _checked: {
                backgroundColor: 'idapBlue',
                borderColor: 'idap.accent2'
            },
        },
    },
    defaultVariants: {
        size: 'md',
    },
    variants: {
        size: {
            sm: {
                root: {
                    gap: '2',
                },
                control: {
                    width: '4',
                    height: '4',
                    borderRadius: 'l1',
                    '& svg': {
                        width: '3',
                        height: '3',
                    },
                },
                label: {
                    textStyle: 'sm',
                },
            },
            md: {
                root: {
                    gap: '3',
                },
                control: {
                    width: '5',
                    height: '5',
                    borderRadius: 'l1',
                    '& svg': {
                        width: '3.5',
                        height: '3.5',
                    },
                },
                label: {
                    textStyle: 'md',
                },
            },
            lg: {
                root: {
                    gap: '4',
                },
                control: {
                    width: '6',
                    height: '6',
                    borderRadius: 'l1',
                    '& svg': {
                        width: '4',
                        height: '4',
                    },
                },
                label: {
                    textStyle: 'lg',
                },
            },
        },
    },
})
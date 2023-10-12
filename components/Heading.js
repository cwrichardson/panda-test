import { cva } from '@/styled-system/css';
import { panda } from '@/styled-system/jsx';

const heading = cva({
    base: {
        lineHeight: 1.2,
        maxW: '60ch',
        overflow: 'hidden'
    },
    variants: {
        type: {
            postHeading: {
                mb: '12',
                textStyle: '6xl',
                textAlign: 'center',
                md: {
                    textStyle: '7xl',
                    lineHeight: '1em',
                    textAlign: 'left'
                },
                lg: {
                    textStyle: '8xl'
                }
            },
            h1: { 
                textStyle: '3xl',
                sm: { textStyle: '5xl', py: '4' },
                lg: {
                    textStyle: '7xl',
                    lineHeight: 1
                },
                _heading: {
                    textStyle: '3xl',
                    textDecoration: 'underline',
                    textDecorationColor: 'brand.accent.800',
                    color: 'white'
                }
            },
            h2: { 
                textStyle: '3xl'
            },
            h3: { 
                textStyle: '2xl'
            },
            h4: { 
                textStyle: 'xl'
            },
            h5: { 
                textStyle: 'xl'
            },
            h6: { 
                textStyle: 'xl'
            }
        }
    }
})

export const Heading = (props) => {
    const { as = 'h2', ...rest } = props;
    const { type = as, ...otherProps } = rest;

    const Component = panda(as, heading);

    return <Component type={type} {...otherProps} />
}
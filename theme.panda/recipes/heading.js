import { cva } from '../../styled-system/css';

export const heading = cva({
    base: {
        lineHeight: 1.2
    },
    variants: {
        type: {
            // h1: { 
            //     fontSize: '3xl',
            //     sm: { fontSize: '5xl'},
            //     lg: {
            //         fontSize: '7xl',
            //         lineHeight: 1
            //     }
            // },
            h1: {
                fontSize: '5xl',
            },
            h2: { 
                fontSize: '3xl'
            },
            h3: { 
                fontSize: '2xl'
            },
            h4: { 
                fontSize: 'xl'
            },
            h5: { 
                fontSize: 'xl'
            },
            h6: { 
                fontSize: 'xl'
            }
        }
    }
})
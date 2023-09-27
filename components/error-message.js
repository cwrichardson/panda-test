import { panda } from 'styled-system/jsx';

export const FormErrorMessage = panda('div', {
    base: {
        display: 'flex',
        color: 'red.300',
        mt: '2',
        fontSize: 'sm',
        lineHeight: 'normal'
    }
})
import { sva } from '@/styled-system/css';

export const toast = sva({
  slots: ['root', 'title', 'description'],
  base: {
    root: {
      background: 'blue',
      color: 'white',
      p: '4',
      _success: {
        background: 'black'
      }
    }
  }
})
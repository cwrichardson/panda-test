import { defineGlobalStyles } from '@pandacss/dev';

export const globalCss = defineGlobalStyles({
      'html, #__next': {
        color: {
          // base: 'idap.accent3',
          // _dark: 'idap.lightText'
          base: 'idap.lightText'
        },
        height: '100%'
      },
      '#__next': {
        display: 'flex',
        direction: 'column'
      },
      body: {
        // bg: 'white',
        // _dark: { bg: 'idap.blue' }
        bg: 'idap.blue',
        fontFamily: 'body'
      },
      '.body': {
        // todo check how to do this without breaking the site
        // height: '100%', // Push footer to bottom
        overflowY: 'scroll' // Always show scrollbar to avoid flickering
      },
      html: {
        scrollBehavior: 'smooth'
      },
      'html, body': {
        // fontSize: 'sm',
        // background: props.colorMode === 'dark' ? '#36353a' : '#f4f4f4',
        // color: props.colorMode === 'dark' ? 'white' : 'gray.600',
        boxSizing: 'border-box',
        margin: 0,
        padding: 0
      },
      'h1, h2, h3, h4, h5, h6': {
        fontFamily: 'heading',
        '.highlight': {
          color: 'idap.highlight'
        }
      },
      a: {
        color: 'idap.clickable',
        textDecoration: 'none',
        fontSize: 'xl'
      },
      'p, li': { fontSize: 'xl' }
})
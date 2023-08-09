import { Roboto, Merriweather } from 'next/font/google';

export const FontRoboto = Roboto({
  subsets: ['latin'],
  display: 'swap',
  weight: [ '700' ],
  variable: '--font-roboto'
});

export const FontMerriweather = Merriweather({
  subsets: ['latin'],
  display: 'swap',
  weight: [ '400', '700'],
  variable: '--font-merriweather'
});
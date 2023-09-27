import { FontMerriweather, FontRoboto } from '@/styles/font';
import { css, cx } from 'styled-system/css';
import './global.css';
import { Flex } from 'styled-system/jsx';

export default function RootLayout({ children }) {
    return (
        <html
          lang='en'
          className={cx(
            `${FontMerriweather.variable} ${FontRoboto.variable}`,
            css({ overflowX: 'hidden' })
          )}>
            <body>
                <Flex direction={'column'}>
                    <Flex
                      minH={'100vh'}
                      w={'100vw'}
                      direction={'column'}
                      justify={'space-between'}>
                          {children}
                    </Flex>
                </Flex>
            </body>
        </html>
    )
}
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
            <body className={css({
                background: 'idap.blue'
            })}>
                <Flex direction={'column'} color={'idap.lightText'}
                  className='outer-wrapper'>
                    <Flex bg={'url("/images/bg1.png")'}
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
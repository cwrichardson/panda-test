
'use client';

import { css } from '@/styled-system/css';
import { Box, Flex, panda } from '@/styled-system/jsx';
import { useToast } from '@ark-ui/react';

const HomeLayout = () => {
    const toast = useToast();
    return (
      <>
        <Flex direction={'column'} minH={'100vh'} pos='relative'>
          <Box as="main" flex={'1'}>
            <panda.button className={css({
              p: '4',
              background: 'orange',
              color: 'white'
            })} onClick={() => {
              toast.create({
                title: 'Hello',
                type: 'success',
                description: "I'm a toast",
                placement: 'bottom-end',
                removeDelay: 0,
              })
            }}>Open a Toast</panda.button>
          </Box>
        </Flex>
      </>
    );
};

export default HomeLayout;
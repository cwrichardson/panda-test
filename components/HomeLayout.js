
import ModularContent from '@/components/ModularContent';
import { Box, Flex } from '@/styled-system/jsx';

const HomeLayout = ({ page }) => {
  const { aboveTheFold } = page;

  // add a __typename to aboveTheFold
  if (aboveTheFold && aboveTheFold.length > 0) {
    aboveTheFold[0].__typename = 'HeroRecord';
  }

  return (
    <>
      <Flex direction={'column'} minH={'100vh'} pos='relative'>
        <Box as="main" flex={'1'}>
          {aboveTheFold && (
            <Flex>
              <ModularContent blocks={aboveTheFold} />
            </Flex>
          )}
        </Box>
      </Flex>
    </>
  );
};

export default HomeLayout;
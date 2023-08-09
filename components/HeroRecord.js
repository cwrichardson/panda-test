import TextRecord from '@/components/TextRecord';
import { Box, Flex, Grid, GridItem } from '@/styled-system/jsx';
import { Heading } from './Heading';


const HeroRecord = ({ content }) => {
  return (
    <Grid
      minW={'full'}
      position={'relative'}
      data-test="hero-record"
      className='grid-wrapper'
    >
      <GridItem colStart={'1'} rowStart={'1'} className='grid-content' display={'flex'} alignItems={'center'}>
        <Flex
          direction="column"
          justifyContent="center"
          maxW={'wrapper'}
          mx="auto"
          w="full"
        >
          <Box w={{ base: "100%", md: "50%" }}>
            {/* <Heading as={'h1'} fontSize={'5xl'}>Foo</Heading> */}
            <TextRecord structuredText={content} />
          </Box>
        </Flex>
      </GridItem>
    </Grid>
  );
};

export default HeroRecord;

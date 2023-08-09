import { isHeading } from 'datocms-structured-text-utils';
import { StructuredText, renderRule } from 'react-datocms';
import { Box } from '@/styled-system/jsx';
import { Heading } from '@/components/Heading';

const TextRecord = ({ structuredText }) => {

    return (
        <Box>
            <StructuredText
              data={structuredText}
              customNodeRules={[
                renderRule(isHeading, ({ node, children, key }) => {
                    // const sizes = [ null, { base: '5xl', md: '7xl' }, '3xl', '2xl', 'xl', 'xl' ];
                    // const sizes = [ null, '5xl', '3xl', '2xl', 'xl', 'xl' ];
                    return (
                        <Heading
                          key={key}
                          as={`h${node.level}`}
                          // fontSize={sizes[node.level]}
                          pt={6}
                          pb={4}
                        >
                            {children}
                        </Heading>
                    );
                }),
              ]}
            />
        </Box>
    );
};


export default TextRecord;

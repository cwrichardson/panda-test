import { Heading } from '@/components/Heading';

export default async function Page() {

    return (
        <>
            <Heading>This is a default heading</Heading>
            <Heading as='h3'>This is an h3</Heading>
            <Heading as='h1'>This is an h1</Heading>
            <Heading as='h1' py={'6'}>This is an h1 with padding</Heading>
            <Heading as='h1' textStyle={{
                lg: '6xl',
                xl: '7xl'
            }}>This is an h1 with textStyle</Heading>
            <Heading as='h1' type='postHeading' py={'6'}>This is an postHeading with padding</Heading>
            <Heading as='h1' type='postHeading' textStyle={{
                lg: '6xl',
                xl: '7xl'
            }}>This is an postHeading with textStyle</Heading>
        </>
    )
}
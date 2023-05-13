import {
    Button,
    Flex,
    Heading,
    Image,
    Stack,
    Text,
    Container,
    useBreakpointValue,
} from '@chakra-ui/react';
import Link from 'next/link';
import bookshelfColors from '@/styles/colors';
import PromoCards from '@/components/PromoCards';
import CardSlider from '@/components/CardSlider';

const Landing = () => {
    return (
        <>    
            <Stack minH={'640px'} direction={{ base: 'column', md: 'row' }}>
                <Flex flex={1} align={'center'} justify={'space-between'}>
                    <Stack spacing={{ base: 8, md: 10 }} w={'full'} maxW={'lg'}>
                        <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
                            <Text as={'span'} position={'relative'}>
                                Favorite online
                                <br />
                                bookstore in HCMC
                            </Text>
                        </Heading>
                        <Text fontSize={{ base: 'md', lg: 'lg' }}>
                            Let's take a trip through the Bookshelf together. Immerse yourself in the amazing world of stories.
                        </Text>
                        <Stack direction={{ base: 'column', md: 'row' }} spacing={4}>
                            <Button
                                rounded={'12px'}
                                bg={bookshelfColors.primary.main}
                                color={'white'}
                                _hover={{
                                    bg: bookshelfColors.primary.dark,
                                }}
                                size={'lg'}
                                fontWeight={'normal'}
                                px={6}
                                py={3}
                                rightIcon={
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M3 12H21" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M16 7L21 12L16 17" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                }
                            >
                                Explore Bookshelf
                            </Button>
                        </Stack>
                    </Stack>
                    <Flex
                        flex={1}
                        justify={'end'}
                        align={'center'}
                        position={'relative'}
                        w={'full'}
                    >
                        <Image
                            alt={'Home Image'}
                            objectFit={'cover'}
                            src={'./home-illustration.svg'}
                        />
                    </Flex>
                </Flex>
            </Stack>
            <PromoCards />
            <CardSlider />
        </>
    );
}
export default Landing;
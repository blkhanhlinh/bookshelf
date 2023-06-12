import {
	Badge,
	Button,
	Flex,
	Heading,
	Image,
	Stack,
	Text,
	Container,
	useBreakpointValue,
	SimpleGrid,
} from '@chakra-ui/react'
import Link from 'next/link'
import bookshelfColors from '@/styles/colors'

const PromoCards = () => {
	return (
		<SimpleGrid columns={{ sm: 1, md: 3 }} marginBottom={'80px'}>
			<Stack
				borderRadius={'2xl'}
				w={{ sm: '100%', md: '394px' }}
				h={{ sm: '100%', md: '272px' }}
				direction={{ base: 'column', md: 'row' }}
				bg={bookshelfColors.primary.main}
				paddingLeft={6}
				paddingRight={3}
				paddingY={6}
			>
				<Stack
					flex={1}
					direction='column'
					justifyContent='space-between'
					alignItems='flex-start'
					color={bookshelfColors.white}
				>
					<Heading fontSize={'20px'}>Book of the week</Heading>
					<Heading fontSize={'2xl'}>And Then There Was None</Heading>
					<Text>Agatha Christie</Text>
					<Button
						bgColor={bookshelfColors.secondary.main}
						paddingX={'40px'}
						rounded={'xl'}
						_hover={{ bgColor: bookshelfColors.secondary.dark }}
					>
						<Link href='/book/and-then-there-was-none'>
							Buy now!
						</Link>
					</Button>
				</Stack>
				<Flex>
					<Image boxSize='100%' src='./book-of-the-week.svg' />
				</Flex>
			</Stack>
			<Stack
				borderRadius={'2xl'}
				w={{ sm: '100%', md: '394px' }}
				h={{ sm: '100%', md: '272px' }}
				direction={{ base: 'column', md: 'row' }}
				bg={bookshelfColors.secondary.light}
			>
				<Stack
					flex={1}
					direction='column'
					justifyContent='space-between'
					alignItems='flex-start'
					color={bookshelfColors.info}
				>
					<Heading
						fontSize={'2xl'}
						paddingLeft={6}
						paddingRight={3}
						paddingTop={6}
					>
						<Text
							as={'span'}
							color={bookshelfColors.secondary.main}
						>
							20%{' '}
						</Text>
						discount on the promo code
						<Text
							fontSize={'3xl'}
							color={bookshelfColors.secondary.main}
						>
							“WETRIEDSE104”
						</Text>
					</Heading>
					<Flex>
						<Image boxSize='100%' src='./promo.svg' />
					</Flex>
				</Stack>
			</Stack>
			<Stack
				borderRadius={'2xl'}
				w={{ sm: '100%', md: '394px' }}
				h={{ sm: '100%', md: '272px' }}
				direction='column'
				bg={bookshelfColors.primary.main}
				p={6}
			>
				<Heading fontSize={'2xl'} color={bookshelfColors.white}>
					<Text as={'span'} color={bookshelfColors.secondary.light}>
						30%{' '}
					</Text>
					discount on all books from{' '}
					<Text as={'span'} color={bookshelfColors.secondary.light}>
						June 19 to June 25
					</Text>
				</Heading>
				<Flex>
					<Image boxSize='100%' src='./discount.svg' />
				</Flex>
			</Stack>
		</SimpleGrid>
	)
}
export default PromoCards

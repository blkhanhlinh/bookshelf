import { CardSlider } from '@/components/HomeSlider'
import { Box, Flex, HStack, Heading, Text } from '@chakra-ui/react'
import Link from 'next/link'

const SectionHeader = ({ children }) => {
	return (
		<Text fontWeight={'700'} fontSize={'3xl'}>
			{children}
		</Text>
	)
}

const links = [
	{
		title: 'Best Sellers',
		link: '/all-categories/best-sellers',
	},
	{
		title: 'New Arrivals',
		link: '/all-categories/new-arrivals',
	},
]

const Section = ({ books }) => {
	return (
		<>
			{links.map(link => {
				const categoryBooks = books.filter(
					book => book.category === link.title
				)

				return (
					<Box key={link.title} paddingBottom={'104px'}>
						<Flex
							justifyContent={'space-between'}
							paddingBottom={8}
						>
							<SectionHeader>{link.title}</SectionHeader>
							<Link href={link.link}>
								<HStack alignItems={'center'}>
									<Text>See all</Text>
									<Box>
										<svg
											width='32'
											height='32'
											viewBox='0 0 32 32'
											fill='none'
											xmlns='http://www.w3.org/2000/svg'
										>
											<path
												d='M4 16H28'
												stroke='#264653'
												strokeWidth='2'
												strokeLinecap='round'
												strokeLinejoin='round'
											/>
											<path
												d='M21.3333 9.33331L28 16L21.3333 22.6666'
												stroke='#264653'
												strokeWidth='2'
												strokeLinecap='round'
												strokeLinejoin='round'
											/>
										</svg>
									</Box>
								</HStack>
							</Link>
						</Flex>
						<CardSlider books={categoryBooks} />
					</Box>
				)
			})}
		</>
	)
}

export default Section

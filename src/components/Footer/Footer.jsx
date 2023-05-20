import bookshelfColors from '@/styles/colors'
import {
	Box,
	Container,
	Divider,
	Flex,
	HStack,
	Link,
	SimpleGrid,
	Stack,
	Text,
} from '@chakra-ui/react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { categories, services, account } from '@/constant/route'

const ListHeader = ({ children }) => {
	return (
		<Text fontWeight={'600'} fontSize={'lg'}>
			{children}
		</Text>
	)
}

const MapIcon = () => {
	return (
		<svg
			width='24'
			height='24'
			viewBox='0 0 24 24'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
		>
			<path
				d='M12 11C13.1046 11 14 10.1046 14 9C14 7.89543 13.1046 7 12 7C10.8954 7 10 7.89543 10 9C10 10.1046 10.8954 11 12 11Z'
				stroke='white'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
			<path
				d='M12 21C12 21 19 16.1538 19 9.92308C19 8.08696 18.2625 6.32605 16.9497 5.02772C15.637 3.72939 13.8565 3 12 3C10.1435 3 8.36301 3.72939 7.05025 5.02772C5.7375 6.32605 5 8.08696 5 9.92308C5 16.1538 12 21 12 21Z'
				stroke='white'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
		</svg>
	)
}

const MailIcon = () => {
	return (
		<svg
			width='24'
			height='24'
			viewBox='0 0 24 24'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
		>
			<path
				d='M20 5H4C3.44772 5 3 5.44772 3 6V18C3 18.5523 3.44772 19 4 19H20C20.5523 19 21 18.5523 21 18V6C21 5.44772 20.5523 5 20 5Z'
				stroke='white'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
			<path
				d='M3 6L12.2571 13L21 6'
				stroke='white'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
		</svg>
	)
}

const InfoIcon = () => {
	return (
		<svg
			width='24'
			height='24'
			viewBox='0 0 24 24'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
		>
			<path
				d='M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z'
				stroke='white'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
			<path
				d='M12 11V16'
				stroke='white'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
			<path
				d='M11.9502 8H12.0502V8.1H11.9502V8Z'
				stroke='white'
				strokeWidth='2'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
		</svg>
	)
}

const Footer = () => {
	return (
		<Box
			bg={bookshelfColors.primary.dark}
			color={bookshelfColors.white}
			as={'footer'}
			borderRadius='16px 16px 0px 0px'
		>
			<Container
				maxWidth='1230px'
				paddingX={0}
				paddingTop={12}
				justifyContent={'space-between'}
				paddingBottom={12}
			>
				<SimpleGrid
					templateColumns={{ sm: '1fr 1fr', md: '2fr 1fr 1fr 1fr' }}
					spacing={12}
				>
					<Stack spacing={6}>
						<Box>
							<Image
								src='/Logo-white.svg'
								width='173'
								height='40'
								alt='logo'
							/>
						</Box>
						<Text fontSize={'medium-bold'}>
							Han Thuyen Street, Quarter 6, Linh Trung Ward, Thu
							Duc District, Ho Chi Minh City.
						</Text>
						<Text fontSize={'medium-bold'}>
							Discover your next favorite book at Bookshelf, the
							ultimate online bookstore. Browse our extensive
							selection, discover exclusive deals, and immerse
							yourself in the world of literature. Happy reading!
						</Text>
					</Stack>
					<Stack spacing={2} align={'flex-start'}>
						<ListHeader>Services</ListHeader>
						{services.map((service, index) => {
							return (
								<Link key={index} href={service.link}>{service.title}</Link>
							)
						})}
					</Stack>
					<Stack spacing={2} align={'flex-start'}>
						<ListHeader>Product Categories</ListHeader>
						{categories.map((category, index) => {
							return (
								<Link key={index} href={category.link}>
									{category.title}
								</Link>
							)
						})}
					</Stack>
					<Stack spacing={2} align={'flex-start'}>
						<ListHeader>My Account</ListHeader>
						<HStack>
							<Link href='/login'>Login</Link> <span> / </span>
							<Link href='/signup' as={'span'}>
								Signup
							</Link>
						</HStack>
						{account.map((account, index) => {
							return (
								<Link key={index} href={account.link}>{account.title}</Link>
							)
						})}
					</Stack>
					<Stack gridColumnStart={2} gridColumnEnd={5}>
						<ListHeader>Contact</ListHeader>
						<SimpleGrid
							templateColumns={{ md: '1fr 1fr 1fr' }}
							spacing={12}
						>
							<Box display={'flex'}>
								<MapIcon />
								<Box as='span' marginLeft={1}>
									Thu Duc, Ho Chi Minh city
								</Box>
							</Box>
							<Box display={'flex'}>
								<MailIcon />
								<Box as='span' marginLeft={1}>
									cs.bookshelf@gmail.com
								</Box>
							</Box>
							<Box display={'flex'}>
								<InfoIcon />
								<Box as='span' marginLeft={1}>
									We Tried Co.
								</Box>
							</Box>
						</SimpleGrid>
					</Stack>
				</SimpleGrid>
			</Container>
			<Box
				borderTopColor={bookshelfColors.white}
				borderTopWidth={1}
				borderTopStyle={'solid'}
			>
				<Container
					maxWidth='1230px'
					textAlign={{ base: 'center', md: 'center' }}
				>
					<Text paddingY={3} className='text-regular'>
						© 2023 Bookshelf. All Rights Reserved.
					</Text>
				</Container>
			</Box>
		</Box>
	)
}

export default Footer

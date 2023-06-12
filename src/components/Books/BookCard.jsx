import {
	Card,
	Button,
	Flex,
	Heading,
	Image,
	HStack,
	Stack,
	Text,
	Box,
	Link,
	Center,
} from '@chakra-ui/react'
import React from 'react'
import bookshelfColors from '@/styles/colors'
import { BsStar, BsStarFill, BsStarHalf } from 'react-icons/bs'

const Rating = ({ rating, numReviews }) => {
	return (
		<Flex alignItems='center'>
			{Array(5)
				.fill('')
				.map((_, i) => {
					const roundedRating = Math.round(rating * 2) / 2
					if (roundedRating - i >= 1) {
						return (
							<BsStarFill
								key={i}
								style={{ marginLeft: '1' }}
								color={
									i < rating
										? bookshelfColors.state.warning
										: bookshelfColors.grey
								}
							/>
						)
					}
					if (roundedRating - i === 0.5) {
						return (
							<BsStarHalf
								key={i}
								style={{ marginLeft: '1' }}
								color={bookshelfColors.state.warning}
							/>
						)
					}
					return <BsStar key={i} style={{ marginLeft: '1' }} />
				})}
			<Box
				flex={1}
				as='span'
				ml='2'
				color={bookshelfColors.info}
				fontSize='sm'
			>
				&#40;{rating === 0 ? 0 : numReviews}&#41;
			</Box>
		</Flex>
	)
}

const BookCard = ({ book }) => {
	return (
		<Card
			maxW={'sm'}
			w='210px'
			h='350px'
			borderRadius='xl'
			border={`1px solid ${bookshelfColors.primary.main}`}
			flex={1}
			direction={'column'}
			justifyContent={'space-between'}
			id={book.id}
			p={4}
		>
			<Box>
				<Center>
					<Image
						src={book.cover}
						alt={book.title}
						height={'172px'}
						marginBottom={6}
					/>
				</Center>
			</Box>
			<Stack>
				<Text className='text-regular-regular pb-1'>{book.title}</Text>
				<Text className='text-large-bold font-bold' textColor={bookshelfColors.primary.main}>
					{book.unit_price} ₫
				</Text>
			</Stack>
			<HStack py={4}>
				<Rating
					rating={5} // temporarily
					numReviews={1000} // temporarily
				/>
			</HStack>
		</Card>
	)
}
export default BookCard

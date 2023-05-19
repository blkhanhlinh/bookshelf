import {
	Card,
	CardHeader,
	CardBody,
	CardContainer,
	Button,
	Flex,
	Heading,
	Image,
	Stack,
	Text,
	Container,
	useBreakpointValue,
} from '@chakra-ui/react'
import React from 'react'
import bookhelfColors from '@/styles/colors'
// import { FaStar } from 'react-icons/fa'
// import StarRating from 'react-star-rating-component'


const BookCard = ({ book }) => {
	return (
		<Card
			w='290px'
			h='458px'
			borderRadius='2xl'
			border={`1px solid ${bookhelfColors.primary.main}`}
		>
			<CardBody id={book.id} color={bookhelfColors.info}>
				<Flex flex={1}>
					<Image src={book.cover} alt={book.title} />
				</Flex>
				<Stack>
					<Text className='text-medium-regular'>{book.title}</Text>
					<Heading className='text-xl'>{book.price}</Heading>
				</Stack>
			</CardBody>
		</Card>
	)
}
export default BookCard

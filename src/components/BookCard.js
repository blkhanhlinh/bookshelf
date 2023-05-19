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
	Box,
	Link,
	Center,
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
				<CardBody id={book.id} color={bookhelfColors.info} padding={6}>
					<Box>
						<Center>
							<Image src={book.cover} alt={book.title} height={'186px'} marginBottom={6}/>
						</Center>
					</Box>
					<Stack>
						<Text className='text-medium-regular pb-1'>{book.title}</Text>
						<Heading size={'md'} textColor={bookhelfColors.primary.main}>{book.unit_price} ₫</Heading>
					</Stack>
				</CardBody>
			</Card>
	)
}
export default BookCard

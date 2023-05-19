import { Heading, SimpleGrid, Stack } from '@chakra-ui/react'
import Card from './Card'
import axios from 'axios'
import React from 'react'

const CardSlider = ({ books }) => {
	console.log(books)

	return (
		<>
			<Stack>
				<SimpleGrid columns={{ sm: 1, md: 4 }}>
					{books && books.length !== 0 ? (
						books.map(book => <Card book={book} />)
					) : (
						<p>No books found</p>
				)}
				</SimpleGrid>
			</Stack>
		</>
	)
}

export default CardSlider

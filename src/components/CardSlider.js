'use client'
import { Heading, SimpleGrid, Stack } from '@chakra-ui/react'
import axios from 'axios'
import React from 'react'
import BookCard from './BookCard'

const CardSlider = ({ books }) => {
	return (
		<Stack>
			<SimpleGrid columns={{ sm: 1, md: 4 }} spacing={10}>
				{books.map((book) => (
					<BookCard key={book.id} book={book} />
				))}
			</SimpleGrid>
		</Stack>
	)
}

export default CardSlider

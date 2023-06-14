import { Box, Button, Flex, SimpleGrid } from '@chakra-ui/react'
import { Children, isValidElement, useEffect, useMemo, useState } from 'react'
import { BookCard } from '../HomeSlider'
import NoResult from '../NoResult'

const Grid = props => {
	const columns = useMemo(() => {
		const count = Children.toArray(props.children).filter(
			isValidElement
		).length
		return {
			base: Math.min(1, count),
			sm: Math.min(2, count),
			xl: Math.min(3, count),
		}
	}, [props.children])

	return (
		<SimpleGrid
			columns={columns}
			columnGap={{
				base: '4',
				md: '6',
			}}
			rowGap={{
				base: '8',
				md: '10',
			}}
			{...props}
		/>
	)
}

const BookGrid = ({ books }) => {
	const [currentPage, setCurrentPage] = useState(1)
	const booksPerPage = 9

	if (!books || books.length === 0) {
		return <NoResult />
	}

	const indexOfLastBook = currentPage * booksPerPage
	const indexOfFirstBook = indexOfLastBook - booksPerPage
	const currentBooks = books.slice(indexOfFirstBook, indexOfLastBook)

	const handlePageChange = pageNumber => {
		setCurrentPage(pageNumber)
	}

	const totalPages = Math.ceil(books.length / booksPerPage)

	return (
		<Box width={'fit-content'}>
			<Grid columnGap={6}>
				{currentBooks.map(book => (
					<BookCard key={book.id} book={book} isHomepage={false} />
				))}
			</Grid>
			<Flex justify='center' mt={8}>
				{Array.from({ length: totalPages }, (_, i) => i + 1).map(
					pageNumber => (
						<Button
							key={pageNumber}
							variant={
								currentPage === pageNumber ? 'solid' : 'outline'
							}
							colorScheme='teal'
							mx={1}
							onClick={() => handlePageChange(pageNumber)}
						>
							{pageNumber}
						</Button>
					)
				)}
			</Flex>
		</Box>
	)
}

export default BookGrid
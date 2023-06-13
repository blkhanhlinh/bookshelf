import { Box, SimpleGrid } from '@chakra-ui/react'
import { Children, isValidElement, useMemo } from 'react'
import { BookCard } from '../HomeSlider'
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
	return (
		<Box
			width={"fit-content"}
			py={{
				base: '6',
				lg: '8',
			}}
		>
			<Grid columnGap={6}>
				{books.map(book => (
					<BookCard key={book.id} book={book} isHomepage={false}/>
				))}
			</Grid>
		</Box>
	)
}

export default BookGrid

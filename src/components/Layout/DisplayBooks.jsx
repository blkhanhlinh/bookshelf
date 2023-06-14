import { useRouter } from 'next/router'
import { BookGrid } from '../Books'
import { FilterSidebar } from '../Filter'
import { Box, Flex, Spacer, Stack, Text } from '@chakra-ui/react'
import bookshelfColors from '@/styles/colors'

const DisplayBooks = ({ books, isSearch = false }) => {
	const router = useRouter()
	const { searchQuery } = router.query

	return (
		<Flex minW='max-content' marginBottom={8}>
			<FilterSidebar books={books} />
			<Spacer />
			<Stack direction='column' py={{ base: '6', lg: '8' }}>
				{isSearch && (
					<Box className='w-full mb-6'>
						<Box
							bg={bookshelfColors.primary.light}
							borderColor={bookshelfColors.primary.main}
							borderWidth={1}
							p={6}
							rounded={4}
						>
							Results for "{searchQuery}" query here &#129303;
						</Box>
					</Box>
				)}
				<BookGrid books={books} />
			</Stack>
		</Flex>
	)
}

export default DisplayBooks

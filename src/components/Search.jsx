import { useRouter } from 'next/router'
import bookshelfColors from '@/styles/colors'
import {
	Button,
	Input,
	InputGroup,
	InputRightElement,
	Stack,
} from '@chakra-ui/react'
import { getBooksFromAPI } from '@/api'

export async function getServerSideProps() {
	const books = await getBooksFromAPI()
	return books
}

const Search = () => {
	const router = useRouter()
	const handleFormSubmit = event => {
		event.preventDefault()
		const searchQuery = event.target.elements.searchInput.value

		router.push(`/results?searchQuery=${encodeURIComponent(searchQuery)}`);
	}
	return (
		<Stack width={'50%'}>
			<form onSubmit={handleFormSubmit} width='50vw'>
				<Stack
					direction='row'
					spacing='1rem'
					justify='center'
					align='center'
				>
					<InputGroup className='h-10'>
						<Input
							pr='4.0rem'
							placeholder='Search by title, author,...'
							borderColor={bookshelfColors.primary.light}
							focusBorderColor={bookshelfColors.primary.main}
							_hover={{
								borderColor: bookshelfColors.primary.main,
							}}
							_placeholder={{
								opacity: 1,
								color: bookshelfColors.grey[4],
							}}
							width='100%'
							id='searchInput'
						/>
						<InputRightElement width='4.5rem'>
							<Button
								h='1.75rem'
								size='md'
								type='submit'
								bgColor={bookshelfColors.primary.main}
								_hover={{ bg: bookshelfColors.primary.dark }}
							>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									fill='none'
									viewBox='0 0 24 24'
									strokeWidth='1.5'
									stroke='white'
									className='w-5 h-5'
								>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										d='M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z'
									/>
								</svg>
							</Button>
						</InputRightElement>
					</InputGroup>
				</Stack>
			</form>
		</Stack>
	)
}

export default Search

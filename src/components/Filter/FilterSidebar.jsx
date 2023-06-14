import { Box, Checkbox, CheckboxGroup, Divider, Stack, Text } from '@chakra-ui/react'
import Link from 'next/link'
import { categories } from '@/constant/route'
import { useRouter } from 'next/router'
import bookshelfColors from '@/styles/colors'
import PriceFilter from './PriceFilter'
import RatingFilter from './RatingFilter'
import AuthorFilter from './AuthorFilter'

const FilterSidebar = ({ books }) => {
	const router = useRouter()
	return (
		<Box
			h="full"
			w='290px'
			bg='white'
			rounded='xl'
			mt={{
				base: '6',
				lg: '8',
			}}
		>
			<Box p={6}>
				<Text className='text-xl font-bold'>Product Categories</Text>
				<Stack paddingLeft={2} pt={2} dir='columns'>
					{categories.map((category, index) => (
						<Link
							href={category.path}
							key={index}
							className={`text-base py-1 ${
								router.asPath === category.path
									? 'text-primary-main font-bold'
									: 'hover:text-primary-main'
							}`}
						>
							{category.title}
						</Link>
					))}{' '}
				</Stack>
			</Box>
            <Divider />
			<PriceFilter books={books}/>
			<RatingFilter />
			<AuthorFilter />
		</Box>
	)
}

export default FilterSidebar
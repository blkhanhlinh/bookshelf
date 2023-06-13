import { Box, Divider, Stack, Text } from '@chakra-ui/react'
import Link from 'next/link'
import { categories } from '@/constant/route'
import { useRouter } from 'next/router'

const FilterSidebar = () => {
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
							className={`text-base ${
								router.pathname === category.path
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
            <Box p={6}>
                <Text className='text-xl font-bold'>Rating</Text>
                <Stack paddingLeft={2} pt={2} dir='columns'>
                    
                </Stack>
            </Box>
		</Box>
	)
}

export default FilterSidebar

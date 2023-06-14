import bookshelfColors from '@/styles/colors'
import {
	Box,
	Divider,
	Radio,
	RadioGroup,
	Stack,
	Text,
} from '@chakra-ui/react'

const RatingFilter = () => {
	const values = [
		{value: '3', text: 'From 3 stars'},
		{value: '4', text: 'From 4 stars'},
		{value: '5', text: 'From 5 stars'}
	]
	return (
		<>
			<Box p={6}>
				<Text className='text-xl font-bold'>Rating</Text>
				<Stack pt={2}>
					<RadioGroup>
						<Stack>
							{values.map(({ value, text }) => (
								<Radio
									key={value}
									value={value}
									color={bookshelfColors.primary.main}
									_checked={{
										color: '#fff !important',
										backgroundColor: `${bookshelfColors.primary.main}`,
									}}
									className='text-info text-regular-regular'
									py={1}
								>
									{text}
								</Radio>
							))}
						</Stack>
					</RadioGroup>
				</Stack>
			</Box>
			<Divider />
		</>
	)
}

export default RatingFilter

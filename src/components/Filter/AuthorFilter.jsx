import bookshelfColors from '@/styles/colors'
import {
	Box,
	Checkbox,
	CheckboxGroup,
	Divider,
	Stack,
	Text,
} from '@chakra-ui/react'
import { useCheckbox } from '@chakra-ui/react'
import { chakra } from '@chakra-ui/react'
import { useState } from 'react'

function CustomCheckbox(props) {
	const { state, getCheckboxProps, getInputProps, getLabelProps, htmlProps } =
		useCheckbox(props)

	return (
		<chakra.label
			display='flex'
			flexDirection='row'
			alignItems='center'
			gridColumnGap={3}
			cursor='pointer'
			{...htmlProps}
		>
			<input {...getInputProps()} hidden />
			<chakra.div
				alignItems='center'
				justifyContent='center'
				border='2px solid'
				borderColor={bookshelfColors.grey[5]}
				w={4}
				h={4}
				rounded={2}
				{...getCheckboxProps()}
			>
				{state.isChecked && (
					<Box w='full' h='full' bg={bookshelfColors.primary.main} />
				)}
			</chakra.div>
			<Text color={bookshelfColors.info} {...getLabelProps()}>
				{props.label}
			</Text>
		</chakra.label>
	)
}

const AuthorFilter = () => {
	const values = [
		{ id: 1, name: 'John Green' },
		{ id: 2, name: 'Mark Manson' },
		{ id: 3, name: 'George Orwell' },
		{ id: 4, name: 'J.R.R. Tolkien' },
		{ id: 5, name: 'Jane Harper' },
		{ id: 6, name: 'Jim Collins' },
		{ id: 7, name: 'Haruki Murakami' },
		{ id: 8, name: 'J.K. Rowling' },
		{ id: 9, name: 'Napoleon Hill' },
		{ id: 10, name: 'Paulo Coelho' },
	]

	const [showMore, setShowMore] = useState(false)
	const authors = showMore ? values : values.slice(0, 6)

	const handleToggleShowMore = () => {
		setShowMore(!showMore)
	}

	return (
		<>
			<Box p={6}>
				<Text className='text-xl font-bold'>Authors</Text>
				<Stack pt={2}>
					<CheckboxGroup>
						<Stack>
							{authors.map(({ id, name }) => (
								<CustomCheckbox
									key={id}
									value={name}
									label={name}
									className='pt-1 text-medium-regular'
								/>
							))}
						</Stack>
					</CheckboxGroup>
					{values.length > 6 && (
						<Text
							color={bookshelfColors.secondary.main}
							onClick={handleToggleShowMore}
                            className='cursor-pointer'
                            mt={2}
                            alignSelf={'center'}
						>
							{showMore ? 'Show less' : 'View more'}
						</Text>
					)}
				</Stack>
			</Box>
			<Divider marginBottom={8} />
		</>
	)
}

export default AuthorFilter
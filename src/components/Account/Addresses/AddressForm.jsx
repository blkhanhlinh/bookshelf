import { useRouter } from 'next/router'
import { useDispatch, useSelector } from 'react-redux'
import { useState, useEffect } from 'react'
import {
	Spacer,
	Box,
	Flex,
	FormControl,
	FormLabel,
	Input,
	Stack,
	Link,
	Button,
	Text,
	FormErrorMessage,
	FormHelperText,
	useToast,
	InputGroup,
} from '@chakra-ui/react'
import bookshelfColors from '@/styles/colors'

function AccountForm() {
	const router = useRouter()
	const { userInfo, loading, error } = useSelector((state) => state.auth)
	const dispatch = useDispatch()

	const [firstName, setFirstName] = useState('')
	const [lastName, setLastName] = useState('')
	const [phoneNum, setPhoneNum] = useState('')

	const handleSubmit = async e => {
		e.preventDefault()
	}

	return (
		<Flex direction='column'>
			<form onSubmit={handleSubmit}>
				<Stack spacing={4}>
					<FormControl id='username' className='flex flex-row justify-between items-center'>
						<FormLabel fontSize='1rem' lineHeight='1.5rem'>
							Username
						</FormLabel>
						<Input
							type='text'
							placeholder='Username'
							value={userInfo.username}
                            w={360}
                            disabled
						/>
					</FormControl>
					<FormControl id='email' className='flex flex-row justify-between items-center'>
						<FormLabel fontSize='1rem' lineHeight='1.5rem'>
							Email
						</FormLabel>
						<Input type='text' placeholder='email' value={userInfo.email} disabled
                        w={360}/>
					</FormControl>
					<FormControl id='first-name' className='flex flex-row justify-between items-center'>
						<FormLabel fontSize='1rem' lineHeight='1.5rem'>
							First name
						</FormLabel>
						<Input
							type='text'
							placeholder='first-name'
							value={firstName}
                            w={360}
						/>
					</FormControl>
					<FormControl id='last-name' className='flex flex-row justify-between items-center'>
						<FormLabel fontSize='1rem' lineHeight='1.5rem'>
							Last name
						</FormLabel>
						<Input
							type='text'
							placeholder='last-name'
							value={lastName}
                            w={360}
						/>
					</FormControl>
					<FormControl id='phone-num' className='flex flex-row justify-between items-center'>
						<FormLabel fontSize='1rem' lineHeight='1.5rem'>
							Phone number
						</FormLabel>
						<Input
							type='text'
							placeholder='phone-num'
							value={phoneNum}
                            w={360}
						/>
					</FormControl>
				</Stack>
                <Button
                    bg={bookshelfColors.primary.main}
                    color={'white'}
                    fontWeight={'normal'}
                    _hover={{
                        bg: bookshelfColors.primary.dark,
                    }}
                    my={8}
                    w='full'
                    type='submit'
                >
                    Save
                </Button>
			</form>
		</Flex>
	)
}

export default AccountForm
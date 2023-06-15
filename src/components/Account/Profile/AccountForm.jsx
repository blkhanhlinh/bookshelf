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
	Textarea,
} from '@chakra-ui/react'
import bookshelfColors from '@/styles/colors'
import { userUpdate } from '@/redux/auth/authActions'


function AccountForm() {
	const router = useRouter()
	const { userInfo, userToken, loading, error } = useSelector((state) => state.auth)
	const dispatch = useDispatch()

	const [firstName, setFirstName] = useState(userInfo?.first_name)
	const [lastName, setLastName] = useState(userInfo?.last_name)
	const [phoneNum, setPhoneNum] = useState(userInfo?.phone_number)
	const [address, setAddress] = useState(userInfo?.address)

	const handleSubmit = async e => {
		e.preventDefault()
		const changedInfo = {
			"first_name": firstName,
			"last_name": lastName,
			"phone_number": phoneNum,
			"address": address,
		}
		dispatch(userUpdate({userToken, userInfo, changedInfo}))
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
						<Input
							type='text'
							placeholder='Email'
							value={userInfo.email}
							disabled
							w={360}/>
					</FormControl>
					<FormControl id='first-name' className='flex flex-row justify-between items-center'>
						<FormLabel fontSize='1rem' lineHeight='1.5rem'>
							First name
						</FormLabel>
						<Input
							type='text'
							placeholder='First name'
							value={firstName}
							onChange={e => setFirstName(e.target.value)}
                            w={360}
						/>
					</FormControl>
					<FormControl id='last-name' className='flex flex-row justify-between items-center'>
						<FormLabel fontSize='1rem' lineHeight='1.5rem'>
							Last name
						</FormLabel>
						<Input
							type='text'
							placeholder='Last name'
							value={lastName}
							onChange={e => setLastName(e.target.value)}
                            w={360}
						/>
					</FormControl>
					<FormControl id='phone-num' className='flex flex-row justify-between items-center'>
						<FormLabel fontSize='1rem' lineHeight='1.5rem'>
							Phone number
						</FormLabel>
						<Input
							type='text'
							placeholder='Phone number'
							value={phoneNum}
							onChange={e => setPhoneNum(e.target.value)}
                            w={360}
						/>
					</FormControl>
					<FormControl id='address' className='flex flex-row justify-between items-center'>
						<FormLabel fontSize='1rem' lineHeight='1.5rem'>
							Address
						</FormLabel>
						<Textarea
							resize='none'
							type='text'
							placeholder='Address'
							value={address}
							onChange={e => setAddress(e.target.value)}
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

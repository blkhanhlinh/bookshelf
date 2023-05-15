import bookshelfColors from '@/styles/colors'
import {
	Flex,
	Box,
	FormControl,
	FormLabel,
	Input,
	Checkbox,
	Stack,
	Link,
	Button,
	Text,
	FormErrorMessage,
	FormHelperText,
} from '@chakra-ui/react'
import { useState, useContext } from 'react'
import NextLink from 'next/link'
import AuthContext from '@/context/AuthContext'

const LoginForm = () => {
	const [username, setUsername] = useState('')
	const [password, setPassword] = useState('')

	const { login } = useContext(AuthContext)

	const handleSubmit = e => {
		e.preventDefault()
		login({username, password})
	}

	return (
		<Flex
			borderRadius={'2xl'}
			bg={bookshelfColors.white}
			width={'40%'}
			p={12}
			height={'40rem'}
			direction={'column'}
		>
			<h4 className='text-heading-4 mt-4 mb-8 text-center'>Sign in</h4>
			<form onSubmit={handleSubmit}>
				<Stack spacing={4}>
					<FormControl id='username'>
						<FormLabel fontSize='1rem' lineHeight='1.5rem'>
							Username
						</FormLabel>
						<Input
							type='text'
							placeholder='Username'
							borderColor={bookshelfColors.primary.light}
							focusBorderColor={bookshelfColors.primary.main}
							_hover={{
								borderColor: bookshelfColors.primary.main,
							}}
							_placeholder={{
								opacity: 1,
								color: bookshelfColors.grey[4],
							}}
							value={username}
							onChange={e => setUsername(e.target.value)}
						/>
					</FormControl>
					<FormControl id='password'>
						<FormLabel fontSize='1rem' lineHeight='1.5rem'>
							Password
						</FormLabel>
						<Input
							type='password'
							placeholder='Password'
							borderColor={bookshelfColors.primary.light}
							focusBorderColor={bookshelfColors.primary.main}
							_hover={{
								borderColor: bookshelfColors.primary.main,
							}}
							_placeholder={{
								opacity: 1,
								color: bookshelfColors.grey[4],
							}}
							value={password}
							onChange={e => setPassword(e.target.value)}
						/>
					</FormControl>
					<Stack spacing={10}>
						<Stack direction={'row'} justify={'space-between'}>
							<Checkbox colorScheme='primary'>
								Remember me
							</Checkbox>
							<Link as={NextLink} href='/auth/forgot-password'>
								Forgot password?
							</Link>
						</Stack>
						<Button
							bg='primary.500'
							color={'white'}
							fontWeight={'normal'}
							_hover={{
								bg: 'primary.600',
							}}
							type='submit'
						>
							Sign in
						</Button>
					</Stack>
				</Stack>
			</form>
			<Text mt='auto' mb='0' textAlign={'center'}>
				Don't have an account?{' '}
				<Link as={NextLink} href='/auth/register' color='secondary.500'>
					Sign up
				</Link>
			</Text>
		</Flex>
	)
}

export default LoginForm

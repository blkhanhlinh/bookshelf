import bookshelfColors from '@/styles/colors'
import {
	Flex,
	FormControl,
	FormLabel,
	Input,
	Checkbox,
	Stack,
	Link,
	Button,
	Text,
	useToast,
	Spinner,
} from '@chakra-ui/react'
import { useState, useEffect } from 'react'
import NextLink from 'next/link'
import useAuthStore from '@/stores/useAuthStore'
import axios from 'axios'
import { useRouter } from 'next/router'

const LoginForm = () => {
	const router = useRouter()

	const [username, setUsername] = useState('')
	const [password, setPassword] = useState('')
	const [isRememberMe, setIsRememberMe] = useState(false)

	const toast = useToast()
	const { error } = useAuthStore(state => ({
		error: state.error,
	}))

	useEffect(() => {
		if (error) {
			toast({
				title: 'An error occurred.',
				description: error,
				status: 'error',
				duration: 2000,
				isClosable: true,
				position: 'bottom-right',
				colorScheme: 'error',
			})
			useAuthStore.getState().clearError()
		}
	}, [error])

	const handleSubmit = async e => {
		e.preventDefault()
		useAuthStore.getState().onLoading()
		try {
			const { data: tokenData } = await axios.post(
				'http://127.0.0.1:8000/api/token/',
				{ username, password },
				{
					headers: {
						'Content-Type': 'application/json',
						Accept: 'application/json',
					},
				}
			)

			console.log('hello')
			console.log(tokenData)
			if (tokenData) {
				const accessToken = tokenData.access
				const refreshToken = tokenData.refresh
				await axios
					.get('http://127.0.0.1:8000/api/user/', {
						headers: {
							Authorization: `Bearer ${accessToken}`,
						},
					})
					.then(res => {
						const user = res.data
						useAuthStore
							.getState()
							.login(
								accessToken,
								refreshToken,
								user,
								isRememberMe
							)
						setTimeout(() => {
							useAuthStore.getState().offLoading()
						}, 5000)
						router.replace('/')
					})
			}
		} catch (err) {
			console.log(err)
			useAuthStore.getState().offLoading()
			useAuthStore
				.getState()
				.setError(err.response?.data.detail || 'Something went wrong')
		}
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
							<Checkbox
								colorScheme='primary'
								value={isRememberMe}
								onChange={e =>
									setIsRememberMe(e.target.checked)
								}
							>
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
				Don{`'`}t have an account?{' '}
				<Link as={NextLink} href='/auth/register' color='secondary.500'>
					Sign up
				</Link>
			</Text>
		</Flex>
	)
}

export default LoginForm

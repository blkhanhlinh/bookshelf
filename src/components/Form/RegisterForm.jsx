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
import { useState } from 'react'
import NextLink from 'next/link'

const RegisterForm = () => {
	const [email, setEmail] = useState('')
	const [username, setUsername] = useState('')
	const [password, setPassword] = useState('')
	const [emailError, setEmailError] = useState(false)
	const [usernameError, setUsernameError] = useState(false)
	const [passwordError, setPasswordError] = useState(false)

	const validateEmail = () => {
		if (email === '') {
			setEmailError(true)
		} else {
			setEmailError(false)
		}
	}
	const validateUsername = () => {
		if (username === '') {
			setUsernameError(true)
		} else {
			setUsernameError(false)
		}
	}
	const validatePassword = () => {
		if (password === '') {
			setPasswordError(true)
		} else {
			setPasswordError(false)
		}
	}

	return (
		<Flex
			borderRadius={'2xl'}
			bg={bookshelfColors.white}
			width={'40%'}
			p={12}
			height={'45rem'}
			direction={'column'}
		>
			<h4 className='text-heading-4 mt-4 mb-8 text-center'>Sign up</h4>
			<form>
				<Stack spacing={4}>
					<FormControl id='email' isInvalid={emailError} isRequired>
						<FormLabel fontSize='1rem' lineHeight='1.5rem'>
							Email
						</FormLabel>
						<Input
							type='email'
							placeholder='Email'
							borderColor={bookshelfColors.primary.light}
							focusBorderColor={
								emailError
									? bookshelfColors.state.error
									: bookshelfColors.primary.main
							}
							errorBorderColor={bookshelfColors.state.error}
							_hover={{
								borderColor: emailError
									? bookshelfColors.state.error
									: bookshelfColors.primary.main,
							}}
							_placeholder={{
								opacity: 1,
								color: bookshelfColors.grey[4],
							}}
							value={email}
							onChange={e => setEmail(e.target.value)}
							onBlur={validateEmail}
						/>
						<FormErrorMessage>Email is invalid</FormErrorMessage>
					</FormControl>
					<FormControl
						id='username'
						isInvalid={usernameError}
						isRequired
					>
						<FormLabel fontSize='1rem' lineHeight='1.5rem'>
							Username
						</FormLabel>
						<Input
							type='text'
							placeholder='Username'
							borderColor={bookshelfColors.primary.light}
							focusBorderColor={
								usernameError
									? bookshelfColors.state.error
									: bookshelfColors.primary.main
							}
							errorBorderColor={bookshelfColors.state.error}
							_hover={{
								borderColor: usernameError
									? bookshelfColors.state.error
									: bookshelfColors.primary.main,
							}}
							_placeholder={{
								opacity: 1,
								color: bookshelfColors.grey[4],
							}}
							value={username}
							onChange={e => setUsername(e.target.value)}
							onBlur={validateUsername}
						/>
						<FormErrorMessage>
							Username must be at least 5 characters long, start
							with a letter and include only digits (0-9),
							lowercase, uppercase letters and '_'
						</FormErrorMessage>
					</FormControl>
					<FormControl
						id='password'
						isInvalid={passwordError}
						isRequired
					>
						<FormLabel fontSize='1rem' lineHeight='1.5rem'>
							Password
						</FormLabel>
						<Input
							type='password'
							placeholder='Password'
							borderColor={bookshelfColors.primary.light}
							focusBorderColor={
								passwordError
									? bookshelfColors.state.error
									: bookshelfColors.primary.main
							}
							errorBorderColor={bookshelfColors.state.error}
							_hover={{
								borderColor: passwordError
									? bookshelfColors.state.error
									: bookshelfColors.primary.main,
							}}
							_placeholder={{
								opacity: 1,
								color: bookshelfColors.grey[4],
							}}
							value={password}
							onChange={e => setPassword(e.target.value)}
							onBlur={validatePassword}
						/>
					</FormControl>
					<FormControl id='repeat-password' isRequired>
						<FormLabel fontSize='1rem' lineHeight='1.5rem'>
							Repeat password
						</FormLabel>
						<Input
							type='password'
							placeholder='Repeat password'
							borderColor={bookshelfColors.primary.light}
							focusBorderColor={bookshelfColors.primary.main}
							_hover={{
								borderColor: bookshelfColors.primary.main,
							}}
							_placeholder={{
								opacity: 1,
								color: bookshelfColors.grey[4],
							}}
						/>
					</FormControl>
					<Button
						bg='primary.500'
						color={'white'}
						fontWeight={'normal'}
						_hover={{
							bg: 'primary.600',
						}}
					>
						Sign up
					</Button>
				</Stack>
			</form>
			<Text mt='auto' mb='0' textAlign={'center'}>
				Already have an account?{' '}
				<Link as={NextLink} href='/auth/login' color='secondary.500'>
					Sign in
				</Link>
			</Text>
		</Flex>
	)
}

export default RegisterForm

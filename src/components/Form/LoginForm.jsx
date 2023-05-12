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
} from '@chakra-ui/react'

const LoginForm = () => {
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
            <form>
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
						_hover={{ borderColor: bookshelfColors.primary.main }}
						_placeholder={{
							opacity: 1,
							color: bookshelfColors.grey[4],
						}}
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
						_hover={{ borderColor: bookshelfColors.primary.main }}
						_placeholder={{
							opacity: 1,
							color: bookshelfColors.grey[4],
						}}
					/>
				</FormControl>
				<Stack spacing={10}>
					<Stack direction={'row'} justify={'space-between'}>
						<Checkbox colorScheme='primary'>Remember me</Checkbox>
						<Link>Forgot password?</Link>
					</Stack>
					<Button
						bg='primary.500'
						color={'white'}
                        fontWeight={'normal'}
						_hover={{
							bg: 'primary.600',
						}}
					>
						Sign in
					</Button>
				</Stack>
			</Stack>
            </form>
            <Text mt='auto' mb='0' textAlign={'center'}>Don't have an account? <Link color='secondary.500'>Sign up</Link></Text>
		</Flex>
	)
}

export default LoginForm

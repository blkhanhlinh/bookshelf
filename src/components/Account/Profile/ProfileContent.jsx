import { useRouter } from 'next/router'
import { useDispatch, useSelector } from 'react-redux'
import { useState, useEffect } from 'react'
import {
	Flex,
	Spacer,
	Box,
	Text,
	Image,
	Button,
	Avatar,
} from '@chakra-ui/react'
import AccountForm from './AccountForm'
import bookshelfColors from '@/styles/colors'

function ProfileContent() {

	const AvatarDisplay = () => {
		return (
			<>
				<Image
					w={200}
					src='https://ionicframework.com/docs/img/demos/avatar.svg'
					objectFit='cover'
					borderRadius='xl'
					alt='avatar'
				/>
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
					Choose an image
				</Button>
			</>
		)
	}

	return (
		<Flex
			// bg='white'
			rounded='xl'
			mt={{
				base: '6',
				lg: '8',
			}}
			direction='row'
			justifyContent='space-around'
			w={880}
		>
			<Flex p={6} direction='column' w={560}>
				<Text className='text-heading-4' mb={6}>
					Profile
				</Text>
				<AccountForm />
			</Flex>
			<Spacer />
			<Flex p={6} direction='column' w={200}>
				<AvatarDisplay />
			</Flex>
		</Flex>
	)
}

export default ProfileContent

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
	Card,
	Text,
	FormErrorMessage,
	FormHelperText,
	useToast,
	InputGroup,
	CardHeader,
	CardBody,
	Badge,
} from '@chakra-ui/react'
import bookshelfColors from '@/styles/colors'

function AddressList() {
	const router = useRouter()
	const { userInfo, loading, error } = useSelector(state => state.auth)
	const dispatch = useDispatch()

	return (
		<Flex
			bg='white'
			rounded='xl'
			mt={{
				base: '6',
				lg: '8',
			}}
			direction='row'
			justifyContent='space-around'
			w={880}
		>
			<Flex p={6} direction='column' w='full' className='relative'>
				<Text className='text-heading-4' mb={6}>
					Address
				</Text>
				<Flex direction='column' w='full'>
					<Card>
						<CardHeader className='flex flex-row' pb={0}>
							<Text className='text-large-bold'>{`${userInfo.first_name} ${userInfo.last_name}`}</Text>
							<Text className='text-large-regular' ml={12}>
								{userInfo.phone_number}
							</Text>
						</CardHeader>
						<CardBody pt={4}>
							<Text className='text-regular-regular'>
								{userInfo.address}
							</Text>
							<Badge variant='outline' colorScheme='green' mt={4}>
								Default
							</Badge>
						</CardBody>
					</Card>
				</Flex>
			</Flex>
		</Flex>
	)
}

export default AddressList

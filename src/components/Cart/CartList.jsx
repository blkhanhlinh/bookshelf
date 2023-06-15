import { useRouter } from 'next/router'
import { useDispatch, useSelector } from 'react-redux'
import { useState, useEffect } from 'react'
import { removeFromCart, incrementQuantity, decrementQuantity } from '@/redux/cart.slice'
import { BsTrash } from 'react-icons/bs'
import {
	Spacer,
	Box,
	Flex,
	Button,
	Card,
	Text,
	Image,
	IconButton,
} from '@chakra-ui/react'
import bookshelfColors from '@/styles/colors'

function CartList() {
	const router = useRouter()
	const { userInfo, loading, error } = useSelector(state => state.auth)
	const cart = useSelector(state => state.cart)
	const dispatch = useDispatch()

	console.log(cart)
	console.log(userInfo)

	if (!userInfo) {
		router.push('/auth/login')
		return
	}

	const Quantity = ({ item }) => {
		return (
			<Flex className='flex flex-row justify-center items-center'>
				<Button onClick={() => dispatch(decrementQuantity(item.id))}>-</Button>
				<Text className='text-regular-bold w-12 text-center'>
					{item.quantity}
				</Text>
				<Button onClick={() => dispatch(incrementQuantity(item.id))}>+</Button>
			</Flex>
		)
	}

	const Price = ({ item }) => {
		return (
			<Flex className='flex flex-row justify-center items-center'>
				<Text className='text-large-bold text-center text-primary-main'>
					{item.unit_price * item.quantity} ₫
				</Text>
			</Flex>
		)
	}

	const Remove = ({ item }) => {
		return (
			<Flex className='flex flex-row justify-center items-center'>
				<IconButton
					aria-label='Remove item from cart'
					icon={<BsTrash size={18} color={bookshelfColors.info} />}
					onClick={() => dispatch(removeFromCart(item.id))}
					rounded='full'
					variant='ghost'
				/>
			</Flex>
		)
	}

	const getTotalPrice = () => {
		return cart.reduce(
			(accumulator, item) => accumulator + item.quantity * item.unit_price, 0
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
			w='full'
		>
			<Flex p={6} direction='column' w='full' className='relative'>
				<Text className='text-heading-4' mb={6}>
					My Cart ({cart.length})
				</Text>
				<Card direction='column' w='full' bgColor='white'>
					{!cart.length ? (
						<Box
							className='flex justify-center items-center rounded-lg py-2'
							border={`1px solid ${bookshelfColors.secondary.main}`}
							bg={bookshelfColors.secondary.light}
							color={bookshelfColors.info}
						>
							<Text className='text-regular-regular'>
								No items in cart
							</Text>
						</Box>
					) : (
						<>
							<Flex
								direction='row'
								className='items-center justify-end px-9 pt-9'
							>
								<Text className='text-medium-bold mr-24'>
									Quantity
								</Text>
								<Text className='text-medium-bold mr-24'>
									Total
								</Text>
							</Flex>
							{cart.map((item, index) => (
								<Card
									key={index}
									direction='row'
									className='p-9 justify-between'
									backgroundColor='transparent'
									border='none'
									boxShadow='none'
								>
									<Flex className='flex flex-row'>
										<Image
											src={item.cover}
											alt={item.title}
											w={16}
											h={24}
										/>
										<Spacer w={6} />
										<Text className='text-medium-regular'>
											{item.title}
										</Text>
									</Flex>

									<Flex className='flex flex-row'>
										<Quantity item={item} />
										<Spacer w={20} />
										<Price item={item} />
										<Spacer w={6} />
										<Remove item={item} />
									</Flex>
								</Card>
							))}
						</>
					)}
				</Card>
				{!cart.length ? (
					''
				) : (
					<Card
						direction='row'
						w='full'
						bgColor='white'
						mt={6}
						className='items-center px-9 justify-end'
					>
						<Text className='text-large-bold text-center text-primary-main mr-6'>
							Total price: {getTotalPrice()} ₫
						</Text>
						<Button
							bg={bookshelfColors.primary.main}
							color={'white'}
							fontWeight={'normal'}
							_hover={{
								bg: bookshelfColors.primary.dark,
							}}
							my={8}
							w='185px'
							type='submit'
						>
							Check out
						</Button>
					</Card>
				)}
			</Flex>
		</Flex>
	)
}

export default CartList

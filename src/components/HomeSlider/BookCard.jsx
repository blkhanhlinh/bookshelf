import {
	Card,
	Button,
	Flex,
	Heading,
	Image,
	HStack,
	Stack,
	Text,
	Box,
	Link,
	Center,
} from '@chakra-ui/react'
import React, { useEffect, useState, useContext } from 'react'
import bookshelfColors from '@/styles/colors'
import { BsStar, BsStarFill, BsStarHalf } from 'react-icons/bs'
import { useDispatch } from 'react-redux'
import { addToCart } from '@/redux/cart.slice'

const CartButton = ({ book }) => {
	const [isHover, setIsHover] = useState(false)
	const dispatch = useDispatch()
	return (
		<Box alignSelf={'center'}>
			<Button
				background={'none'}
				border={`1px solid ${bookshelfColors.primary.main}`}
				color={bookshelfColors.info}
				_hover={{
					background: bookshelfColors.primary.main,
					color: bookshelfColors.white,
				}}
				onMouseEnter={() => setIsHover(true)}
				onMouseLeave={() => setIsHover(false)}
				onClick={() => dispatch(addToCart(book))}
			>
				<Box display={'flex'} px={8}>
					<svg
						width='19'
						height='18'
						viewBox='0 0 19 18'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
						stroke={
							isHover
								? bookshelfColors.white
								: bookshelfColors.primary.main
						}
					>
						<path
							d='M15.838 6H4.10865C3.64519 6 3.29266 6.41615 3.36885 6.8733L4.61885 14.3733C4.67912 14.7349 4.99202 15 5.35865 15H14.588C14.9546 15 15.2675 14.7349 15.3277 14.3733L16.5777 6.8733C16.6539 6.41615 16.3014 6 15.838 6Z'
							strokeWidth='1.5'
							strokeLinecap='round'
							strokeLinejoin='round'
						/>
						<path
							d='M6.97333 6C6.97333 4.34315 8.31647 3 9.97333 3C11.6302 3 12.9733 4.34315 12.9733 6'
							strokeWidth='1.5'
							strokeLinecap='round'
							strokeLinejoin='round'
						/>
					</svg>
					<Box as='span' marginLeft={1}>
						Add to cart
					</Box>
				</Box>
			</Button>
		</Box>
	)
}

const Rating = ({ rating, numReviews }) => {
	return (
		<Flex alignItems='center'>
			{Array(5)
				.fill('')
				.map((_, i) => {
					const roundedRating = Math.round(rating * 2) / 2
					if (roundedRating - i >= 1) {
						return (
							<BsStarFill
								key={i}
								style={{ marginLeft: '1' }}
								color={
									i < rating
										? bookshelfColors.state.warning
										: bookshelfColors.grey
								}
							/>
						)
					}
					if (roundedRating - i === 0.5) {
						return (
							<BsStarHalf
								key={i}
								style={{ marginLeft: '1' }}
								color={bookshelfColors.state.warning}
							/>
						)
					}
					return <BsStar key={i} style={{ marginLeft: '1' }} />
				})}
			<Box
				flex={1}
				as='span'
				ml='2'
				color={bookshelfColors.info}
				fontSize='sm'
			>
				&#40;{rating === 0 ? 0 : numReviews}&#41;
			</Box>
		</Flex>
	)
}

const BookCard = ({ book, isHomepage = true}) => {
	return (
		<Card
			maxW={'sm'}
			w='290px'
			h='458px'
			borderRadius='2xl'
			border={`1px solid ${bookshelfColors.primary.main}`}
			flex={1}
			direction={'column'}
			justifyContent={'space-between'}
			id={book.id}
			p={6}
		>
			<Box>
				<Center>
					<Image
						src={book.cover}
						alt={book.title}
						height={'194px'}
						marginBottom={6}
					/>
				</Center>
			</Box>
			<Stack>
				<Text className='text-medium-regular pb-1'>{book.title}</Text>
				<Heading size={'md'} textColor={bookshelfColors.primary.main}>
					{book.unit_price} ₫
				</Heading>
			</Stack>
			<HStack py={4}>
				<Rating
					rating={5} // temporarily
					numReviews={1000} // temporarily
				/>
			</HStack>
			{isHomepage && <CartButton book={book} className='self-center' />}
			{/* <Box className='flex justify-between items-center'>
				<Box alignSelf={'center'}>
					<Link onClick={() => handleClick()}>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							viewBox='0 0 24 24'
							strokeWidth='1.5'
							className='w-7 h-7'
							stroke={bookshelfColors.primary.main}
							fill={
								isClicked
									? bookshelfColors.primary.main
									: 'none'
							}
						>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								d='M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z'
							/>
						</svg>
					</Link>
				</Box>
			</Box> */}
		</Card>
	)
}
export default BookCard

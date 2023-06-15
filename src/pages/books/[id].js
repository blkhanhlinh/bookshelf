import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
	Box,
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	Button,
	Container,
	Flex,
	HStack,
	Heading,
	Image,
	SimpleGrid,
	Spacer,
	Stack,
	Text,
} from '@chakra-ui/react'
import { useRouter } from 'next/router'
import axios from 'axios'
import { API_URL } from '@/constant/api'
import DesktopLayout from '@/components/Layout/DesktopLayout'
import bookshelfColors from '@/styles/colors'
import { Rating } from '@/components/HomeSlider/BookCard'
import {
	addToCart,
	incrementQuantity,
	decrementQuantity,
} from '@/redux/cart.slice'
import { CardSlider } from '@/components/HomeSlider'

async function fetchBooksFromAPI() {
	try {
		const response = await axios.get(`${API_URL}/books`)
		if (response.status === 200) {
			return response.data // Assuming the API returns an array of books
		}
		throw new Error('Failed to fetch books')
	} catch (error) {
		console.error('Error fetching books:', error)
		return [] // Return an empty array if there's an error
	}
}

export async function getBookById(bookId) {
	try {
		const response = await axios.get(`${API_URL}/books/${bookId}`)
		if (response.status === 200) {
			const data = response.data
			return {
				book: data,
			}
		}
		throw new Error('Failed to fetch book data')
	} catch (error) {
		console.error('Error fetching book:', error)
		return {
			book: null,
		}
	}
}

export async function getServerSideProps({ params }) {
	const books = await fetchBooksFromAPI()
	const bookId = params.id
	const book = await getBookById(bookId)

	return {
		props: {
			book,
			books,
		},
	}
}

const categoryMap = {
	'Best Sellers': 'best-sellers',
	'New Arrivals': 'new-arrivals',
	Fiction: 'fiction',
	'Business & Management': 'business-management',
	'Self Help': 'self-help',
	"Children's Books": 'children-books',
	'Dictionaries & Languages': 'dictionaries-languages',
	'Other Languages': 'other-languages',
}

const BookDetailsPage = ({ book, books }) => {
	const router = useRouter()
	const { id } = router.query

	if (!book) {
		return <div>Loading...</div>
	}

	const {
		title,
		author,
		cover,
		summary,
		published_year,
		unit_price,
		stock,
		category,
	} = book.book

	const categoryLink = categoryMap[category] || category
	const [quantity, setQuantity] = useState(1)
	const dispatch = useDispatch()
	const cart = useSelector(state => state.cart)

	const Quantity = () => {
		const add = () => {
			setQuantity(quantity + 1)
		}

		const minus = () => {
			if (quantity > 1) {
				setQuantity(quantity - 1)
			}
		}

		return (
			<Flex className='flex flex-row justify-center items-center'>
				<Button onClick={minus}>-</Button>
				<Text className='text-regular-bold w-12 text-center'>
					{quantity}
				</Text>
				<Button onClick={add}>+</Button>
			</Flex>
		)
	}

	const addToCartHandler = () => {
		const bookInCart = cart.find(item => item.id === id)
		if (bookInCart) {
			dispatch(incrementQuantity(id))
		} else {
			dispatch(addToCart({ ...book.book, quantity }))
		}
	}

	const relatedBooks = books.filter(
		item => item.category === category && item.title !== title
	)

	return (
		<DesktopLayout isHomepage={false}>
			<Breadcrumb pt='4'>
				<BreadcrumbItem>
					<BreadcrumbLink href='/'>Home</BreadcrumbLink>
				</BreadcrumbItem>

				<BreadcrumbItem>
					<BreadcrumbLink href='/all-categories'>
						All Categories
					</BreadcrumbLink>
				</BreadcrumbItem>

				<BreadcrumbItem>
					<BreadcrumbLink href={`/all-categories/${categoryLink}`}>
						{category}
					</BreadcrumbLink>
				</BreadcrumbItem>

				<BreadcrumbItem
					isCurrentPage
					color={bookshelfColors.primary.main}
				>
					<BreadcrumbLink href='#'>{title}</BreadcrumbLink>
				</BreadcrumbItem>
			</Breadcrumb>
			<HStack mt='10' spacing='16' alignItems='flex-start'>
				<Flex>
					<Image
						src={cover}
						alt={title}
						height={'394px'}
						rounded={'md'}
						align={'center'}
					/>
				</Flex>
				<Stack spacing={{ base: 4, md: 6 }}>
					<Text className='text-3xl font-bold'>{title}</Text>
					<HStack>
						{' '}
						<Text className='text-large-bold'>Author: </Text>
						<Text className='text-large-bold text-primary-main'>
							{author}
						</Text>
					</HStack>
					<Rating
						rating={5} // temporarily
						numReviews={1000} // temporarily
					/>
					<Text className='font-bold text-2xl text-primary-main'>
						{unit_price} ₫
					</Text>
					<HStack>
						<Text className='text-large-bold'>Quantity: </Text>
						<Quantity />
					</HStack>
					<Button
						onClick={addToCartHandler}
						w='168px'
						h={12}
						color='white'
						bgColor={bookshelfColors.primary.main}
						_hover={{ bgColor: bookshelfColors.primary.dark }}
					>
						Add to Cart
					</Button>
				</Stack>
			</HStack>
            <Box my={12} px={6} py={8} bgColor={"white"}>
                <Stack spacing={4} className='text-medium-regular'>
                    <HStack spacing={12}>
                        <Text w="224px">Book ID: </Text>
                        <Text className='text-medium-bold text-primary-main'>{id}</Text>
                    </HStack>
                    <HStack spacing={12}>
                        <Text w="224px">Published year: </Text>
                        <Text className='text-medium-bold text-primary-main'>{published_year}</Text>
                    </HStack>
                    <HStack spacing={12}>
                        <Text w="224px">Stock: </Text>
                        <Text className='text-medium-bold text-primary-main'>{stock}</Text>
                    </HStack>
                    <HStack spacing={12}>
                        <Text w="224px">Category: </Text>
                        <Text className='text-medium-bold text-primary-main'>{category}</Text>
                    </HStack>
                    <Text pt={6}>{summary}</Text>
                </Stack>
            </Box>
			<Box paddingBottom={'104px'} mt={12}>
				<Flex justifyContent={'space-between'} paddingBottom={8}>
					<Text fontWeight={'700'} fontSize={'3xl'}>
						Related books
					</Text>
				</Flex>
				<CardSlider books={relatedBooks} />
			</Box>
		</DesktopLayout>
	)
}

export default BookDetailsPage

import { Button, Card, CardFooter } from '@chakra-ui/react'
import ItemCart from './ItemCart'
import { useDispatch, useSelector } from 'react-redux'
import { removeFromCart } from '@/redux/cart.slice'
import bookshelfColors from '@/styles/colors'

export default function WidgetCart() {
	const cart = useSelector(state => state.cart)
	const dispatch = useDispatch()
	// const getTotalPrice = () => {
	// 	return cart.reduce(
	// 		(accumulator, item) => accumulator + item.quantity * item.unit_price,
	// 		0
	// 	)
	// }

	const renderContent = function () {
		return (
			<Card>
				<div className='flex flex-col gap-2'>
					{cart.map((item, index) => (
						<ItemCart
							key={index}
							item={item}
							index={index}
							removeItem={id => dispatch(removeFromCart(id))}
						/>
					))}
				</div>
				<CardFooter className='flex justify-center'>
					<Button
						onClick={() => {
							window.location.href = '/my-cart'
						}}
						bgColor={bookshelfColors.primary.main}
						color='white'
						_hover={{ bgColor: bookshelfColors.primary.dark }}
					>
						View Cart
					</Button>
				</CardFooter>
			</Card>
		)
	}
	return (
		<div className='rounded-xl shadow-2xl w-full'>
			<header className='border-b border-gray-400 p-4'>
				<strong>My Cart</strong>
			</header>
			{cart.length > 0 ? (
				renderContent()
			) : (
				<div className='h-44 flex items-center justify-center text-info font-bold text-sm'>
					No items in cart
				</div>
			)}
		</div>
	)
}

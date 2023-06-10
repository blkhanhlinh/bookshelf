import { Button, CardFooter } from '@chakra-ui/react'
import { useCartData } from '../../data/hooks'
import { ItemCart } from '.'

const WidgetCart = () => {
	const { cart, removeItem } = useCartData()

	return (
		<>
			<div className='flex flex-col gap-2'>
				{cart.map((item, index) => (
					<ItemCart
						key={index}
						item={item}
						index={index}
						removeItem={removeItem}
					/>
				))}
			</div>
			<CardFooter>
				<Button
					onClick={() => {
						window.location.href = '/checkout'
					}}
					text='Checkout'
					shadow={false}
				/>
			</CardFooter>
		</>
	)
}
export default WidgetCart

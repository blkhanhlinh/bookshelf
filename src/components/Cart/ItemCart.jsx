import { IconButton } from '@chakra-ui/react'
import { BsTrash } from 'react-icons/bs'

const ItemCart = ({ item, index, removeItem }) => {
	return (
		<div className='flex items-center justify-between gap-4'>
			<Image
				src={item.image}
				alt={item.title}
				width={48}
				height={48}
				objectFit='cover'
				className='rounded-lg'
			/>
			<div className='flex flex-col flex-1 leading-normal'>
				<strong className='text-info text-medium-bold'>
					{item.title}
				</strong>
				<p className='text-info text-medium-regular flex gap-1'>
					<span className='text-primary-main text-medium-bold'>
						{item.price} x {item.quantity}
					</span>
					<span className='text-primary-main text-medium-bold'>
						= {item.price * item.quantity}
					</span>
				</p>
			</div>
			<IconButton
				aria-label='Remove item from cart'
				icon={<BsTrash size={18} />}
				variant='ghost'
				onClick={() => removeItem(index)}
			/>
		</div>
	)
}
export default ItemCart

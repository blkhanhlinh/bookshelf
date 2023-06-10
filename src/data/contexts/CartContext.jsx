const { createContext, useState } = require('react')

const CartContext = createContext({
	totalItems: 0,
})

export function CartProvider({ children }) {
	const [items, setItems] = useState([])
	const [totalItems, setTotalItems] = useState(0)

	const countItems = arrItems => {
		const total = arrItems.reduce((acc, curr) => acc + curr.quantity, 0)
		setTotalItems(total)
	}

	const addItemToCart = item => {
		let newItems = [...items]
		let index = newItems.findIndex(i => i.id === item.id)
		if (index === -1) {
			newItems.push(item)
		} else {
			newItems[index].quantity += item.quantity
		}
		setItems(newItems)
		setTotalItems(countItems(newItems))
	}

	const addNewItem = item => {
		return [...items, item]
	}

	const updateItem = (item, index) => {
		const updatedItems = [...items]
		updatedItems[index] = item
		return updatedItems
	}

	const removeItem = id => {
		let newItems = [...items]
		let index = newItems.findIndex(i => i.id === id)
		newItems.splice(index, 1)
		setItems(newItems)
		setTotalItems(countItems(newItems))
	}
	return (
		<CartContext.Provider
			value={{ items, totalItems, addItemToCart, removeItem }}
		>
			{children}
		</CartContext.Provider>
	)
}

export default CartContext

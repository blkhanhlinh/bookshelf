import { createSlice } from '@reduxjs/toolkit'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { orderCheckout } from './cartActions'

const cartSlice = createSlice({
	name: 'cart',
	initialState: [],
	reducers: {
		addToCart: (state, action) => {
			const itemExists = state.find(item => item.id === action.payload.id)
			if (itemExists) {
				itemExists.quantity++
			} else {
				state.push({ ...action.payload, quantity: 1 })
			}
		},
		addSomeToCart: (state, action) => {
			const itemExists = state.find(item => item.id === action.payload.id)
			if (itemExists) {
			  itemExists.quantity += action.payload.quantity
			} else {
			  state.push({ ...action.payload })
			}
		  },
		incrementQuantity: (state, action) => {
			const item = state.find(item => item.id === action.payload)
			item.quantity++
		},
		decrementQuantity: (state, action) => {
			const item = state.find(item => item.id === action.payload)
			if (item.quantity === 1) {
				const index = state.findIndex(
					item => item.id === action.payload
				)
				state.splice(index, 1)
			} else {
				item.quantity--
			}
		},
		removeFromCart: (state, action) => {
			const index = state.findIndex(item => item.id === action.payload)
			state.splice(index, 1)
		},

	},
	extraReducers: {
		[orderCheckout.fulfilled]: (state, { payload }) => {
			// state = []
		}
	}
})

export const cartReducer = cartSlice.reducer

export const {
	addToCart,
	addSomeToCart,
	incrementQuantity,
	decrementQuantity,
	removeFromCart,
} = cartSlice.actions

import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'

const backendURL = 'http://127.0.0.1:8000'


export const orderCheckout = createAsyncThunk(
	'cart/checkout',
	async ({ userToken, userInfo, checkoutInfo }, { rejectWithValue }) => {
		try {
			const config = {
				headers: {
					'Content-Type': 'application/json',
					Accept: 'application/json',
					Authorization: `Token ${userToken}`,
				},
			}
			const { data } = await axios.post(
				`${backendURL}/api/checkout/`,
				{
					"user_id": userInfo.id,
					"total": checkoutInfo.total,
					"order_items": checkoutInfo.orderItems,
					"quantity": checkoutInfo.quantity,
				},
				config
			)
			console.log(data)
			if (data) return data
		} catch (error) {
			if (error.response && error.response.data.message) {
				return rejectWithValue(error.response.data.message)
			} else {
				return rejectWithValue(error.message)
			}
		}
	}
)

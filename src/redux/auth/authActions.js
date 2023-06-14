import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'

const backendURL = 'http://127.0.0.1:8000'
export const userLogin = createAsyncThunk(
	'auth/login',
	async ({ username, password }, { rejectWithValue }) => {
		try {
			const config = {
				headers: {
					'Content-Type': 'application/json',
					Accept: 'application/json',
				},
			}
			const { data } = await axios.post(
				`${backendURL}/api/login/`,
				{ username, password },
				config
			)

			if (data.token) {
                console.log(data)
				localStorage.setItem('userToken', data.token)

				const { data: userInfo } = await axios.get(
					`${backendURL}/users/${data.user_id}/`,
					{
						headers: {
							'Content-Type': 'application/json',
							Accept: 'application/json',
							Authorization: `Token ${data.token}`,
						},
					}
				)

				if (userInfo) {
					return { token: data.token, userInfo: userInfo }
				}
			}
            else {
                return rejectWithValue('Please verify your email')
            }
		} catch (error) {
			if (error.response && error.response.data.message) {
				return rejectWithValue(error.response.data.message)
			} else {
				return rejectWithValue(error.message)
			}
		}
	}
)

export const userRegister = createAsyncThunk(
	'auth/register',
	async ({ email, username, password }, { rejectWithValue }) => {
		try {
			const config = {
				headers: {
					'Content-Type': 'application/json',
					Accept: 'application/json',
				},
			}
			await axios.post(
				`${backendURL}/api/register/`,
				{ email, username, password },
				config
			)
		} catch (error) {
			if (error.response && error.response.data.message) {
				return rejectWithValue(error.response.data.message)
			} else {
				return rejectWithValue(error.message)
			}
		}
	}
)

export const userUpdate = createAsyncThunk(
	'user/update',
	async ({ userToken, userInfo, changedInfo }, { rejectWithValue }) => {
		try {
			const config = {
				headers: {
					'Content-Type': 'application/json',
					Accept: 'application/json',
					Authorization: `Token ${userToken}`,
				},
			}
			const { data } = await axios.put(
				`${backendURL}/users/${userInfo.id}/`,
				{
					"username": userInfo.username,
					"email": userInfo.email,
					"password": userInfo.password,
					...changedInfo
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

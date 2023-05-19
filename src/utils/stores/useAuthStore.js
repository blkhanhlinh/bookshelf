import { useRouter } from 'next/router'
import { create } from 'zustand'
import axios from 'axios'
import NextCors from 'nextjs-cors'
import { useEffect } from 'react'

const initialState = {
	token: null,
	refreshToken: null,
	user: null,
	isAuthenticated: false,
	isRememberMe: false,
	loading: true,
	error: null,
}

const useAuthStore = create(set => {
	return {
		...initialState,

		clearError: () => set({ error: null }),

		login: async (username, password, isRememberMe) => {
			set((state) => ({ loading: true, error: null, ...state }))
			try {
				const { data } = await axios.post(
					'http://localhost:3000/api/login/',
					{
						username,
						password,
					}
				)

				const { access, refresh } = data

				// You may want to store the token in local storage if isRememberMe is true
				// localStorage.setItem('token', access)
				const { data: userData } = await axios.get(
					'http://127.0.0.1:8000/api/user/',
					{
						headers: {
							Authorization: `Bearer ${access}`,
						},
					}
				)
				const newState = {
					token: access,
					refreshToken: refresh,
					user: userData,
					isAuthenticated: true,
					isRememberMe,
					loading: false,
				}
				set((state) => ({ ...state, ...newState }))
				localStorage.setItem('authState', JSON.stringify(newState))
			} catch (error) {
				set((state) => ({
					error:
						error.response.data.message || 'Something went wrong',
					loading: false,
				}))
			}
		},

		logout: () => {
			// Clear the token from local storage if it was stored
			localStorage.removeItem('authState')
			set((state) => ({ ...initialState }))
		},

		checkAuthState: async () => {
			console.log('Setting loading to true');

			set((state) => ({ ...state, loading: true }))
			if (typeof window !== 'undefined') {
				const storedState = localStorage.getItem('authState')
				if (storedState) {
					const parsedState = JSON.parse(storedState)
					console.log('Setting state:', parsedState);

					set((state) => ({...parsedState}))
				}
			}
			console.log('Setting loading to false');

			set((state) => ({ ...state, loading: false }))
		}
	}
})

export default useAuthStore

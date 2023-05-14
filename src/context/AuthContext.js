import { createContext, useState } from 'react'
import { useRouter } from 'next/router'
import axios from 'axios'

export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(null)
	const [accessToken, setAccessToken] = useState(null)
	const [error, setError] = useState(null)

	const router = useRouter()

	const login = async ({ username, password }) => {
		// console.log('login')
		// console.log({ username, password })

		const config = {
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		}

		const body = {
			username,
			password,
		}

		const { data } = await axios.post(
			'http://localhost:3000/api/login',
			body,
			config
		)
	}

	return (
		<AuthContext.Provider value={{ user, accessToken, error, login }}>
			{children}
		</AuthContext.Provider>
	)
}

import { createContext, useContext, useState } from 'react'
import { useRouter } from 'next/router'
import axios from 'axios'

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(null)
	const [accessToken, setAccessToken] = useState(null)
	const [error, setError] = useState(null)

	const router = useRouter()

	const login = async (username, password) => {
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

		try {
			const { data: accessResponse } = await axios.post(
				'http://localhost:3000/api/login',
				body,
				config
			)

			if (accessResponse && accessResponse.user) {
				setUser(accessResponse.user)
			}

			if (accessResponse && accessResponse.access) {
				setAccessToken(accessResponse.access)
			}

			router.push('/')
		} catch (error) {
			if (error.response && error.response.data) {
				setError(error.response.data.message)
				return
			} else {
				setError('Something went wrong')
				return
			}
		}
	}

	const clearError = () => setError(null)

	return (
		<AuthContext.Provider value={{ user, accessToken, error, login, clearError }}>
			{children}
		</AuthContext.Provider>
	)
}

export default AuthContext

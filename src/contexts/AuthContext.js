import { createContext, useContext, useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import axios from 'axios'
import cookie from 'cookie'

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
	const [currentUser, setCurrentUser] = useState(null)
	const [isAuthenticated, setIsAuthenticated] = useState(false)
	const [accessToken, setAccessToken] = useState(null)
	const [refreshToken, setRefreshToken] = useState(null)
	const [error, setError] = useState(null)

	const router = useRouter()

	useEffect(() => {
		if (!accessToken) {
			const token = cookie.parse(document.cookie).access
			if (token) {
				setAccessToken(token)
			}
		}
	}, [accessToken])

	useEffect(() => {
		if (!refreshToken) {
			const token = localStorage.getItem('refreshToken')
			if (token) {
				setRefreshToken(token)
			}
		}
	}, [refreshToken])

	const login = async (username, password) => {
		await axios
			.post(
				'http://localhost:3000/api/login',
				{
					username,
					password,
				},
				{
					headers: {
						Accept: 'application/json',
						'Content-Type': 'application/json',
					},
				}
			)
			.then(response => {
				setAccessToken(response.data.access)
				setRefreshToken(response.data.refresh)
				setIsAuthenticated(true)

				localStorage.setItem('refreshToken', response.data.refresh)

				router.push('/')
			})
			.catch(error => {
				if (error.response && error.response.data) {
					setError(error.response.data.message)
				} else {
					setError('Something went wrong')
				}
			})
	}

	const clearError = () => setError(null)

	const logout = async () => {
		await axios
			.post('http://localhost:3000/api/logout')
			.then(response => {
				console.log(response)
				setCurrentUser(null)
				setAccessToken(null)
				setRefreshToken(null)
				setIsAuthenticated(false)

				localStorage.removeItem('refreshToken')

				router.push('/')
			})
			.catch(error => {
				if (error.response && error.response.data) {
					setError(error.response.data.message)
				} else {
					setError('Something went wrong')
				}
			})
	}

	return (
		<AuthContext.Provider
			value={{
				currentUser,
				accessToken,
				error,
				login,
				clearError,
				logout,
			}}
		>
			{children}
		</AuthContext.Provider>
	)
}

export default AuthContext

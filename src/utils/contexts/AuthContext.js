import { createContext, useContext, useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import axios from 'axios'
import useAuthStore from '../stores/useAuthStore'

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
	const auth = useAuthStore()

	return (
		<AuthContext.Provider
			value={auth}
		>
			{children}
		</AuthContext.Provider>
	)
}

export default AuthContext

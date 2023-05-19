import '@/styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react'
import theme from '@/styles/theme'
import { AuthProvider } from '@/utils/contexts/AuthContext'

export default function App({ Component, pageProps }) {
	return (
		<ChakraProvider theme={theme}>
			{/* <AuthProvider> */}
				<Component {...pageProps} />
			{/* </AuthProvider> */}
		</ChakraProvider>
	)
}

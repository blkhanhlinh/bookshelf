import '@/styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react'
import theme from '@/styles/theme'
import { Provider } from 'react-redux'
import store from '@/redux/store'

export default function App({ Component, pageProps }) {
	return (
		<ChakraProvider theme={theme}>
			<Provider store={store}>
				<Component {...pageProps} />
			</Provider>
		</ChakraProvider>
	)
}

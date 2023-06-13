import bookstore from '@/redux/bookstore'
import '@/styles/globals.css'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import { Provider } from 'react-redux'

const theme = extendTheme({
	fonts: {
		heading: 'Nunito Sans',
		body: 'Nunito Sans',
	},
})

export default function App({ Component, pageProps }) {
	return (
		<Provider store={bookstore}>
			<ChakraProvider theme={theme}>
				<Component {...pageProps} />
			</ChakraProvider>
		</Provider>
	)
}

import '@/styles/globals.css'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
	fonts: {
		heading: 'Nunito Sans',
		body: 'Nunito Sans',
	},
})

export default function App({ Component, pageProps }) {
	return (
		<ChakraProvider theme={theme}>
			<Component {...pageProps} />
		</ChakraProvider>
	)
}

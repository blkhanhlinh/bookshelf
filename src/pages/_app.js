import '@/styles/globals.css'
import { Provider } from 'react-redux'
import { wrapper } from '@/redux/store'
import { PersistGate } from 'redux-persist/integration/react'
import { persistStore } from 'redux-persist'
import { Spinner } from '@chakra-ui/react'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import theme from '@/styles/theme'


function App({ Component, pageProps }) {
	const { store } = wrapper.useWrappedStore(pageProps)
	const persistor = persistStore(store)

	const Loading = () => {
		return (
			<div className='flex min-h-screen flex-col items-center justify-center text-gray-800'>
				<Spinner />
				<p>Loading...</p>
			</div>
		)
	}

	return (
		<ChakraProvider theme={theme}>
			<Provider store={store}>
				<PersistGate persistor={persistor} loading={<Loading />}>
					<Component {...pageProps} />
				</PersistGate>
			</Provider>
		</ChakraProvider>
	)
}

export default App
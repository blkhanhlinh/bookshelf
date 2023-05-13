import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
	colors: {
		primary: {
			500: '#24AF86',
			400: '#B1E2D3',
			600: '#1E9B76',
		},
		secondary: {
			500: '#FF9C28',
			400: '#FFDCB2',
		},
		error: {
			500: '#E75A51',
		},
	},
})

export default theme

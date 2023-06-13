import bookshelfColors from '@/styles/colors'
import { Box } from '@chakra-ui/react'
import { Header } from '../Header'
import { Footer } from '../Footer'

const AuthLayout = ({ children }) => {
	return (
		<Box className='bg-primary-main' height='100%' pt='16'>
			<Box maxWidth='1230px' m='auto' className='font-sans text-info'>
				<main>{children}</main>
			</Box>
			<Footer />
		</Box>
	)
}
export default AuthLayout

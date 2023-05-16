import bookshelfColors from '@/styles/colors'
import { Box } from '@chakra-ui/react'

const DesktopLayout = ({ children }) => {
	return (
		<Box className='bg-primary-main' height='100vh' pt='16'>
			<Box maxWidth='1230px' m='auto' className='font-sans text-info'>
				<main>{children}</main>
			</Box>
		</Box>
	)
}
export default DesktopLayout

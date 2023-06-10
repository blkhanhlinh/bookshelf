import { Box } from '@chakra-ui/react'

const DesktopLayout = ({ children }) => {
	return (
		<>
			<Box maxWidth='1230px' m='auto' className='font-sans text-info'>
				<main>{children}</main>
			</Box>
		</>
	)
}
export default DesktopLayout

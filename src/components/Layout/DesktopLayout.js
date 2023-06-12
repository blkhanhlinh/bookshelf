import { Box } from '@chakra-ui/react'
import { Header } from '../Header'
import { Footer } from '../Footer'

const DesktopLayout = ({ children, isHomepage }) => {
	return (
		<>
			<Box maxWidth='1230px' m='auto' className='font-sans text-info'>
				<Header showSubNav={isHomepage}/>
				<main >{children}</main>
			</Box>
			<Footer />
		</>
	)
}
export default DesktopLayout

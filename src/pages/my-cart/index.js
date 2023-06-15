import Head from 'next/head'
import DesktopLayout from '@/components/Layout/DesktopLayout'
import { useRouter } from 'next/router'
import { useDispatch, useSelector } from 'react-redux'
import { Flex, Spacer } from "@chakra-ui/react"
import bookshelfColors from '@/styles/colors'
import CartList from '@/components/Cart/CartList'

function MyCart() {
	const router = useRouter()
	const { userInfo, loading, error } = useSelector(state => state.auth)
	const dispatch = useDispatch()

	return (
		<>
			<Head>
				<meta charSet='utf-8' />
				<meta
					name='viewport'
					content='initial-scale=1.0, width=device-width'
				/>
				<link rel='icon' type='image/svg+xml' href='/favicon.svg' />
				<title>My Cart</title>
			</Head>
            <DesktopLayout isHomepage={false}>
                <Flex minW="max-content">
                    <CartList />
                </Flex>
            </DesktopLayout>
		</>
	)
}

export default MyCart

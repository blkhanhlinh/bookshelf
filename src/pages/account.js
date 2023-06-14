import Head from 'next/head'
import { Header } from '@/components/Header'
import { useRouter } from 'next/router'
import { useDispatch, useSelector } from 'react-redux'
import DesktopLayout from '@/components/Layout/DesktopLayout'

function Account() {
	const { userInfo, userToken } = useSelector((state) => state.auth)
	const dispatch = useDispatch()

	console.log(userInfo)


	return (
		<>
			<Head>
				<meta charSet='utf-8' />
				<meta
					name='viewport'
					content='initial-scale=1.0, width=device-width'
				/>
				<link rel='icon' type='image/svg+xml' href='/favicon.svg' />
				<title>My account</title>
			</Head>
			<DesktopLayout>
				<p>{userInfo?.username}</p>
			</DesktopLayout>
		</>
	)
}

export default Account

import Head from 'next/head'
import { Header } from '@/components/Header'
import { DesktopLayout } from '@/components/Layout'
import { useContext } from 'react'
import AuthContext from '@/utils/contexts/AuthContext'
import { useRouter } from 'next/router'
import withAuth from '@/components/HOC/withAuth'
import useAuthStore from '@/utils/stores/useAuthStore'

function Account() {

	const { user } = useAuthStore()
	console.log(user)

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
				<Header />
				My account
				{user && <h1>{user.username}</h1>}
			</DesktopLayout>
		</>
	)
}

export default withAuth(Account, 'protected')

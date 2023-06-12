import Head from 'next/head'
import { Header } from '@/components/Header'
import { DesktopLayout } from '@/components/Layout'
import { useRouter } from 'next/router'

function Account() {

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
				{access && <h1>Logged in</h1>}
			</DesktopLayout>
		</>
	)
}

export default Account

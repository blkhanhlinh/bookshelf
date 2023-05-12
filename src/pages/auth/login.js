import Head from 'next/head'
import { Header } from '@/components/Header'
import DesktopLayout from '@/components/Layout/DesktopLayout'
import LoginForm from '@/components/Form/LoginForm'

export default function Login() {
	return (
		<>
			<Head>
				<meta charSet='utf-8' />
				<meta
					name='viewport'
					content='initial-scale=1.0, width=device-width'
				/>
				<link rel='icon' type='image/svg+xml' href='/favicon.svg' />
				<title>Login</title>
			</Head>
			<DesktopLayout>
				<Header showSubNav={false} />
				<LoginForm />
			</DesktopLayout>
		</>
	)
}

import Head from 'next/head'
import { Header } from '@/components/Header'
import DesktopLayout from '@/components/Layout/DesktopLayout'
import RegisterForm from '@/components/Form/RegisterForm'

export default function Register() {
	return (
		<>
			<Head>
				<meta charSet='utf-8' />
				<meta
					name='viewport'
					content='initial-scale=1.0, width=device-width'
				/>
				<link rel='icon' type='image/svg+xml' href='/favicon.svg' />
				<title>Sign up</title>
			</Head>
			<DesktopLayout>
				<Header showSubNav={false} />
                <RegisterForm />
			</DesktopLayout>
		</>
	)
}

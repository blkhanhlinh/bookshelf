import Head from 'next/head'
import { Header } from '@/components/Header'
import LoginForm from '@/components/Auth/LoginForm'
import { AuthLayout, DesktopLayout } from '@/components/Layout'
import { Stack, Image } from '@chakra-ui/react'
import withAuth from '@/components/HOC/withAuth'

function Login() {
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
			</DesktopLayout>
			<AuthLayout>
				<Stack
					direction='row'
					alignItems='center'
					justifyContent='space-between'
				>
					<LoginForm />
					<Image src='/signin.svg' alt='signin' />
				</Stack>
			</AuthLayout>
		</>
	)
}

export default Login
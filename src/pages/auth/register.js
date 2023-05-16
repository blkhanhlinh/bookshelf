import Head from 'next/head'
import { Header } from '@/components/Header'
import RegisterForm from '@/components/Form/RegisterForm'
import { AuthLayout, DesktopLayout } from '@/components/Layout'
import { Stack, Image } from '@chakra-ui/react'

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
			</DesktopLayout>
			<AuthLayout>
				<Stack
					direction='row'
					alignItems='center'
					justifyContent='space-between'
				>
					<RegisterForm />
					<Image src='/signup.svg' alt='signup' />
				</Stack>
			</AuthLayout>
		</>
	)
}

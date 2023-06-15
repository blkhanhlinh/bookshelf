import Head from 'next/head'
import { Header } from '@/components/Header'
import RegisterForm from '@/components/Auth/RegisterForm'
import { Stack, Image } from '@chakra-ui/react'
import AuthLayout from '@/components/Layout/AuthLayout'
import DesktopLayout from '@/components/Layout/DesktopLayout'

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
			<DesktopLayout isHomepage={false} showFooter={false} />
			<AuthLayout>
				<Stack
					direction='row'
					alignItems='center'
					justifyContent='space-between'
				>
					<RegisterForm />
					<Image src='/signin.svg' alt='signin' />
				</Stack>
			</AuthLayout>
		</>
	)
}

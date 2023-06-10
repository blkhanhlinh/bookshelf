import Head from 'next/head'
import { useRouter } from 'next/router'

export default function Custom404() {
	const router = useRouter()
	const pathname = router.pathname

	return (
		<>
			<Head>
				<title>404 - Page Not Found</title>
			</Head>
			<main className={pathname !== '/' ? 'main-page' : ''}>
				<div className='flex flex-col items-center justify-center w-full h-screen'>
					<h1 className='text-4xl font-bold text-info'>
						404 - Page Not Found
					</h1>
					<button
						className='px-4 py-2 mt-4 text-white bg-primary-main rounded-lg hover:bg-primary-dark'
						onClick={() => router.push('/')}
					>
						Go Home
					</button>
				</div>{' '}
			</main>
		</>
	)
}

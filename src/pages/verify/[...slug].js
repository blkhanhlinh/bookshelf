import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import axios from 'axios'


const EmailVerification = () => {
	const router = useRouter()
	const pathname = router.pathname

	return (
		<>
			<Head>
				<title>Email Verification</title>
			</Head>
			<main className={pathname !== '/' ? 'main-page' : ''}>
				<div className='flex flex-col items-center justify-center w-full h-screen'>
					<h1 className='text-4xl font-bold text-info'>
                        Your account has been verified successfully!!
					</h1>
					<button
						className='px-4 py-2 mt-4 text-white bg-primary-main rounded-lg hover:bg-primary-dark'
						onClick={() => router.push('/auth/login')}
					>
						Login
					</button>
				</div>{' '}
			</main>
		</>
	)
}

export default EmailVerification

export const getServerSideProps = async (context) => {
	const backendURL = 'http://127.0.0.1:8000'
    const { slug } = context.query

	console.log(`${backendURL}/verify/${slug[0]}/${slug[1]}`)
    if (slug) {
        console.log(slug)
		await axios.get(`${backendURL}/verify/${slug[0]}/${slug[1]}`)
    }
    return {
        props: {},
    }
}
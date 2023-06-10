import Head from 'next/head'
import { Header } from '@/components/Header'
import Footer from '@/components/Footer/Footer'
import DesktopLayout from '../components/Layout/DesktopLayout'
import Landing from '@/containers/home/landing'
import Section from '@/containers/home/section'
import axios from 'axios'
import { API_URL } from '@/constant/api'

export default function Home({ books }) {
	return (
		<>
			<Head>
				<meta charSet='utf-8' />
				<meta
					name='viewport'
					content='initial-scale=1.0, width=device-width'
				/>
				<link rel='icon' type='image/svg+xml' href='/favicon.svg' />
				<title>Bookshelf</title>
			</Head>
			<DesktopLayout>
				<Landing />
				<Section books={books} />
			</DesktopLayout>
		</>
	)
}
export async function getServerSideProps() {
	try{
		const res = await axios.get(`${API_URL}/books`)
		if (res.status === 200) {
			const data = res.data
			return {
				props: {
					books: data,
				},
			}
		}
		// redirect to 500 page
		return {
			redirect: {
				destination: '/500',
				permanent: false,
			},
		}
	} catch (error) {
		console.error("Error of catching books: ", error)
		return {
			props: {
				books: [],
			}
		}
	}
}

import Head from 'next/head'
import Landing from '@/containers/home/landing'
import Section from '@/containers/home/section'
import DesktopLayout from '@/components/Layout/DesktopLayout'
import { getBooksFromAPI } from "@/api";

export async function getServerSideProps() {
    const books = await getBooksFromAPI();
    return books;
}

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
			<DesktopLayout isHomepage={true}>
				<Landing />
				<Section books={books} />
			</DesktopLayout>
		</>
	)
}

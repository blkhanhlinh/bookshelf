import Head from 'next/head'
import Image from 'next/image'
import axios from 'axios'
import { Header } from '@/components/Header'
import DesktopLayout from '@/components/Layout/DesktopLayout'
import Landing from '@/containers/home/landing'

export default function Home({ books }) {
	return (
		<>
			<Head>
				<meta charSet='utf-8' />
				<meta	name='viewport'	content='initial-scale=1.0, width=device-width'/>
				<link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <title>Bookshelf</title>
			</Head>
      <DesktopLayout>
        <Header />
        <Landing />
      </DesktopLayout>
			{/* {books.map(book => (
        <div key={book.id}>
          <h2>{book.title}</h2>
          <p>{book.author}</p>
          <Image src={book.image} alt={book.title} width={200} height={200} />
        </div>
      ))} */}
    </>
  )
}

{/*export async function getServerSideProps() {
  const { data } = await axios.get('http://127.0.0.1:8000/books')

  return {
    props: {
      books: data.results,
    },
  }
}*/}

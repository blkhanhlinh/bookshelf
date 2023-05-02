import Head from 'next/head'
import Image from 'next/image'
import axios from 'axios'
import { Header } from '../components/Header'

export default function Home({ books }) {
  return (
    <>
      <Head>
        <title>Bookshelf - Homepage</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>📚</text></svg>"></link>
      </Head>
      <Header />
      <h1>Bookshelf</h1>
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

// export async function getServerSideProps() {
//   const { data } = await axios.get('http://127.0.0.1:8000/books')

//   return {
//     props: {
//       books: data.results,
//     },
//   }
// }

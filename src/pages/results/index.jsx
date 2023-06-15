import DesktopLayout from '@/components/Layout/DesktopLayout'
import DisplayBooks from '@/components/Layout/DisplayBooks'
import { API_URL } from '@/constant/api'
import axios from 'axios'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

const Results = () => {
	const router = useRouter()
	const { searchQuery } = router.query
	const [books, setBooks] = useState([])

	useEffect(() => {
		const fetchBooks = async () => {
			try {
				const res = await axios.get(`${API_URL}/books`)
				if (res.status === 200) {
					const data = res.data
					const filteredBooks = data.filter(
						book =>
							book.title
								.toLowerCase()
								.includes(searchQuery.toLowerCase()) ||
							book.author
								.toLowerCase()
								.includes(searchQuery.toLowerCase())
					)
					setBooks(filteredBooks)
				} else {
					// handle error case
					console.error('Error fetching books:', res.status)
				}
			} catch (error) {
				console.error('Error fetching books:', error)
			}
		}

		if (searchQuery) {
			fetchBooks()
		}
	}, [searchQuery])

	if (!searchQuery && books.length === 0) {
		return (
			<DesktopLayout isHomepage={false}>
				<DisplayBooks />
			</DesktopLayout>
		)
	}

	return (
		<div>
			<DesktopLayout isHomepage={false}>
				{books.length > 0 ? (
					<DisplayBooks books={books} isSearch={true} />
				) : (
					<DisplayBooks />
				)}
			</DesktopLayout>
		</div>
	)
}

export default Results

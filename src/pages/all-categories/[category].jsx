import { useRouter } from 'next/router'
import axios from 'axios'
import { API_URL } from '@/constant/api'
import Breadcrumbs from '@/components/Breadcrumbs/Breadcrumbs'
import DesktopLayout from '@/components/Layout/DesktopLayout'
import DisplayBooks from '@/components/Layout/DisplayBooks'

const CategoryPage = ({ books }) => {
	const router = useRouter()
	const { category } = router.query
	const categoryName = categoryMap[category] || category

	return (
		<DesktopLayout isHomepage={false}>
			<Breadcrumbs category={categoryName} />
			<DisplayBooks books={books} />
		</DesktopLayout>
	)
}

export default CategoryPage

const categoryMap = {
	'best-sellers': 'Best Sellers',
	'new-arrivals': 'New Arrivals', 
	'fiction': 'Fiction',
	'business-management': 'Business & Management',
	'self-help': 'Self Help',
	'children-books': "Children's Books",
	'dictionaries-languages': 'Dictionaries & Languages',
	'other-languages': 'Other Languages',
}

export async function getServerSideProps(ctx) {
	try {
		const category = ctx.query.category
		const dbCategory = categoryMap[category] || category
		const res = await axios.get(`${API_URL}/books`)
		if (res.status === 200) {
			const data = res.data
			const filteredBooks = data.filter(
				book => book.category === dbCategory
			)
			return {
				props: {
					books: filteredBooks,
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
		console.error('Error fetching books: ', error)
		return {
			props: {
				books: [],
			},
		}
	}
}

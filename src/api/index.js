import axios from 'axios'
import { API_URL } from '@/constant/api'
export async function getBooksFromAPI() {
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

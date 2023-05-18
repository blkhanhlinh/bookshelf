import axios from 'axios'
import cookie from 'cookie'

export default async function handler(req, res) {
	if (req.method === 'POST') {
		const { username, password } = req.body

		if (!username || !password) {
			return res
				.status(400)
				.json({ message: 'Username or password is missing' })
		}

		await axios
			.post(
				'http://127.0.0.1:8000/api/token/',
				{
					username,
					password,
				},
				{
					headers: {
						Accept: 'application/json',
						'Content-Type': 'application/json',
					},
				}
			)
			.then(response => {
				res.status(200).json({
					access: response.data.access,
					refresh: response.data.refresh,
				})
			})
			.catch(error => {
				if (error.response && error.response.data) {
					res.status(401).json({
						message: error.response.data.detail,
					})
				} else {
					res.status(500).json({ message: 'Something went wrong' })
				}
			})
	} else {
		res.setHeader('Allow', ['POST'])
		res.status(405).json({ message: `Method ${req.method} is not allowed` })
	}
}

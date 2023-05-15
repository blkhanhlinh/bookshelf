import axios from 'axios'

export default async (req, res) => {
	let accessToken = null

	if (req.method === 'POST') {
		const { username, password } = req.body

		const config = {
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		}

		const body = {
			username,
			password,
		}

		try {
			const { data: accessResponse } = await axios.post(
				'http://127.0.0.1:8000/api/token/',
				body,
				config
			)
			accessToken = accessResponse.access
		} catch (error) {
			if (error.response) {
				console.error(error.response.data)
				console.error(error.response.status)
				console.error(error.response.headers)
				return res
					.status(401)
					.json({ message: error.response.data.detail })
			} else if (error.request) {
				console.error(error.request)
			} else {
				console.error('Error', error.message)
			}
			console.error(error.config)

			return res.status(500).json({ message: 'Something went wrong' })
		}

		if (accessToken) {
			const userConfig = {
				headers: {
					Authorization: 'Bearer ' + accessToken,
				},
			}

			const { data: userData } = await axios.get(
				'http://127.0.0.1:8000/api/user/',
				userConfig
			)
			console.log(userData)

			res.status(200).json({ user: userData, access: accessToken })
		}
	} else {
		res.setHeader('Allow', ['POST'])
		res.status(405).json({ message: `Method ${req.method} is not allowed` })
	}
}

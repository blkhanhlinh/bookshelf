import axios from 'axios'
import cookie from 'cookie'

export default async (req, res) => {
	if (req.method === 'POST') {
		const { username, password } = req.body

		if (!username || !password) {
			return res
				.status(400)
				.json({ message: 'Username or password is missing' })
		}

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
			let accessToken = accessResponse.access
			res.setHeader(
				'Set-Cookie',
				cookie.serialize('refresh', accessResponse.refresh, {
					httpOnly: true,
					secure: false,
					sameSite: 'strict',
					maxAge: 60 * 60 * 24,
					path: '/',
				})
			)
			
			const userConfig = {
				headers: {
					Authorization: 'Bearer ' + accessToken,
				},
			}

			const { data: userData } = await axios.get(
				'http://127.0.0.1:8000/api/user/',
				userConfig
			)
			
			res.status(200).json({ user: userData, access: accessToken })



		} catch (error) {
			if (error.response) {
				return res
					.status(401)
					.json({ message: error.response.data.detail })
			}
			return res.status(500).json({ message: 'Something went wrong' })
		}
	} else {
		res.setHeader('Allow', ['POST'])
		res.status(405).json({ message: `Method ${req.method} is not allowed` })
	}
}

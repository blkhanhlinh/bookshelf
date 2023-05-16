import cookie from 'cookie'

export default async function handler(req, res) {
	res.setHeader(
		'Set-Cookie',
		cookie.serialize('refresh', '', {
			httpOnly: true,
			secure: false,
			expires: new Date(0),
			sameSite: 'strict',
			path: '/',
		})
	)

	res.status(200).json({ message: 'Logout successfully' })
}

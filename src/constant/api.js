export const API_URL =
	process.env.NODE_ENV === 'development'
		? 'http://127.0.0.1:8000'
		: 'API production'

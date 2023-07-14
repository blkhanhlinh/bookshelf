/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		remotePatterns: [
			{
				protocol: 'http',
				hostname: 'emeraldlan1105.pythonanywhere.com',
				pathname: '/media/images/books/**',
			},
		],
	},
}

module.exports = nextConfig

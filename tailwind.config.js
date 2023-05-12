/** @type {import('tailwindcss').Config} */
const bookshelfColors = require('./src/styles/colors')
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic':
					'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
			},
			dropShadow: {
				gray: '0px 8px 64px 4px rgba(0, 0, 0, 0.1), 0px 2px 4px -1px rgba(0, 0, 0, 0.06)',
				'yellow-lg':
					'-4px 16px 32px -4px rgba(255, 156, 40, 0.08), 4px -4px 16px 2px rgba(255, 156, 40, 0.05',
				'yellow-xl': '0px 25px 50px -12px rgba(255, 156, 40, 0.25)',
				'yellow-2xl':
					'2px 10px 15px -3px rgba(255, 156, 40, 0.25), -2px 4px 6px -2px rgba(255, 156, 40, 0.1)',
				green: '2px 8px 36px 4px rgba(36, 175, 134, 0.16), 0px 4px 16px 2px rgba(36, 175, 134, 0.04)',
			},
			lineHeight: {
				heading: '120%',
				'body-large': '1.75rem',
				body: '1.5rem',
				'body-small': '1.125rem',
				'body-extra-small': '1rem',
			},
			fontSize: {
				'large-bold': [
					'18px',
					{
						lineHeight: '1.75rem',
						fontWeight: '600',
					},
				],
				'large-regular': [
					'18px',
					{
						lineHeight: '1.75rem',
						fontWeight: '400',
					},
				],
				'medium-bold': [
					'16px',
					{
						lineHeight: '1.5rem',
						fontWeight: '600',
					},
				],
				'medium-regular': [
					'16px',
					{
						lineHeight: '1.5rem',
						fontWeight: '400',
					},
				],
				'regular-bold': [
					'14px',
					{
						lineHeight: '1.5rem',
						fontWeight: '600',
					},
				],
				'regular-regular': [
					'14px',
					{
						lineHeight: '1.5rem',
						fontWeight: '400',
					},
				],
				'small-bold': [
					'12px',
					{
						lineHeight: '1.125rem',
						fontWeight: '600',
					},
				],
				'small-regular': [
					'12px',
					{
						lineHeight: '1.125rem',
						fontWeight: '400',
					},
				],
				'extra-small-bold': [
					'10px',
					{
						lineHeight: '1rem',
						fontWeight: '600',
					},
				],
				'extra-small-regular': [
					'10px',
					{
						lineHeight: '1rem',
						fontWeight: '400',
					},
				],
			},
			fontFamily: {
				sans: ['Nunito Sans', ...defaultTheme.fontFamily.sans],
			},
			colors: {
				...bookshelfColors,
			},
			rounded: {
				'base': '12px',
			},
			typography: theme => ({
				DEFAULT: {
					css: {
						color: theme('colors.info'),
						a: {
							color: theme('colors.primary.main'),
							'&:hover': {
								color: theme('colors.primary.dark'),
							},
						},
						h1: {
							color: theme('colors.info'),
							fontWeight: 700,
						},
						h2: {
							color: theme('colors.info'),
							fontWeight: 700,
						},
						h3: {
							color: theme('colors.info'),
							fontWeight: 700,
						},
						h4: {
							color: theme('colors.info'),
							fontWeight: 700,
						},
						h5: {
							color: theme('colors.info'),
							fontWeight: 700,
						},
						h6: {
							color: theme('colors.info'),
							fontWeight: 700,
						},
					},
				},
			}),
		},
	},
	plugins: [],
}

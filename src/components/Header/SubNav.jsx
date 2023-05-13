import { Stack } from '@chakra-ui/react'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import useWindowSize from '@/utils/hooks/useWindowSize'
import { useRouter } from 'next/router'

const SubNav = () => {
	const router = useRouter()

	const categories = [
		{
			name: 'Home',
			path: '/',
		},
		{
			name: 'Best Sellers',
			path: '/best-sellers',
		},
		{
			name: 'New Arrivals',
			path: '/new-arrivals',
		},
		{
			name: 'Coming Soon',
			path: '/coming-soon',
		},
		{
			name: 'Fiction',
			path: '/fiction',
		},
		{
			name: 'Business & Management',
			path: '/business-management',
		},
		{
			name: "Children's Books",
			path: '/children-books',
		},
		{
			name: 'Dictionaries & Languages',
			path: '/dictionaries-languages',
		},
		{
			name: 'Other Languages',
			path: '/other-languages',
		},
	]

	return (
		<nav id='sub-nav'>
			<Stack
				className='h-12 bg-background py-3'
				direction='row'
				spacing='auto'
				justify='center'
				align='center'
			>
				{categories.map((category, index) => (
					<Link
						href={category.path}
						key={index}
						className={`text-base ${
							router.pathname === category.path
								? 'text-primary-main'
								: 'hover:text-primary-main'
						}`}
					>
						{category.name}
					</Link>
				))}
			</Stack>
		</nav>
	)
}

export default SubNav

import { Stack } from '@chakra-ui/react'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import useWindowSize from '@/utils/hooks/useWindowSize'
import { useRouter } from 'next/router'
import { categories } from '@/constant/route'

const SubNav = () => {
	const router = useRouter()

	return (
		<nav id='sub-nav'>
			<Stack
				className='h-12 bg-background py-3'
				direction='row'
				spacing='auto'
				justify='space-between'
				align='center'
			>
				{categories.map((category, index) => (
					<Link
						href={category.path}
						key={index}
						className={`text-sm ${
							router.pathname === category.path
								? 'text-primary-main'
								: 'hover:text-primary-main'
						}`}
					>
						{category.title}
					</Link>
				))}
			</Stack>
		</nav>
	)
}

export default SubNav

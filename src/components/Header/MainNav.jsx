import Image from 'next/image'
import bookshelfColors from '@/styles/colors'
import { Stack } from '@chakra-ui/react'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { ShoppingCart } from '../Cart'
import Search from '../Search'

export const MenuItem = ({path, name, icon}) => {
	const [isHover, setIsHover] = useState(false)
	return (
		<Link href={path}>
			<div
				className='menu-link'
				onMouseEnter={() => setIsHover(true)}
				onMouseLeave={() => setIsHover(false)}
			>
				<svg				
					xmlns='http://www.w3.org/2000/svg'
					fill='none'
					viewBox='0 0 24 24'
					strokeWidth='1.5'
					className='w-7 h-7'
					stroke={isHover ? bookshelfColors.primary.main : bookshelfColors.info}
				>
					{icon}
				</svg>
				<p className='text-small-regular'>{name}</p>
			</div>
		</Link>
	)
}

const MainNav = () => {
	const menu = [
		{
			name: 'Account',
			path: '/account',
			icon: 
				<path
					strokeLinecap='round'
					strokeLinejoin='round'
					d='M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z'
				/>
		},
	]

	return (
		<nav id='main-nav'>
			<Stack
				className='bg-background py-4'
				direction='row'
				justify='space-between'
				align='center'
			>
				<Link href="/">
					<Image
						src='/Logo.svg'
						width={173}
						height={40}
						priority
						alt='logo'
					/>
				</Link>
				<Search />
				<Stack direction='row' align='center' spacing='2rem'>
					{menu.map((item, index) => (
						<MenuItem
							key={index}
							name={item.name}
							path={item.path}
							icon={item.icon}
						/>
					))}
					<ShoppingCart />
				</Stack>
			</Stack>
		</nav>
	)
}

export default MainNav

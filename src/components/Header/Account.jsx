import axios from 'axios'
import { redirect } from 'next/dist/server/api-utils'
import { useRouter } from 'next/router'
import { logout } from '@/redux/auth/authSlice'
import { useDispatch, useSelector } from 'react-redux'
import {
	Popover,
	PopoverTrigger,
	PopoverContent,
	Stack,
	Link,
	Flex,
} from '@chakra-ui/react'
import bookshelfColors from '@/styles/colors'
import { MenuItem } from './MainNav'

const Account = () => {
	const router = useRouter()

	const { userInfo, userToken } = useSelector(state => state.auth)
	const dispatch = useDispatch()

	const handleLogout = e => {
		e.preventDefault()
		dispatch(logout())
	}

	const Widget = () => {
		return (
			<div className='rounded-xl shadow-2xl w-full'>
				<Stack
					id='account-link'
					// className='invisible before:content-[""] absolute z-20 -translate-x-6 translate-y-2'
					bgColor='white'
					rounded='lg'
					px='6'
					py='3'
					spacing='3'
					shadow={
						'-4px 16px 32px -4px rgba(255, 156, 40, 0.08), 4px -4px 16px 2px rgba(255, 156, 40, 0.05)'
					}
				>
					<Link
						href='/account'
						className='text-regular-regular hover:text-primary-main'
					>
						My account
					</Link>
					<Link
						href='/purchase'
						className='text-regular-regular hover:text-primary-main'
					>
						My purchase
					</Link>
					{userInfo ? (
						<Link
							href=''
							onClick={handleLogout}
							className='text-regular-regular hover:text-primary-main'
						>
							Logout
						</Link>
					) : (
						''
					)}
				</Stack>
			</div>
		)
	}

	return (
		<Popover
			isLazy
			trigger='hover'
			placement='bottom-end'
			className='lg:relative flex flex-col justify-center'
		>
			<PopoverTrigger>
				<Flex direction='column' align='center'>
					<MenuItem
						path='/account'
						name='Account'
						icon={
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								d='M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z'
							/>
						}
					/>
				</Flex>
			</PopoverTrigger>
			<PopoverContent>
				<Widget />
			</PopoverContent>
		</Popover>
	)
}

export default Account

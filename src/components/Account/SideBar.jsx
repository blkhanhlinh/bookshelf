import { Box, Divider, Stack, Text, Flex } from '@chakra-ui/react'
import Link from 'next/link'
import { accountDetails } from '@/constant/route'
import { useRouter } from 'next/router'
import bookshelfColors from '@/styles/colors'

const SideBar = () => {
	const router = useRouter()

	const Icon = ({ children }) => {
		return (
			<>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					fill='none'
					viewBox='0 0 24 24'
					strokeWidth='1.5'
					className='w-7 h-7'
					stroke={bookshelfColors.info}
				>
					{children}
				</svg>
			</>
		)
	}

	return (
		<Box
			h='full'
			w='290px'
			// bg='white'
			rounded='xl'
			mt={{
				base: '6',
				lg: '8',
			}}
		>
			<Box p={6}>
				<Flex>
					<Icon>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							d='M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z'
						/>
					</Icon>
					<Text className='text-xl font-bold ml-1'>My account</Text>
				</Flex>
				<Stack paddingLeft={8} pt={2} dir='columns'>
					{accountDetails.map((items, index) => (
						<Link
							href={items.path}
							key={index}
							className={`text-base ${
								router.pathname === items.path
									? 'text-primary-main font-bold'
									: 'hover:text-primary-main'
							}`}
						>
							{items.title}
						</Link>
					))}{' '}
				</Stack>
			</Box>
			<Box p={6}>
				<Flex>
					<Icon>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							d='M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z'
						/>
					</Icon>
					<Text className='text-xl font-bold ml-1'>My purchases</Text>
				</Flex>
			</Box>
			<Box p={6}>
				<Flex>
					<Icon>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							d='M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z'
						/>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							d='M15 12a3 3 0 11-6 0 3 3 0 016 0z'
						/>
					</Icon>
					<Text className='text-xl font-bold ml-1'>
						Recently viewed
					</Text>
				</Flex>
			</Box>
		</Box>
	)
}

export default SideBar

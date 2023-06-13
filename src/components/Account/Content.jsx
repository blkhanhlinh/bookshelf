import { useRouter } from 'next/router'
import { useDispatch, useSelector } from 'react-redux'
import { useState, useEffect } from 'react'
import Sidebar from '@/components/Account/SideBar'
import {
	Flex,
	Spacer,
	Box,
	Text,
	Image,
	Button,
	Avatar,
} from '@chakra-ui/react'
import bookshelfColors from '@/styles/colors'
import ProfileContent from './Profile/ProfileContent'
import AddressList from './Addresses/AddressList'
import PurchasesList from './Purchases/PurchasesList'

function Content() {
	const router = useRouter()

	return (
		<>
			{
				{
					'/account/profile': <ProfileContent />,
					'/account/addresses': <AddressList />,
					'/purchases': <PurchasesList />,
				}[router.pathname]
			}
		</>
	)
}

export default Content

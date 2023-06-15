import Head from 'next/head'
import DesktopLayout from '@/components/Layout/DesktopLayout'
import { useRouter } from 'next/router'
import { useDispatch, useSelector } from 'react-redux'
import { useState, useEffect } from 'react'
import Sidebar from '@/components/Account/SideBar'
import { Flex, Spacer } from "@chakra-ui/react"
import Content from '@/components/Account/Content'


function Profile() {
	const { userInfo, userToken, loading, error } = useSelector((state) => state.auth)
	const dispatch = useDispatch()

	// console.log(userInfo)

	return (
		<>
			<Head>
				<meta charSet='utf-8' />
				<meta
					name='viewport'
					content='initial-scale=1.0, width=device-width'
				/>
				<link rel='icon' type='image/svg+xml' href='/favicon.svg' />
				<title>My Purchases</title>
			</Head>
            <DesktopLayout isHomepage={false}>
                <Flex minW="max-content">
                    <Sidebar />
					<Spacer />
                    <Content />
                </Flex>
            </DesktopLayout>
		</>
	)
}

export default Profile

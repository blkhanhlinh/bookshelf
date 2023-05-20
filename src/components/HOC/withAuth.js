import { useRouter } from 'next/router'
import { useEffect } from 'react'
import useAuthStore from '@/stores/useAuthStore'
import { Spinner } from '@chakra-ui/react'

export default function withAuth(Component, routeRole) {
	return props => {
		const router = useRouter()
		const { loading, access, checkAuth, onLoading, offLoading } = useAuthStore(state => ({
			loading: state.loading,
			access: state.accessToken,
			checkAuth: state.checkAuth,
            onLoading: state.onLoading,
            offLoading: state.offLoading
		}))

		useEffect(() => {
            onLoading()
			checkAuth()
			offLoading()
			window.addEventListener('focus', checkAuth)
			return () => {
				window.removeEventListener('focus', checkAuth)
			}
		}, [checkAuth])

		useEffect(() => {
			if (!loading) {
				if (access) {
					if (routeRole === 'auth') {
						if (router?.query?.redirect) {
							router.replace(router.query.redirect)
						} else {
							router.replace('/')
						}
					}
				} else {
					if (routeRole !== 'auth') {
						router.replace(
							`/auth/login?redirect=${router.asPath}`,
							`/auth/login`
						)
					}
				}
			}
		}, [access, loading, router])
		if ((loading || !access) && routeRole !== 'auth') {
			return (
				<div className='flex min-h-screen flex-col items-center justify-center text-gray-800'>
					<Spinner />
					<p>Loading...</p>
				</div>
			)
		}
		return <Component {...props} />
	}
}

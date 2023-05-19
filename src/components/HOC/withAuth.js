import { useRouter } from 'next/router'
import { useContext, useEffect } from 'react'
import AuthContext from '@/utils/contexts/AuthContext'
import useAuthStore from '@/utils/stores/useAuthStore'

export default function withAuth(Component, routeRole) {
	return function WithAuthComponent(props) {
		const router = useRouter()
		const { loading, isAuthenticated, checkAuthState } = useAuthStore()

		useEffect(() => {
			checkAuthState()
			window.addEventListener('focus', checkAuthState);
			return () => {
			  window.removeEventListener('focus', checkAuthState);
			}
		}, [checkAuthState])


		useEffect(() => {
			if (!loading) {
				console.log('isAuthenticated', isAuthenticated)
				if (isAuthenticated) {
					if (routeRole === 'auth') {
						if(router?.query?.redirect) {
							router.replace(router.query.redirect)
						}
						else {
							router.replace('/')
						}
					}
				}
				else {
					if (routeRole !== 'auth') {
						router.replace(
							`/auth/login?redirect=${router.asPath}`,
							`/auth/login`
						);
					}
				}
			}
		}, [isAuthenticated, loading, router])

		return <Component {...props} />
	}
}

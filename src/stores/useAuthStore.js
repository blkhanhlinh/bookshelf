import { create } from 'zustand'

const useAuthStore = create(set => ({
	user: null,
	accessToken: null,
	refreshToken: null,
	loading: false,
	error: null,
	login: async (access, refresh, user, isRememberMe) => {
		if (isRememberMe) {
			localStorage.setItem('access', access)
			localStorage.setItem('refresh', refresh)
		} else {
			sessionStorage.setItem('access', access)
			sessionStorage.setItem('refresh', refresh)
		}
		set(state => ({
			accessToken: access,
			refreshToken: refresh,
			user: user,
		}))
	},
	logout: () => {
		if (localStorage.getItem('access')) {
			localStorage.removeItem('access')
			localStorage.removeItem('refresh')
		} else {
			sessionStorage.removeItem('access')
			sessionStorage.removeItem('refresh')
		}
		set(state => ({ user: null, accessToken: null, refreshToken: null }))
	},
	onLoading: () => set(state => ({ loading: true })),
	offLoading: () => set(state => ({ loading: false })),
	setError: error => set(state => ({ error: error })),
	clearError: () => set(state => ({ error: null })),
	checkAuth: async () => {
		if (typeof window !== 'undefined') {
			const access = localStorage.getItem('access') || sessionStorage.getItem('access')
			const refresh = localStorage.getItem('refresh') || sessionStorage.getItem('refresh')
			if (access && refresh) {
				set(state => ({
					accessToken: access,
					refreshToken: refresh,
				}))
			}
		}
	},
}))

export default useAuthStore

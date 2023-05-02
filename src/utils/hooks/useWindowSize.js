import { useState, useEffect } from 'react'

export default function useWindowSize() {
	const isServer = typeof window === 'undefined'
	const [windowSize, setWindowSize] = useState({
		width: isServer ? 1200 : window.innerWidth,
		height: isServer ? 800 : window.innerHeight,
	})

	function changeWindowSize() {
		setWindowSize({ width: window.innerWidth, height: window.innerHeight })
	}

	useEffect(() => {
		window.addEventListener('resize', changeWindowSize)

		return () => {
			window.removeEventListener('resize', changeWindowSize)
		}
	}, [])

	return windowSize
}

import { useEffect, useState } from 'react';
import { MainNav, SubNav } from '.'

const Header = ({ showSubNav = true }) => {
	const [visible, setVisible] = useState(true);
	const [lastScrollPos, setLastScrollPos] = useState(0);

	const handleScroll = () => {
		const currentScrollPos = window.scrollY;
		if (currentScrollPos > lastScrollPos) {
		  setVisible(false);
		} else {
		  setVisible(true);
		}
		setLastScrollPos(currentScrollPos);
	}
	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, [lastScrollPos, visible]);
	return (
		<header className={`sticky ${visible ? 'top-0 transition-transform duration-300 ease-in -translate-y-0' : '-top-0 transition-transform duration-300 ease-out -translate-y-full'} z-10`}>
			<MainNav />
			{showSubNav && <SubNav />}
		</header>
	)
}

export default Header

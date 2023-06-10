import { MainNav, SubNav } from '.'

const Header = ({ showSubNav = true }) => {
	return (
		<header>
			<MainNav />
			{showSubNav && <SubNav />}
		</header>
	)
}

export default Header

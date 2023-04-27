import { MainNav, SubNav } from "."

const NavBar = ({ showSubNav = true }) => {
    return (
        <header>
            <MainNav />
            {showSubNav && <SubNav />}
        </header>
    )
}

export default NavBar
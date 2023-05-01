import { MainNav, SubNav } from "."
import useWindowSize from "@/utils/hooks/useWindowSize"

const NavBar = ({ showSubNav = true }) => {
    const { width } = useWindowSize()

    return (
        <header>
            <MainNav />
            {showSubNav && width >= 1240 && <SubNav />}
        </header>
    )
}

export default NavBar
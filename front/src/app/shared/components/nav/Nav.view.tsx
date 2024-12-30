import NavTop from "./components/Nav.top"
import NavBottom from "./components/Nav.bottom"
import Logo from "./components/icons/IconTechShop"
import {Section as NavbarSection} from "../Section"
import {Wreapper as HeaderWreapper} from "../Wrapper"

export default function NavView() {
    return (
        <HeaderWreapper as="header">
            
            <NavbarSection  className="py-4 bg-gray-300 text-gray-900">
                <div className="flex items-center justify-between">
                    <Logo />
                    <NavTop />
                </div>
            </NavbarSection>

            <NavbarSection  className="py-2 bg-gray-900 text-gray-100">
                <NavBottom />
            </NavbarSection>
        </HeaderWreapper>      
    )
}
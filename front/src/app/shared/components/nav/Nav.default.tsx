import Logo from "../icons/IconTechShop"
import {Section as NavbarSection} from "../Section"
import {Wreapper as HeaderWreapper} from "../Wrapper"

export default function NavDefault() {
    return (
        <HeaderWreapper as="header">
            <NavbarSection  className="py-4 bg-gray-300 text-gray-900">
                <div className="flex items-center justify-between">
                    <Logo/>
                </div>
            </NavbarSection>
        </HeaderWreapper>      
    )
}
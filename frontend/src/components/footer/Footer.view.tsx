import { FooterComponent } from "./Footer.component"
import { Wreapper as FooterWreapper } from "../shared/components/Wrapper"
import { Section as FooterSection } from "../shared/components/Section"

export const FooterView = () => {
    return (
        <FooterWreapper as="footer">
            <FooterSection className="py-4 bg-gray-300 text-gray-900">
                <FooterComponent/>
            </FooterSection>
            
            <FooterSection className="py-2 bg-gray-900 text-gray-100">
                <span>2024 Pedido por correo. Todos los derechos reservados.</span>
            </FooterSection>
        </FooterWreapper>
    )
}
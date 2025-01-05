import Logo from "../components/icons/IconTechShop"
import Spinner from "../components/buttons/Spinner.component"

export const LoadingSpinner = () => {
    return (
        <div className="w-screen h-screen flex flex-col items-center justify-center">
            <Logo />
            <Spinner/>
        </div> 
    )
}
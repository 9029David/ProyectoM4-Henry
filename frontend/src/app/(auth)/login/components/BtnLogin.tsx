import Spinner from "@/components/shared/components/buttons/Spinner.component"

export const BtnLogin = ({
    name, 
    isLoading,
    onClick
}: {
    isLoading: boolean,
    name: string
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
}) => {

    const disabledClass = isLoading ? "opacity-50 cursor-not-allowed" : ""

    return (
        <button 
            onClick={onClick}
            disabled={isLoading}  
            className={`btn-primary ${disabledClass}`}>
            {isLoading ? <Spinner/> : name}
        </button>
    )
}

export default BtnLogin
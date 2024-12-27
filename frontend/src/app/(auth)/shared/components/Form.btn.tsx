import Spinner from "@/components/shared/components/buttons/Spinner.component"

export const BtnForm = ({
    name, 
    isLoading,
    onClick
}: {
    isLoading: boolean,
    name: string
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
}) => {


    return (
        <button 
            onClick={onClick}
            disabled={isLoading}  
            className={`bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 ${isLoading ? "opacity-50 cursor-not-allowed" : ""}`}>
            {isLoading ? <Spinner/> : name}
        </button>
    )
}

export default BtnForm
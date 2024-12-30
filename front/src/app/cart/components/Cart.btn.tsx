export const BtnCart = ({
    name, 
    onClick
}: {
    name: string
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => void
}) => {


    return (
        <button 
            onClick={onClick}
            className={`bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 }`}
        >
            {name}
        </button>
    )
}

export default BtnCart
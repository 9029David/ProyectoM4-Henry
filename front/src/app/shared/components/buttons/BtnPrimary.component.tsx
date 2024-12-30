import Link from "next/link"

export const BtnPrimaryComponent = ({
    name, 
    onClick,
    href,
    
}: {
    name: string
    onClick?: any
    href?: string
}) => {

  
    return (
        <button 
            onClick={onClick}
            className={`bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600`}
        >
            { href ? <Link href={href}>{name}</Link> : name}
            
        </button>
    )
}

export default BtnPrimaryComponent
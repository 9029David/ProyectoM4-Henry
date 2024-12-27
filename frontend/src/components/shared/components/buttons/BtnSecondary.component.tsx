import Link from "next/link"


export const BtnSecondaryComponent = ({
    name,
    href
}: {
    name: string,
    href?: string

}) => {
    return (
        <button 
            className="text-blue-600 bg-blue-50 px-4 py-2 rounded hover:bg-blue-100 my-2"
        >
            { href ? <Link href={href}>{name}</Link> : name}
        </button>
    )
}

export default BtnSecondaryComponent
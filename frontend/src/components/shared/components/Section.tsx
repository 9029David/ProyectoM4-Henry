export const Section = ({
    className,
    children,
    as: Component = "div"
} : {
    className: string
    children: React.ReactNode
    as?: "header" | "footer" | "div" | "nav"
}) => {
    return (
        <Component className={`w-[100%] px-2 ${className}`}>
            <div className="max-w-[1000px] mx-auto">{children}</div>
        </Component>  
    )
}

export default Section
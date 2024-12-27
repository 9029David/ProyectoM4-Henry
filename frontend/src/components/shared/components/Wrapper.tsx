export const Wreapper = ({
    children,
    as: Component = "div"
} : {
    children: React.ReactNode
    as?: "header" | "footer" | "div"
}) => {
    return (
        <Component  className="flex flex-col justify-start">
            {children}
        </Component>
    )
}

export default Wreapper
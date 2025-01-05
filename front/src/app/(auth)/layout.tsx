export const LayoutForm = ({children}: {children: React.ReactNode}) => {
    return (
        <div className="flex flex-col justify-center items-center text-black min-h-[100vh]">
            {children}
        </div>
    )
}

export default LayoutForm
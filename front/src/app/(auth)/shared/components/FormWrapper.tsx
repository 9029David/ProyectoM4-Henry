interface FormWrapperProps {
    title: string
    children: React.ReactNode
    withTopHr?: boolean
    withBottomHr?: boolean
}

export const FormWrapper: React.FC<FormWrapperProps> = ({
    title,
    children,
    withTopHr = true,
    withBottomHr = true,
}) => {
    return (
        <div className={`bg-white flex flex-col justify-center border w-[350px] p-4 my-6 rounded-lg shadow-gray-400 shadow-md overflow-hidden animate-fadeIn`}>
            <h2 className="text-center text-3xl">{title}</h2>
            {withTopHr && <hr className="my-4"/>}
            {children}
            {withBottomHr && <hr className="my-4"/>}
        </div>
    )
}

export default FormWrapper
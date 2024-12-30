export const DividerSection = ({letter} : {letter?: string}) => {
    return (
        !letter ? ( 
            <hr className="my-6"/> 
        ) : (
            <div className="grid grid-cols-11 items-center my-6">
                <hr className="col-span-5" />
                <span className=" text-gray-500 text-sm text-center">{letter}</span>
                <hr className="col-span-5" />
            </div>
        )
    )
}

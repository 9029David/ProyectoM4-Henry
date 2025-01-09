import { IOrder } from "../shared/interfaces/user/IOrder";


const formatDate = (date: Date) =>
    new Date(date).toLocaleDateString(undefined, {
      year: "numeric",
      month: "long",
      day: "numeric",
    });


export const CardOrder = ({order}: {order: IOrder}) => {
    const { id, date, status } = order
    return (
        <div
            key={id}
            className="bg-gray-200 p-4 shadow rounded-lg my-4"
        >
            <p>
                <strong>ID:</strong> {`ORD-${id}`}
            </p>
            <div>
                <strong>Status:</strong>{" "}
                <span
                    className={"px-2 py-1 rounded text-white bg-green-500"}
                >
                    {status}
                </span>
            </div>
            <p>
                <strong>Date:</strong> { String(formatDate(date)) }
            </p>
        </div>
    )
}
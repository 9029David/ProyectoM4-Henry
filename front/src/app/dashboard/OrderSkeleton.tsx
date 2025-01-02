export function OrderSkeleton() {
    return (
        <div className="bg-gray-200 p-4 shadow rounded-lg my-4 animate-pulse">
            <p className="w-32 h-4 bg-gray-300 rounded mb-2"></p>
            <div className="flex items-center space-x-2">
                <div className="w-20 h-6 bg-gray-300 rounded"></div>
            </div>
            <p className="w-40 h-4 bg-gray-300 rounded mt-2"></p>
        </div>
    );
}
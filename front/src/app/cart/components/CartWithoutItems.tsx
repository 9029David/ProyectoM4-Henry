import { Route } from "@/app/shared/constants/routes";
import Image from "next/image";
import Link from "next/link";

export default function CartWithoutItems() {
    return (
        <>
            <div className="lg:w-[70%] min-h-[100px] w-full">
                <div className="flex justify-between items-center rounded-lg bg-white h-full px-4 shadow-gray-300 shadow-md">
                    <Image src="/logo-cart.png" alt="logo-cart" width={80} height={80}/>
                    <span className="text-gray-900 font-semibold">Here you will see your products</span>
                    <Link href={Route.HOME} className="text-blue-500">Discover products</Link>
                </div>
            </div>

            <div className="lg:w-[30%] relative w-full">
                <div className="bg-gray-100 rounded-lg shadow-gray-300 shadow-md h-auto sticky top-8 right-0 p-4">
                    <h2 className="text-lg font-semibold text-gray-600">Purchase summary</h2>
                    <hr className="my-2 border-gray-300" />
                    <div className="p-2">
                        <span className="font-medium text-sm text-gray-400">
                            Here you will see the amounts of your purchase once you add products.
                        </span>
                    </div>
                </div>
            </div> 
        </>
    )
}
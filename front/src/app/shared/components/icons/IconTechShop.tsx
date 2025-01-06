import { Route } from "@/app/shared/constants/routes"
import Link from "next/link"

export const Logo = () => {
    return (
        <Link href={Route.LANDING} title="root">
            <h1 className="text-blue-500 font-semibold text-2xl">TechShop</h1>
        </Link>
    )
}

export default Logo
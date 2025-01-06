import { ButtonBase } from "./shared/components/ButtonBase";
import { Route } from "./shared/constants/routes";

export default function notFound() {
    return (
        <div className="flex h-screen items-center justify-center bg-gray-100">
            <div className="text-center">
                <h1 className="text-9xl font-bold text-red-500">404</h1>
                <p className="mt-4 text-xl text-gray-700">Sorry, we couldn't find this page.</p>
                <p className="mt-2 text-gray-500">Please check the URL or go back to the beginning.</p>
                <div className="mt-6">
                    <ButtonBase name="Go home" href={Route.HOME}/>
                </div>
            </div>
        </div>
    )
}
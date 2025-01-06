
import { ButtonBase } from "./ButtonBase";
import { Route } from "@/app/shared/constants/routes";

export default function NotFoundGeneral() {
    return (
        <div className="w-full h-full">
            <div className="flex flex-col justify-between items-center">
                <h1 className="text-3xl text-red-500">404</h1>
                <h2>It seems that this page does not exis</h2>
                <ButtonBase name="Go home" href={Route.HOME}/>
            </div>
        </div>
    )
}
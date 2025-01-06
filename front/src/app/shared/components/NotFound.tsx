import Image from "next/image";
import { ButtonBase } from "./ButtonBase";
import { Route } from "@/app/shared/constants/routes";

export default function NotFoundGeneral({title}: {title: string}) {
    return (
        <div className="w-full h-full">
            <div className="flex flex-col justify-between items-center">
                <Image src={"/logo-404.png"} alt="logo-404" width={300} height={200}/>
                <h1>It seems that this page does not exis</h1>
                <p>{title}</p>
                <ButtonBase name="Go home" href={Route.HOME}/>
            </div>
        </div>
    )
}
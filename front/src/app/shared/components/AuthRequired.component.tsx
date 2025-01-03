import { ButtonBase } from "./ButtonBase";

export const AuthRequiredComponent = ({title}: {title: string}) => {
    return (
        <div className="w-full h-screen bg-white flex justify-center items-center">
            <div className="flex flex-col justify-center gap-2 max-w-xs rounded-lg bg-white">
                <h1 className="text-center text-xl text-gray-900 p-2 font-semibold">
                    {title}
                </h1>
                <ButtonBase name="Crear cuenta" href={"/register"} />
                <ButtonBase name="Ingresar" href={"/login"} variant="secondary" />
            </div>
        </div>
    );
};
"use client"

import FormWrapper from "../shared/components/FormWrapper"
import { useAuth } from "../shared/context/Auth.context"
import { useForm } from "../shared/hooks/useForm.hook"
import { validateLogin } from "./Login.validate"
import { formInitial, requiredFields } from "./Login.config"
import { LoginInterface } from "./Login.interface"
import { DividerSection as OrDivider } from "../shared/components/DividerSection.component"
import { ButtonBase as ButtonRegister } from "@/app/shared/components/ButtonBase"
import LoginForm from "./Login.component"
import { Route } from "@/app/shared/constants/routes"

export default function Login() {
    const { login } = useAuth()

    const { formErrors, form, handlerChange, handlerSubmit, isLoading } = useForm<LoginInterface>({
        formInitial,
        requiredFields,
        messageSuccess: "Login success",
        authAction: login,
        validateForm: validateLogin,
        redirectSuccessRoute: localStorage.getItem("lastPath") || Route.LANDING
    })

    return (
        <FormWrapper title="Welcome!" withTopHr withBottomHr={false}>
            <LoginForm 
                form={form} 
                formErrors={formErrors} 
                handlerChange={handlerChange} 
                handlerSubmit={handlerSubmit}
                isLoading={isLoading}  
            />
            <OrDivider letter="o"/>
            <ButtonRegister 
                name={"Create new account"}
                variant={"terciary"}
                href={Route.SIGNUP}
            />
        </FormWrapper>
    )
}









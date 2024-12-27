"use client"

import { formInitial } from "../config/Login.formInitial"
import FormWrapper from "../../shared/components/FormWrapper"
import { useAuth } from "../../shared/context/Auth.context"
import { useForm } from "../../shared/hooks/useForm.hook"
import BtnCreateNewAccount from "../components/BtnCreateNewAccount"
import LoginForm from "../components/LoginForm"
import OrDivider from "../components/OrDivider"
import { requiredFields } from "../config/Login.requiredFields"
import { ILogin } from "../interfaces/ILogin"
import { validateLogin } from "../validation/Login.validate"


export const Login = () => {
    const { login } = useAuth()

    const { formErrors, form, handlerChange, handlerSubmit, isLoading } = useForm<ILogin>({
        formInitial,
        requiredFields,
        messageSuccess: "Login success",
        authAction: login,
        validateForm: validateLogin,
        redirectSuccessRoute: "/"
    })
    return (
        <FormWrapper title="Bienvenido!" withTopHr withBottomHr={false}>
            <LoginForm 
                form={form} 
                formErrors={formErrors} 
                handlerChange={handlerChange} 
                handlerSubmit={handlerSubmit}
                isLoading={isLoading}  
            />
            <OrDivider/>
            <BtnCreateNewAccount href="/register" name="Crear cuenta nueva"/>
        </FormWrapper>
    )
}

export default Login








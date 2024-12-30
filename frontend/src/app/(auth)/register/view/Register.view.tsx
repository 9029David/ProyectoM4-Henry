"use client"

import { useAuth } from "../../shared/context/Auth.context"
import { useForm } from "../../shared/hooks/useForm.hook"
import { formInitial } from "../config/Register.formInitial"
import { requiredFields } from "../config/Register.requiredFields"
import { validateFormRegister } from "../validation/Register.validate"
import { IRegister } from "../interfaces/IRegister"
import FormWrapper from "../../shared/components/FormWrapper"
import RegisterForm from "../components/RegisterForm"

export default function Register() {
    const { register } = useAuth()
    
    const {formErrors, form, handlerChange, handlerSubmit, isLoading} = useForm<IRegister>({
        formInitial,
        requiredFields,
        messageSuccess: "Register success",
        authAction: register,
        validateForm: validateFormRegister,
        redirectSuccessRoute: "/login"
    })

    return (
        <FormWrapper title="Crear una cuenta" withTopHr withBottomHr={false} >
            <RegisterForm
                form={form}
                formErrors={formErrors}
                handlerChange={handlerChange}
                handlerSubmit={handlerSubmit}
                isLoading={isLoading}
            />
        </FormWrapper>
    )  
}


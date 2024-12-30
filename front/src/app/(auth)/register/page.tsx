"use client"

import { useAuth } from "../shared/context/Auth.context"
import { useForm } from "../shared/hooks/useForm.hook"
import { RegisterInterface } from "./Register.interface"
import FormWrapper from "../shared/components/FormWrapper"
import RegisterForm from "./Register.component"
import { formInitial, requiredFields } from "./Register.config"
import { validateFormRegister } from "./Register.validate"

export default function Register() {
    const { register } = useAuth()
    
    const {formErrors, form, handlerChange, handlerSubmit, isLoading} = useForm<RegisterInterface>({
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


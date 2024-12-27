"use client"

import Link from "next/link"
import BtnForm from "../../shared/components/Form.btn"
import FormComponent from "../../shared/components/Form.component"
import { useAuth } from "../../shared/context/Auth.context"
import { useForm } from "../../shared/hooks/useForm.hook"
import { formInitial } from "../config/Register.formInitial"
import { requiredFields } from "../config/Register.requiredFields"
import { validateFormRegister } from "../validation/Register.validate"
import { IRegister } from "../interfaces/IRegister"
import { formFields } from "../config/Register.formFields"
import { HaveAccount } from "../components/HaveAccount"
import FormWrapper from "../../shared/components/FormWrapper"
import LoginForm from "../../login/components/LoginForm"
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


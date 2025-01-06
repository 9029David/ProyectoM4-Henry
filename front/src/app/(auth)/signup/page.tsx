"use client"

import { useAuth } from "../shared/context/Auth.context"
import { useForm } from "../shared/hooks/useForm.hook"
import { SignupInterface } from "./Signup.interface"
import FormWrapper from "../shared/components/FormWrapper"
import SignupForm from "./Signup.component"
import { formInitial, requiredFields } from "./Signup.config"
import { validateFormSignup } from "./Signup.validate"
import { Route } from "@/app/shared/constants/routes"

export default function Signup() {
    const { signup } = useAuth()
    
    const {formErrors, form, handlerChange, handlerSubmit, isLoading} = useForm<SignupInterface>({
        formInitial,
        requiredFields,
        messageSuccess: "Signup success",
        authAction: signup,
        validateForm: validateFormSignup,
        redirectSuccessRoute: Route.LOGIN
    })

    return (
        <FormWrapper title="Create account" withTopHr withBottomHr={false} >
            <SignupForm
                form={form}
                formErrors={formErrors}
                handlerChange={handlerChange}
                handlerSubmit={handlerSubmit}
                isLoading={isLoading}
            />
        </FormWrapper>
    )  
}


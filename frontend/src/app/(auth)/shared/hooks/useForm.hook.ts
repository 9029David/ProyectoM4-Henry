import { useRouter } from "next/navigation"
import { useState } from "react"
import usePublic from "./usePublic.hook"

import { Mixin } from "../components/Form.mixin"
import { ErrorsInterface } from "../interfaces/Errors.interface"

interface UseFormProps<T> {
    formInitial: T
    requiredFields: string[]
    authAction: (form:  T) => void
    validateForm: (form:  T, requiredFields: string[]) => ErrorsInterface
    messageSuccess: string
    redirectSuccessRoute: string
}

export function useForm<T>({
    formInitial,
    requiredFields,
    authAction,
    validateForm,
    messageSuccess,
    redirectSuccessRoute
}: UseFormProps<T>) {
    // usePublic()
    const [form, setForm] = useState<T>(formInitial)
    const [formErrors, setFormErrors] = useState<ErrorsInterface>({})
    const [isLoading, setIsLoading] = useState(false)
    const router = useRouter()
    
    const handlerSubmit = async(event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        const validationErrors = validateForm(form, requiredFields)
        const keyErrors = Object.keys(validationErrors)

        if(keyErrors.length > 0) {
            setFormErrors(validationErrors);
            Mixin.fire(`Is required: \n${keyErrors.join(`\n`)}`, "", "error")  
            return
            
        } else {
            try {
                setIsLoading(true)
                await authAction(form)

                setTimeout(() => {
                    Mixin.fire(messageSuccess, "", "success")
                }, 200)

                router.replace(redirectSuccessRoute)
            } catch (error: any) {
                const errorMessage = error.response.data.message
                const messageToShow = [
                    "Invalid password", "User does not exist"
                ].includes(errorMessage)
                    ? "Invalid credentials" : errorMessage

               
                Mixin.fire(messageToShow ?? error.response.data.message, "", "error")
            } finally {
                setIsLoading(false)
            }
        }
    } 

    const handlerChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target
        setForm((prevForm) => ({
            ...prevForm, 
            [name]: value}
        ))
        setFormErrors(validateForm(form, requiredFields))
    }

    return {
        isLoading,
        formErrors,
        form,
        handlerChange,
        handlerSubmit
    }
}
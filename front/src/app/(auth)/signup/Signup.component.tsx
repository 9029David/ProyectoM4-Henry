import { ButtonBase as ButtonSignup } from "@/app/shared/components/ButtonBase"
import FormComponent from "../shared/components/Form.component"
import { formFields } from "./Signup.config"
import { SignupInterface } from "./Signup.interface"
import { QuestionForm } from "../shared/components/Question.component"
import { Route } from "@/app/shared/constants/routes"

interface SignupFormProps {
    form: SignupInterface
    handlerChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    formErrors: Record<string, string>
    handlerSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
    isLoading: boolean
}

export const SignupForm: React.FC<SignupFormProps> = ({
    form,
    handlerChange,
    formErrors,
    handlerSubmit,
    isLoading,
}) => {
    return (
        <form onSubmit={handlerSubmit} className="flex flex-col">  
            <FormComponent 
                inputs={formFields} 
                form={form} 
                handlerChange={handlerChange} 
                formErrors={formErrors}
            />
            <ButtonSignup name={"Signup"} isLoading={isLoading}/>
            <QuestionForm question={"Do you have an account?"} href={Route.LOGIN}/> 
        </form>   
    )
}

export default SignupForm
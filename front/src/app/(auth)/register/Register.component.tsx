import { ButtonBase as ButtonRegister } from "@/app/shared/components/ButtonBase"
import FormComponent from "../shared/components/Form.component"
import { formFields } from "./Register.config"
import { RegisterInterface } from "./Register.interface"
import { QuestionForm } from "../shared/components/Question.component"
import { Route } from "@/routes/routes"

interface RegisterFormProps {
    form: RegisterInterface
    handlerChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    formErrors: Record<string, string>
    handlerSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
    isLoading: boolean
}

export const RegisterForm: React.FC<RegisterFormProps> = ({
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
            <ButtonRegister name={"Register"} isLoading={isLoading}/>
            <QuestionForm question={"Do you have an account?"} href={Route.LOGIN}/> 
        </form>   
    )
}

export default RegisterForm
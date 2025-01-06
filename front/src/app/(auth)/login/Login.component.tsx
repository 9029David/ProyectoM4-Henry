import FormComponent from "@/app/(auth)/shared/components/Form.component"
import { formFields } from "./Login.config";
import { LoginInterface } from "./Login.interface";
import { QuestionForm as ForgotPassword } from "../shared/components/Question.component";
import { ButtonBase as ButtonLogin } from "@/app/shared/components/ButtonBase";


interface LoginFormProps {
    form: LoginInterface
    handlerChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    formErrors: Record<string, string>
    handlerSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
    isLoading: boolean
}

export const LoginForm: React.FC<LoginFormProps> = ({
    form,
    handlerChange,
    formErrors,
    handlerSubmit,
    isLoading,
}) => {
    return (
        <form onSubmit={handlerSubmit} className="flex flex-col">  
            <FormComponent 
                form={form} 
                handlerChange={handlerChange} 
                inputs={formFields} 
                formErrors={formErrors}
            /> 
            <ButtonLogin name="Login" isLoading={isLoading}/>
            {/* <ForgotPassword question={"You forgot your password?"} href=""/>   */}
        </form>
    )
}

export default LoginForm
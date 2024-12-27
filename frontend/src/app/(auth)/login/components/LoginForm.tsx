import FormComponent from "../../shared/components/Form.component";
import { formFields } from "../config/Login.formFields";
import { ILoginFormProps } from "../interfaces/ILoginFormProps";
import BtnLogin from "./BtnLogin";
import { ForgotPassword } from "./ForgotPassword";

export const LoginForm: React.FC<ILoginFormProps> = ({
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
            <BtnLogin isLoading={isLoading} name="Iniciar sesion"/>  
            <ForgotPassword/>  
        </form>
    )
}

export default LoginForm
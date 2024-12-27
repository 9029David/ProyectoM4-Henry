import FormComponent from "../../shared/components/Form.component"
import { formFields } from "../config/Register.formFields"
import { IRegisterFormProps } from "../interfaces/IRegisterFormProps"
import BtnRegister from "./BtnRegister"
import { HaveAccount } from "./HaveAccount"

export const RegisterForm: React.FC<IRegisterFormProps> = ({
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
            <BtnRegister isLoading={isLoading} name="Registrarte"/>
            <HaveAccount/> 
        </form>   
    )
}

export default RegisterForm
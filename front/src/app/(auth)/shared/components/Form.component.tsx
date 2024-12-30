import FormInput from "./Form.input"
import { InputInterface } from "../interfaces/Input.interface"
import { ErrorsInterface } from "../interfaces/Errors.interface"

interface FormProps {
    form: any, 
    formErrors: ErrorsInterface, 
    handlerChange: (event: React.ChangeEvent<HTMLInputElement>) => void , 
    inputs: InputInterface[]
}

export function FormComponent({
    form, 
    handlerChange, 
    inputs, 
    formErrors
}: FormProps) {
    return (
        <>  
            {inputs.map(({id, name, type, placeholder}) => (
                <FormInput
                    key={id} 
                    id={id}
                    onChange={handlerChange}  
                    type={type} 
                    name={name} 
                    value={form[name]}
                    placeholder={placeholder} 
                    error={formErrors[name]}
                />
            ))}
            <hr className="my-2 border-transparent"/>
        </>
    )
}

export default FormComponent
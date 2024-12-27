import { ErrorsInterface } from "../../shared/interfaces/Errors.interface"
import { IRegister } from "../interfaces/IRegister"


export const validateFormRegister = (form: IRegister, requiredFields: string[]): ErrorsInterface => {
    const currentErrors: ErrorsInterface = {}

    requiredFields.forEach((field) => {
        switch (field) {
            case "email":
                if(!form.email) currentErrors.email = "Email is Required"   
                else if(!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(form.email)) currentErrors.email = "Invalid email format" 
                else break;
            
            case "password":
                if(!form.password) currentErrors.password = "Password is Required"
                else if(form.password.length < 6) currentErrors.password = "Password must be at least 6 characters long"
                else break

            case "name":
                if(!form.name) currentErrors.name = "Name is Required"
                else break

            case "address":
                if(!form.address) currentErrors.address = "Address is Required"
                else break

            case "phone":
                if(!form.phone) currentErrors.phone = "Phone is Required" 
                else break
            
            default:
                console.warn(`Validation for field "${field}" is not defined`);
        
        }       
    })
    return currentErrors 
} 
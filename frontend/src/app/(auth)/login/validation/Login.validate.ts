import { ErrorsInterface } from "../../shared/interfaces/Errors.interface"
import { ILogin } from "../interfaces/ILogin"

export const validateLogin = (form: ILogin, requiredFields: string[]): ErrorsInterface => {
    const currentErrors: ErrorsInterface = {}

    requiredFields.forEach((field) => {
        switch (field) {
            case "email":
                if(!form.email) currentErrors.email = "Email is Required"   
                else if(!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(form.email)) currentErrors.email = "Invalid email format" 
                else break;
            
            case "password":
                if(!form.password) currentErrors.password = "Password is Required"
                else if(form.password.length < 6) currentErrors.password = "Invalid password"
                else break
        }
    })
    return currentErrors
}
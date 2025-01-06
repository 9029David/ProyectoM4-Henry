import { ErrorsInterface } from "../shared/interfaces/Errors.interface"
import { SignupInterface } from "./Signup.interface"

export const validateFormSignup = (form: SignupInterface, requiredFields: string[]): ErrorsInterface => {
    const currentErrors: ErrorsInterface = {}

    requiredFields.forEach((field) => {
        switch (field) {
            case "email":
                if(!form.email) currentErrors.email = "Email is Required"   
                else if(!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(form.email)) currentErrors.email = "Invalid email format" 
                else break;
            
            case "password":
                if(!form.password) currentErrors.password = "Password is Required"
                else if(form.password.length < 8) currentErrors.password = "Must include at least 8 characters"
                else if(!/[a-z]/.test(form.password)) currentErrors.password = "Must include a lowercase letter"
                else if(!/[A-Z]/.test(form.password)) currentErrors.password = "Must include a capital letter"
                else if(!/\d/.test(form.password)) currentErrors.password = "Must include a number"
                else if(!/[\W_]/.test(form.password)) currentErrors.password = "Must include a special character"
                else break

            case "name":
                if(!form.name) currentErrors.name = "Name is Required"
                else if(!/^[a-zA-ZÁÉÍÓÚáéíóúÑñ\s]+$/.test(form.name)) currentErrors.name = "The name can only include letters"
                else break

            case "address":
                if(!form.address) currentErrors.address = "Address is Required"
                else if(!/^[a-zA-Z0-9\s,.-]+$/.test(form.address)) currentErrors.address = "Must include letters and numbers"
                else break

            case "phone":
                if(!form.phone) currentErrors.phone = "Phone is Required" 
                else if(form.phone.length < 10) currentErrors.phone = "Must include exactly 10 digits."
                else break
            
            default:
                console.warn(`Validation for field "${field}" is not defined`);
        
        }       
    })
    return currentErrors 
} 
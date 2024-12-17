import { IPropInput } from "../interfaces/IPropInput";

export const signUpConfig: IPropInput[]= [
    { 
        name: "name",
        label: "Name:",
        type: "text",
        placeholder: "Enter your name"
    },
    {
        name: "email",
        label: "Email:",
        type: "text",
        placeholder: "Enter your email"
    },
    {
        name: "password",
        label: "Password:",
        type: "password",
        placeholder: "Enter your password"
    },
    {
        name: "address",
        label: "Address:",
        type: "text",
        placeholder: "Enter your address"
    },
    {
        name: "phone",
        label: "Phone:",
        type: "text",
        placeholder: "Enter your phone"
    }
]
import { InputInterface } from "../../shared/interfaces/Input.interface";

export const formFields: InputInterface[] = [
    { id: 1, name: "name", type: "text", value:"", placeholder: "Name"},
    { id: 2, name: "email", type: "text", value:"", placeholder: "Email"},
    { id: 3, name: "password", type: "password", value:"", placeholder: "Password"},
    { id: 4, name: "address", type: "text", value:"", placeholder: "Address"},
    { id: 5, name: "phone", type: "string", value:"", placeholder: "Phone"},
]
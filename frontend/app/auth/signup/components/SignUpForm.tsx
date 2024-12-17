"use client"

import { ChangeEvent, useState } from "react"
import { signUpConfig } from "../config/signUp"
import FormInput from "../../components/FormInput"

export default function SignUpForm() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        password: "",
        address: "",
        phone: ""
    })

    const onChange = (event: ChangeEvent<HTMLInputElement>): void => {
        const { name, value } = event.target
        setForm({...form, [name]: value})
    }

    return (
        <form>
            <div className="flex flex-col gap-8">
                {
                    signUpConfig.map(({name, label, type, placeholder}) => (
                        <FormInput 
                            name={name} 
                            label={label} 
                            type={type} 
                            placeholder={placeholder}
                            value={form[name]}
                            onChange={onChange}
                        />
                    ))
                }
            </div>
        </form>
    )
}
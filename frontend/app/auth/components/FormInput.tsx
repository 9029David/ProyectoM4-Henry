export default function FormInput({
    name,
    label,
    type,
    onChange,
    placeholder,
    value
} : {
    name: string,
    label: string,
    type: string,
    value: any,
    onChange: (event: any) => void,
    placeholder: string
}) {
    return (
        <div className="flex flex-col">
            <label htmlFor={name}>{label}</label>
            <input 
                type={type} 
                name={name} 
                value={value} // form{name}
                placeholder={placeholder}
                onChange={onChange}
                className="w-[300px] h-[30px] rounded-lg text-black pl-4"
                />
        </div>
    )
}
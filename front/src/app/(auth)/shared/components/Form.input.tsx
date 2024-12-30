interface FormInputProps {
    id: number
    type: string
    name: string
    placeholder: string
    value: string
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    error: string
}

export default function FormInput({
    id,
    type, 
    name, 
    placeholder = "", 
    value = "",
    onChange,
    error
}: FormInputProps) {
    return (
        <div className="mb-5 ">
            <label htmlFor={String(id)} className=" text-gray-700 capitalize ml-1">{name}</label>
            <input 
                id={String(id)}
                className="w-full px-2 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 text-gray-700 placeholder-gray-400 shadow-md"
                type={type} 
                placeholder={`Enter you ${placeholder}`} 
                name={name} 
                value={value}
                onChange={onChange}
            />
            {error && <p className="absolute text-red-600 text-sm font-semibold tracking-tight ml-1">{error}</p>}
        </div>
    )
}


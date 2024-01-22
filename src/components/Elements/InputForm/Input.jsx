const Input = ({ type, name, placeholder }) => {
    return (
        <input type={type} name={name} id={name} placeholder={placeholder} className="border rounded-md p-2 w-full text-slate-500 focus:border-blue-700 focus:outline-none" />
    )
}

export default Input;
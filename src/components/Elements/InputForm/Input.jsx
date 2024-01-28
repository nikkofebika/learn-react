import { forwardRef } from "react";

const Input = forwardRef(({ type, name, placeholder }, ref) => {
    return (
        <input type={type} name={name} id={name} placeholder={placeholder} ref={ref} className="border rounded-md p-2 w-full text-slate-500 focus:border-blue-700 focus:outline-none" />
    )
})

export default Input;
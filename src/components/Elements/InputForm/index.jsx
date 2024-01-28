import { forwardRef } from "react";
import Input from "./Input";
import Label from "./Label";

const InputForm = forwardRef((props, ref) => {
    const { label, name, type, placeholder } = props;
    return (
        <div>
            <Label>{label}</Label>
            <div className="my-1" />
            <Input name={name} type={type} placeholder={placeholder} ref={ref} />
        </div>
    )
})

export default InputForm;
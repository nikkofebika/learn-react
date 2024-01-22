import Input from "./Input";
import Label from "./Label";

const InputForm = ({ label, name, type, placeholder }) => {
    return (
        <div>
            <Label>{label}</Label>
            <div className="my-1" />
            <Input name={name} type={type} placeholder={placeholder}/>
        </div>
    )
}

export default InputForm;
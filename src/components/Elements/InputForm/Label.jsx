const Label = ({ children, htmlFor }) => {
    return (
        <label htmlFor={htmlFor} className="block font-semibold text-slate-800">{children}</label>
    )
}

export default Label;
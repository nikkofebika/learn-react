const Button = ({ children, type, classname, onClick }) => {
    type = type || 'button';
    return (
        <button type={type} onClick={onClick} className={`font-medium text-center bg-blue-700 text-white rounded-lg hover:bg-blue-800 active:bg-blue-900 focus:ring-2 focus:ring-offset-1 focus:ring-blue-700 ${classname}`}>{children}</button>
    )
}

export default Button
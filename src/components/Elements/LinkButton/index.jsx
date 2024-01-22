import { Link } from "react-router-dom";

const LinkButton = ({ children, to, classname }) => {
    return (
        <Link to={to} className={`font-medium text-center bg-blue-700 text-white w-full py-2 rounded-lg hover:bg-blue-800 active:bg-blue-900 focus:ring-2 focus:ring-offset-1 focus:ring-blue-700 ${classname}`}>{children}</Link>
    )
}

export default LinkButton
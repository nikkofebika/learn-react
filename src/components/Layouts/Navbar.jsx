import { useDispatch, useSelector } from "react-redux";
import Button from "../Elements/Button";
import { logout, setUser } from "../../redux/slices/userSlice";
import { useEffect } from "react";
import { jwtDecode } from "jwt-decode";

const Navbar = () => {
    const dispatch = useDispatch();
    const user = useSelector(state => state.user.user);
    const cart = useSelector(state => state.cart.data);

    useEffect(() => {
        const token = localStorage.getItem('token') || '';
        if (!token) return navigate('login');
        const userData = jwtDecode(token);
        dispatch(setUser(userData));
    }, []);

    return (
        <div className="bg-sky-800 flex justify-end items-center h-14 text-white px-2 md:px-20">
            <p>{user?.user}</p>
            <div className="mx-2" />
            <Button classname="bg-slate-800 px-5 py-2" onClick={() => dispatch(logout())}>Logout</Button>
            <div className="mx-2" />
            <div className="bg-slate-800 p-2 rounded">
                Cart: {cart.length}
            </div>
        </div>
    )
}

export default Navbar;
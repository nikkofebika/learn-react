import { useEffect, useRef, useState } from "react"
import Button from "../Elements/Button";
import { useDispatch, useSelector } from "react-redux";
import { deleteFromCart } from "../../redux/slices/cartSlice";

const CartTable = ({ products }) => {
    const dispatch = useDispatch();
    const [totalPrice, setTotalPrice] = useState(0);
    const cart = useSelector(state => state.cart.data);
    const totalPriceRef = useRef(null);

    useEffect(() => {
        if (cart.length > 0) {
            totalPriceRef.current.style.display = "table-row"
        } else {
            totalPriceRef.current.style.display = "none"
        }
    }, [cart]);

    useEffect(() => {
        console.log('component did update');
        if (products.length > 0 && cart.length > 0) {
            console.log('did update');
            const sumTotalPrice = cart.reduce((accumulator, item) => {
                const product = products.find(product => product.id === item.id);
                return accumulator + product.price * item.qty;
            }, 0);
            setTotalPrice(sumTotalPrice);
        }
    }, [cart, products]);

    // const handleDeleteCart = (id) => {
    //     const newCart = cart.filter(item => item.id !== id);
    //     localStorage.setItem('cart', JSON.stringify(newCart))
    // }

    return (
        <table className="table-auto border-separate text-left border-spacing-x-3">
            <thead>
                <tr>
                    <th>Product</th>
                    <th>Price</th>
                    <th>Qty</th>
                    <th>Total Price</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {
                    products.length > 0 && cart.map(item => {
                        const product = products.find(product => product.id === item.id)
                        return (
                            <tr key={product.id}>
                                <td>{product.title.substr(0, 20)}</td>
                                <td>{product.price.toLocaleString('id-ID', { styles: 'currency', currency: 'IDR' })}</td>
                                <td>{item.qty}</td>
                                <td>{(product.price * item.qty).toLocaleString('id-ID', { styles: 'currency', currency: 'IDR' })}</td>
                                <td>
                                    {/* <Button classname="bg-red-700 px-2" onClick={() => handleDeleteCart(product.id)}>Delete</Button> */}
                                    <Button classname="bg-red-700 px-2" onClick={() => dispatch(deleteFromCart({ id: product.id }))}>Delete</Button>
                                </td>
                            </tr>
                        )
                    })
                }
                <tr ref={totalPriceRef} className="font-bold">
                    <td colSpan="3">Total Price</td>
                    <td>{totalPrice.toLocaleString('id-ID', { styles: 'currency', currency: 'IDR' })}</td>
                </tr>
            </tbody>
        </table>
    )
}

export default CartTable;
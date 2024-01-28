import { useNavigate } from "react-router-dom";
import Button from "../components/Elements/Button";
import CardProduct from "../components/Fragments/CardProduct";
import { useEffect, useRef, useState } from "react";
import { getProducts } from "../services/product.service";
import { jwtDecode } from "jwt-decode";

// const products = [
//     {
//         id: 1,
//         name: 'Sepatu Adidas',
//         description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque expedita, temporibus molestiae reprehenderit delectus perspiciatis, velit, libero ullam quasi amet nihil maiores ipsa asperiores. Provident magnam aspernatur illum voluptatum dicta.',
//         price: 1000000
//     },
//     {
//         id: 2,
//         name: 'Sepatu macul',
//         description: 'Sepatu macul terkuat didunia',
//         price: 500000
//     },
//     {
//         id: 3,
//         name: 'Sepatu India',
//         description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque expedita, temporibus molestiae reprehenderit delectus perspiciatis, velit, libero ullam quasi amet nihil maiores ipsa asperiores. Provident magnam aspernatur illum voluptatum dicta.',
//         price: 700000
//     },
// ];
const ProductsPage = () => {
    const navigate = useNavigate();
    const [cart, setCart] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const [products, setProducts] = useState([]);
    const [user, setUser] = useState(null);

    const totalPriceRef = useRef(null)

    const getProductsData = async () => {
        const productsData = await getProducts();
        setProducts(productsData.data)
    }

    useEffect(() => {
        console.log('component did mount');

        const token = localStorage.getItem('token') || '';
        if (!token) return navigate('login');
        const userData = jwtDecode(token);
        setUser(userData);

        setCart(JSON.parse(localStorage.getItem('cart')) || []);
        getProductsData();
    }, []);

    useEffect(() => {
        console.log('component did update');
        if (products.length > 0 && cart.length > 0) {
            console.log('did update');
            const sumTotalPrice = cart.reduce((accumulator, item) => {
                const product = products.find(product => product.id === item.id);
                return accumulator + product.price * item.qty;
            }, 0);
            setTotalPrice(sumTotalPrice);
            localStorage.setItem('cart', JSON.stringify(cart))
        }
    }, [cart, products]);

    useEffect(() => {
        if (cart.length > 0) {
            totalPriceRef.current.style.display = "table-row"
        } else {
            totalPriceRef.current.style.display = "none"
        }
    }, [cart]);

    const handleLogout = () => {
        localStorage.removeItem('token');
        // localStorage.removeItem('password');
        navigate('/')
    }

    const handleAddToCart = (id) => {
        if (cart.find(item => item.id === id)) {
            setCart(
                cart.map(item => item.id === id ? { ...item, qty: item.qty + 1 } : item)
            )
        } else {
            setCart([
                ...cart,
                {
                    id,
                    qty: 1
                }
            ])
        }
    }
    const handleDeleteCart = (id) => {
        const newCart = cart.filter(item => item.id !== id);
        setCart(newCart)
        localStorage.setItem('cart', JSON.stringify(newCart))
    }
    return (
        <div className="container">
            <div className="bg-sky-800 flex justify-end items-center h-14 text-white px-2 md:px-20">
                <p>{user?.user}</p>
                <div className="mx-2" />
                <Button classname="bg-slate-800 px-5 py-2" onClick={handleLogout}>Logout</Button>
            </div>
            <div className="flex">
                <div className="w-8/12 flex flex-wrap justify-center bg-orange-100">
                    {
                        products.map((product) => (
                            <CardProduct key={product.id}>
                                <CardProduct.Header />
                                <div className="my-5" />
                                <CardProduct.Body name={product.title.substr(0, 20)}>{product.description.substr(0, 100)}</CardProduct.Body>
                                <div className="my-5" />
                                <CardProduct.Footer price={product.price.toLocaleString('id-ID', { styles: 'currency', currency: 'IDR' })} onclick={() => handleAddToCart(product.id)} />
                            </CardProduct>
                        ))
                    }
                </div>
                <div className="bg-sky-300 w-4/12 p-3">
                    <h2 className="text-xl font-bold ml-3 mb-3">Cart</h2>
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
                                                <Button classname="bg-red-700 px-2" onClick={() => handleDeleteCart(product.id)}>Delete</Button>
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
                </div>
            </div>
        </div>
    )
}

export default ProductsPage;
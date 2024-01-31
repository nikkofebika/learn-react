import { jwtDecode } from "jwt-decode";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Button from "../components/Elements/Button";
import CardProduct from "../components/Fragments/CardProduct";
import CartTable from "../components/Fragments/CartTable";
import { addToCart } from "../redux/slices/cartSlice";
import { getProducts } from "../services/product.service";
import Navbar from "../components/Layouts/Navbar";

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
    const dispatch = useDispatch();
    const navigate = useNavigate();
    // const [cart, setCart] = useState([]);
    const [products, setProducts] = useState([]);


    const getProductsData = async () => {
        const productsData = await getProducts();
        setProducts(productsData.data)
    }

    useEffect(() => {
        console.log('component did mount');

        const token = localStorage.getItem('token') || '';
        if (!token) return navigate('login');

        // setCart(JSON.parse(localStorage.getItem('cart')) || []);
        getProductsData();
    }, []);

    // const handleAddToCart = (id) => {
    //     if (cart.find(item => item.id === id)) {
    //         setCart(
    //             cart.map(item => item.id === id ? { ...item, qty: item.qty + 1 } : item)
    //         )
    //     } else {
    //         setCart([
    //             ...cart,
    //             {
    //                 id,
    //                 qty: 1
    //             }
    //         ])
    //     }
    // }
    return (
        <div className="container">
            <Navbar />
            <div className="flex">
                <div className="w-8/12 flex flex-wrap justify-center bg-orange-100">
                    {
                        products.map((product) => (
                            <CardProduct key={product.id}>
                                <CardProduct.Header image={product.image} />
                                <div className="my-5" />
                                <CardProduct.Body name={product.title.substr(0, 20)}>{product.description.substr(0, 100)}</CardProduct.Body>
                                <div className="my-5" />
                                {/* <CardProduct.Footer price={product.price.toLocaleString('id-ID', { styles: 'currency', currency: 'IDR' })} onclick={() => handleAddToCart(product.id)} /> */}
                                <CardProduct.Footer price={product.price.toLocaleString('id-ID', { styles: 'currency', currency: 'IDR' })} onclick={() => dispatch(addToCart({ id: product.id, qty: 1 }))} />
                            </CardProduct>
                        ))
                    }
                </div>
                <div className="bg-sky-300 w-4/12 p-3">
                    <h2 className="text-xl font-bold ml-3 mb-3">Cart</h2>
                    <CartTable products={products} />
                </div>
            </div>
        </div>
    )
}

export default ProductsPage;
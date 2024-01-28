import axios from "axios";

export const getProducts = () => {
    return axios.get("https://fakestoreapi.com/products");
    // const products = await axios.get("https://fakestoreapi.com/products");
    // console.log('products products',products)
    // return products;
};

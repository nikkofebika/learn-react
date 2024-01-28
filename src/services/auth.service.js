import axios from "axios";

export const getToken = async (data) => {
    return await axios.post("https://fakestoreapi.com/auth/login", data);
};

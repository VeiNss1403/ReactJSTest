import axios from "axios"
import { axiosJWT } from "./UserService";

export const getAllProducts = async (search, limit) => {
    let res = []
    if (search?.length > 0) {
        res = await axios.get(`${process.env.REACT_APP_API_URL}/product/getAllProduct?filter=name&filter=${search}&limit=${limit}`);
    } else { 
        res = await axios.get(`${process.env.REACT_APP_API_URL}/product/getAllProduct?limit=${limit}`);
    }
    return res.data
}
export const createProduct = async (data) => {
    const res = await axios.post(`${process.env.REACT_APP_API_URL}/product/create`, data);
    return res.data
}
export const getDetailProduct = async (id, data) => {
    const res = await axios.get(`${process.env.REACT_APP_API_URL}/product/get-detail/${id}`, data);
    return res.data
}
export const updateProduct = async (id, access_token, data) => {
    const res = await axiosJWT.put(`${process.env.REACT_APP_API_URL}/product/update/${id}`, data, {
        headers: {
            token: `Bearer ${access_token}`,
        }
    });
    return res.data
}
export const deleteProduct = async (id, access_token) => {
    const res = await axiosJWT.delete(`${process.env.REACT_APP_API_URL}/product/delete/${id}`, {
        headers: {
            token: `Bearer ${access_token}`,
        }
    });
    return res.data
}
export const deleteManyProduct = async (data, access_token) => {
    const res = await axiosJWT.post(`${process.env.REACT_APP_API_URL}/product/delete-many`, data, {
        headers: {
            token: `Bearer ${access_token}`,
        }
    });
    return res.data
}
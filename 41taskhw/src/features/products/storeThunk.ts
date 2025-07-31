import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "../../api/axios";

export const getProducts = createAsyncThunk('products/getProducts', async() =>{
    const productData = await axiosInstance.get('/products?limit=5')
    return productData.data.products
})

export const getProductDesc = createAsyncThunk('product/getProductDesc', async(id) => {
    const productDescData = await axiosInstance.get(`/products/${id}`)
    console.log(productDescData.data);
    return productDescData.data;
})
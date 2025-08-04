import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "../../api/axios";

export const loginThunk = createAsyncThunk("login", async (data)=> {
    
    try {
        const response = await axiosInstance.post(
            '/auth/login', 
            {...data},
            { credentials: 'include'})
        const token = response.data.accessToken;
        localStorage.setItem('token',token)
        return response.data;
    }
    catch(err) {
        alert('Error');
        throw err;
    }
})
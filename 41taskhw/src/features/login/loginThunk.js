import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "../../api/axios";

export const loginThunk = createAsyncThunk("login", async (data)=> {
    axiosInstance.post('/auth/login', {...data},{ credentials: 'include'})
    .then((responce) => {
        const token = responce.data.accessToken;
        localStorage.setItem('token',token)
    })
})
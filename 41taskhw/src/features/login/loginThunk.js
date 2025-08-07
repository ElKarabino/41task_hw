import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "../../api/axios";
import { data } from "react-router-dom";

const AUTH_PATH ='/auth';

export const loginThunk = createAsyncThunk("login", async (credentials)=> {
     axiosInstance
    .post( `${AUTH_PATH}/login`, 
        { ...credentials, expiresInMins: 30 },
        { credentials: 'include' }
    )
    .then((response) => {
        const token = response.data.accessToken;
        const refreshToken = response.data.refreshToken;

        localStorage.setItem('token',token);
        localStorage.setItem("refreshToken", refreshToken);
        console.log(response.data)
        return response.data
    })
    .catch((err) => {
        const message = err.response.data.message;
        alert(message);
    })
})

export const getLoggedUserThunk = createAsyncThunk('getLoggedUser', async () => {
       try {
        const response = await axiosInstance.get(`/auth/me`);
        return response.data;
    } catch (err) {
        const message = err.response.data.message;
        alert(message);
  }
});
import { createSlice } from "@reduxjs/toolkit";
import { getLoggedUserThunk, loginThunk } from "./loginThunk";

export const loginSlice = createSlice({
    name: 'login',
    initialState: {
        user: null,
        isAuth: false,  
    },
    reducers: {
        setLogin: (state, action) => {
            return {
                ...state,
                isAuth: action.payload,
            }
        },
        logout: (state) => {
            localStorage.removeItem("token");
            localStorage.removeItem("refreshToken");
           return {
            ...state,
            isAuth: false,
            user: null,
           }

        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(loginThunk.fulfilled, (state, action) => {
            state.isAuth = true;
            state.user = action.payload;    
        })
        .addCase(getLoggedUserThunk.fulfilled, (state, action) => {
            state.isAuth = true;
            state.user = action.payload;
        })
  },
})

export const { setLogin, logout } = loginSlice.actions

export const selectIsAuth = (state) => state.login.isAuth;
export const selectUser = (state) => state.login.user;

export default loginSlice.reducer
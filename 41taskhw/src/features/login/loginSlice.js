import { createSlice } from "@reduxjs/toolkit";
import { loginThunk } from "./loginThunk";

export const loginSlice = createSlice({
    name: 'login',
    initialState: {
        isAuth: false
    },
    reducers: {
        setLogin: (state, action) => {
            return {
                ...state,
                isAuth: action.payload,
            }
        }
    },
    extraReducers: (builder) => {
        builder.addCase(loginThunk.fulfilled, (state, action) => {
        state.isAuth = true;
    });
  },
})

export const { setLogin } = loginSlice.actions

export const selectIsAuth = (state) => state.login.isAuth;

export default loginSlice.reducer
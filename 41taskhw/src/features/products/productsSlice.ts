    import { createSlice } from "@reduxjs/toolkit"
    import { getProducts } from "./storeThunk"

    const initialState = {
        productData: [],
        productList: [],
    }

    export const productsSlice = createSlice({
        name: 'products',
        initialState,
        reducers: {
            setProducts:(state, action) => {
                return {    
                    ...state,
                    productData:action.payload
                }
            }
        },
        extraReducers:(builder) => {
            builder.addCase(getProducts.fulfilled, (state, action) =>{
                return {
                    ...state,
                    productList: action.payload
                }
            })
        }
    })

export const { setProducts } = productsSlice.actions;
export default productsSlice.reducer;
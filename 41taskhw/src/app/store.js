import { configureStore } from '@reduxjs/toolkit'
import  ProductPopupReducer  from '../features/productPopupSlice'
import  BasketReducer  from '../features/basketSlice'
import ProductsSliceReducer from '../features/products/productsSlice'

export const store = configureStore({
  reducer: {
    productPopup: ProductPopupReducer,
    basket: BasketReducer,
    products: ProductsSliceReducer
  },
})

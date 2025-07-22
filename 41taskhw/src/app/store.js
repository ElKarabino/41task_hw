import { configureStore } from '@reduxjs/toolkit'
import  ProductPopupReducer  from '../features/productPopupSlice'
import  BasketReducer  from '../features/basketSlice.ts'

export const store = configureStore({
  reducer: {
    productPopup: ProductPopupReducer,
    basket: BasketReducer,
  },
})

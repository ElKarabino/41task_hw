import { configureStore } from '@reduxjs/toolkit'
import  ProductPopupReducer  from '../features/productPopupSlice'

export const store = configureStore({
  reducer: {
    productPopup: ProductPopupReducer
  },
})

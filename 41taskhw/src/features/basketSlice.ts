import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import {Product} from '../types/product'

interface BasketState {
  items: Product[]
}

const initialState:BasketState = {
    items: []
}

const basketSlice = createSlice({
    name: 'basket',
    initialState,
    reducers: {
        addItem(state, action:PayloadAction<Product>) {
            state.items.push(action.payload)
        }
    }
})

export const { addItem } = basketSlice.actions
export default basketSlice.reducer
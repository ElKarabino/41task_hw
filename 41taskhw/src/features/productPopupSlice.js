import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
  imageUrl: null,
  currentProduct: null,
};

const productPopupSlice = createSlice({
  name: 'productPopup',
  initialState,
  reducers: {
    openModal(state, action) {
      state.isOpen = true;
      state.imageUrl = action.payload;
    },
    closeModal(state) {
      state.isOpen = false;
      state.imageUrl = null;
    },
    setProduct(state,action) {
      state.currentProduct = action.payload
    }
  },
});

export const { openModal, closeModal } = productPopupSlice.actions;
export default productPopupSlice.reducer;
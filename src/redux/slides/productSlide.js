import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  search: '',
  brand:[],
}

export const productSlide = createSlice({
  name: 'product',
  initialState,
  reducers: {
    searchProduct: (state, action) => {
      state.search = action.payload
    },
    brandProduct: (state, action) => { 
      state.brand= action.payload
    },
  },
})

export const { searchProduct, brandProduct } = productSlide.actions

export default productSlide.reducer
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  search: "",
  brand: [],
  pricemin: 0,
  pricemax: 10000000,
  rating: 0,
};

export const productSlide = createSlice({
  name: "product",
  initialState,
  reducers: {
    searchProduct: (state, action) => {
      state.search = action.payload;
    },
    brandProduct: (state, action) => {
      state.brand = action.payload;
    },
    priceminProduct: (state, action) => {
      state.pricemin = action.payload;
    },
    pricemaxProduct: (state, action) => {
      state.pricemax = action.payload;
    },
    ratingProduct: (state, action) => {
      state.rating = action.payload;
    },
  },
});

export const {
  searchProduct,
  brandProduct,
  priceminProduct,
  pricemaxProduct,
  ratingProduct,
} = productSlide.actions;

export default productSlide.reducer;

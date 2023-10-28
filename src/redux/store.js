import { configureStore } from '@reduxjs/toolkit'
import productReducer from './slices/ProductSlide'
import userReducer from './slices/userSlide'
export const store = configureStore({
    reducer: {
        product: productReducer,
        user: userReducer
    },
})
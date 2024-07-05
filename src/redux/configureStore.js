import { configureStore } from '@reduxjs/toolkit'
import Cart from './Cart'

export const store = configureStore({
    reducer: {
        Cart,
    }
})
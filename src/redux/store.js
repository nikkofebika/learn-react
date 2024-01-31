import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './slices/cartSlice'
import userReducer from './slices/userSlice'

const store = configureStore({
    reducer: {
        user: userReducer,
        cart: cartReducer,
    }
});
console.log('ON CREATE STORE', store.getState())

store.subscribe(() => {
    console.log('ON CHANGE STORE', store.getState())
})

export default store;
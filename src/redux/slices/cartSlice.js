import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        data: JSON.parse(localStorage.getItem('cart')) || [],
    },
    reducers: {
        addToCart: (state, action) => {
            const item = state.data.find(item => item.id === action.payload.id);
            if (item) {
                item.qty++
            } else {
                state.data.push(action.payload)
            }
            localStorage.setItem('cart', JSON.stringify(state.data))
        },
        deleteFromCart: (state, action) => {
            state.data = state.data.filter(item => item.id !== action.payload.id);
            localStorage.setItem('cart', JSON.stringify(state.data))
        }
    }
})

export const { addToCart, deleteFromCart } = cartSlice.actions
export default cartSlice.reducer
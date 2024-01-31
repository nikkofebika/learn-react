import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        data: [{ id: 1, qty: 1 }],
    },
    reducers: {
        addToCart: (state, action) => {
            const item = state.data.find(item => item.id === action.payload.id);
            if (item) {
                item.qty++
            } else {
                state.data.push(action.payload)
            }
        },
        deleteFromCart: (state, action) => {
            console.log('deleteFromCart action', action)
            console.log('cart state', state.data)
            const data = state.data.filter(item => item.id !== action.payload.id);
            console.log('dataku', data)
            const item = state.data.find(item => item.id === action.payload.id);
            console.log('itemku', data)
            // state.data = [];
            // const newCart = cart.filter(item => item.id !== id);
            // state.data = data;
        }
    }
})

export const { addToCart, deleteFromCart } = cartSlice.actions
export default cartSlice.reducer
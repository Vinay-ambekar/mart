import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: [],
    message: ''
};

const CartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        add(state, action) {
            const existingProductIndex = state.items.findIndex(item => item.id === action.payload.id);
            if (existingProductIndex === -1) {
                state.items.push(action.payload);
                state.message = `${action.payload.productName} is added to cart`;
            } else {
                state.message = `${action.payload.productName} is already in the cart.`;
            }
        },
        clearMessage(state) {
            state.message = '';
        },
        remove(state, action) {
            state.items = state.items.filter(item => item.id !== action.payload);
        }
    }
});

export const { add, clearMessage, remove } = CartSlice.actions;
export default CartSlice.reducer;

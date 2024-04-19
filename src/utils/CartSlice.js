import { createSlice } from "@reduxjs/toolkit";


const CartSlice = createSlice({
    name: "cart",
    initialState: {
        items: [],
    },
    reducers: {
        addItems: (state, action) => {
            state.items.push(action.payload);
        },
        removeItem: (state, action) => {
            const itemIdToRemove = action.payload;
            const indexToRemove = state.items.findIndex(item => item.id === itemIdToRemove);

            if (indexToRemove !== -1) {
                state.items.splice(indexToRemove, 1);
            }
        },
        emptyCart: (state) => {
            state.items = [];
        },

    }
})


export const { addItems, removeItem, emptyCart } = CartSlice.actions;
export default CartSlice.reducer;
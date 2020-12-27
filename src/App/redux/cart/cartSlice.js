import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    downloadedItems: []
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        downloadItems(state, action) {
            state.downloadedItems.length = 0;
            state.downloadedItems.push(action.payload);
        }
    }
})

export default cartSlice.reducer;

export const { addCartItems } = cartSlice.actions;
export const { downloadItems } = cartSlice.actions;
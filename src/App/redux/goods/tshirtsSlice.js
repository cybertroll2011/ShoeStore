import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    tshirtsData: [],
    loadingStatus: 'idle',
    error: null
};

const tshirtsSlice = createSlice({
    name: "tshirts",
    initialState,
    reducers: {
        addTshirtsData(state, action) {
            Object.values(action.payload).map(item => {
                return state.tshirtsData.push(item);
            })
        },
        setLoadingStatus(state, action) {
            state.loadingStatus = action.payload;
        }
    }
})

export default tshirtsSlice.reducer;

export const { addTshirtsData } = tshirtsSlice.actions;
export const { setLoadingStatus } = tshirtsSlice.actions;
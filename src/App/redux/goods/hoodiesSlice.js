import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    hoodiesData: [],
    loadingStatus: 'idle',
    error: null
};

const hoodiesSlice = createSlice({
    name: "hoodies",
    initialState,
    reducers: {
        addHoodiesData(state, action) {
            Object.values(action.payload).map(item => {
                return state.hoodiesData.push(item);
            })
        },
        setLoadingStatus(state, action) {
            state.loadingStatus = action.payload;
        }
    }
})

export default hoodiesSlice.reducer;

export const { addHoodiesData } = hoodiesSlice.actions;
export const { setLoadingStatus } = hoodiesSlice.actions;
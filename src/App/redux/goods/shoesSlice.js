import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    shoesData: [],
    loadingStatus: 'idle',
    error: null
};

const shoesSlice = createSlice({
    name: "shoes",
    initialState,
    reducers: {
        addShoesData(state, action) {
            Object.values(action.payload).map(item => {
                return state.shoesData.push(item);
            })
        },
        setLoadingStatus(state, action) {
            state.loadingStatus = action.payload;
        }
    }
})

export default shoesSlice.reducer;

export const { addShoesData } = shoesSlice.actions;
export const { setLoadingStatus } = shoesSlice.actions;
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    pantsData: [],
    loadingStatus: 'idle',
    error: null
};

const pantsSlice = createSlice({
    name: "pants",
    initialState,
    reducers: {
        addPantsData(state, action) {
            Object.values(action.payload).map(item => {
                return state.pantsData.push(item);
            })
        },
        setLoadingStatus(state, action) {
            state.loadingStatus = action.payload;
        }
    }
})

export default pantsSlice.reducer;

export const { addPantsData } = pantsSlice.actions;
export const { setLoadingStatus } = pantsSlice.actions;